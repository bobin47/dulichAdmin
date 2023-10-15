import { App, Form, Tooltip, Space, Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import TableComponent from '../../components/TableComponent/TableComponent';
import DrawerComponent from '../../components/DrawerComponent/DrawerComponent';
import { GetTours, deleteTour } from '../../store/features/tour/tourSlice';
import FormTour from './components/FormTour/FormTour';
import "./index.css"

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
   
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    
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
    },
  ];

  useEffect(()=>{
  const param = { limit, page };
    dispatch(GetTours(param))
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
    dispatch(GetTours(param))
  };

  const showDrawer = (record) => {
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
        image: record.image,
      });
    }
    if (isCheck){
      form.setFieldsValue({
        title:"",
        price: "",
        brief: "",
        description: "",
        content: "",
        image:""
      });
    }
   
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handlePagination = (current, size) => {
    const param = { perpage: size, page: current };
    dispatch(GetTours(param));
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
