import React, { useState } from 'react'
import styles from './selectInput.module.scss'
export default function SelectInput({ options, label, setShowProduct }) {
    const [selectOption, setSelectOption] = useState()
    const handleChange = (e) => {
        if(label=='Vendor' && e.target.value!=="Sensus" && e.target.value!=="Select Vendor" ){
            setShowProduct(true)
        }
        else if(label=='Vendor'){
            setShowProduct(false)
        }
        setSelectOption(e.target.value)
    }
    return (
        <>
            <label htmlFor="protocole" className="form-label mb-0">{label}</label>
            <select className={`form-select mb-3 ${styles['form-select']}`} data-vendor="data-vendor"
                onChange={(e) => handleChange(e)}
                value={selectOption}
            >
                {
                    options.map((item,index) => {
                        return (
                            <option key={index}> {item.key} </option>
                        )
                    })
                }
            </select>
        </>
    )
}