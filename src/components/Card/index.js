import React from 'react'
import styles from "./card.module.scss";
import edit from "../../assets/svg/edit-icon.svg";
import cloud from "../../assets/svg/cloud-upload.svg";
import trash from "../../assets/svg/trash-icon.svg";
import eye from "../../assets/svg/eye.svg";
import moment from 'moment';
const Card = () => {
  const text = "Simulator Consumer for Use case 1";
  return (
    <div className={`gcard ${styles['gcard']}`}>
      <div className={`${styles['front']}`}>
        <h4 className='ps-3 pe-3 pt-4'>{text.substring(0,15)+"...."}</h4>
        <div className='ps-3 pe-3 d-flex justify-content-between'>
          <div className={`${styles['circle']}`}>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <p className='p-0 m-0'>V3</p>
              </div>
          </div>
          <div className={`${styles['pcloud']}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Cloud01.svg" alt='Cloud' width="60px" height="60px" />
            <div className={`${styles['cloud']}`}>
              <p className='p-0 v-0'>V2</p>
            </div>
          </div>
        </div>
        <div className='mt-3 d-flex justify-content-around'>
          <div className={`d-flex p-2 justify-content-center align-items-center h-100 ${styles['icon-border']}`}>
              <img src={edit} alt="edit" className={`${styles['icons']}`} />
          </div>
          <div className={`d-flex p-2 justify-content-center align-items-center h-100 ${styles['icon-border']}`}>
              <img src={cloud} alt="cloud" className={`${styles['icons']}`} />
          </div>
          <div className={`d-flex p-2 justify-content-center align-items-center h-100 ${styles['icon-border']}`}>
              <img src={trash} alt="trash" className={`${styles['icons']}`} />
          </div>
          <div className={`d-flex p-2 justify-content-center align-items-center h-100 ${styles['icon-border']}`}>
              <img src={eye} alt="eye" className={`${styles['icons']}`} />
          </div>
        </div>
      </div>
      <div className={`${styles['back']}`}>
        <div className='text-center pt-5'>
          <h4>Created At: {moment(new Date()).format("D MMM YYYY")}</h4>
          <h4>Modified By: {"Vamshi"}</h4>
        </div>
      </div>
    </div>
  )
}

export default Card