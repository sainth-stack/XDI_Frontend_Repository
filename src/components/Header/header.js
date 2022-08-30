import React from 'react'
import editIcon from '../../assets/svg/edit.svg'
import styles from './header.module.scss'
export default function Header() {
    return (
        <div className='container-fluid'>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class={`${styles['card-header']} my-0 py-2`}>
                            <h4 class={`${styles['title']} ps-3`}>Meter Headend Systems</h4>
                        </div>

                        <div class={`${styles['card-footer']}`}>
                            <div class="row">
                                <div class="col d-sm-flex justify-content-between">
                                    <div class="w-auto">
                                        <button class="btn btn-outline-primary me-1 mb-1">Cancel</button>
                                    </div>
                                    <div class="input-group" style={{width:"60%"}}>
                                        <input type="text" class={`${styles['form-control']} form-control border-0 border-bottom border-2 w-auto` } placeholder="Your Adapter Name" /><button class="input-group-text bg-transparent border-0 border-bottom border-2">
                                          <img src={editIcon}/>
                                        </button>
                                    </div>
                                    <div class="w-auto">
                                        <button class="btn btn-outline-primary float-end">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}