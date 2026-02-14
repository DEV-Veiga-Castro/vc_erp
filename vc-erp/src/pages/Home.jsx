import { useEffect, useState } from "react"
import "../index.css"
import "./style.css"

export default function Home() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const testElement = (
        <div className="content">
            <h1 className="time">Hello, World!</h1>
            <h2 className="time">{time}</h2>
        </div>
    )
    return testElement
}

// setInterval(Home, 1000)