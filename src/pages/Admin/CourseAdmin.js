import React, { useEffect } from "react";
import { Space, Table, Tag, Button, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { allCourseAction } from "../../store/features/CourseSlice/CourseSlice";
import AddCourse from "../../components/AddCourse/AddCourse";

export default function CourseAdmin() {
  const dispatch = useDispatch();
  const { Courses } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(allCourseAction());
  }, [dispatch]);
  console.log(Courses);

  const columns = [
    {
      title: "Ten khoa hoc",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
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
            <Button>Edit</Button>
            <Button type="primary" danger>
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
      <AddCourse />
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
