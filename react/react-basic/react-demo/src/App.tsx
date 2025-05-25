import { useStorage } from './components/UseStorage/index'
import { useHistory } from './components/UseHistory/index'
import './App.css'


function App() {
  const [val, setVal] = useStorage('data', 1)
  const [history, push, repalce, back] = useHistory()
  return (
    <>
      <div>当前url：{history}</div>
      <button onClick={() => push('/x')}>跳转</button>
      <button onClick={() => repalce('/y')}>替换</button>
      <button onClick={() => back()}>后退</button>
      <h3>{val}</h3>
      <button onClick={() => setVal(val + 1)}>设置val</button>
    </>
  )
}

export default App;