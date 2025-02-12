import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='hidden lg:w-[45%] xl:w-[40%] bg-black rounded-[32px] min-h-[50px] md:flex items-center justify-between relative custom-shadow'>
      <input
        type='text'
        placeholder='Search'
        className='w-full h-full px-4 text-lg text-white outline-none bg-transparent'
      />
      <FaSearch
        size={28}
        className='text-white cursor-pointer absolute right-5'
      />
    </div>
  )
}

export default SearchBar
