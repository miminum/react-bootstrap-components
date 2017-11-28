import React from 'react'

const classforProgress = (striped) => {
  let className = 'progress-bar'
  if (striped) {
    className += ' progress-bar-striped'
  }
  return className
}

const Progress = ({
    percentage,
    variation,
    striped = false
  }) => {
    
    let divStyle = {
        width: percentage + '%'
    }

    return (
      <div class="progress">
        <div class={ classforProgress(striped) + ` bg-${ variation }` } role="progressbar" style={divStyle} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    )
  }

export default Progress