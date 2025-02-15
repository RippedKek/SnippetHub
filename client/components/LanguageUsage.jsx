'use client'

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '@/context/context'

const LanguageUsage = ({ username }) => {
  const [languageCount, setLanguageCount] = useState({})
  const { techIcons } = useContext(AppContext)

  const fetchUserSnippets = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/snippets/get-snippet-languages/${username}`,
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      )

      if (response.data.languages) {
        const languages = response.data.languages

        const tempLanguageCount = {}

        languages.forEach((item) => {
          tempLanguageCount[item] = (tempLanguageCount[item] || 0) + 1
        })

        setLanguageCount(tempLanguageCount)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUserSnippets()
  }, [])

  return (
    <div className='w-full flex flex-col'>
      <div className='flex items-center justify-between'>
        {Object.keys(languageCount).map((language) => (
          <div key={language} className='flex items-center gap-2'>
            {techIcons
              .filter((icon) => icon.name === language)
              .map((icon) => (
                <span key={icon.name}>{icon.icon}</span>
              ))}
            <p className='text-sm'>{languageCount[language]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LanguageUsage
