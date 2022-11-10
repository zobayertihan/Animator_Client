import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- Animator`;
    }, [title])
}

export default useTitle;