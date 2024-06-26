import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import BackButton from '../../components/BackButton'

const ForgotPassword = () => {
  return (
    <>
      <BackButton to='/login' color='black' />
      <div className='flex flex-col items-center gap-6 p-12 mt-14'>
        <LockClosedIcon className='w-16'/>
        <Typography variant='h3' className='font-inter font-black font-semibold'>
          Quên mật khẩu
        </Typography>
        <div className='w-full flex flex-col items-start'>
          <Typography variant='h6' className='font-inter mb-2'>
            Nhập email của bạn
          </Typography>
          <Input label='Email' />
        </div>
        <Link to='/confirm-code' className='w-full'>
          <Button variant='filled' className='w-full bg-purple'>
            Tiếp tục
          </Button>
        </Link>        
        <div className='flex w-full items-start justify-start gap-2'>
          <Typography variant='paragraph'>
            Bạn đã có tài khoản?
          </Typography>
          <Link to='/login'>
            <Typography variant='paragraph' className='text-textBlue'>
              Đăng nhập
            </Typography>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword