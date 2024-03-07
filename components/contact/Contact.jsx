"use client"

import React from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='' id='#contact'>
        <h1 className='sm:heading1 heading2 mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r
        from-blue-500 via-yellow-400 to-indigo-400'>Contact</h1>
    <div className='flex gap-1 justify-center items-center'>
       <MdOutlineMarkEmailRead/>
     <p className=''>farquekomar@gmail.com </p>
    </div>

    <div className='flex gap-1 justify-center items-center'>
    <MdOutlinePhoneInTalk/>
    <p> +8801864266100 </p>
    </div>

    <div className='flex justify-center items-center gap-2 text-2xl mt-2 mb-3'>
       <Link href="https://www.linkedin.com/in/omar-farquek-joy" passHref target='_blank'>
          <FaLinkedin/>
      </Link>

      <Link href=" https://github.com/omarfarquek05" passHref target='_blank'>
          <FaGithub/>
      </Link>

      <Link href="https://www.facebook.com/joy.khan.142892" passHref target='_blank'>
          <FaFacebook/>
      </Link>
    </div>
    
    </div>
  )
}

export default Contact