import React, { useLayoutEffect, useEffect, useRef } from 'react';
import './App.css';
function App() {
  useLayoutEffect(() => {
    const list = document.getElementById('list') as HTMLUListElement;
    list.scrollTop = 900
  }, [])

  return (
    <ul id='list' style={{height: '500px', overflowY:'scroll'}}>
      {Array.from({ length:500 }, (_, i) => (
        <li key={i}>Item {i + 1}</li>
      ))}
    </ul>
  );
}

export default App;