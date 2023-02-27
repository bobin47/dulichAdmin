import useSelection from "antd/es/table/hooks/useSelection";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  detailCourseAction,
  registerCourseAction,
} from "../../store/features/CourseSlice/CourseSlice";
import { ToastContainer, toast } from "react-toastify";

export default function Detail() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { detail } = useSelector((state) => state.course);
  console.log(detail);
  useEffect(() => {
    dispatch(detailCourseAction(id));
  }, []);

  const handleRegisterCourse = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      toast.error("Hãy đăng nhập rồi đăng ký nè");
    }
    const data = {
      maKhoaHoc: id,
      taiKhoan: user.taiKhoan,
    };
    dispatch(registerCourseAction(data));
  };

  return (
    <div>
      <div className="grid grid-cols-12 p-10 gap-4">
        <div className="col-span-8 bg-red">
          <div className="text-3xl font-bold capitalize">
            {detail?.tenKhoaHoc}
          </div>
          <div className="py-3 text-gray-500">{detail?.moTa}</div>
          <div className="text-xl font-bold">Giáo Viên</div>
          <div className="py p-2 text-gray-500">
            Tên Giáo viên:
            {detail?.nguoiTao?.hoTen}
          </div>
        </div>
        <div className="col-span-4">
          <img
            alt=""
            src={detail?.hinhAnh}
            width={360}
            height={500}
            className="border rounded-3xl"
          />

          <button
            onClick={handleRegisterCourse}
            className="text-white bg-orange-500 p-2 rounded-3xl uppercase my-4 text-center flex items-center"
          >
            Đăng ký khoá học
          </button>
        </div>
      </div>
      {/* {detail && (
        <div className="grid grid-cols-12 p-10 gap-4">
          <div className="col-span-8 bg-red">
            <div className="text-3xl font-bold capitalize">
              {detail?.tenKhoaHoc}
            </div>
            <div className="py-3 text-gray-500">{detail?.moTa}</div>
            <div className="text-xl font-bold">Giáo Viên</div>
            <div className="py p-2 text-gray-500">
              Tên Giáo viên:
              {detail?.nguoiTao.hoTen}
            </div>
          </div>
          <div className="col-span-4">
            <img
              alt=""
              src={detail?.hinhAnh}
              width={360}
              height={500}
              className="border rounded-3xl"
            />

            <button className="text-white bg-orange-500 p-2 rounded-3xl uppercase my-4 text-center flex items-center">
              Đăng ký khoá học
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
