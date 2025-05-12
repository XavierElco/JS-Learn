import '../Card/index.css'
export default function Test2() {
//接受参数
window.addEventListener('on-Card', (e) => {
    console.log(e.params, '触发了')
})

return <div className="card"></div>
}