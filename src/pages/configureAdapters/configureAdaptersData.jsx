import meterIcon from '../../assets/svg/Meter-Headend-Systems.svg'
import { vendor, version, protocol, product,vendor1,product1,version1 } from '../../constants'
import scadaIcon from '../../assets/svg/Scada.svg'
import distributedIcon from '../../assets/svg/Distribution-Management-System.svg'
import outageIcon from '../../assets/svg/Outage-Management-System.svg'
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
        icon:"https://xsi.3insys.com:90/XSI/assets/svgicon/Geographic-Information-System.svg",
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
        icon:distributedIcon,
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
      icon:outageIcon,
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
      icon:outageIcon,
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
      icon:outageIcon,
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
      icon:outageIcon,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'workorder'
   },
   {
      headerName:'Work Order Management System',
      icon:outageIcon,
      selectInputsData:{
       vendor:vendor1,
       version:version1,
       protocol:protocol,
       product:product1
      },
      id:'workorder'
   }
]