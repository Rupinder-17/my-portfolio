import React from 'react'
type Props = {
  className: string;
  children: any

}
export const Container = ({ className = " bg-amber-50" ,children}:Props) => {
  return (
    <div className={`h-screen w-full ${className}  overflow-hidden py-8`}>{children}</div>
  )
}
