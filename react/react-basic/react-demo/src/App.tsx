

import './App.css'

function App() {

  // 这里如果直接用<>, 会错被认为是一个元素块，所以我们需要加一个逗号去区分
  const fn = <T,>(params:T) => {
    console.log(params)
  }

  const colorStyle = {
    color: 'blue',
  }

  const arr:string[] = ["我是", "一个", "菜鸟"]
  const isCaibi: boolean = true

  return (
    // 里面不能放入obj本体或者使用条件判断语句如 switch & if-else
    <>
      <div style = {colorStyle} onClick = {() => fn('我被点击了')}>点击我</div>
      {
        // 我们需要返回内容，但是forEach没有返回值，filter用于过滤，所以这里我们使用map
        arr.map((item) => {
          return isCaibi ? <div id={item} key={item}>{item}</div>: <div>我不是菜鸟</div>
        })
      }
    </>
  )
}

export default App
