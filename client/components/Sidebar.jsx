import ControlBar from './ControlBar'
import Profile from './Profile'

const Sidebar = ({ user }) => {
  return (
    <div className='relative flex w-[10%] md:w-[30%]'>
      <ControlBar />
      <Profile user={user} />
    </div>
  )
}

export default Sidebar
