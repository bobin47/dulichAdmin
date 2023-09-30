import { Button, Form, Input } from "antd";

export default function FormTour({ category, dispatch, form, action }) {
  const onFinish = (values) => {
    console.log(values);
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

        {/* <Form.Item name="content" label="content">
          <CustomCKEditor />
        </Form.Item> */}
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