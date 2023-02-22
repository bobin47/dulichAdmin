import React from 'react';

export default function Input({
  className,
  type,
  placeholder,
  register,
  name,
  errorMessage,
}) {
  return (
    <div className={className}>
      <input
        type={type}
        className='w-full p-3 border shadow-sm border-gray-300 focus:border-gray-500 rounded-sm'
        placeholder={placeholder}
        {...register(name)}
      />
      <div className='text-red-600'>{errorMessage}</div>
    </div>
  );
}
