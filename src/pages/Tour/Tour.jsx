import { App, Form, Tooltip, Space, Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import TableComponent from '../../components/TableComponent/TableComponent';
import DrawerComponent from '../../components/DrawerComponent/DrawerComponent';
import "./index.css"
import { deleteTour, getAllTour } from '../../store/features/tour/tourSlice';
import FormTour from './components/FormTour/FormTour';

export default function Tour() {
   const dispatch = useDispatch();
  const { message, modal } = App.useApp();
  const { tours, total } = useSelector((state) => state.tour);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [form] = Form.useForm();
  const [action, setAction] = useState();
  const [open, setOpen] = useState(false);
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
      width: 350,
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
      width: 150,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showDrawer(record)} type="primary">
            Edit
          </Button>
          <Button danger onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
      fixed: "right",
      width: 180,
    },
  ];

  useEffect(()=>{
  const param = { limit, page };
  dispatch(getAllTour(param))
  },[])

  const onSearch = (value) => {
  const param = { limit, page, search: value };
  //  dispatch(getAllCompany(param));
  };

    const handleDelete = (record) => {
    const { _id } = record;
    modal.confirm({
      title: "Do you want delete",
      onOk: () => {
         dispatch(deleteTour(_id));
      },
      onCancel: () => {},
    });
  };

  const onRefresh = () => {
    const param = { limit, page };
    dispatch(getAllTour(param))
  };

  const showDrawer = (record) => {
    console.log(record)
    const isCheck = record._id === undefined;
    setAction(isCheck);
    if (!isCheck){
      form.setFieldsValue({
        _id: record._id,
        title: record.title,
        price: record.price,
        brief: record.brief,
        description: record.description,
        content: record.content,
      });
    }
    if (isCheck){
      form.setFieldsValue({
        title:"",
        price: "",
        brief: "",
        description: "",
        content: "",
      });
    }
   
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handlePagination = (current, size) => {
    const param = { limit: size, page: current };
    // dispatch(getAllTour(param));
    setPage(current);
  };

  return (
     <div className="container">
      <div className="filter">
        <Filter
          hide={false}
          onSearch={onSearch}
          onRefresh={onRefresh}
          showDrawer={showDrawer}
        />
      </div>
      <TableComponent
        // x={1500}
        columns={columns}
        dataSource={tours}
        page={page}
        total={total}
        pageSize={limit}
        handlePagination={handlePagination}
      />

      <DrawerComponent
        width={1400}
        onClose={onClose}
        open={open}
        name={`Tour ${action ? "Create" : "Edit"}`}
        FormComponent={
          <FormTour  action={action} dispatch={dispatch} form={form}/>
        }
      />
    </div>
  )
}
