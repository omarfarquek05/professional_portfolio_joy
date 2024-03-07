"use client"

import React from 'react'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { formUrlQuery } from '@/lib/utils';


const links = ['All', 'NextJs', 'Frontend', 'Backend', 'Fullstack']

const Filters = () => {
    const [active, setActive] = useState('');
    const searchParms = useSearchParams();
    const router = useRouter();

    const handleFilter = (link) => {
      let newUrl = '';
      
      if(active === link) {
        setActive('');
  
        newUrl = formUrlQuery({
          params: searchParms.toString(),
          keysToRemove: ['category'],
        })
      } else {
        setActive(link);
  
        newUrl = formUrlQuery({
          params: searchParms.toString(),
          key: 'category',
          value: link.toLowerCase(),
        })
      }
      
      router.push(newUrl, { scroll: false });
    }

  return (
    <ul className="body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ?"bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize bg-gradient-to-r from-indigo-600 to-blue-500 text-white`}
        >
          {link}
        </button>
      ))}
    </ul>
  )
}

export default Filters