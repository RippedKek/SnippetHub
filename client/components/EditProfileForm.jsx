'use client'

import { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { TwitterPicker } from 'react-color'

const EditProfileForm = ({ user }) => {
  const [tempUser, setTempUser] = useState(user)
  const [textColor, setTextColor] = useState('#fff')

  useEffect(() => {
    setTempUser(user)
  }, [user])

  const handleInputChange = (e) => {
    setTempUser({
      ...tempUser,
      [e.target.name]: e.target.value,
    })
  }

  const handleColorChange = (color, event) => {
    setTextColor(color.hex)
  }

  return (
    <form className='flex w-full'>
      <div className='w-1/2 pr-5'>
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
            value=''
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
            value=''
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
            value=''
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
            value=''
            onChange={handleInputChange}
            className='mt-1 p-2 w-full rounded-xl outline-none bg-black/20 focus:outline-white focus:outline-2 text-white font-bold text-lg'
          />
        </div>
      </div>
      <div className='w-1/2 pl-5 flex flex-col items-center'>
        <div className='flex flex-col items-start gap-2'>
          <p className='text-2xl text-white font-bold'>Profile Color</p>
          <TwitterPicker onChangeComplete={handleColorChange} />
        </div>
        <button
          type='submit'
          className='bg-black rounded-lg p-3 mt-16 text-white text-2xl font-bold w-full cursor-pointer'
        >
          SAVE CHANGES
        </button>
      </div>
    </form>
  )
}

export default EditProfileForm
