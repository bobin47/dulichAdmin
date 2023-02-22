import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { schemaRegister } from '../../utils/rules';
import Input from '../../components/Input/Input';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });
  const handleRegister = handleSubmit(
    (data) => {
      console.log(data);
      console.log('hihi');
    },
    (data) => {
      console.log(data);
    }
  );

  return (
    <div className='flex justify-center'>
      <div className='w-[700px] h-[750px] m-10 '>
        <form
          action=''
          onSubmit={handleRegister}
          className='bg-white rounded-[12px] p-10 shadow-2xl'
        >
          <div className='text-center text-[30px]'>Đăng ký</div>
          <Input
            className={'mt-6'}
            type='text'
            placeholder='Tài khoảng'
            register={register}
            name='taiKhoan'
            errorMessage={errors.taiKhoan?.message}
          />

          <Input
            className={'mt-6'}
            type='password'
            placeholder='Mật khẩu'
            register={register}
            name='matKhau'
            errorMessage={errors.matKhau?.message}
          />

          <Input
            className={'mt-6'}
            type='text'
            placeholder='Họ tên'
            register={register}
            name='hoTen'
            errorMessage={errors.hoTen?.message}
          />

          <Input
            className={'mt-6'}
            type='text'
            placeholder='SDT'
            register={register}
            name='soDT'
            errorMessage={errors.soDT?.message}
          />

          <Input
            className={'mt-6'}
            type='text'
            placeholder='Ma Nhom'
            register={register}
            name='maNhom'
            errorMessage={errors.maNhom?.message}
          />

          <Input
            className={'mt-6'}
            type='text'
            placeholder='email'
            register={register}
            name='email'
            errorMessage={errors.email?.message}
          />

          <div className='mt-6'>
            <button
              type='submit'
              className='w-full bg-orange-400 text-white p-3'
            >
              Đăng ký
            </button>
          </div>

          <div className='mt-6 text-gray-500'>
            Bạn đã có tài khoản?{' '}
            <span>
              <Link to='/login' className='text-orange-600'>
                đăng nhập
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
