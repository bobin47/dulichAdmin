import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { rules } from '../../utils/rules';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className='flex justify-center'>
      <div className='w-[700px] h-[750px] m-20 '>
        <form
          action=''
          onSubmit={handleRegister}
          className='bg-white rounded-[12px] p-10 shadow-2xl'
        >
          <div className='text-center text-[30px]'>Đăng Nhập</div>
          <div className='mt-6'>
            <input
              type='text'
              className='w-full p-3 border shadow-sm border-gray-300 focus:border-gray-500 rounded-sm'
              placeholder='Tài khoảng'
              {...register('taiKhoan', rules.taikhoan)}
            />
            <div className='text-red-600'>{errors.taiKhoan?.message}</div>
          </div>

          <div className='mt-6'>
            <input
              type='password'
              className='w-full p-3 border shadow-sm border-gray-300 focus:border-gray-500 rounded-sm'
              placeholder='Mật khẩu'
              {...register('matKhau', rules.password)}
            />
            <div className='text-red-600'>{errors.matKhau?.message}</div>
          </div>

          <div className='mt-6'>
            <button className='w-full bg-orange-400 text-white p-3'>
              Đăng Nhập
            </button>
          </div>
          <div className='mt-6 text-gray-300'>
            ban chua co tai khoan?
            <span>
              <Link to='/register' className='text-orange-600'>
                đăng ký
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
