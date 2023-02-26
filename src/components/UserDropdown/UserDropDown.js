import React, { useState } from "react";
import { SearchOutlined, SmileFilled } from "@ant-design/icons";
import {
  useHuseFloating,
  useHover,
  useInteractions,
  offset,
  autoUpdateover,
  useFloating,
  safePolygon,
} from "@floating-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
    dispatch(logout());
  };

  return (
    // <div className="flex items-center p-2 bg-orange-600 text-white rounded-2xl cursor-pointer">
    //
    // </div>
    <>
      <div
        className="flex items-center p-2 bg-orange-600 text-white rounded-2xl cursor-pointer"
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
            profile
          </Link>
          <Link
            onClick={handleLogout}
            className="text-xg p-1 hover:text-gray-700"
          >
            Logout
          </Link>
        </div>
      )}
    </>
  );
}
