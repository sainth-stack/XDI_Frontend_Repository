import meterIcon from '../../assets/svg/Meter-Headend-Systems.svg'
import { vendor, version, protocol, product,vendor1,product1,version1 } from '../../constants'
import scadaIcon from '../../assets/svg/Scada.svg'
import distributedIcon from '../../assets/svg/Distribution-Management-System.svg'
import gis from "../../assets/svg/Geographic-Information-System.svg"
import outageIcon from '../../assets/svg/Outage-Management-System.svg'
import pi from "../../assets/svg/Pi-Historian.svg"
import cis from "../../assets/svg/customer-information-system.svg"
import mdm from "../../assets/svg/meter-data-management.svg"
import woms from "../../assets/svg/work-order-management-system.svg"
import das from "../../assets/svg/Distribution-Automation-System.svg"
import dw from "../../assets/svg/Data-Warehouse.svg"
import ev from "../../assets/svg/EV.svg"
import ems from "../../assets/svg/Electricity-Management-system.svg"
export const configurData=[
    {
       headerName:'Meter Headend Systems',
       icon:meterIcon,
       selectInputsData:{
        vendor:vendor,
        version:version,
        protocol:protocol,
        product:product
       },
       id:'metered'
    },
    {
        headerName:'Geographic Information System',
        icon:gis,
        selectInputsData:{
         vendor:vendor1,
         version:version1,
         protocol:protocol,
         product:product1
        },
        id:'geographical'
     },
     {
        headerName:'Scada',
        icon:scadaIcon,
        selectInputsData:{
         vendor:vendor1,
         version:version1,
         protocol:protocol,
         product:product1
        },
        id:'scada'
     },
     {
        headerName:'Distribution Management System',
        icon:distributedIcon,
        selectInputsData:{
         vendor:vendor1,
         version:version1,
         protocol:protocol,
         product:product1
        },
        id:'distributed'
     },
     {
        headerName:'Outage Management System',
        icon:outageIcon,
        selectInputsData:{
         vendor:vendor1,
         version:version1,
         protocol:protocol,
         product:product1
        },
        id:'outage'
     },
     {
      headerName:'Pi Historian',
      icon:pi,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'pihist'
   },
   {
      headerName:'Customer Information System',
      icon:cis,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'customer'
   },
   {
      headerName:'Meter Data Management',
      icon:mdm,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'meterdata'
   },
   {
      headerName:'Work Order Management System',
      icon:woms,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'workorder'
   },
   {
      headerName:'Distribution Automation System',
      icon:das,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'das'
   },
   {
      headerName:'Data Warehouse',
      icon:dw,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'dw'
   },
   {
      headerName:'EV',
      icon:ev,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'ev'
   },
   {
      headerName:'Electricity Management System',
      icon:ems,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'ems'
   }
]