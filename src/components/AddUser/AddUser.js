import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { addUserAction } from "../../store/features/UserSlice/UserSlice";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
const { Option } = Select;
export default function AddUser(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(addUserAction(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Button onClick={showDrawer} icon={<PlusOutlined />}>
        {props.title}
      </Button>
      <Drawer
        title={props.title}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="hoTen"
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="So Dien Thoai"
            name="soDT"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="maNhom" label="Ma Nhom" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="gp01">GP01</Option>
              <Option value="gp02">GP02</Option>
              <Option value="gp03">GP03</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="maLoaiNguoiDung"
            label="Ma loai nguoi dung"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="HV">Học Viên</Option>
              <Option value="GV">Giáo Vụ</Option>
            </Select>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit" onClick={onClose}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

// export default function AddUser() {
//   return <div>AddUser</div>;
// }
