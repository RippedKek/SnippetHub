import ControlBar from './ControlBar'
import Profile from './Profile'

const Sidebar = () => {
  return (
    <div className='hidden sticky md:flex w-[30%]'>
      <ControlBar />
      <Profile />
    </div>
  )
}

export default Sidebar
