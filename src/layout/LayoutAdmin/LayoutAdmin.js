import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {FaBook,FaUser} from 'react-icons/fa'
import { AiFillAppstore } from "react-icons/ai";

export default function LayoutAdmin({ children }) {
  let activeStyle = {
    color: "white",
  };
  return (
    <div>
      <Header input={false} />
      <div className=" grid grid-cols-12 ">
        <div className="col-span-1 border-r-2 bg-[#22222A] ">
          <div className="flex flex-col gap-3 items-start text-gray-600 sticky top-[76px] right-0">
            <NavLink
              className="capitalize  text-[15px] pl-1  py-1 flex justify-center items-center gap-5 rounded-md"
              to="/admin"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <AiFillAppstore/>
             admin
              
            </NavLink>
            <NavLink
              className="capitalize   text-[15px] pl-1  py-1 flex  justify-center items-center gap-5 rounded-md"
              to="/course"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <FaBook/> course
            </NavLink>
            <NavLink
              className="capitalize  text-[15px] pl-1  py-1 flex justify-center items-center gap-5 rounded-md "
              to="/user"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
             <FaUser/> user
            </NavLink>
          </div>
        </div>
        <div className="col-span-11  p-3"> {children}</div>
      </div>

      <Footer />
    </div>
  );
}
