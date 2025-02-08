import ControlBar from './ControlBar'
import Profile from './Profile'

const Sidebar = ({ user }) => {
  return (
    <div className='hidden relative md:flex w-[30%]'>
      <ControlBar />
      <Profile user={user} />
    </div>
  )
}

export default Sidebar
