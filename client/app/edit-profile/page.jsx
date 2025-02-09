'use client'

import EditProfileForm from '@/components/EditProfileForm'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { AppContext } from '@/context/context'
import { useContext, useEffect } from 'react'

const EditProfile = () => {
  const { user } = useContext(AppContext)

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/login'
    }
  }, [])

  return (
    <>
      <Navbar fullName={user.name} />
      <div className='flex justify-between relative'>
        <div className='w-[90%] md:w-[70%] min-h-[calc(100vh-118px)] overflow-y-auto border-l-[12px] flex flex-col gap-5 items-start border-black bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 border-t-0 pb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          <h1 className='text-3xl font-bold text-white mt-5'>Edit Profile</h1>
          <EditProfileForm user={user} />
        </div>
        <Sidebar user={user} />
      </div>
    </>
  )
}

export default EditProfile
