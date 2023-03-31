import { http } from "./http";

export const AllCourseApi = () => {
  return http.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09");
};

export const CategoryCourse = () => {
  return http.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
};

export const DetailCourseApi = (id) => {
  return http.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`);
};

export const RegisterCourseApi = (data) => {
  return http.post("/QuanLyKhoaHoc/DangKyKhoaHoc", data);
};

export const addCourseApi = (data) => {
  return http.post("/QuanLyKhoaHoc/ThemKhoaHoc", data);
};

export const imgCourseApi = (data) => {
  return http.post("/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", data);
};

export const deleteCourseApi = (data) => {
  return http.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${data}`);
};

export const updateCourseApi = (data) => {
  return http.put("/QuanLyKhoaHoc/CapNhatKhoaHoc", data);
};

export const listUserNotAccept = (data) =>{
  return http.post(
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",data
  );
}

export const listUserAccept = (data) => {
  return http.post(
    "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",
    data
  );
};

export const GhiDanh = (data) => {
  return http.post("/QuanLyKhoaHoc/GhiDanhKhoaHoc", data);
};

export const HuyGhiDanh = (data) => {
  return http.post("/QuanLyKhoaHoc/HuyGhiDanh", data);
};

