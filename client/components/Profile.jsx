import Skills from './Skills'
import { TiPin } from 'react-icons/ti'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className='flex flex-col sticky top-[118px] w-[80%] max-h-[calc(100vh-118px)] border-x-[12px] border-b-[12px] border-black'>
      <div className='h-[30%] relative'>
        <div className='h-[60%] w-full bg-profile border-b-[12px] border-black'>
          {' '}
        </div>
        <div className='w-24 h-24 rounded-full bg-black absolute left-[calc(50%-48px)] top-[25%] text-white font-bold text-5xl flex items-center justify-center'>
          TM
        </div>
      </div>
      <h1 className='self-center font-bold'>@rippedkek</h1>
      <Skills />
      <div className='self-start px-4 text-sm font-bold'>
        <p>Student,</p>
        <p>Islamic University of Technology,</p>
        <p>Dhaka, Bangladesh.</p>
      </div>
      <div className='self-center flex items-center justify-evenly my-3 border-[6px] border-black rounded-2xl bg-profile w-[85%] text-lg font-bold'>
        <span>&lt;/&gt; 52</span>
        <span className='flex items-center gap-2'>
          <TiPin /> 14
        </span>
      </div>
      <div className='self-center flex items-center justify-evenly w-[85%] mt-10'>
        <FaGithub size={28} className='cursor-pointer' />
        <FaLinkedin size={28} className='cursor-pointer' />
        <FaFacebook size={28} className='cursor-pointer' />
        <FaInstagram size={28} className='cursor-pointer' />
      </div>
    </div>
  )
}

export default Profile
