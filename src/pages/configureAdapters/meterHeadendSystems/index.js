import React from 'react'
import CardWithIcon from '../../../components/CardWithIcon'
import Header from '../../../components/Header/header'
import InputsCard from '../../../components/InputsCard'
import meterIcon from '../../../assets/svg/Meter-Headend-Systems.svg'
export default function MeterHeadendSystems() {
    return (
        <div className='mt-4'>
            <Header headerName={"Meter Headend Systems"}/>
            <div className='row'>
                <div className='col-sm-3 mt-4'>
                    <CardWithIcon icon={meterIcon} content={"Meter Headend Systems"} />
                </div>
                <div className='col-sm-9 mt-4'>
                    <InputsCard />
                </div>
            </div>
        </div>
    )
}