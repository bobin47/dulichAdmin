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
