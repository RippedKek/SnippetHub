import Feed from '@/components/Feed'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='md:flex justify-between relative'>
        <Feed />
        <Sidebar />
      </div>
    </>
  )
}
