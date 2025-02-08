'use client'

import { useState } from 'react'
import axios from 'axios'
import Editor from '@monaco-editor/react'

export default function AddSnippet() {
  const [snippetTitle, setSnippetTitle] = useState('')
  const [snippetDescription, setSnippetDescription] = useState('')
  const [snippetLanguages, setSnippetLanguages] = useState([])
  const [baseLanguage, setBaseLanguage] = useState('python')
  const [snippetCode, setSnippetCode] = useState('')

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
            token,
          },
        }
      )
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
    console.log(snippet)
  }

  const handleEditorDidMount = (editor, monaco) => {
    monaco.editor.defineTheme('blackTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#000000',
      },
    })

    monaco.editor.setTheme('blackTheme')
  }

  return (
    <div className='w-[70%] min-h-[calc(100vh-118px)] border-[12px] border-black border-t-0 pb-8 px-4 md:px-8 lg:px-16'>
      <h1 className='text-3xl font-bold mt-4'>Add a Snippet</h1>
      <form
        onSubmit={handleSubmit}
        className='flex items-start justify-between gap-6 mt-4'
      >
        <div className='flex flex-col w-1/3'>
          <input
            type='text'
            name='title'
            value={snippetTitle}
            onChange={handleChange}
            placeholder='Snippet Title'
            className='w-full h-12 bg-black text-white rounded-2xl px-4 outline-none'
          />
          <textarea
            name='description'
            value={snippetDescription}
            onChange={handleChange}
            placeholder='Snippet Description (within 250 characters)'
            className='mt-4 w-full h-60 bg-black text-white rounded-2xl px-4 py-2 outline-none'
          />

          <select
            name='baseLanguage'
            value={baseLanguage}
            onChange={handleChange}
            className='mt-4 w-full h-12 bg-black text-white rounded-2xl px-4 outline-none'
          >
            <option value='python'>Python</option>
            <option value='javascript'>JavaScript</option>
            <option value='react'>React</option>
            <option value='html'>HTML</option>
            <option value='css'>CSS</option>
            <option value='csharp'>C#</option>
            <option value='java'>Java</option>
          </select>

          <select
            name='languages'
            multiple
            value={snippetLanguages}
            onChange={handleLanguagesChange}
            className='mt-4 w-full h-24 bg-black text-white rounded-2xl px-4 outline-none'
          >
            <option value='python'>Python</option>
            <option value='javascript'>JavaScript</option>
            <option value='react'>React</option>
            <option value='html'>HTML</option>
            <option value='css'>CSS</option>
            <option value='csharp'>C#</option>
            <option value='java'>Java</option>
          </select>

          <button
            type='submit'
            className='mt-4 w-full h-12 bg-black text-white rounded-2xl px-4 outline-none'
          >
            Submit Snippet
          </button>
        </div>

        {/* Monaco Code Editor */}
        <div className='w-2/3 border-black' style={{ height: '450px' }}>
          <Editor
            height='100%'
            defaultLanguage={baseLanguage}
            value={snippetCode}
            theme='vs-dark'
            onChange={handleCodeChange}
            onMount={handleEditorDidMount}
            options={{
              fontSize: 11,
              automaticLayout: true,
            }}
          />
        </div>
      </form>
    </div>
  )
}
