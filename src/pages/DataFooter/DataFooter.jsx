import React, { useEffect, useState } from 'react'
import "./index.css"
import Filter from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { changeDataFooter, getDataFooter } from '../../store/features/DataFooter/dataFooter';
import { Button,Form, Input } from 'antd';

export default function DataFooter() {
  const dispatch = useDispatch();
  const { dataFooter } = useSelector((state) => state.dataFooter);
  const [form] = Form.useForm();

  useEffect(()=>{
    dispatch(getDataFooter())
  },[])

  if (dataFooter) {
    form.setFieldsValue({
      _id: dataFooter._id,
      title: dataFooter.title,
      phoneNumber: dataFooter.phoneNumber,
      email: dataFooter.email,
      companyName: dataFooter.companyName,
    });
  }

  const onFinish = (values) => {
    dispatch(changeDataFooter(values))
  };


  return <div className="container">
    <div className="filter">
      <Filter
        hide={false}
        onCreate={false}
      />
    </div>
    <Form
      form={form}
      onFinish={onFinish}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item name="title" label="Title" 
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name="phoneNumber" 
        label="Phone Number" 
        rules={[{ required: true, message: 'Please input your username!' }]} 
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name="email" 
        label="Email" 
        rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="companyName"
        label="Company Name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
}
