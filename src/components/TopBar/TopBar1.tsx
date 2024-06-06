
import "./style.scss"
import { FaRegBell } from "react-icons/fa";

import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { FaAngleDown } from "react-icons/fa6";
import { BiBuildings } from "react-icons/bi";

const items: MenuProps['items'] = [
  {
    label: <div>North India Region</div>,
    key: '0',
  },
];


const TopBar1 = () => {
  return (
    <div className='top-bar-1'>
      <div className='top-left'>
        <div><img src='/src/assets/small.png' alt='logo'/></div>
        <div>View Name</div>
        <div className='top-drop'>
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <BiBuildings className=''/>
                North India Region
                <FaAngleDown className=''/>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className='top-right'>
        <div><FaRegBell className='top-icon'/></div>
        <div>John Doe</div>
        <div><img src='/src/assets/user.png' alt='user'/></div>
      </div>
    </div>
  )
}

export default TopBar1