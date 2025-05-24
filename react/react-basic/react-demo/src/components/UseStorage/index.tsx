    import { useSyncExternalStore } from 'react'

    // 自定义组件
    export const useStorage = (key: any, defaultValue?: any) => {
    
        // 订阅了storage的状态，当储存状态改变会触发callback
        const subscribe = (callback: () => void) => {
            window.addEventListener('storage', (e) => {
            console.log('触发了', e);
            callback()
            })
            return () => window.removeEventListener('storage', callback)
        }

        // 获得当前storage的状态
        const getSnapshot = () => {
            return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : null) || defaultValue
        }
        
        // 修改储存的值，并且手动出发时间监听
        const setStorage = (value: any) => {
            localStorage.setItem(key, JSON.stringify(value))
            window.dispatchEvent(new StorageEvent('storage'))
        }

        const res = useSyncExternalStore(subscribe, getSnapshot)

        return [res, setStorage]
    }