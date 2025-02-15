'use client'

import { AppContext } from '@/context/context'
import { useContext } from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaJava,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiDjango,
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si'

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
