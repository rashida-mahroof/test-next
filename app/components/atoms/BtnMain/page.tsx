import React from 'react'

function BtnMain({children}:any) {
  return (
    <button className=" text-white bg-blue-900 px-6 py-2 my-5 hover:text-white translate-x-0 transition-all">{children}</button>
  )
}

export default BtnMain