import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import { editDataHeader } from '../../../../store/features/DataHeader/dataHeader';

export default function FormDataHeader({ dispatch, form }) {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
        dispatch(editDataHeader(values))

    };
  return (
      <Form
        form={form}
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }}
        autoComplete="off"
      >
          <Form.List name="listURL">
              {(fields, { add, remove }) => (
                  <>
                      {fields.map(({ key, name, ...restField }) => (
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
                                    style={{width:"400px"}}
                                  name={[name]}
                                  rules={[
                                      {
                                          required: true,
                                          message: 'Missing first URL',
                                      },
                                  ]}
                              >
                                  <Input placeholder="URL" />
                              </Form.Item>
                          
                              <MinusCircleOutlined onClick={() => remove(name)} />
                          </Space>
                      ))}
                      <Form.Item>
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
  )
}
