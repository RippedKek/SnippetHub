import Link from 'next/link'
import ProfileBar from './ProfileBar'
import SearchBar from './SearchBar'
const Navbar = ({ fullName }) => {
  return (
    <div className='min-h-[118px] sticky top-0 z-10 px-4 md:px-8 lg:px-16 xl:px-32 bg-green-500 border-[12px] border-black flex items-center justify-between'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>
          &lt;<span className='hidden sm::inline'>SnippetHub</span>/&gt;
        </h1>
      </Link>
      <SearchBar />
      <ProfileBar fullName={fullName} />
    </div>
  )
}

export default Navbar
