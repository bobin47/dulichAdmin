import React from 'react'
import Filter from '../../components/Filter/Filter'
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';

export default function AboutUsHome() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values)
    // dispatch(changeDataFooter(values))
  };

  return (
    <div className="container">
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
        <Form.Item name="data" label="Data"
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
  )
}
