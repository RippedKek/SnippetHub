'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { IoIosEye } from 'react-icons/io'
import { IoIosEyeOff } from 'react-icons/io'
import axios from 'axios'

const LoginPage = () => {
  const [title, setTitle] = useState('')
  const [loginCred, setLoginCred] = useState({ email: '', password: '' })
  const [isConcealed, setIsConcealed] = useState(true)
  const fullTitle = 'Log into <SnippetHub/>'

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setTitle(fullTitle.slice(0, currentIndex + 1))
        currentIndex += 1
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginCred((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/users/login',
        loginCred
      )
      if (response.data.message) {
        throw new Error(response.data.message)
      }
      localStorage.setItem('token', response.data.token)
      window.location.href = '/'
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-900'>
      {/* Title with typing animation */}
      <h1 className='text-3xl font-bold mb-8 text-green-400 font-mono animate-blink'>
        {title}
      </h1>

      <form
        className='flex flex-col items-center space-y-6 w-80'
        onSubmit={handleSubmit}
      >
        {/* Email input */}
        <input
          type='text'
          placeholder='Email'
          onChange={handleChange}
          name='email'
          className='w-full p-3 bg-gray-800 text-white font-mono rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 border border-gray-700 placeholder-gray-400'
        />

        {/* Password input */}
        <div className='w-full flex items-center justify-between relative'>
          <input
            type={isConcealed ? 'password' : 'text'}
            placeholder='Password'
            onChange={handleChange}
            name='password'
            className={`w-full p-3 text-white font-mono rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 border border-gray-700 placeholder-gray-400 ${
              isConcealed ? 'bg-gray-800' : 'bg-green-500'
            }`}
          />
          {isConcealed ? (
            <IoIosEyeOff
              onClick={() => setIsConcealed((prev) => !prev)}
              size={20}
              className='absolute right-3 text-green-500 cursor-pointer'
            />
          ) : (
            <IoIosEye
              onClick={() => setIsConcealed((prev) => !prev)}
              size={20}
              className='absolute right-3 text-white cursor-pointer'
            />
          )}
        </div>

        {/* Submit button */}
        <button
          type='submit'
          className='w-full p-3 bg-green-500 text-white font-mono rounded-lg hover:bg-green-600 transition duration-300 ease-in-out'
        >
          Log In
        </button>
      </form>
      <h3 className='text-sm text-white mt-3'>
        Don't have an account?{' '}
        <Link href='/register' className='text-green-500'>
          Register here
        </Link>
      </h3>
    </div>
  )
}

export default LoginPage
