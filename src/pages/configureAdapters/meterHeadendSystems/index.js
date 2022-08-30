import React from 'react'
import CardWithIcon from '../../../components/CardWithIcon'
import Header from '../../../components/Header/header'
import InputsCard from '../../../components/InputsCard'
export default function MeterHeadendSystems(){
    return(
        <div className='ms-5 me-5 mt-4'>
            <Header />
            <div className='row'>
                <div className='col-sm-3 mt-4'>
                    <CardWithIcon icon={"https://xsi.3insys.com:90/XSI/assets/svgicon/Geographic-Information-System.svg"} content={"Geographic Information System"} />
                </div>
                <div className='col-sm-9 mt-4'>
                    <InputsCard />
                </div>
            </div>
        </div>
    )
}