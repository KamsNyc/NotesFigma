'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from './components/NoteCard';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import AddButton from './components/AddButton';

export default function Home() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <main className="">
      {/* TOP */}
      <Navbar />
      <section className='px-5 relative'>
        {/* FILTER */}
<Filter />        
{/* All Notes */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
        {/* ADD BUTTON */}
        <AddButton />
      </section>
    </main>
  );
}
