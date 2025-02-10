'use client'

import { useEffect, useState } from 'react'

const ResetPassword = () => {
  const [token, setToken] = useState(null)
  const [isTokenValid, setIsTokenValid] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const token = params.get('token')

      if (token) {
        setToken(token)
        setIsTokenValid(true)
        console.log('Token:', token)
      }
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    console.log('Password:', password)
    console.log('Confirm Password:', confirmPassword)
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-900'>
      {!isTokenValid ? (
        <p>Verifying token...</p>
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
