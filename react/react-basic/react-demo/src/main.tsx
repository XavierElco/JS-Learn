import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 操作dom，从根节点渲染，感叹号代表告诉程序我这里绝对不会为空
// 这里存放了我们整个app的组件
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
