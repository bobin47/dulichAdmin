export const rules = {
  taikhoan: {
    required: {
      value: true,
      message: 'tai khoang la bat buoc',
    },
  },
  password: {
    required: { value: true, message: 'mat khua la bat buoc' },
  },
  name: {
    required: { value: true, message: 'ho ten la bat buoc' },
  },
  SDT: {
    required: { value: true, message: 'ho ten la bat buoc' },
  },
  MaNhom: {
    required: { value: true, message: 'ho ten la bat buoc' },
  },
  email: {
    required: { value: true, message: 'email la bat buoc' },
    pattern: {
      value: /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,9})/,
      message: 'email k dung dinh dang',
    },
  },
};
