import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { FaPython } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaReact } from 'react-icons/fa'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function getIcon(language) {
  switch (language) {
    case 'python':
      return <FaPython size={30} />
    case 'javascript':
      return <IoLogoJavascript size={30} />
    case 'react':
      return <FaReact size={30} />
    default:
      return null
  }
}

const Post = ({ post }) => {
  return (
    <div className='w-[323px] h-[350px] mt-6 p-2 rounded-3xl border-[6px] border-black bg-white flex flex-col items-start'>
      <h1 className='font-bold text-lg'>{post.name}</h1>
      <h3 className='font-light text-sm mb-2'>@{post.username}</h3>
      <h1 className='font-bold text-xl'>{post.title}</h1>

      <SyntaxHighlighter
        language={post.language[0]}
        style={docco}
        className='text-[10px] -ml-18 overflow-auto'
      >
        {post.snippet}
      </SyntaxHighlighter>

      <div className='flex gap-2 mt-auto self-end'>
        {post.language.map((lang) => getIcon(lang))}
      </div>
    </div>
  )
}

export default Post
