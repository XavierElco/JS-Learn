import './index.css'
import '../Message'


interface PropsType {
    title?: string;
    callBack?: (params: string) => void
}

const  Card: React.FC<PropsType> = (props) => {
return (
    <div className='card'>
    <header>
        <div>{props.title}</div>
        <div>副标题</div>
    </header>
    <main>
        内容区域
    </main>
    <footer>
        <button onClick={() => window.onShow()}>确认</button>
        <button onClick={() => props.callBack && props.callBack('我来自子组件')}>取消</button>
    </footer>
    </div>
)
}

export default Card;