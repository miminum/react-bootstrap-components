import React from 'react'

const Alert = ({
  variation,
  title,
  children,
}) => {
  return (
    <div className={`alert alert-${ variation }`} role="alert">
      <strong>{ title }</strong> { children }
    </div>
  )
}


export default Alert