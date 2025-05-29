import React, { useContext, useState } from 'react';
const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const Child = () => {
  const themeContext = useContext(ThemeContext);
  const styles = {
    backgroundColor: themeContext.theme === 'light' ? 'white' : 'black',
    border: '1px solid red',
    width: 100 + 'px',
    height: 100 + 'px',
    color: themeContext.theme === 'light' ? 'black' : 'white'
  }
  return <div>
    <div style={styles}>
      child
    </div>
  </div>
}

const Parent = () => {
  const themeContext = useContext(ThemeContext);
  const styles = {
    backgroundColor: themeContext.theme === 'light' ? 'white' : 'black',
    border: '1px solid red',
    width: 100 + 'px',
    height: 100 + 'px',
    color: themeContext.theme === 'light' ? 'black' : 'white'
  }
  return <div>
    <div style={styles}>
      Parent
    </div>
    <Child />
  </div>
}
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换主题</button>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeContext value={{ theme, setTheme }}>
          <Parent />
        </ThemeContext>
      </ThemeContext.Provider>
      </div >
    );
  }

  export default App;