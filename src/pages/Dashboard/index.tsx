/* eslint-disable @typescript-eslint/no-explicit-any */

import "./style.scss"
import { MdBarChart,MdGridView,MdOutlinePieChartOutline,MdOutlineInsertDriveFile,MdOutlineSupervisedUserCircle,MdAutoGraph, MdLogout } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { PiTarget } from "react-icons/pi";
import { useFirebase } from "../../context/firebase";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TopBar1 from "../../components/TopBar/TopBar1";
import TopBar2 from "../../components/TopBar/TopBar2";
import DataEntry from "../../components/Content/DataEntry";
import Tracker from "../../components/Content/Tracker";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";




const Dashboard = () => {
  const navItems=[
    {id:0,name:"Dashboard",icon:<MdBarChart/>,class:""},
    {id:1,name:"Entity Manager",icon:<MdGridView/>,class:""},
    {id:2,name:"Data Manager",icon:<MdOutlinePieChartOutline/>,class:"selected"},
    {id:3,name:"Reporting",icon:<MdOutlineInsertDriveFile/>,class:""},
    {id:4,name:"Materiality",icon:<FiLayers/>,class:""},
    {id:5,name:"Suppliers",icon:<MdOutlineSupervisedUserCircle/>,class:""},
    {id:6,name:"Analytics",icon:<MdAutoGraph/>,class:""},
    {id:7,name:"Targets",icon:<PiTarget/>,class:""},
  ]
  const firebase:any = useFirebase();
  const nagivate=useNavigate();
  useEffect(()=>{
    if(!firebase.user?.email){nagivate('/sign')}
    else{nagivate('/')}
  },[firebase.user, nagivate])
  const [dataTracker,setDataTracker]=useState(true)
  const [sidebar,setSidebar]=useState(true);
  return (
    <div className="d-main">
      <div className={`sidebar ${sidebar ? "" : "sidebar-off"}`}>
        <div onClick={()=>setSidebar(!sidebar)} className="sidebtn">{sidebar ? <FaChevronLeft/> : <FaChevronRight/>}</div>
        <div><img src="/logo.png"/></div>
        <div>
            {navItems.map((it)=>{
              return(<div className={`nav-items ${it.class}`} key={it.id}><p>{it.icon}</p><p>{it.name}</p></div>)
            })}
            <div onClick={()=>{firebase.signOutUser();toast.success('Succesfull Logged Out',{duration:3000})}} className={`nav-items logout`} ><p><MdLogout/></p><p>Logout</p></div>
        </div>
      </div>
      <div className={`d-content ${sidebar ? "" : "d-content-off"}`}>
        <TopBar1/>
        <TopBar2 dataTracker={dataTracker} setDataTracker={setDataTracker}/>
        <div className="table">
          {dataTracker ? <DataEntry/> : <Tracker/>}
        </div>
      </div>
    </div>

  )
}

export default Dashboard