import React from 'react';
import Sun from "/Images/sun.svg"

function Header({title}) {
    return (
        <>
        <div className="w-full  rounded-b-3xl bg-blue-950 py-4  relative">
            <h1 className='w-full text-white text-center font-bold text-2xl '>{title}</h1>
            <button className='absolute rounded-full bg-white p-1 w-8 h-8 top-1/4 left-3'>
                <img src={Sun} alt='light' className='w-full h-full'/>
            </button>
            
        </div>
        </>
    );
}

export default Header;