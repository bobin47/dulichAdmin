import React, { useEffect, useState } from "react";
import { Space, Table, Button, Tag, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  allUserAction,
  deleteUserAction,
} from "../../store/features/UserSlice/UserSlice";

export default function UserAdmin() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const { allUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(allUserAction());
  }, []);

  const handleEdit = (data) => {
    console.log(data);
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

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
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
            <Button block onClick={() => handleEdit(record)}>
              Edit
            </Button>
            <Button type="primary" danger onClick={() => handleDelete(record)}>
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  const data = allUser;
  const datas = allUser?.filter((user) => user.taiKhoan === search);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
      <Table
        columns={columns}
        dataSource={search ? datas : data}
        pagination={{ position: ["bottomCenter"] }}
      />
    </div>
  );
}
