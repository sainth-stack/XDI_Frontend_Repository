import React from 'react'
import Button from '../Button'
import TextInput from '../TextInput'
import styles from "./inputscard.module.scss"
const InputsCard = () => {
  return (
    <div className={`card ${styles['card']}`}>
        <div className='card-body'>
             <form className='need-validation' noValidate="novalidate" action='#'>
                <div className='row'> 
                    <div className='col-md-6'>
                        <TextInput label={"Host"} placeholder={"host"} />
                    </div>
                    <div className='col-md-6'>
                        <TextInput label={"Port"} placeholder={"port"} />
                    </div>
                </div>
                <div className='row-cols-auto'>
                    <div className='my-2'>
                        <Button btnClass={'btn-primary'} btnText={"Test Connection"} />
                    </div>
                </div>
             </form>
        </div>
    </div>
  )
}

export default InputsCard