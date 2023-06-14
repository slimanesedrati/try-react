
// components
import Navbar from "./components/Navbar"
import Main from "./components/Main"

import { useEffect, useState } from "react"

export default function App() {
    
    const [darkMode,setdarkMode] = useState(false)

    function toggleDarkMode() {
        setdarkMode((prevMode => !prevMode))
        localStorage.setItem('darkMode',!darkMode)
    }

    useEffect(()=> {
        const StoredDarkMode = localStorage.getItem('darkMode')
        setdarkMode(StoredDarkMode === 'true')
        console.log(StoredDarkMode)
    },[])

    return (
        <div className=" min-h-screen">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} />
        </div>
    )
}  