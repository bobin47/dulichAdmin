import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeFilled,
  IdcardFilled,
  BookFilled,
  SwitcherFilled,
} from "@ant-design/icons";
import classNames from "classnames";

export default function Navigate() {
  const user = JSON.parse(localStorage.getItem("user"));
  let activeStyle = {
    backgroundColor: "rgb(229 231 235)",
  };

  return (
    <div className="flex flex-col gap-3 p-3 sticky top-[76px] right-0">
      <NavLink
        to="/"
        className={classNames(
          "flex flex-col items-center py-3  rounded-3xl hover:bg-gray-200 "
        )}
        style={({ isActive }) => {
          return isActive ? activeStyle : null;
        }}
      >
        <HomeFilled className="text-2xl" />
        Home
      </NavLink>
      <NavLink
        to="/lotrinh"
        className={classNames(
          "flex flex-col items-center p-3 rounded-3xl hover:bg-gray-200"
        )}
        style={({ isActive }) => {
          return isActive ? activeStyle : null;
        }}
      >
        <IdcardFilled className="text-2xl" />
        Lo trinh
      </NavLink>
      <NavLink
        to="/learn"
        className={classNames(
          "flex flex-col items-center p-3 rounded-3xl hover:bg-gray-200"
        )}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <BookFilled className="text-2xl" />
        Hoc
      </NavLink>

      {user ? (
        <NavLink
          to="/profile"
          className={classNames(
            "flex flex-col items-center p-3 rounded-3xl hover:bg-gray-200"
          )}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <SwitcherFilled className="text-2xl" />
          Profile
        </NavLink>
      ) : null}
    </div>
  );
}
