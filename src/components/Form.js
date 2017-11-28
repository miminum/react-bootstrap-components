import React from 'react'

const Form = ({
  title,
  children
}) => {
  return(
    <form className="p-5 w_50 text-left">
      <h2>{ title }</h2>
      { children }
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

const Text = ({
  type = 'text',
  label,
  rows = 1,
  placeholder
}) => {
  let input = null
  if (rows > 1) {
    input = <textarea className="form-control" id={ label } rows={ rows }></textarea>
  }
  else {
    input = <input type={ type } className="form-control" id={ label } placeholder={ placeholder }></input>
  }

  return (
    <div className="form-group text-left">
      <label for={ label }>{ label }</label>
      { input }
    </div>
  )
}

const File = ({
  label,
  help
}) => {
  return (
    <div className="form-group text-left">
      <label for={ label }>{ label }</label>
      <input type="file" class="form-control-file" id={ label } aria-describedby="fileHelp"></input>
      <small id="fileHelp" class="form-text text-muted">{ help }</small>
    </div>
  )
}

const Select = ({
  children,
  label,
  showAll = false
}) => {
  const show = (showAll) ? 'multiple' : null
  
  const Data = children.split(', ')
  let MakeItem = function(X) {
    return <option>{X}</option>;
  };
  
  return (
    <div className="form-group">
      <label for="exampleSelect2 text-left">{ label }</label>
      <select multiple={ show } className="form-control" id="exampleSelect2">
        { Data.map(MakeItem) }
      </select>
    </div>
  )
}

const Radio = ({

})
export { Form, Text, File, Select }