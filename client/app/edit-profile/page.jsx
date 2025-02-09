'use client'

import EditProfileForm from '@/components/EditProfileForm'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import axios from 'axios'
import { useEffect, useState } from 'react'

const EditProfile = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    city: '',
    country: '',
    job: '',
    country: '',
    technologies: [],
  })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/users/get-user',
          {
            headers: {
              token: localStorage.getItem('token'),
            },
          }
        )
        setUser(response.data.user)
      } catch (err) {
        console.log(err)
      }
    }

    fetchUser()
  }, [])

  return (
    <>
      <Navbar fullName={user.name} />
      <div className='md:flex justify-between relative'>
        <div className='w-[70%] min-h-[calc(100vh-118px)] overflow-y-auto border-l-[12px] flex flex-col gap-5 items-start border-black bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 border-t-0 pb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          <h1 className='text-3xl font-bold text-white mt-5'>Edit Profile</h1>
          <EditProfileForm user={user} />
        </div>
        <Sidebar user={user} />
      </div>
    </>
  )
}

export default EditProfile
