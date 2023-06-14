import { useState } from 'react'
import logo from '../images/logo512.png'

export default function Navbar(props) {

    return (
        <div className={props.darkMode ? 'shadow-md bg-gray-900' : 'shadow-md' }>
            <div className='container flex justify-between items-center mx-auto p-6'>
                <div className='flex space-x-1 items-center'>
                    <img src={logo} alt="" className='w-8' />
                    <h1 className='text-react-blue text-xl font-bold'>ReactFacts</h1>
                </div>
                {/* btn for dark and light mode */}
                <div className='flex space-x-1 text-sm items-center font-semibold'>
                    <span className={props.darkMode ? 'text-slate-300' : 'text-gray-700'}>
                        Light
                    </span>
                    {/* btn conatiner */}
                    <div className={props.darkMode ? 'btn-container bg-white':'btn-container bg-gray-700'} onClick={props.toggleDarkMode}>
                        {/* the circle  */}
                        <div 
                        className={props.darkMode ? 'circle top-0.5 right-0.5 dark' 
                        : 'circle top-0.5 left-0.5 bg-white' }  ></div>
                    </div>
                    <span className={props.darkMode ? 'text-white' : 'text-slate-300'} >
                        Dark
                    </span>
                </div>
            </div>
        </div>
    )
}