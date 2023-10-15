import React from 'react'
import { Button, Form, Input } from "antd";
import { changeDataFooter } from '../../../../store/features/DataFooter/dataFooter';

export default function FormComponent({ action, form, dispatch }) {
  const onFinish = (values) => {
    if (action) {
      // dispatch(createTour(values))
    } else {
        dispatch(changeDataFooter(values))
    }

  };


  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        {/* {action ? null : (
          <Form.Item name="_id" label="id" wrapperCol={{ span: 12 }}>
            <Input disabled />
          </Form.Item>
        )} */}
        <Form.Item name="title" label="Title" wrapperCol={{ span: 16 }}>
          <Input />
        </Form.Item>
        <Form.Item name="phoneNumber" label="Phone Number" wrapperCol={{ span: 16 }}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" wrapperCol={{ span: 16 }}>
          <Input />
        </Form.Item>
        <Form.Item
          name="companyName"
          label="Company Name"
          wrapperCol={{ span: 18 }}
        >
          <Input />
        </Form.Item>

       
        <Form.Item
          // wrapperCol={{ span: 8 }}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>)
}
