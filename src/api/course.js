import { http } from "./http";

export const AllCourseApi = () => {
  return http.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09");
};

export const CategoryCourse = () => {
  return http.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
};
