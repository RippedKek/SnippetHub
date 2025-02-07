import ProfileBar from './ProfileBar'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='min-h-[118px] sticky top-0 z-10 px-4 md:px-8 lg:px-16 xl:px-32 bg-primary border-[12px] border-black flex items-center justify-between'>
      <h1 className='text-3xl font-bold'>&lt;SnippetHub/&gt;</h1>
      <SearchBar />
      <ProfileBar />
    </div>
  )
}

export default Navbar
