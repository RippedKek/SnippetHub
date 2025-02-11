'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/context'
import { useParams } from 'next/navigation'
import UserProfile from '@/components/UserProfile'
import axios from 'axios'

const ProfilePage = () => {
  const { user } = useContext(AppContext)
  const [pageUser, setPageUser] = useState({})
  const params = useParams()

  const fetchUser = async (username) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/users/get-user-profile/${username}`,
        { headers: { token: localStorage.getItem('token') } }
      )
      if (response.data.user) {
        setPageUser(response.data.user)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/login'
    }
    fetchUser(params.username)
  }, [])

  return (
    <>
      <Navbar fullName={user.name} />
      <div className='flex justify-between relative'>
        <UserProfile user={pageUser} />
      </div>
    </>
  )
}

export default ProfilePage
