import React from 'react'

import { RingLoader } from 'react-spinners'

const LoadingScreen = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center h-screen w-full bg-gray-900'>
      <RingLoader size={100} color='#22C55E' speedMultiplier={2} />
      <h1 className='text-2xl text-green-500 font-bold'>Loading...</h1>
    </div>
  )
}

export default LoadingScreen
