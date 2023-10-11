import React, { useEffect, useState } from 'react'
import "./index.css"
import Filter from '../../components/Filter/Filter'
import TableComponent from '../../components/TableComponent/TableComponent'
import DrawerComponent from '../../components/DrawerComponent/DrawerComponent'
import { Button, Space, Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDataHeader } from '../../store/features/DataHeader/dataHeader'
import FormDataHeader from './components/FormDataHeader/FormDataHeader'

export default function DataHeader() {
  const dispatch  = useDispatch()
  const { slideHeader } = useSelector(state => state.dataHeader)
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
      title: "List url",
      dataIndex: "listURL",
      key: "listURL",
      ellipsis: true,
    },
    {
      title: "updatedAt",
      dataIndex: "updatedAt",
      key: "updatedAt",
      
    },

    {
      title: "createdAt",
      dataIndex: "createdAt",
      key: "createdAt",
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
    dispatch(getAllDataHeader())
  },[])

  console.log(slideHeader)

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
        listURL: record.listURL
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
      dataSource={slideHeader}
      page={page}
      total={1}
      pageSize={limit}
      // handlePagination={handlePagination}
    />

    <DrawerComponent
      width={500}
      onClose={onClose}
      open={open}
      name={`Data Header ${action ? "Create" : "Edit"}`}
      FormComponent={
        <FormDataHeader action={action} dispatch={dispatch} form={form} />
      }
    />
  </div>
}
