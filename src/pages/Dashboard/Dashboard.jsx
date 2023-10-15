import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetToursAll, hotTour } from '../../store/features/tour/tourSlice';
import { URLSERVE } from '../../utils/utils';

const DisabledRowsTable = () => {
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (text, record, index) => <a>{index + 1}</a>,
      fixed: "left",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      fixed: "left",
      ellipsis: true,
      render: (title) => (
        <Tooltip placement="topLeft" title={title}>
          {title}
        </Tooltip>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <Button onClick={() => showDrawer(record)} type="primary">
    //         Edit
    //       </Button>
    //       <Button danger onClick={() => handleDelete(record)}>
    //         Delete
    //       </Button>
    //     </Space>
    //   ),
    //   fixed: "right",
    //   width: 180,
    // },
  ];

  const dispatch = useDispatch()
  const { allTours } = useSelector(state => state.tour)
  const [selectedRowKeys, setSelectedRowKeys] = useState(["1"]);
  const [editAction, setEditAction] = useState(true)
  
  const hasSelected = selectedRowKeys.length > 0;
 
  useEffect(()=>{
    dispatch(GetToursAll())
    fetch(`${URLSERVE}/tour/getPaginationTour`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setSelectedRowKeys(data.listSelected)
      })
      .catch(error => {
        console.error('Fetch error:', error);

      });
  }, [dispatch])

  const start = () => {
    setSelectedRowKeys([]);   
  };

  const callApi = () => {
    const data = { listSelected: selectedRowKeys }
    dispatch(
      hotTour(data)
    )
    setEditAction(true)

  }

  const handleEdit = () => {
    setEditAction(false)
  }

  return (
    <div>
      <Space>
        <Button type="primary" onClick={start} disabled={!hasSelected || editAction} >
          Reload
        </Button>
        <Button type="primary" disabled={!hasSelected || editAction} onClick={callApi}>
        Save
        </Button>
        <Button type="primary" disabled={!editAction} onClick={handleEdit}>
          Edit
        </Button>
      </Space>
      <Table
        dataSource={allTours}
        columns={columns}
        rowSelection={{
          type:"checkbox",
          selectedRowKeys: selectedRowKeys,
          onChange: (selectedRowKeys) => {
            setSelectedRowKeys(selectedRowKeys);
          },
          getCheckboxProps: (record) => ({
            disabled: selectedRowKeys.length > 5 && !selectedRowKeys.includes(record.key) || editAction,
          }),
          hideSelectAll:true
        }}
      />
    </div>
   
  );
};

export default DisabledRowsTable;

