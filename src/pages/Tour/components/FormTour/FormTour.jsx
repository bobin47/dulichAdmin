import { Button, Form, Input } from "antd";
import { createTour, editTour } from "../../../../store/features/tour/tourSlice";

export default function FormTour({ category, dispatch, form, action }) {
  const onFinish = (values) => {
   console.log(values)
    if(action){
        dispatch(createTour(values))
    }else{
        const data = {
            id:values._id,
            body:{
                brief: values.brief,
                content: values.content,
                description: values.description,
                price: values.price,
                title: values.title
            }
        }
        dispatch(editTour(data))
    }
    
  };

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        {action ? null : (
          <Form.Item name="_id" label="id" wrapperCol={{ span: 8 }}>
            <Input disabled />
          </Form.Item>
        )}
        <Form.Item name="title" label="title" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="price" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item name="brief" label="brief" wrapperCol={{ span: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="description"
          wrapperCol={{ span: 8 }}
        >
          <Input />
        </Form.Item>

        <Form.Item name="content" label="content">
          {/* <CustomCKEditor /> */}
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 8 }}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}