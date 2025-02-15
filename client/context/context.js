import { createContext, useEffect, useState } from 'react'
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

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [color, setColor] = useState('#06B6D4')
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    city: '',
    country: '',
    job: '',
    organization: '',
    color: '',
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    pinned: 0,
    technologies: [],
    snippets: [],
    pins: [],
  })

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

  const techOptions = [
    { name: 'Python', value: 'python' },
    { name: 'CSS', value: 'css' },
    { name: 'Javascript', value: 'javascript' },
    { name: 'React', value: 'react' },
    { name: 'NodeJs', value: 'nodejs' },
    { name: 'PHP', value: 'php' },
    { name: 'AWS', value: 'aws' },
    { name: 'Django', value: 'django' },
    { name: 'Flutter', value: 'flutter' },
    { name: 'Firebase', value: 'firebase' },
    { name: 'Postgresql', value: 'postgresql' },
    { name: 'MongoDB', value: 'mongodb' },
    { name: 'MySQL', value: 'mysql' },
    { name: 'NextJs', value: 'nextjs' },
    { name: 'TailwindCSS', value: 'tailwindcss' },
    { name: 'Typescript', value: 'typescript' },
    { name: 'Git', value: 'git' },
    { name: 'Docker', value: 'docker' },
    { name: 'Github', value: 'github' },
    { name: 'Express', value: 'express' },
    { name: 'Java', value: 'java' },
    { name: 'HTML', value: 'html' },
  ]

  const updateUser = (newData) => {
    setUser((prevUser) => ({ ...prevUser, ...newData }))
  }

  const updateColor = (newColor) => {
    setColor(newColor)
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  return (
    <AppContext.Provider
      value={{
        color,
        setColor: updateColor,
        user,
        setUser: updateUser,
        loading,
        setLoading,
        techIcons,
        techOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
