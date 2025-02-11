'use client'

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

const techIcons = [
  { name: 'python', icon: <SiPython size={30} /> },
  { name: 'css', icon: <FaCss3Alt size={30} /> },
  { name: 'javascript', icon: <FaJs size={30} /> },
  { name: 'react', icon: <FaReact size={30} /> },
  { name: 'nodejs', icon: <FaNodeJs size={30} /> },
  { name: 'php', icon: <FaPhp size={30} /> },
  { name: 'aws', icon: <FaAws size={30} /> },
  { name: 'django', icon: <SiDjango size={30} /> },
  { name: 'flutter', icon: <SiFlutter size={30} /> },
  { name: 'firebase', icon: <SiFirebase size={30} /> },
  { name: 'postgresql', icon: <SiPostgresql size={30} /> },
  { name: 'mongodb', icon: <SiMongodb size={30} /> },
  { name: 'mysql', icon: <SiMysql size={30} /> },
  { name: 'nextjs', icon: <SiNextdotjs size={30} /> },
  { name: 'tailwindcss', icon: <SiTailwindcss size={30} /> },
  { name: 'typescript', icon: <SiTypescript size={30} /> },
  { name: 'git', icon: <FaGitAlt size={30} /> },
  { name: 'docker', icon: <FaDocker size={30} /> },
  { name: 'github', icon: <FaGithub size={30} /> },
  { name: 'express', icon: <SiExpress size={30} /> },
  { name: 'java', icon: <FaJava size={30} /> },
  { name: 'html', icon: <FaHtml5 size={30} /> },
]

const Skills = ({ color, tech }) => {
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
