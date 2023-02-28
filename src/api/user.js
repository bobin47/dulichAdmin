import { http } from "./http";

export const infoUserApi = () => {
  return http.post(`QuanLyNguoiDung/ThongTinNguoiDung`);
};
