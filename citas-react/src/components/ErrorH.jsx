import React from 'react'
import { useEffect,useState } from 'react'
const ErrorH = ({children}) => {
  return (
    <div 
    className='mb-5 text-white font-bold bg-red-800 text-center rounded-lg  p-3'>
     {children}
      </div>
  )
}

export default ErrorH
