import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { TiPin } from 'react-icons/ti'
import { FaUserEdit } from 'react-icons/fa'

const ControlBar = () => {
  return (
    <div className='w-[20%] sticky top-[118px] max-h-[calc(100vh-118px)] flex flex-col justify-start items-center pt-5 gap-5 border-b-[12px] border-black'>
      <TiPin size={32} className='cursor-pointer' />
      <FaUser size={32} className='cursor-pointer' />
      <FaUserEdit size={32} className='cursor-pointer' />
      <Link href='/create-snippet'>
        <FaPencilAlt size={32} className='cursor-pointer' />
      </Link>
      <Link href='/'>
        <FaHome size={32} className='cursor-pointer' />
      </Link>
      <FaMessage size={32} className='cursor-pointer' />
    </div>
  )
}

export default ControlBar
