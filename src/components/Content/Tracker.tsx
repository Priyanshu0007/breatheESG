import React from 'react';
import { Input, Table, Tag } from 'antd';
import { PiTarget } from "react-icons/pi";
import { BiCommentAdd } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";

import type { TableColumnsType } from 'antd';
import "./style.scss"


interface DataType {
    key: React.Key;
    name: string;
    type:string;
    tags:string,
    view:null|string,
  }
  
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Month',
      dataIndex: 'name',
      render: (text: string) => <div className=''>{text}</div>,
    },
    {title: 'STATUS',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string) => {
            if(tags[0]==="P"){return(<Tag bordered={false} color='error'>{tags}</Tag>)}
            else if(tags[0]==="I"){return <Tag bordered={false} color='orange'>{tags}</Tag>}
            else{return(<Tag bordered={false} color='green'>{tags}</Tag>)}
        }

    },
    {
        title: 'COMPLETION',
        dataIndex: 'type',
        sorter: (a, b) => Number(a.type.slice(0,2)) - Number(b.type.slice(0,2)),
    },
      
        
    {
        title: 'BUSINESS UNIT',
        dataIndex: 'view',
        render: (view: string|null) => <div className=''>{view ? view : "-"}</div>,
      },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'Jan 2023',
      type:"20%",
      tags:"PENDING APPROVAL (1/12)",
      view:"Business Unit 1",
    },
    {
      key: '2',
      name: 'Feb 2023',
      type:"30%",
      tags:"APPROVED (2/12)",
      view:"Business Unit 1",
    },
    {
      key: '3',
      name: 'Mar 2023',
      type:"50%",
      tags:"INCOMPLETE (4/12)",
      view:"Business Unit 1",
    },
    
  ];
const Tracker = () => {
  return (
    <div className='main-content'>
      <div className='content-logos'> 
        <div className='boxxer'>
          <div className='boxxer-text'><p>PENDING TRACKERS</p><span>45/60</span></div>
          <div className='boxxer-icon'><PiTarget/></div>
        </div>
        <div className='boxxer'>
          <div className='boxxer-text'><p>PENDING REVIEWS</p><span>3</span></div>
          <div className='boxxer-icon'><BiCommentAdd/></div>
        </div>
      </div>
      <div className='auto-save'>
      Autosaved at 12:31 pm
      </div>
      <div className='inputer'>
        <Input placeholder="Search for a business unit" size='large' prefix={<IoMdSearch className='grayed'/>} />
      </div>
      <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
    </div>
  )
}

export default Tracker