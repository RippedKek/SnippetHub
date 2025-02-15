'use client'

import { AppContext } from '@/context/context'
import { useContext } from 'react'

const Skills = ({ color, tech }) => {
  const { techIcons } = useContext(AppContext)

  return (
    <div
      style={{ backgroundColor: color }}
      className='w-[85%] my-3 flex border-[6px] border-black rounded-2xl px-1 py-2 self-center items-center justify-evenly'
    >
      {tech.length > 0 ? (
        techIcons
          .filter((icon) => tech.includes(icon.name))
          .map((icon) => <span key={icon.name}>{icon.icon}</span>)
      ) : (
        <p className='text-lg font-bold text-center'>No skills selected yet</p>
      )}
    </div>
  )
}

export default Skills
