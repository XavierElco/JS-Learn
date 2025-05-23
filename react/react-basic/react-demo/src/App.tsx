import { useStorage } from './components/UseStorage/index'
import './App.css'


function App() {
  const [val, setVal] = useStorage('data', 1)
  return (
    <>
      <h3>{val}</h3>
      <button onClick={() => setVal(val + 1)}>设置val</button>
    </>
  )
}

export default App;