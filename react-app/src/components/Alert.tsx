import React, { ReactNode } from 'react'

// setting text as children prop
// allows you to pass anything between the opening and closing tags of the component
interface Props{
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return (
    <div className='alert alert-primary'>{children}</div>
  )
}

export default Alert