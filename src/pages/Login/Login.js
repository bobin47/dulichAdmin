import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { schemaLogin } from "../../utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input/Input";
import { loginAccount } from "../../store/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

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

          <div className="mt-6">
            <button className="w-full bg-orange-400 text-white p-3">
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
