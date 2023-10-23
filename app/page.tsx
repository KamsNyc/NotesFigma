import Image from 'next/image'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import NoteCard from './components/NoteCard'
import { FaPlus} from 'react-icons/fa'

export default function Home() {
return (
    <main className="">
      {/* TOP */}
      <Navbar />

      {/* all notes component */}
      <section className='px-5 relative'>
         {/* FILTER */}
         <Filter />

         {/* All Notes */}
         <div className="grid grid-cols-2 gap-4 py-10">
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
         </div>

         {/* ADD BUTTON */}
      <div className="bg-black w-14 h-14 rounded-full z-[3] fixed bottom-8 right-5 text-white hover:scale-105 cursor-pointer duration-300 ease-out">
        <div className="flex items-center justify-center h-full">  <FaPlus size={25} /></div>
      
      </div>
      </section>

      
    </main>
  )
}