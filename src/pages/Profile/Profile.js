import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseRegis from "../../components/CourseRegis/CourseRegis";
import { infoUserAction } from "../../store/features/UserSlice/UserSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const { informationUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(infoUserAction());
  }, []);

  return (
    <div className="w-[80%] m-auto grid grid-cols-12 mt-10 gap-3 ">
      <div className="col-span-6 border rounded-2xl p-5">
        <div className="font-black text-3xl  capitalize">trang cá nhân</div>
        <div className="text-gray-500 m-2">
          Ho ten: {informationUser?.hoTen}
        </div>
        <div className="text-gray-500 m-2">Email: {informationUser?.email}</div>
        <div className="text-gray-500 m-2">
          Loai nguoi dung: {informationUser?.maLoaiNguoiDung}
        </div>
      </div>
      <div className="col-span-6 rounded-2xl border p-5">
        <div className="font-black text-xl  capitalize">
          Khoá học đang đăng ký
        </div>
        {<CourseRegis id={informationUser?.chiTietKhoaHocGhiDanh} />}
        {/* {informationUser?.chiTietKhoaHocGhiDanh?.map((course) => (
          <>
            <CourseRegis id={course.maKhoaHoc} />
          </>
        ))} */}
      </div>
    </div>
  );
}
