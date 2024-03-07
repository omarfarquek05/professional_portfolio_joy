import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-[16px] leading-[20px] font-normal
     w-full gap-y-10 border-t border-indigo-400  px-20 py-12 max-md:flex-col">

     <div className='flex flex-col'>
    <p className='whitespace-nowrap'>©Copyright 2024 Omar Farquek Joy </p>
    <p className='mt-2'> All Rights Reserved</p>
    </div>

    <div className="flex gap-x-9">
      <Link href="/terms-of-use">Terms & Conditions</Link>
      <Link href="/privacy-policy">Privacy Policy</Link>
    </div>
  </footer>
  )
}

export default Footer