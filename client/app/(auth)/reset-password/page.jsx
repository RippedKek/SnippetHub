'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

const ResetPassword = () => {
  const [token, setToken] = useState(null)
  const [invalid, setInvalid] = useState(false)
  const [loading, setLoading] = useState(true)

  const verifyToken = async (token) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/users/verify-token',
        { token }
      )
      console.log(response.data)
      if (!response.data.success) {
        setInvalid(true)
      }
    } catch (err) {
      console.error(err)
      setInvalid(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const token = params.get('token')

      if (token) {
        setToken(token)
        verifyToken(token)
      } else {
        setInvalid(true)
        setLoading(false)
      }
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/users/reset-password',
        { token, password }
      )
      window.location.href = '/login'
    } catch (err) {
      console.log(err)
    }
  }

  if (loading) {
    return (
      <div className='w-full h-screen flex items-center justify-center bg-gray-900'>
        <p className='text-white'>Verifying token...</p>
      </div>
    )
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-900'>
      {invalid ? (
        <p className='text-red-500'>Invalid or expired token</p>
      ) : (
        <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white'>
          <h1 className='text-2xl font-bold mb-6 text-center'>
            Reset Password
          </h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='password' className='block'>
                New Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='w-full mt-2 p-2 border rounded-lg text-black'
                required
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='confirmPassword' className='block'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                className='w-full mt-2 p-2 border rounded-lg text-black'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors'
            >
              Reset Password
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ResetPassword
