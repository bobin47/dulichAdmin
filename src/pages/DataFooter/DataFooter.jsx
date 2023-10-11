import React, { useEffect, useState } from 'react'
import "./index.css"
import Filter from '../../components/Filter/Filter';
import TableComponent from '../../components/TableComponent/TableComponent';
import DrawerComponent from '../../components/DrawerComponent/DrawerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFooter } from '../../store/features/DataFooter/dataFooter';
import { Button, Space, Tooltip, Form } from 'antd';
import FormComponent from './components/FormComponet/FormComponent';

export default function DataFooter() {
  const dispatch = useDispatch();
  const { dataFooter } = useSelector((state) => state.dataFooter);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [action, setAction] = useState();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (text, record, index) => <a>{index + 1}</a>,
      fixed: "left",
      width: 150,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      fixed: "left",
      width: 250,
      ellipsis: true,
      render: (title) => (
        <Tooltip placement="topLeft" title={title}>
          {title}
        </Tooltip>
      ),
    },
    {
      title: "phoneNumber",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 150,
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "companyName",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showDrawer(record)} type="primary">
            Edit
          </Button>
          {/* <Button danger onClick={() => handleDelete(record)}>
            Delete
          </Button> */}
        </Space>
      ),
      fixed: "right",
      width: 180,
    },
  ];


  useEffect(()=>{
    dispatch(getDataFooter())
  },[])

  const onSearch = (value) => {
    // const param = { limit, page, search: value };
    //  dispatch(getAllCompany(param));
  };
  const onRefresh = () => {
    const param = { limit, page };
    // dispatch(getAllTour(param))
  };

  const showDrawer = (record) => {
    console.log(record)
    const isCheck = record._id === undefined;
    setAction(isCheck);
    if (!isCheck) {
      form.setFieldsValue({
        _id: record._id,
        title: record.title,
        phoneNumber: record.phoneNumber,
        email: record.email,
        companyName: record.companyName,
      });
    }
    // if (isCheck) {
    //   form.setFieldsValue({
    //     title: "",
    //     price: "",
    //     brief: "",
    //     description: "",
    //     content: "",
    //   });
    // }

    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return <div className="container">
    <div className="filter">
      <Filter
        hide={false}
        onSearch={onSearch}
        onRefresh={onRefresh}
        showDrawer={showDrawer}
        onCreate={false}
      />
    </div>
    <TableComponent
      // x={1500}
      columns={columns}
      dataSource={dataFooter}
      page={page}
      total={1}
      pageSize={limit}
    // handlePagination={handlePagination}
    />

    <DrawerComponent
      width={500}
      onClose={onClose}
      open={open}
      name={`Data Footer ${action ? "Create" : "Edit"}`}
    FormComponent={
      <FormComponent 
        action={action} 
        dispatch={dispatch} 
        form={form} 
      />
    }
    />
  </div>
}
