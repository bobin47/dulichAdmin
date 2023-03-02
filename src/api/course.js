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
