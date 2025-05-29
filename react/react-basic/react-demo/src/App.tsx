import { useEffect, useState } from "react"
// 子组件

// 清理函数的核心作用是确保组件卸载时能够正确清理副作用，避免：
// 内存泄漏
// 不必要的网络请求
// 事件监听器累积
// 对已卸载组件的状态更新
// 资源浪费

interface UserData {
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}


const App = () => {
  const [userID, setUserID] = useState(1)
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async() => {
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        if (!response.ok) {
          throw new Error ('网络响应错误')
        }
        const data = await response.json()
        setUserData(data)
        setLoading(false)
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false)
      }
    }
    fetchUserData();
  }, [userID])

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(parseInt(event.target.value))
  }

  return (
    <div>
      <h1>用户信息应用</h1>
      <label>
        输入用户ID:
        <input type="number" value={userID} onChange={handleUserChange} min="1" max="10" />
      </label>
      {loading && <p>加载中...</p>}
      {error && <p>错误: {error}</p>}
      {userData && (
      <div>
        <h2>用户信息</h2>
        <p>姓名: {userData.name}</p>
        <p>邮箱: {userData.email}</p>
        <p>用户名: {userData.username}</p>
        <p>电话: {userData.phone}</p>
        <p>网站: {userData.website}</p>
      </div>
    )}
    </div>
  );
}

export default App