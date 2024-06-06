import React from 'react';
import { Badge, Space, Table, Tag } from 'antd';
import { CiShare2 } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

import type { TableColumnsType } from 'antd';
import "./style.scss"
type Status = "success" | "processing" | "error" | "default" | "warning" 

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    type:string;
    score:number|null;
    status: [Status,string];
    tags:string,
    view:null|string,
  }
  
  const columns: TableColumnsType<DataType> = [
    {
      title: 'ASSESSMENT TITLE',
      dataIndex: 'name',
      render: (text: string) => <a className='assignment'>{text}</a>,
    },
    {
        title: 'TYPE',
        dataIndex: 'type',
    },
    {
      title: 'NO. OF SUPPLIERS',
      dataIndex: 'age',
    },
    {
        title: 'SCORE',
        dataIndex: 'score',
        render: (score: number|null) => <div className='assignment'>{score ? score : "-"}</div>,
      },
      {
        title: 'RISK CLASSIFICATION',
        key: 'state',
        dataIndex:"status",
        render: (status: [Status,string]) => (<Badge status={`${status[0]}`} text={`${status[1]}`} />),
      },
        {title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string) => {
            if(tags==="PENDING"){return(<Tag bordered={false} color='error'>PENDING</Tag>)}
            else{return(<Tag bordered={false} color='green'>COMPLETE</Tag>)}
        }

    },
    {
        title: 'RESULT',
        dataIndex: 'view',
        render: (view: string|null) => <a className='assignment'>{view ? "View" : "-"}</a>,
      },
    
    {
        title: 'Action',
        key: 'action',
        render: () => (
          <Space size="middle">
            <a className='grayed'><CiShare2/></a>
            <a className='grayed'><RiDeleteBin5Line/></a>
          </Space>
        ),
      },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'Assessment 1',
      type:"BRSR",
      age: 20,
      score:null,
      status:["warning","Medium"],
      tags:"PENDING",
      view:null,
    },
    {
      key: '2',
      name: 'Assessment 2',
      type:"BRSR",
      age: 25,
      score:98,
      status:["success","Low"],
      tags:"COMPLETE",
      view:"View",
    },
    {
      key: '3',
      name: 'Assessment 3',
      type:"BRSR",
      age: 35,
      score:22,
      status:["error","High"],
      tags:"COMPLETE",
      view:"View",
    },
    {
      key: '4',
      name: 'Assessment 3',
      type:"CUSTOM",
      age: 49,
      score:23,
      status:["warning","Medium"],
      tags:"COMPLETE",
      view:"View",
    },
    {
        key: '5',
        name: 'Assessment 3',
        type:"CUSTOM",
        age: 50,
        score:42,
        status:["warning","Medium"],
        tags:"COMPLETE",
        view:"View",
      },
    
  ];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  
  
const DataEntry = () => {

    return (
      <div>
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    );
}

export default DataEntry