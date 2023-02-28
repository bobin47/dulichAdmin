import { http } from "./http";

export const infoUserApi = () => {
  return http.post(`/QuanLyNguoiDung/ThongTinNguoiDung`);
};

export const allUserApi = () => {
  return http.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
};

export const deleteUserApi = (data) => {
  return http.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data}`);
};
