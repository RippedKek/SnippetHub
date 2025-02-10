'use client'

import { useState, useEffect, useContext } from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiDjango,
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si'
import { TwitterPicker } from 'react-color'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { AppContext } from '@/context/context'

const techIcons = [
  { name: 'python', icon: <SiPython size={30} /> },
  { name: 'css', icon: <FaCss3Alt size={30} /> },
  { name: 'javascript', icon: <FaJs size={30} /> },
  { name: 'react', icon: <FaReact size={30} /> },
  { name: 'nodejs', icon: <FaNodeJs size={30} /> },
  { name: 'php', icon: <FaPhp size={30} /> },
  { name: 'aws', icon: <FaAws size={30} /> },
  { name: 'django', icon: <SiDjango size={30} /> },
  { name: 'flutter', icon: <SiFlutter size={30} /> },
  { name: 'firebase', icon: <SiFirebase size={30} /> },
  { name: 'postgresql', icon: <SiPostgresql size={30} /> },
  { name: 'mongodb', icon: <SiMongodb size={30} /> },
  { name: 'mysql', icon: <SiMysql size={30} /> },
  { name: 'nextjs', icon: <SiNextdotjs size={30} /> },
  { name: 'tailwindcss', icon: <SiTailwindcss size={30} /> },
  { name: 'typescript', icon: <SiTypescript size={30} /> },
  { name: 'git', icon: <FaGitAlt size={30} /> },
  { name: 'docker', icon: <FaDocker size={30} /> },
  { name: 'github', icon: <FaGithub size={30} /> },
  { name: 'express', icon: <SiExpress size={30} /> },
]

const EditProfileForm = () => {
  const { user, setUser } = useContext(AppContext)
  const [tempUser, setTempUser] = useState(user)
  const [selectedTechnologies, setSelectedTechnologies] = useState(
    user.technologies || []
  )

  useEffect(() => {
    setTempUser(user)
    setSelectedTechnologies(user.technologies || [])
  }, [user])

  const handleInputChange = (e) => {
    setTempUser({
      ...tempUser,
      [e.target.name]: e.target.value,
    })
  }

  const handleColorChange = (color, event) => {
    setUser({ color: color.hex })
  }
  const toggleTechnology = (techId) => {
    if (selectedTechnologies.includes(techId)) {
      setSelectedTechnologies((prev) => prev.filter((tech) => tech !== techId))
    } else if (selectedTechnologies.length < 4) {
      setSelectedTechnologies((prev) => [...prev, techId])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(
        'http://localhost:8000/users/edit-user',
        {
          tempUser,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      )
      setUser({ ...tempUser, technologies: selectedTechnologies })
      toast.success('Profile edited successfully!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: 'colored',
        transition: Bounce,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
      <form
        onSubmit={handleSubmit}
        className='flex flex-col md:flex-row w-full'
      >
        <div className='w-full md:w-1/2 pr-5'>
          <p className='text-2xl text-white font-bold'>Name</p>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={tempUser.name}
            onChange={handleInputChange}
            className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
          />
          <p className='text-2xl text-white font-bold'>Username</p>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={tempUser.username}
            onChange={handleInputChange}
            className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
          />
          <p className='text-2xl text-white font-bold'>Email</p>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={tempUser.email}
            onChange={handleInputChange}
            className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
          />
          <div className='flex gap-2 items-center justify-between'>
            <div className='flex flex-col'>
              <p className='text-2xl text-white font-bold'>City</p>
              <input
                type='text'
                name='city'
                placeholder='City'
                value={tempUser.city}
                onChange={handleInputChange}
                className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
              />
            </div>
            <div className='flex flex-col'>
              <p className='text-2xl text-white font-bold'>Country</p>
              <input
                type='text'
                name='country'
                placeholder='Country'
                value={tempUser.country}
                onChange={handleInputChange}
                className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
              />
            </div>
          </div>
          <div className='flex gap-2 items-center justify-between'>
            <div className='flex flex-col'>
              <p className='text-2xl text-white font-bold'>Job</p>
              <input
                type='text'
                name='job'
                placeholder='Job'
                value={tempUser.job}
                onChange={handleInputChange}
                className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
              />
            </div>
            <div className='flex flex-col'>
              <p className='text-2xl text-white font-bold'>Organization</p>
              <input
                type='text'
                name='organization'
                placeholder='Organization'
                value={tempUser.organization}
                onChange={handleInputChange}
                className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
              />
            </div>
          </div>
          <div className='flex gap-2 items-center justify-between mt-4'>
            <FaGithub size={32} color='white' />
            <input
              type='text'
              name='github'
              placeholder='Github'
              value={tempUser.github}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
            />
          </div>
          <div className='flex gap-2 items-center justify-between mt-1'>
            <FaLinkedin size={32} color='white' />
            <input
              type='text'
              name='linkedin'
              placeholder='LinkedIn'
              value={tempUser.linkedin}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
            />
          </div>
          <div className='flex gap-2 items-center justify-between mt-1'>
            <FaFacebook size={32} color='white' />
            <input
              type='text'
              name='facebook'
              placeholder='Facebook'
              value={tempUser.facebook}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
            />
          </div>
          <div className='flex gap-2 items-center justify-between mt-1'>
            <FaInstagram size={32} color='white' />
            <input
              type='text'
              name='instagram'
              placeholder='Instagram'
              value={tempUser.instagram}
              onChange={handleInputChange}
              className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 gap-4 mt-5 md:mt-0 md:pl-5 flex flex-col items-start md:items-center'>
          <div className='flex flex-col items-start gap-2'>
            <p className='text-2xl text-white font-bold'>Profile Color</p>
            <TwitterPicker onChangeComplete={handleColorChange} />
          </div>
          <div className='w-full flex flex-col gap-2 md:pl-5 items-start'>
            <p className='text-2xl text-white font-bold'>Technologies</p>
            <div className='w-full bg-white border-[3px] border-black rounded-xl p-4 grid grid-cols-6 place-items-center gap-y-2'>
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className={`relative cursor-pointer p-2 rounded-full ${
                    selectedTechnologies.includes(tech.name)
                      ? 'bg-blue-400'
                      : 'hover:bg-gray-300'
                  }`}
                  onClick={() => toggleTechnology(tech.name)}
                >
                  {tech.icon}
                  {selectedTechnologies.includes(tech.name) && (
                    <div className='absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white'></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            type='submit'
            className='bg-black rounded-lg p-3 mt-16 text-white text-2xl font-bold w-full cursor-pointer'
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </>
  )
}

export default EditProfileForm
