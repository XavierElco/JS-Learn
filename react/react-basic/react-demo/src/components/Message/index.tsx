import ReactDom from 'react-dom/client'
import './index.css'

const Message = () => {
    return (
        <div>
            提示组件
        </div>
    )
}

interface Itesm {
    messageContainer: HTMLDivElement
    root: ReactDom.Root
}

const queue: Itesm[] = []
window.onShow = () => {
    const messageContainer = document.createElement('div')
    messageContainer.className = 'message'
    messageContainer.style.top = `${queue.length * 40}px`;

    // 容器关联，注册成根组件
    // 先和当前的dom绑定
    document.body.appendChild(messageContainer)
    // 再创建一个自己的根
    const root = ReactDom.createRoot(messageContainer)
    root.render(<Message/>)
    queue.push({
        messageContainer,
        root
    })

    setTimeout(() => {
        const item = queue.find(item => item.messageContainer === messageContainer)!
        item.root.unmount() // 卸载
        document.body.removeChild(item.messageContainer)
        queue.splice(queue.indexOf(item), 1)
    }, 2000)
}


declare global {
    interface Window {
        onShow: () => void
    }
}

export default Message