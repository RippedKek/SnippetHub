'use client'

import Skills from './Skills'
import { TiPin } from 'react-icons/ti'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { getInitials } from '@/utils/utils'

const Profile = ({ user }) => {
  return (
    <div className='hidden md:flex flex-col sticky top-[118px] w-[80%] max-h-[calc(100vh-118px)] border-x-[12px] border-b-[12px] border-black'>
      <div className='h-[30%] relative'>
        <div
          style={{ backgroundColor: user.color }}
          className='h-[60%] w-full border-b-[12px] border-black'
        >
          {' '}
        </div>
        <div className='w-24 h-24 rounded-full bg-black absolute left-[calc(50%-48px)] top-[25%] text-white font-bold text-5xl flex items-center justify-center'>
          {getInitials(user.name)}
        </div>
      </div>
      <h1 className='self-center font-bold'>@{user.username}</h1>
      <Skills tech={user.technologies} color={user.color} />
      <div className='self-start px-4 text-sm font-bold'>
        <p>{user.job},</p>
        <p>{user.organization},</p>
        <p>
          {user.city}, {user.country}.
        </p>
      </div>
      <div
        style={{ backgroundColor: user.color }}
        className='self-center flex items-center justify-evenly my-3 border-[6px] border-black rounded-2xl w-[85%] text-lg font-bold'
      >
        <span>&lt;/&gt; {user.snippets.length}</span>
        <span className='flex items-center gap-2'>
          <TiPin /> {user.pinned}
        </span>
      </div>
      <div className='self-center flex items-center justify-evenly w-[85%] mt-10'>
        <a href={user.github} target='_blank'>
          <FaGithub size={28} className='cursor-pointer' />
        </a>
        <a href={user.linkedin} target='_blank'>
          <FaLinkedin size={28} className='cursor-pointer' />
        </a>
        <a href={user.facebook} target='_blank'>
          <FaFacebook size={28} className='cursor-pointer' />
        </a>
        <a href={user.instagram} target='_blank'>
          <FaInstagram size={28} className='cursor-pointer' />
        </a>
      </div>
    </div>
  )
}

export default Profile
