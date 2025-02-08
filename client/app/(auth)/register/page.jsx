'use client'

import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaJs,
  FaCuttlefish,
} from 'react-icons/fa'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    country: '',
    job: 'Unemployed',
    organization: '',
    technologies: [],
    termsAccepted: false,
  })

  const technologyOptions = [
    {
      label: 'React',
      icon: <FaReact className='inline mr-2' />,
      value: 'react',
    },
    {
      label: 'JavaScript',
      icon: <FaJs className='inline mr-2' />,
      value: 'javascript',
    },
    { label: 'HTML', icon: <FaHtml5 className='inline mr-2' />, value: 'html' },
    { label: 'CSS', icon: <FaCss3Alt className='inline mr-2' />, value: 'css' },
    {
      label: 'Node.js',
      icon: <FaNodeJs className='inline mr-2' />,
      value: 'node',
    },
    {
      label: 'Python',
      icon: <FaPython className='inline mr-2' />,
      value: 'python',
    },
    { label: 'Java', icon: <FaJava className='inline mr-2' />, value: 'java' },
    { label: 'C', icon: <FaCuttlefish className='inline mr-2' />, value: 'c' },
    {
      label: 'C#',
      icon: <FaCuttlefish className='inline mr-2' />,
      value: 'csharp',
    },
  ]

  const [title, setTitle] = useState('')
  const [alert, setAlert] = useState('')
  const fullTitle = 'Register for <SnippetHub/>'

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
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleTechnologyChange = (e) => {
    const { value } = e.target
    if (formData.technologies.includes(value)) {
      setFormData((prev) => ({
        ...prev,
        technologies: prev.technologies.filter((tech) => tech !== value),
      }))
    } else if (formData.technologies.length < 4) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, value],
      }))
    } else {
      setAlert('You can select at most 4 technologies.')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setAlert('Passwords do not match')
      return
    }

    if (!formData.termsAccepted) {
      setAlert('You must accept the terms and conditions.')
      return
    }

    setAlert('')

    console.log('Form Submitted:', formData)

    try {
      const user = {
        name: formData.name,
        username: formData.username,
        password: formData.password,
        email: formData.email,
        city: formData.city,
        country: formData.country,
        job: formData.job,
        organization: formData.organization,
        technologies: formData.technologies,
      }
      const response = await axios.post(
        'http://localhost:8000/users/register',
        user
      )
      if (response.data.message) {
        throw new Error(response.data.message)
      }
      window.location.href = '/login'
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-full h-fit flex items-center justify-center bg-gray-900 text-white py-24 shadow-2xl shadow-green-500'>
      <div className='w-full max-w-2xl bg-black p-8 rounded-lg shadow-lg'>
        <h1 className='text-3xl text-center font-bold mb-8 text-green-400 font-mono animate-blink'>
          {title}
        </h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Name, Username, Email */}
          <div className='space-y-4'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500'
              onChange={handleChange}
            />
            <input
              type='text'
              name='username'
              placeholder='Username'
              className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500'
              onChange={handleChange}
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500'
              onChange={handleChange}
            />
          </div>

          {/* Password, Confirm Password */}
          <div className='space-y-4'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500'
              onChange={handleChange}
            />
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500'
              onChange={handleChange}
            />
          </div>

          {/* Address (City, Country)*/}
          <div className='flex space-x-4'>
            <input
              type='text'
              name='city'
              placeholder='City'
              className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500'
              onChange={handleChange}
            />
            <input
              type='text'
              name='country'
              placeholder='Country'
              className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500'
              onChange={handleChange}
            />
          </div>

          {/* Job and Organization*/}
          <div className='flex space-x-4'>
            <select
              name='job'
              className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500'
              onChange={handleChange}
              value={formData.job}
            >
              <option value='Unemployed'>Unemployed</option>
              <option value='Developer'>Developer</option>
              <option value='Designer'>Designer</option>
              <option value='Manager'>Manager</option>
              <option value='Student'>Student</option>
            </select>
            <input
              type='text'
              name='organization'
              placeholder='Organization'
              className='w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500'
              onChange={handleChange}
            />
          </div>

          {/* Technologies - Max 4 selections */}
          <div>
            <p className='mb-2'>Select Technologies (max 4):</p>
            <div className='grid grid-cols-2 gap-4'>
              {technologyOptions.map((tech) => (
                <label key={tech.value} className='flex items-center'>
                  <input
                    type='checkbox'
                    value={tech.value}
                    checked={formData.technologies.includes(tech.value)}
                    onChange={handleTechnologyChange}
                    className='mr-2 focus:ring-4 focus:ring-green-500 text-green-500'
                  />
                  {tech.icon}
                  {tech.label}
                </label>
              ))}
            </div>
          </div>

          {/* Terms and Agreements */}
          <div className='flex items-center'>
            <input
              type='checkbox'
              name='termsAccepted'
              checked={formData.termsAccepted}
              onChange={handleChange}
              className='mr-2 focus:ring-4 focus:ring-green-500 text-green-500'
            />
            <span>I accept the terms and agreements</span>
          </div>
          <h3 className='text-sm text-red-500 text-center mt-2'>{alert}</h3>

          {/* Submit button */}
          <button
            type='submit'
            className='w-full p-3 bg-green-500 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out'
          >
            Register
          </button>
        </form>
        <h3 className='text-sm text-white mt-4 text-center'>
          Already have an account?{' '}
          <Link href='/login' className='text-green-500'>
            Login here
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default RegisterPage
