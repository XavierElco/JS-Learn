
import Card from './components/Card'
import Test from './components/Test'
import Test2 from './components/Test2'
import './App.css'

const fn = (params: string) => {
  console.log("孩子组件传给父母组件", params)
}
function App() {
  return (
    <>
      <Card callBack={fn} title="我是第一张卡片"></Card>
      <Card title="我是第二张卡片"></Card>
      <Card title="我是第三张卡片"></Card>
      <Test></Test>
      <Test2></Test2>
    </>
  )
}

export default App;