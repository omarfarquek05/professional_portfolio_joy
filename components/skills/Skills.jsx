import React from 'react'
import { skills } from '@/constants'
import { Button } from '../ui/button'

const Skills = () => {
  return (
    <>
    <div className='flex mx-auto justify-center py-1'  id="skills">
       <h1 className='h1-bold text-transparent bg-clip-text bg-gradient-to-r
       from-blue-500 via-yellow-400 to-indigo-400'> Skills</h1>
    </div>
    <div className='flex flex-row gap-3 flex-wrap flex-center transition delay-150 duration-300 ease-in-out  mb-[20px]'>
    {skills.map((skill)=> {
        return (
           
            <Button key={skill.id} className='w-auto sm:w-1/2  lg:w-1/6'>
             {skill}
            </Button>
            
            
        )
    })
    }
    </div>

    </>

  )
}

export default Skills