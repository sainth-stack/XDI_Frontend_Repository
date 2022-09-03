import React from 'react'
import Card from '../../components/Card'
import styles from "./styles.module.scss";
const CardOuter = () => {
  return (
    <div className='container'>
        <div className={`d-flex justify-content-center align-items-center vh-100`}>
          <div className='m-1'>
            <Card />
          </div>
        </div>
    </div>
  )
}

export default CardOuter