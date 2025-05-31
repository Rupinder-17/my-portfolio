import React from 'react'

export const Container = ({ className = " bg-amber-50" ,children}) => {
  return (
    <div className={`h-screen w-full ${className}  overflow-hidden py-8`}>{children}</div>
  )
}
