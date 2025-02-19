'use client'

import { useContext, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { TiPin } from 'react-icons/ti'
import { FaCopy } from 'react-icons/fa'
import Modal from 'react-modal'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import axios from 'axios'
import { AppContext } from '@/context/context'
import Link from 'next/link'

const Post = ({ post, self, id }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const { techIcons } = useContext(AppContext)

  function getIcon(language, index) {
    const techIcon = techIcons.find(
      (tech) => tech.name.toLowerCase() === language.toLowerCase()
    )

    return techIcon.icon
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText(post.snippet)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }

  const pinSnippet = async () => {
    try {
      const response = await axios.put(
        'http://localhost:8000/users/pin-snippet',
        {
          id,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  const unpinSnippet = async () => {
    try {
      const response = await axios.put(
        'http://localhost:8000/users/unpin-snippet',
        {
          id,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      )
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const deletePost = async () => {
    try {
      await axios.delete(`http://localhost:8000/snippets/delete/${id}`, {
        headers: {
          token: localStorage.getItem('token'),
        },
      })
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='relative w-[323px] h-[380px] mt-6 p-2 rounded-3xl border-[6px] border-black bg-green-500 flex flex-col items-start hover:shadow-xl transition-all duration-150'>
      {self ? (
        <div
          onClick={deletePost}
          className='absolute bottom-2 left-2 p-1 rounded-lg bg-red-700 cursor-pointer'
        >
          <MdDelete size={20} color='white' />
        </div>
      ) : (
        <div
          onClick={pinSnippet}
          className='absolute bottom-2 left-2 p-1 rounded-lg bg-blue-600 cursor-pointer'
        >
          <TiPin size={20} color='white' />
        </div>
      )}
      <div className='flex items-center justify-between w-full'>
        <h1 className='font-bold text-lg'>{post.name}</h1>
        <button
          onClick={openModal}
          className='bg-black text-white text-xs px-2 py-1 rounded'
        >
          &lt;/&gt;
        </button>
      </div>

      <Link href={`/profile/${post.username}`}>
        <h3 className='font-light text-sm mb-2'>@{post.username}</h3>
      </Link>
      <h1 className='font-bold text-xl'>{post.title}</h1>

      <p className='text-sm text-justify font-bold w-full max-h-[200px] mb-1 overflow-auto'>
        {post.description}
      </p>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={post.title}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 9999,
          },
          content: {
            zIndex: 9999,
            width: '500px',
            minHeight: '300px',
            margin: 'auto',
            padding: '10px',
            borderRadius: '10px',
            position: 'relative',
          },
        }}
      >
        <button
          onClick={closeModal}
          className='absolute top-2 right-2 text-slate-600 text-xl'
        >
          x
        </button>
        <div className=' w-full mt-10'>
          <h1 className='font-bold'>{post.title}</h1>
          <div className='relative'>
            <SyntaxHighlighter
              language={post.language[0]}
              style={dracula}
              customStyle={{
                fontSize: '12px',
                maxHeight: '500px',
                overflowY: 'auto',
              }}
            >
              {post.snippet}
            </SyntaxHighlighter>

            <button
              onClick={handleCopy}
              className='absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs flex items-center gap-1'
            >
              <FaCopy size={10} />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </Modal>

      <div className='flex gap-2 mt-auto self-end'>
        {post.language.map((lang, index) => getIcon(lang, index))}
      </div>
    </div>
  )
}

export default Post
