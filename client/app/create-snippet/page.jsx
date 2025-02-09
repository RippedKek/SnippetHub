'use client'

import { useState, useContext } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import axios from 'axios'
import Editor from '@monaco-editor/react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { AppContext } from '@/context/context'

export default function AddSnippet() {
  const [snippetTitle, setSnippetTitle] = useState('')
  const [snippetDescription, setSnippetDescription] = useState('')
  const [snippetLanguages, setSnippetLanguages] = useState([])
  const [baseLanguage, setBaseLanguage] = useState('python')
  const [snippetCode, setSnippetCode] = useState('Code here...')
  const { user } = useContext(AppContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'title') {
      setSnippetTitle(value)
    } else if (name === 'description') {
      setSnippetDescription(value)
    } else if (name === 'baseLanguage') {
      setBaseLanguage(value)
    }
  }

  const handleLanguagesChange = (e) => {
    const { options } = e.target
    const selectedLanguages = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value)

    setSnippetLanguages(selectedLanguages)
  }

  const handleCodeChange = (value) => {
    setSnippetCode(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        'http://localhost:8000/snippets/create-snippet',
        {
          title: snippetTitle,
          description: snippetDescription,
          language: snippetLanguages,
          snippet: snippetCode,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      )
      toast.success('Snippet posted successfully!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: 'colored',
        transition: Bounce,
      })
    } catch (err) {
      console.log(err)
    }
    const snippet = JSON.stringify({
      snippetTitle,
      snippetDescription,
      baseLanguage,
      snippetLanguages,
      snippetCode,
    })
  }

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
      <Navbar fullName={user.name} />
      <div className='md:flex justify-between relative'>
        <div className='w-[70%] min-h-[calc(100vh-118px)] border-l-[12px] border-black bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 border-t-0 pb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          <h1 className='text-3xl font-bold mt-4 text-black'>Add a Snippet</h1>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col md:flex-row items-start justify-between gap-6 mt-4'
          >
            <div className='flex flex-col w-full md:w-[40%]'>
              <input
                type='text'
                name='title'
                value={snippetTitle}
                onChange={handleChange}
                placeholder='Snippet Title'
                className='w-full h-12 bg-black/20 placeholder-white text-white rounded-2xl px-4 outline-4 outline-black focus:outline-black focus:outline-4'
              />
              <textarea
                name='description'
                value={snippetDescription}
                onChange={handleChange}
                placeholder='Snippet Description (within 250 characters)'
                className='mt-4 w-full h-60 placeholder-white bg-black/20 text-white rounded-2xl px-4 py-2 outline-4 outline-black focus:outline-black focus:outline-4'
              />

              <select
                name='baseLanguage'
                value={baseLanguage}
                onChange={handleChange}
                className='mt-4 w-full h-12 bg-black/20 text-black rounded-2xl px-4 outline-4 outline-black focus:outline-black focus:outline-4'
              >
                <option value='python'>Python</option>
                <option value='javascript'>JavaScript</option>
                <option value='react'>React</option>
                <option value='html'>HTML</option>
                <option value='css'>CSS</option>
                <option value='csharp'>C#</option>
                <option value='java'>Java</option>
                <option value='java'>Dart</option>
                <option value='php'>PHP</option>
              </select>

              <select
                name='languages'
                multiple
                value={snippetLanguages}
                onChange={handleLanguagesChange}
                className='mt-4 w-full h-24 bg-black/20 text-black rounded-2xl px-4 outline-4 outline-black focus:outline-black focus:outline-4'
              >
                <option value='python'>Python</option>
                <option value='javascript'>JavaScript</option>
                <option value='react'>React</option>
                <option value='html'>HTML</option>
                <option value='css'>CSS</option>
                <option value='csharp'>C#</option>
                <option value='java'>Java</option>
                <option value='java'>Dart</option>
                <option value='php'>PHP</option>
              </select>

              <button
                type='submit'
                className='mt-4 w-full hidden md:block h-12  text-black rounded-md hover:rounded-2xl px-4 outline-none bg-green-500 hover:bg-green-600 transition-all duration-200 border-4 border-black'
              >
                Submit Snippet
              </button>
            </div>

            {/* Monaco Code Editor */}
            <div
              className='w-full md:w-[60%] border-black rounded-3xl overflow-hidden'
              style={{ height: '480px' }}
            >
              <Editor
                height='100%'
                defaultLanguage={baseLanguage}
                value={snippetCode}
                theme='vs-dark'
                onChange={handleCodeChange}
                options={{
                  fontSize: 11,
                  automaticLayout: true,
                }}
              />
            </div>
            <button
              type='submit'
              className='mt-4 w-full md:hidden h-12 text-black rounded-2xl px-4 outline-none bg-green-500'
            >
              Submit Snippet
            </button>
          </form>
        </div>
        <Sidebar user={user} />
      </div>
    </>
  )
}
