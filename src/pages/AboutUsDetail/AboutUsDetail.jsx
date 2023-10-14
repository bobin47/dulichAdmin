import React from 'react'
import Filter from '../../components/Filter/Filter'
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import CkeditorTour from '../../components/Ckeditor/CkeditorTour';

export default function AboutUsDetail() {
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
        style={{width:"1200" }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item name="data" label="Data" 
        >
          <CkeditorTour />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 2, span: 24 }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

