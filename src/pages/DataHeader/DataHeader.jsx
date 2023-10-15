import React, { useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import { Button, Space, Form, Input, Row, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { editDataHeader, getAllDataHeader } from '../../store/features/DataHeader/dataHeader'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./index.css"

export default function DataHeader() {
  const dispatch  = useDispatch()
  const { listURL } = useSelector(state => state.dataHeader)
  const [form] = Form.useForm();

  useEffect(()=>{
    dispatch(getAllDataHeader())
  },[])

  if (listURL){
    form.setFieldsValue({
      listURL: listURL
    });
  }

  const onFinish = (values) => {
    dispatch(editDataHeader(values))

  };

  const handleInputChange = (e) => {
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
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.List name="listURL">
        {(fields, { add, remove }) => (
          <>
          <Row >
              {fields.map(({ key, name, ...restField }) => {
                return <Col span={5}>
                  <Space
                    key={key}
                    style={{
                      display: 'flex',
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name]}
                      rules={[
                        {
                          required: true,
                          message: 'Missing first URL',
                        },
                      ]}
                    >
                      <Input placeholder="URL" onChange={handleInputChange} />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                      
                  </Space>
                </Col>
              })}
          </Row>
            <Form.Item style={{ width: "200px" }}>
             
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
     
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
}
