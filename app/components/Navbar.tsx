import React from 'react'
import Logo from './Logo'
import { BsSearch } from 'react-icons/bs';
import Image from 'next/image';

function Navbar() {
  return (
    <section className='w-full h-full my-4'>
      {/* LOGO */}
      <section className='flex items-center justify-center py-5'>
        <Logo />
      </section>

      <form className='flex gap-4 items-center justify-center text-left'>
      
        <div className="relative text-[14px] text-[#ABABAB]">
        <input
          type="text"
          name="search"
          id="search"
          placeholder='Search for notes'
          className='border-2 border-[#ECECEC] py-2 px-14 rounded-xl tracking-tight text-black  '
        />


        <Image
          src={'/search.png'}
          alt='test'
          width={22}
          height={22}
          className='absolute left-6 top-1/2 translate-y-[-50%] z-[2] cursor-pointer '
        />
        </div>
     
      </form>
      {/* Searchbar */}
      
      {/* Filters (Optional) */}
    </section>
  )
}

export default Navbar
