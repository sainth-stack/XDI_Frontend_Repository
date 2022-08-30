import React from 'react'
import styles from './header.module.scss'
export default function Header() {
    return (
       <div className='card'>
         <div className='container-fluid container1'>
            <div className='row'>
                <h1 className={`${styles['title']} pt-3 pb-0`}>Meter Headend Systems</h1>
            </div>
            <hr style={{height:'0px',color:'grey',backgroundColor:"gray"}}/>
            <div className='row'>
                <div className='col'>
    
                </div>
                <div className='col'>

                </div>
                <div className='col'>

                </div>
            </div>
        </div>
       </div>
    )
}