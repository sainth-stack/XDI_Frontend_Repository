import React from 'react'
import editIcon from '../../assets/svg/edit.svg'
import Button from '../Button'
import styles from './header.module.scss'
export default function Header({ headerName }) {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="card">
                    <div className={`${styles['card-header']} my-0 py-2`}>
                        <h4 className="title">{headerName}</h4>
                    </div>
                    <div className={`${styles['card-footer']}`}>
                        <div className="row">
                            <div className="col d-sm-flex justify-content-between">
                                <div className="w-auto">
                                    <Button btnText="Cancel" btnClass="btn-outline-primary me-1 mb-1" />
                                </div>
                                <div className="input-group" style={{ width: "60%" }}>
                                    <input type="text" className={`${styles['form-control']} form-control border-0 border-bottom border-2 w-auto`} placeholder="Your Adapter Name" /><button className="input-group-text bg-transparent border-0 border-bottom border-2">
                                        <img src={editIcon} />
                                    </button>
                                </div>
                                <div className="w-auto">
                                    <Button btnText="Save" btnClass="btn-outline-primary float-end" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}