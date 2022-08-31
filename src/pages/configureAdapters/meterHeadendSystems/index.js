import React from 'react'
import CardWithIcon from '../../../components/CardWithIcon'
import Header from '../../../components/Header/header'
import InputsCard from '../../../components/InputsCard'
import { useParams } from "react-router-dom";
import { configurData } from '../configureAdaptersData';
export default function MeterHeadendSystems() {
    let { id } = useParams();
    const finalData=configurData.filter((item)=>item.id === id)
    return (
        <div className='mt-4'>
            <Header headerName={finalData[0].headerName}/>
            <div className='row'>
                <div className='col-sm-3 mt-4'>
                    <CardWithIcon icon={finalData[0].icon} content={finalData[0].headerName}/>
                </div>
                <div className='col-sm-9 mt-4'>
                    <InputsCard inputData={finalData[0].selectInputsData}/>
                </div>
            </div>
        </div>
    )
}