'use client'

import { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import axios from 'axios'
import Post from './Post'

const Feed = () => {
  const [loading, setLoading] = useState(true)
  const [snippets, setSnippets] = useState([])

  const fetchSnippets = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/snippets/get-snippets'
      )
      if (response.data) {
        setLoading(false)
        setSnippets(response.data.snippets)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchSnippets()
  }, [])

  return (
    <div className='w-[70%] pb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 grid grid-cols-1 lg:grid-cols-2 md:w-full bg-body border-[12px] border-t-0 border-black min-h-[calc(100vh-118px)] overflow-y-scroll'>
      {loading ? (
        <div className='flex justify-center items-center w-full min-h-[calc(100vh-118px)]'>
          <HashLoader
            color='#000'
            loading={loading}
            size={70}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      ) : (
        snippets.map((item, index) => {
          return <Post key={index} post={item} />
        })
      )}
    </div>
  )
}

export default Feed
