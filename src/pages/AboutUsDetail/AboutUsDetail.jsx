import React, { useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CkeditorTour from '../../components/Ckeditor/CkeditorTour';
import { getAllDataDetailHome, updateDataAboutDetail } from '../../store/features/about/aboutSlice';

export default function AboutUsDetail() {
  const dispatch = useDispatch();
  const { dataAboutDetail } = useSelector(state => state.about)
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(updateDataAboutDetail(values))
  };

  useEffect(()=>{
    dispatch(getAllDataDetailHome())
  },[])

  if (dataAboutDetail) {
    form.setFieldsValue({
      data: dataAboutDetail
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

