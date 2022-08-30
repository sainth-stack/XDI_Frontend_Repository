import React from 'react'
import styles from "./textinput.module.scss";
const TextInput = ({label,placeholder}) => {
  return (
    <>
        <label htmlFor="host" className="form-label mb-0">{label}</label>
        <input type="text" className="form-control mb-3" id="host" placeholder={placeholder} required="required" />
    </>
  )
}

export default TextInput