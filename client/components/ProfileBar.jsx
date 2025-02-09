import { getInitials } from '@/utils/utils'

const ProfileBar = ({ fullName }) => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/login'
  }

  return (
    <div className='flex items-center gap-2 justify-between w-fit min-h[50px]'>
      <div className='flex items-center justify-center rounded-full bg-black w-[50px] h-[50px] cursor-pointer'>
        <h1 className=' text-white text-lg font-bold'>
          {getInitials(fullName)}
        </h1>
      </div>
      <div className='flex flex-col'>
        <p className='text-[1rem] font-bold'>{fullName}</p>
        <p
          onClick={handleLogout}
          className='text-sm font-light cursor-pointer underline'
        >
          Logout
        </p>
      </div>
    </div>
  )
}

export default ProfileBar
