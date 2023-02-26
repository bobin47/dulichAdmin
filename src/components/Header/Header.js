import React from "react";
import { SearchOutlined, SmileFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import UserDropDown from "../UserDropdown/UserDropDown";

export default function Header() {
  const isAuth = window.localStorage.getItem("user");
  console.log(isAuth);
  return (
    <div className="flex justify-between border-bot border-b-2 border-gray-300 p-4 items-center">
      <div className="font-bold ">Học Lập trình để đi làm</div>
      <div className="border border-gray-400 flex justify-start items-center focus:border-black p-1 rounded-3xl w-[400px]">
        <SearchOutlined twoToneColor="#9AA3B0" className="m-2 fill-gray-400" />
        <input
          className="w-full border-none outline-none"
          placeholder="Tìm kiếm khoá học"
        ></input>
      </div>
      {isAuth ? (
        <UserDropDown />
      ) : (
        <div>
          <Link
            to="/login"
            className="px-6 py-2  bg-orange-600 text-white rounded-2xl cursor-pointer"
          >
            Đăng nhập
          </Link>
        </div>
      )}
    </div>
  );
}
