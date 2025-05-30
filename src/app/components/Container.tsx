import React from 'react'

export const Container = ({ className = " bg-amber-50" ,children}) => {
  return (
    <div className={`h-screen w-full ${className}  py-8`}>{children}</div>
  )
}
