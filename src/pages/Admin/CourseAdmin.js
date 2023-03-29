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
  Image,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import {
  allCourseAction,
  deleteCourseAction,
  updateCourseAction,
} from "../../store/features/CourseSlice/CourseSlice";
import AddCourse from "../../components/AddCourse/AddCourse";
const { Option } = Select;

export default function CourseAdmin() {
  const dispatch = useDispatch();
  const { Courses, categoryCourse } = useSelector((state) => state.course);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const [form] = Form.useForm();
  useEffect(() => {
    dispatch(allCourseAction());
  }, [dispatch]);

  const handleDelete = (value) => {
    Modal.confirm({
      title: "Bạn có muốn xoá user này",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
        console.log(value);
        dispatch(deleteCourseAction(value));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleEdit = (data) => {
    console.log("data", data);
    setOpen(true);
    form.setFieldsValue({
      maKhoaHoc: data.maKhoaHoc,
      biDanh: data.biDanh,
      tenKhoaHoc: data.tenKhoaHoc,
      moTa: data.moTa,
      luotXem: data.luotXem,
      danhGia: data.danhGia,
      hinhAnh: data.hinhAnh,
      maNhom: data.maNhom,
      ngayTao: data.ngayTao,
      maDanhMucKhoaHoc: data.maDanhMucKhoaHoc,
      taiKhoanNguoiTao: data.taiKhoanNguoiTao,
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log(values);
    dispatch(updateCourseAction(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const columns = [
    {
      title: "Ten khoa hoc",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
      filteredValue: [filter],
      onFilter: (value, record) => {
        // console.log(record);
        console.log(value)
        return String(record.tenKhoaHoc).toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      title: "ma khoa hoc",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
    },
    {
      title: "luot xem",
      dataIndex: "luotXem",
      key: "luotXem",
    },
    {
      title: "hoc vien",
      dataIndex: "soLuongHocVien",
      key: "soLuongHocVien",
    },
    {
      title: "hinh anh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (data, record) => {
        return <Image src={data} width={40} height={40} />;
      },
    },
    {
      title: "Mo ta",
      dataIndex: "moTa",
      key: "moTa",
    },
    {
      title: "Ngay tao",
      dataIndex: "ngayTao",
      key: "ngayTao",
    },

    {
      title: "Action",
      key: "action",
      render: (data, record) => {
        return (
          <Space size="small">
            <Button onClick={() => handleEdit(record)}>Edit</Button>
            <Button
              type="primary"
              danger
              onClick={() => handleDelete(record.maKhoaHoc)}
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  const data = Courses;

  return (
    <div>
      <div className="text-black font-bold text-3xl mb-3">Quản lý Khoa hoc</div>
      <div className="w-[50%] flex items-center gap-3">
        <AddCourse />
        <Input.Search onChange={(e)=>{
          setFilter(e.target.value)
        }}/>
      </div>
      <Table columns={columns} dataSource={data} />
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
            label="maKhoaHoc"
            name="maKhoaHoc"
            rules={[
              {
                required: true,
                message: "Please input your maKhoaHoc!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="biDanh"
            name="biDanh"
            rules={[
              {
                required: true,
                message: "Please input your biDanh!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="tenKhoaHoc"
            name="tenKhoaHoc"
            rules={[
              {
                required: true,
                message: "Please input your tenKhoaHoc!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="moTa" name="moTa">
            <Input />
          </Form.Item>

          <Form.Item label="luotXem" name="luotXem">
            <Input />
          </Form.Item>

          <Form.Item label="danhGia" name="danhGia">
            <Input />
          </Form.Item>

          <Form.Item label="ngayTao" name="ngayTao">
            <Input />
          </Form.Item>

          <Form.Item
            name="maDanhMucKhoaHoc"
            label="maDanhMucKhoaHoc"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              {categoryCourse?.map((category) => {
                return (
                  <Option value={category.maDanhMuc}>
                    {category.maDanhMuc}
                  </Option>
                );
              })}
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
              <Option value="GP09">GP09</Option>
              <Option value="GP08">GP08</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="hinhAnh"
            name="hinhAnh"
            rules={[
              {
                required: true,
                message: "Please input your hinhAnh!",
              },
            ]}
          >
            {/* <Input /> */}

            <Upload
              name="hinhAnh"
              accept=".png,.jpg,.doc"
              multiple
              action={"http://localhost:3000"}
              listType="picture"
              showUploadList={{ showRemoveIcon: true }}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="taiKhoanNguoiTao"
            name="taiKhoanNguoiTao"
            rules={[
              {
                required: true,
                message: "Please input your taiKhoanNguoiTao!",
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
