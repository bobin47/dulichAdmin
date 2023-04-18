import React from "react";
import { SearchOutlined, SmileFilled } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import UserDropDown from "../UserDropdown/UserDropDown";

export default function Header({ input = true }) {
  const isAuth = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex justify-between border-bot border-b-[1px] border-gray-300 p-3 items-center sticky top-0 bg-white z-10">
      <Link to="/" className="font-bold ">
        Học Lập trình để đi làm
      </Link>
      {input ? (
        <div className="border flex justify-start items-center focus:border-black rounded-2xl w-[400px] text-[13px]">
          <SearchOutlined
            twoToneColor="#9AA3B0"
            className="m-2 fill-gray-400"
          />
          <input
            className="w-full border-none outline-none"
            placeholder="Tìm kiếm khoá học"
          ></input>
        </div>
      ) : null}

      {isAuth ? (
        <div className="flex items-center">
          {isAuth.maLoaiNguoiDung !== "HV" ? (
            <NavLink
              to="/admin"
              className="px-5 py-2 font-bold text-sm bg-orange-600 text-white  rounded-3xl cursor-pointer mr-3"
            >
              Admin
            </NavLink>
          ) : null}
          <UserDropDown />
        </div>
      ) : (
        <div>
          <Link
            to="/login"
            className="px-5 py-2 font-bold text-sm bg-orange-600 text-white  rounded-3xl cursor-pointer"
          >
            Đăng nhập
          </Link>
        </div>
      )}
    </div>
  );
}
