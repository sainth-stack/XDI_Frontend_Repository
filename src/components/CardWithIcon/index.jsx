import React from 'react'
import styles from "./cardwithicon.module.scss";
const CardWithIcon = ({icon,content}) => {
  return (
    <div className={`card ${styles['card']}`}>
        <div className='card-body'>
            <div className='d-flex align-items-center'>
                <div className='m-1'>
                    <img src={icon} alt='LinkedIn Ads' className={styles['icon']} />
                </div>
                <div className='m-1'>
                    {content}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardWithIcon