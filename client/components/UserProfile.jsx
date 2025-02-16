'use client'

import React, { useContext, useEffect, useState } from 'react'
import LanguageUsage from './LanguageUsage'
import LoadingScreen from './LoadingScreen'
import axios from 'axios'
import Post from './Post'
import { AppContext } from '@/context/context'

const UserProfile = ({ user }) => {
  const [snippets, setSnippets] = useState([])
  const { user: loggedInUser, loading, setLoading } = useContext(AppContext)

  const fetchUserSnippets = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/snippets/get-snippet-by-username/${user.username}`
      )
      setSnippets(response.data.snippets.reverse())
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setLoading(true)
    if (user && user.username) {
      fetchUserSnippets()
    }
    setLoading(false)
  }, [user])

  if (loading) return <LoadingScreen />

  return (
    <div
      className=' w-full pb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
      border-l-[12px] border-r-[12px]  border-black min-h-[calc(100vh-118px)] overflow-y-scroll flex-col md:flex-row justify-between py-10'
    >
      <div className='w-full md:w-1/2 flex flex-col'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-4xl font-bold text-black'>{user.name}</h1>
          {loggedInUser.username !== user.username && (
            <button className='px-6 py-2 rounded-2xl bg-green-500 border-[4px] border-black cursor-pointer font-semibold'>
              follow
            </button>
          )}
        </div>
        <div className='w-full flex flex-col items-start '>
          <h3 className='text-lg font-medium text-[#545454]'>
            @{user.username}
          </h3>
          <h3 className='text-lg font-medium text-black'>
            {user.job}, {user.organization}
          </h3>
          <h3 className='text-lg font-medium text-black'>
            {user.city}, {user.country}
          </h3>
        </div>
        <div className='w-full bg-[#393939] rounded-2xl p-6 flex flex-col mt-10'>
          <p className='text-sm text-white font-light '>
            Total Snippets: {user.totalSnippets}
          </p>
          <p className='text-sm text-white font-light '>
            Pinned Snippets: {user.pinned}
          </p>
          <p className='text-sm text-white font-light mt-4'>
            Top Languages Used:
          </p>
          {user.username && (
            <LanguageUsage
              username={user.username}
              snippetsCount={user.totalSnippets}
            />
          )}
        </div>
      </div>
      <div className='w-full mt-10 md:w-1/2 flex justify-center'>
        <div className='w-fit bg-[#393939] rounded-2xl p-6 pt-0 text-white max-h-[470px] overflow-y-scroll'>
          <h1 className='w-full bg-inherit text-2xl font-bold sticky top-0 pt-6 z-[9998]'>
            Recent Posts
          </h1>
          {snippets.map((snippet) => (
            <Post
              key={snippet._id}
              post={snippet}
              self={loggedInUser.username === user.username ? true : false}
              id={snippet._id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
