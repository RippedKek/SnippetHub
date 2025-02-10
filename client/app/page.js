'use client'
import Feed from '@/components/Feed'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import axios from 'axios'
import { useContext, useEffect } from 'react'

import { AppContext } from '@/context/context'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const { user, setUser, loading, setLoading } = useContext(AppContext)

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
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    if (localStorage.getItem('token')) {
      fetchUser()
    } else {
      window.location.href = '/login'
    }
  }, [setUser, setLoading])

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Navbar fullName={user.name} />
      <div className='flex justify-between relative'>
        <Feed />
        <Sidebar user={user} />
      </div>
    </>
  )
}
