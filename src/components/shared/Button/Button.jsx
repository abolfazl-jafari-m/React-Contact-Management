import React from 'react'

function Button({label ,type , className , disabled = false}) {
    const bg = {
        primery : "bg-gray-500 shadow-gray-500 hover:bg-gray-700 disabled:opacity-30 ",
        delete : "bg-red-700 shadow-red-500 hover:bg-red-900 disabled:opacity-30",
        edit : "bg-blue-700 shadow-blue-500 hover:bg-blue-900 disabled:opacity-30",
    } 
  return (
    <button disabled={disabled} className={' transition-all duration-300 text-white cursor-pointer shadow-xs  ' + bg[type]+ " " + className}>
            {label}
    </button>
  )
}

export default Button