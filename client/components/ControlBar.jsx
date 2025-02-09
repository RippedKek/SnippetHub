'use client'

import Link from 'next/link'
import { FaUser, FaPencilAlt, FaHome, FaUserEdit } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { TiPin } from 'react-icons/ti'
import { MdMenu } from 'react-icons/md'
import { useState } from 'react'

const ControlBar = () => {
  const [isMenu, setIsMenu] = useState(false)

  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <div className='w-[20%] sticky top-[118px] flex flex-col items-center gap-5 max-h-[calc(100vh-118px)] pt-5 bg-cyan-500 text-white'>
      <MdMenu size={32} className='cursor-pointer menu' onClick={toggleMenu} />
      <div
        className={`flex flex-col justify-start items-center gap-5 transition-transform duration-300 ease-in-out transform ${
          isMenu ? 'translate-x-0' : 'translate-x-16'
        }`}
      >
        <TiPin size={32} className='cursor-pointer' />
        <FaUser size={32} className='cursor-pointer' />
        <Link href='/edit-profile'><FaUserEdit size={32} className='cursor-pointer' /></Link>
        <Link href='/create-snippet'>
          <FaPencilAlt size={32} className='cursor-pointer' />
        </Link>
        <Link href='/'>
          <FaHome size={32} className='cursor-pointer' />
        </Link>
        <FaMessage size={32} className='cursor-pointer' />
      </div>
    </div>
  )
}

export default ControlBar
