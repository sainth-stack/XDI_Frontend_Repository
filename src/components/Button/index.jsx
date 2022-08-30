import React from 'react'

const Button = ({btnClass,btnText}) => {
  return (
        <button className={`btn btn-sm ${btnClass}`} type="button" data-tableshow="data-tableshow">{btnText}</button>
    )
}

export default Button