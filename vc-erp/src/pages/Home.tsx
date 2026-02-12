import { useEffect, useState } from "react"

export default function Home() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const testElement = (
        <div>
            <h1>Hello, World!</h1>
            <h6>São: {time}</h6>
        </div>
    )
    return testElement
}

// setInterval(Home, 1000)