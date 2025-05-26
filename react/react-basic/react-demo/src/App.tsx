import React, { useState,  useTransition } from 'react'
import { Input, List } from 'antd'
import './App.css'
interface Iitem {
  id: string;
  name: string;
  address:string;
  age: number;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState<Iitem[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value);

    fetch('/api/mock/list?key=' + value)
      .then((res) => res.json())
      .then((res) => {
        // 为了优化用户体验，我们将结果更新放在 startTransition 函数中，
        // 这样 React 可以在处理更新时保持输入框的响应性。
        startTransition(() => {
          setList(res.list)
        })
      })
  }
  return (
    <>
      <Input value={inputValue} onChange={handleChange} />
      {isPending && <div>loading...</div>}
      <List dataSource={list} renderItem={(item) => <List.Item>{item.address}</List.Item>} />
    
    </>
  )
}

export default App;