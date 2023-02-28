import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { schemaLogin } from "../../utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input/Input";
import { loginAccount } from "../../store/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Spin } from "antd";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, messError, isLoading } = useSelector(
    (state) => state.auth
  );

  console.log(isAuthenticated, messError, isLoading);

  const data = localStorage.getItem("user");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  useEffect(() => {
    console.log("hihi");
    if (data) {
      navigate("/");
    }
    toast.error(messError);
    console.log(messError);
  }, [messError, data, navigate]);

  const handleRegister = handleSubmit((data) => {
    console.log(data);
    dispatch(loginAccount(data));
  });

  return (
    <div className="flex justify-center">
      <div className="w-[700px] h-[750px] m-20 ">
        <form
          action=""
          onSubmit={handleRegister}
          className="bg-white rounded-[12px] p-10 shadow-2xl"
        >
          <div className="text-center text-[30px]">Đăng Nhập</div>
          <Input
            className={"mt-6"}
            type="text"
            placeholder="Tài khoảng"
            register={register}
            name="taiKhoan"
            errorMessage={errors.taiKhoan?.message}
          />

          <Input
            className={"mt-6"}
            type="password"
            placeholder="Mật khẩu"
            register={register}
            name="matKhau"
            errorMessage={errors.matKhau?.message}
          />

          <div className="mt-6 flex">
            <button
              className="w-full bg-orange-400 text-white p-3 "
              disabled={isLoading ? true : false}
            >
              {isLoading ? <Spin className="mr-3" size="small" /> : null}
              Đăng Nhập
            </button>
          </div>
          <div className="mt-6 text-gray-300">
            ban chua co tai khoan?
            <span>
              <Link to="/register" className="text-orange-600">
                đăng ký
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
