import React from 'react'

const Button = ({
  title,
  variation = 'dark',
  href
}) => {
  const Component = (href != null) ? 'a' : 'button'
  return (
    <Component
      href={ href }
      className={ `btn btn-${variation}` }
    >
      { title }
    </Component>
  )
}

const ButtonGroup = ({
  children
}) => {
  
  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      { children }
    </div>
  )
}
export { Button, ButtonGroup }