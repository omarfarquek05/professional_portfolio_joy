import React from 'react';
import { skills, icons } from '@/constants';
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <>
      <div className='flex mx-auto justify-center py-1' id="skills">
        <h1 className='h1-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500
         via-yellow-400 to-indigo-400'> Skills</h1>
      </div>
     
      <div className="w-full my-4">
        <Marquee
          gradient={false}
          speed={70}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {skills.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center 
            transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] 
            cursor-pointer" key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] 
              shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent
                    via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6 ">
                  <div className="h-8 sm:h-10 ">
                    {/* Display only one icon per skill */}
                    {icons[id] && <div className='text-4xl text-white'>{icons[id]}</div>}
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  )
}

export default Skills;
