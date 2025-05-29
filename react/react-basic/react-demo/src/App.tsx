import React, { useCallback, useState } from 'react'
const Child = React.memo(({ user, callback }: { user: { name: string; age: number }, callback: () => void }) => {
  console.log('Render Child')
  const styles = {
    color: 'red',
    fontSize: '20px',
  }
  return <div style={styles}>
    <div>{user.name}</div>
    <div>{user.age}</div>
    <button onClick={callback}>callback</button>
  </div>
})

const App: React.FC = () => {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState({
    name: 'John',
    age: 20
  })
  const childCallback = useCallback(() => {
    console.log('callback 执行了')
  }, [])
  return <>
    <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
    <Child callback={childCallback} user={user} />
  </>;
};

export default App;