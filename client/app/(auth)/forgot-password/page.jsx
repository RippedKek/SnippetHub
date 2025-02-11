'use client'

import { useState } from 'react'
import axios from 'axios'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')

  const handleSendCode = async () => {
    if (email) {
      try {
        const response = await axios.post(
          'http://localhost:8000/users/send-verification-email',
          {
            email,
          }
        )
        setCodeSent(true)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-900 p-6'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Forgot Password</h2>

        <label className='block text-sm mb-2' htmlFor='email'>
          Enter your email:
        </label>
        <input
          type='email'
          id='email'
          className='w-full p-3 rounded-md mb-4 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-pink-500'
          placeholder='Your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {!codeSent ? (
          <button
            onClick={handleSendCode}
            className='w-full bg-pink-500 p-3 rounded-md text-white font-bold hover:bg-pink-600 transition-all'
          >
            SEND LINK
          </button>
        ) : (
          <>
            <p className='text-sm text-green-500 font-bold mb-4 text-center'>
              A link has been sent to your email. Please follow it to reset your
              password.
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
