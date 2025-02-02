import React from 'react'

function Button({label ,type}) {
    const bg = {
        primery : "bg-gray-500 shadow-gray-500 hover:bg-gray-700",
        delete : "bg-red-700 shadow-red-500 hover:bg-red-900",
        edit : "bg-blue-700 shadow-blue-500 hover:bg-blue-900",
    }
  return (
    <button className={'py-2 px-5 w-fit rounded-md  transition-all duration-300 text-white cursor-pointer shadow-sm ' + bg[type]}>
            {label}
    </button>
  )
}

export default Button