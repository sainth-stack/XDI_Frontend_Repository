import React from 'react'
import meterIcon from '../../assets/svg/Meter-Headend-Systems.svg'
export default function ConfigureAdapters() {
    return (
        <div>
            <div class="col-sm">
                <div class="card">
                    <div class="card-header d-sm-flex align-items-center justify-content-between mx-1 py-1">
                        <h4>Configure Adapters</h4>
                        <div class="page-title-left">
                            <div class="input-group col">
                                <input type="text" class="form-control border-0 border-bottom border-2 w-auto float-end" placeholder="Search...." /><button class="input-group-text bg-transparent border-0 border-bottom border-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-3 col-md-4 col-sm-6" id="databases" data-datasource-filter="database">
                                <div class="card" onclick="location.href='meter-headend-systems.html'" role="button">
                                    <div class="card-body">

                                        <div class="d-flex align-content-center">
                                            <div style={{ margin: "auto", width: "80px", height: "80px" }}>
                                                <img src={meterIcon} alt="" style={{ width: "80px" }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-outline-light" onclick="location.href='meter-headend-systems.html'" style={{ height: "57px", color: 'black' }}><i class="uil uil-user me-1"></i>Meter Headend Systems</button>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-xl-3 col-md-4 col-sm-6 " data-datasource-filter="database">
                                            <div class="card" onclick="location.href='geographic-information-system.html'" role="button">
                                                <div class="card-body">

                                                    <div class="d-flex align-content-center">
                                                        <div class="d-flex align-content-center" style={{margin:"auto",width:"80px",height:"80px"}}>
                                                            <img src="assets/svgicon/Geographic-Information-System.svg" alt="" style={{width:"80px"}}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="btn-group" role="group">
                                                    <button type="button" class="btn btn-outline-light" style={{height: "57px"}} onclick="location.href='geographic-information-system.html'">
                                                        <i class="uil uil-user me-1"></i>Geographic Information System (GIS)
                                                    </button>

                                                </div>
                                            </div>
                                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}