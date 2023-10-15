import React, { useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataAboutHome, updateDataAboutHome } from '../../store/features/about/aboutSlice';

export default function AboutUsHome() {
  const dispatch = useDispatch();
  const { dataAboutHome } = useSelector(state => state.about)
  const [form] = Form.useForm();

  const onFinish = (values) => {
   
    dispatch(updateDataAboutHome(values))
  };

  useEffect(()=>{
    dispatch(getAllDataAboutHome())
  },[])

  if (dataAboutHome){
    form.setFieldsValue({
      data: dataAboutHome
    })
  }

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
