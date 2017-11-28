import React from 'react'

// <Container fluid>_</Container>
// <div class='container-fluid></div>

const Container = ({
  children,
  fluid = false
}) => {
  
  return (
    <div className={ fluid ? 'container-fluid' : 'container' }>
      { children }
    </div>
  )
}

const Row = ({
  children,
  className = '' //undefined or a string
}) => {
  return (
    <div className={ `row ${className}` } >
      { children }
    </div>
  )
}

function ClassNameForWidth(base) {
  if (!base) {
    return ''
  }
  else {
    return `col-${ base }`
  }
}

function ClassNameForSm(sm) {
    if (!sm) {
      return ''
    }
    else {
      return `col-sm-${ sm }`
    }
  }
  

const Column = ({
  offset = 0,
  base,
  sm,
  children
}) => (
    <div className={[
      ClassNameForWidth(base), 
      ClassNameForSm(sm)
      ].join(' ')}
    >
      { children }
    </div>
  )


export { Container, Row, Column }