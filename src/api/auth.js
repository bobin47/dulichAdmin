import { http } from "./http";

export const registerApi = (body) => {
  return http.post("/QuanLyNguoiDung/DangKy", body);
};

export const loginApi = (body) => {
  return http.post("/QuanLyNguoiDung/DangNhap", body);
};
