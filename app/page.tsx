import Image from 'next/image'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import NoteCard from './components/NoteCard'
import { FaPlus} from 'react-icons/fa'
import AddButton from './components/AddButton'

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
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
         </div>

         {/* ADD BUTTON */}
      
      <AddButton />
      </section>

      
    </main>
  )
}