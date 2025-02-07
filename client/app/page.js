import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='md:flex justify-between'>
      <Feed />
      <Sidebar />
    </div>
  )
}
