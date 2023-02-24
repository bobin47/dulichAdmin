import * as yup from "yup";
export const rules = {
  taikhoan: {
    required: {
      value: true,
      message: "tai khoang la bat buoc",
    },
  },
  password: {
    required: { value: true, message: "mat khua la bat buoc" },
  },
  name: {
    required: { value: true, message: "ho ten la bat buoc" },
  },
  SDT: {
    required: { value: true, message: "ho ten la bat buoc" },
  },
  MaNhom: {
    required: { value: true, message: "ho ten la bat buoc" },
  },
  email: {
    required: { value: true, message: "email la bat buoc" },
    pattern: {
      value: /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,9})/,
      message: "email k dung dinh dang",
    },
  },
};

export const schemaLogin = yup.object({
  taiKhoan: yup
    .string()
    .required("tai khoan la bat buoc")
    .min(6, "tren 6 ky tu"),
  matKhau: yup.string().required("mat khau la bat buoc").min(6, "tren 6 ky tu"),
});

export const schemaRegister = yup.object({
  taiKhoan: yup
    .string()
    .required("tai khoan la bat buoc")
    .min(6, "tren 6 ky tu"),
  matKhau: yup.string().required("mat khau la bat buoc").min(6, "tren 6 ky tu"),
  hoTen: yup.string().required("ho ten la bat buoc"),
  SDT: yup.number(),
  maNhom: yup.string().required("Ma nhom la bat  buoc"),
  email: yup
    .string()
    .required("email la bat buoc")
    .email("Khong dung dinh  dang email"),
});
