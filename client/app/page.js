'use client'
import Feed from '@/components/Feed'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import axios from 'axios'
import { useContext, useEffect } from 'react'

import { AppContext } from '@/context/context'

export default function Home() {
  const { user, setUser } = useContext(AppContext)

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
    if (localStorage.getItem('token')) {
      fetchUser()
    } else {
      window.location.href = '/login'
    }
  }, [])

  return (
    <>
      <Navbar fullName={user.name} />
      <div className='md:flex justify-between relative'>
        <Feed />
        <Sidebar user={user} />
      </div>
    </>
  )
}
