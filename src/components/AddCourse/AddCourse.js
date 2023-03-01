import { Button, DatePicker, Drawer, Form, Input, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryCourseAction,
  addCourseAction,
} from "../../store/features/CourseSlice/CourseSlice";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
const { Option } = Select;

export default function AddCourse() {
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState(false);

  const dispatch = useDispatch();
  const { categoryCourse } = useSelector((state) => state.course);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    const data = { ...values, hinhAnh: values.hinhAnh.file.name, ngayTao: day };
    dispatch(addCourseAction(data));
  };

  const onChange = (date, dateString) => {
    setDay(dayjs(dateString).format("DD/MM/YYYY"));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    dispatch(categoryCourseAction());
  }, []);

  return (
    <div className="my-3">
      <Button onClick={showDrawer}> Them khoa hoc</Button>
      <Drawer
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

          <Form.Item
            label="moTa"
            name="moTa"
            rules={[
              {
                required: true,
                message: "Please input your moTa!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="luotXem"
            name="luotXem"
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
            label="danhGia"
            name="danhGia"
            rules={[
              {
                required: true,
                message: "Please input your danhGia!",
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
              <Option value="gp09">GP09</Option>
              <Option value="gp08">GP08</Option>
              <Option value="gp07">GP07</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="ngayTao"
            name="ngayTao"
            rules={[
              {
                required: true,
                message: "Please input your ngayTao!",
              },
            ]}
          >
            <DatePicker onChange={onChange} />
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
            label="hinhAnh"
            name="hinhAnh"
            rules={[
              {
                required: true,
                message: "Please input your hinhAnh!",
              },
            ]}
          >
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
    </div>
  );
}
