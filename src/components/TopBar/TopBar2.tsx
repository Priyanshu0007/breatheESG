import { RiBuilding4Line } from "react-icons/ri";
import { PiTarget } from "react-icons/pi";
import "./style.scss"
import { Dispatch, SetStateAction } from "react";
import { MenuProps } from "antd";
import { Dropdown, Space } from 'antd';
import { FaAngleDown } from "react-icons/fa";
interface myProps {
    dataTracker:boolean,
    setDataTracker: Dispatch<SetStateAction<boolean>>
 }
 const items: MenuProps['items'] = [
    {
      label: <div>North India Region</div>,
      key: '0',
    },
  ];
const TopBar2 = ({dataTracker,setDataTracker}:myProps) => {
  return (
    <div className="top-bar-1">
        <div className="top-right">
            <div className={`selector ${dataTracker ? "selected" : ""}`} onClick={()=>{setDataTracker(true)}}>
                <div><RiBuilding4Line/></div>
                <div>DATA ENTRY</div>
            </div>
            <div className={`selector ${dataTracker ? "" : "selected"}`} onClick={()=>{setDataTracker(false)}}>
                <div className=""><PiTarget/></div>
                <div>TRACKER</div>
            </div>
        </div>
        <div className="top-left">
            <div>For:</div>
            <div className="top-drop dark">
                <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                    North India Region
                    <FaAngleDown className=''/>
                </Space>
                </a>
            </Dropdown>
            </div>
            {dataTracker && <div className="submit-wrapper">
                <div className="submit-btn">Submit for Approval</div>
            </div>}
        </div>
    </div>
  )
}

export default TopBar2