import { FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiExpress } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='w-[85%] my-3 flex border-[6px] border-black bg-profile rounded-2xl px-1 py-2 self-center items-center justify-between'>
      <FaReact size={30} />
      <IoLogoJavascript size={30} />
      <FaPython size={30} />
      <SiExpress size={30} />
    </div>
  )
}

export default Skills
