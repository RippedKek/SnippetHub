'use client'

import { FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiExpress } from 'react-icons/si'

import { ColorContext } from '@/context/context'
import { useContext } from 'react'

const Skills = () => {
  const { color } = useContext(ColorContext)

  return (
    <div
      style={{ backgroundColor: color }}
      className='w-[85%] my-3 flex border-[6px] border-black rounded-2xl px-1 py-2 self-center items-center justify-between'
    >
      <FaReact size={30} />
      <IoLogoJavascript size={30} />
      <FaPython size={30} />
      <SiExpress size={30} />
    </div>
  )
}

export default Skills
