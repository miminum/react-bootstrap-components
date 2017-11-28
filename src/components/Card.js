import React from 'react'

const Card = ({
  children,
  imageLink = 'http://via.placeholder.com/318x180',
  title,
  link,
  linkVariation = 'primary',
  linkText
}) => {
  return(
    <div className="card d-inline-block mx-2">
      <img className="card-img-top" src={ imageLink } alt=""></img>
      <div className="card-block">
        <h4 className="card-title">{ title }</h4>
        <p className="card-text">{ children }</p>
        <a href={ link } className={ `btn btn-${linkVariation}` }>{ linkText }</a>
      </div>
    </div>
  )
}

export default Card