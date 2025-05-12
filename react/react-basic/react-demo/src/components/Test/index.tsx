import React from "react"




const Test: React.FC = () => {
    const event = new Event('on-Card') // 添加事件

    const clickTap = () => {
        console.log(event)
        event.params = {name:'666'}
        window.dispatchEvent(event) // 派发事件
    }

    return (
        <div>
            <button onClick={clickTap}>事件派发</button>
        </div>
    )
}

// 扩展event类型
declare global {
    interface Event {
        params: any
    }
}

export default Test;