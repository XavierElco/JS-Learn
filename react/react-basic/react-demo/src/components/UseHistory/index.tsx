import { useSyncExternalStore } from "react";

export const useHistory = () => {
    const subScribe = (callback:() => void) => {
        window.addEventListener("popstate", callback)
        window.addEventListener("haschange", callback)
        window.addEventListener("back", callback)

        return () => {
            window.removeEventListener("popstate", callback)
            window.removeEventListener("haschange", callback)
            window.removeEventListener("back", callback)
        }
    }

    const getSnapshot = () => {
        return window.location.href 
    }

    const push = (path: string) => {
        window.history.pushState(null, '', path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    const repalce = (path: string) => {
        window.history.replaceState(null, '', path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    const back = () => {
        window.history.back()
        window.dispatchEvent(new PopStateEvent('back'))
    }

    const res = useSyncExternalStore(subScribe, getSnapshot)

    return [res, push, repalce, back] as const
}
