import React from 'react'

const UserProfile = ({ user }) => {
  return (
    <div
      className=' w-full pb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
border-l-[12px] border-r-[12px]  border-black min-h-[calc(100vh-118px)] overflow-y-scroll'
    >
      {user.name}
    </div>
  )
}

export default UserProfile
