import React, { useEffect, useState } from "react";
import {
  Space,
  Table,
  Button,
  Tag,
  Modal,
  Drawer,
  Form,
  Input,
  Select,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  allUserAction,
  deleteUserAction,
  updateUserAction,
} from "../../store/features/UserSlice/UserSlice";
import AddUser from "../../components/AddUser/AddUser";
const { Option } = Select;
export default function UserAdmin() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const { allUser, isLoading } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    dispatch(allUserAction());
  }, []);

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      filteredValue: [filter],
      onFilter: (value, record) => {
        // console.log(record);
        console.log(value);
        return String(record.taiKhoan)
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Mã loại",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (_, { maLoaiNguoiDung }) => {
        let color = maLoaiNguoiDung.length > 5 ? "geekblue" : "green";
        if (maLoaiNguoiDung === "HV") {
          color = "magenta";
        } else if (maLoaiNguoiDung === "GV") {
          color = "green";
        }

        return (
          <Tag color={color} key={maLoaiNguoiDung}>
            {maLoaiNguoiDung.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (data, record) => {
        return (
          <Space size="small">
            <Button onClick={() => handleEdit(record)}>Edit</Button>
            <Button type="primary" danger onClick={() => handleDelete(record)}>
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  const handleEdit = (data) => {
    console.log(data);
    setOpen(true);
    form.setFieldsValue({
      taiKhoan: data?.taiKhoan,
      matKhau: data?.matKhau,
      hoTen: data?.hoTen,
      soDT: data?.soDt,
      maLoaiNguoiDung: data?.maLoaiNguoiDung,
      maNhom: data?.maNhom,
      email: data?.email,
    });
  };

  const handleDelete = (data) => {
    console.log(data);
    Modal.confirm({
      title: "Bạn có muốn xoá user này",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
        console.log(data.taiKhoan);
        dispatch(deleteUserAction(data.taiKhoan));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onFinish = (values) => {
    console.log(values);
    dispatch(updateUserAction(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const data = allUser;
  // const datas = allUser?.filter((user) => user.taiKhoan === search);

  return (
    <div>
      <div className="text-black font-bold text-3xl mb-3">
        Quản lý người dùng
      </div>
      <div className="flex gap-3">
        <AddUser title={" Thêm người dùng"} />
        {/* <Button
        onClick={showDrawer}
        className="bg-blue-500 text-white hover:text-white"
      >
        Thêm người dùng
      </Button> */}
        <Input.Search className="w-[50%]" onChange={(e)=>{
          setFilter(e.target.value)
        }}/>
      </div>
      <Table
        className="mt-3"
        loading={isLoading}
        columns={columns}
        dataSource={allUser}
        pagination={{ position: ["bottomCenter"] }}
      />

      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
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
            label="Name"
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

          <Form.Item label="SDT" name="soDT">
            <Input />
          </Form.Item>

          <Form.Item
            label="Type"
            name="maLoaiNguoiDung"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="HV">Hoc vien</Option>
              <Option value="GV">Giao vien</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Loai"
            name="maNhom"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="GP01">GP01</Option>
              <Option value="GP02">GP02</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
