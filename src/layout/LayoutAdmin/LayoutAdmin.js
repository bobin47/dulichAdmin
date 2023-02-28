import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function LayoutAdmin({ children }) {
  let activeStyle = {
    color: "#FB923C",
  };
  return (
    <div>
      <Header input={false} />
      <div className=" grid grid-cols-12 ">
        <div className="col-span-1  border-r-2">
          <div className="flex flex-col gap-3 items-center">
            <NavLink
              className="capitalize"
              to="/admin"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              admin
            </NavLink>
            <NavLink
              className="capitalize"
              to="/course"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              course
            </NavLink>
            <NavLink
              className="capitalize"
              to="/user"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              user
            </NavLink>
          </div>
        </div>
        <div className="col-span-11  p-3"> {children}</div>
      </div>

      <Footer />
    </div>
  );
}
