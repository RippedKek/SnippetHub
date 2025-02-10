'use client'

import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '@/context/context'
import Snippets from '@/components/Snippets'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const MySnippets = () => {
  const { user, loading, setLoading } = useContext(AppContext)

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/login'
    }
  })

  return (
    <>
      <Navbar fullName={user.name} />
      <div className='md:flex justify-between relative'>
        <Snippets />
        <Sidebar user={user} />
      </div>
    </>
  )
}

export default MySnippets
