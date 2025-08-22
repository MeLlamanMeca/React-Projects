import { useState, useEffect } from 'react' 

export default function useBodyWidth() {
    const [windowWidth, setWindowWidth] = useState( typeof window !== "undefined" ? window.innerWidth : 0 )

    useEffect(() => { 
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return windowWidth
}