import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // const abortCount = new AbortController();
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Data Not Fetch")
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false)
                    setBlogs(data)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
        }, 1000);

        // abort the fetch cleanaup function 
        // return () => abortCount.abort()
    }, [url])
    return { data, isPending, error }


}

export default useFetch;