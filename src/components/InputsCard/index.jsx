import React ,{useState} from 'react'
import Button from '../Button'
import SelectInput from '../SelectInput'
import TextInput from '../TextInput'
import styles from "./inputscard.module.scss"
const InputsCard = ({inputData}) => {
    const [showProduct,setShowProduct]=useState(false)
    return (
        <div className={`card ${styles['card']}`}>
            <div className='card-body'>
                <form className='need-validation' noValidate="novalidate" action='#'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <SelectInput options={inputData.vendor} label="Vendor" setShowProduct={setShowProduct}/>
                        </div>
                        {showProduct &&
                            <div className='col-md-6'>
                                <SelectInput options={inputData.product} label="Product" />
                            </div>
                        }
                        <div className='col-md-6'>
                            <SelectInput options={inputData.version} label="Version" />
                        </div>
                        <div className='col-md-6'>
                            <SelectInput options={inputData.protocol} label="Protocol" />
                        </div>
                        <div className='col-md-6'>
                            <TextInput label={"Port"} placeholder={"Port"} />
                        </div>
                        <div className='col-md-6'>
                            <TextInput label={"Host"} placeholder={"host"} />
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