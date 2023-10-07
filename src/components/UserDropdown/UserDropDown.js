import React, { useState } from "react";
import { SearchOutlined, SmileFilled } from "@ant-design/icons";
import {
  useHover,
  useInteractions,
  useFloating,
  safePolygon,
} from "@floating-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/features/auth/authSlice";

export default function UserDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("user"));

  const { strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context, {
    handleClose: safePolygon({
      restMs: 50,
    }),
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    // document.location.assign("/login")
  };

  return (
    <>
      <div
        className="flex items-center px-5 py-2 font-bold text-sm bg-orange-600 text-white  rounded-3xl cursor-pointer"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <div className="pr-2 capitalize">{data.hoTen}</div>
        <SmileFilled />
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: 60,
            right: 40,
          }}
          {...getFloatingProps()}
          className="p-3 bg-white z-30 text-gray-500 flex flex-col capitalize shadow-2xl border-solid border-2 border-gray-100 rounded-md "
        >
          <Link to="/profile" className="text-lg p-1 hover:text-gray-700">
            Cá Nhân
          </Link>
          <Link
            onClick={handleLogout}
            className="text-xg p-1 hover:text-gray-700"
          >
            Đăng Xuất
          </Link>
        </div>
      )}
    </>
  );
}
