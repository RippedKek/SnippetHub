import React from 'react'

const UserProfile = ({ user }) => {
  console.log(user)
  return (
    <div
      className=' w-full pb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
border-l-[12px] border-r-[12px]  border-black min-h-[calc(100vh-118px)] overflow-y-scroll flex '
    >
      <div className='w-1/2 py-10 flex flex-col'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-4xl font-bold text-black'>{user.name}</h1>
          <button className='px-6 py-2 rounded-2xl bg-green-500 border-[4px] border-black cursor-pointer font-semibold'>
            follow
          </button>
        </div>
        <div className='w-full flex flex-col items-start '>
          <h3 className='text-lg font-medium text-[#545454]'>
            @{user.username}
          </h3>
          <h3 className='text-lg font-medium text-black'>
            {user.job}, {user.organization}
          </h3>
          <h3 className='text-lg font-medium text-black'>
            {user.city}, {user.country}
          </h3>
        </div>
        <div className='w-full bg-[#393939] rounded-2xl p-6 flex flex-col mt-10'>
          <p className='text-sm text-white font-light '>
            Total Snippets: {user.snippets.length}
          </p>
          <p className='text-sm text-white font-light '>
            Pinned Snippets: {user.pinned}
          </p>
          <p className='text-sm text-white font-light mt-4'>
            Top Languages Used:
          </p>
        </div>
      </div>
      <div className='w-1/2 flex items-center '>
        <div className='w-[90%] bg-[#393939] rounded-2xl p-6 text-white'>
          Recent Posts
        </div>
      </div>
    </div>
  )
}

export default UserProfile
