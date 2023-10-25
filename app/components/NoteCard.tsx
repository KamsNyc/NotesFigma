import React from 'react';

function NoteCard({ note }) {
  return (
    <section className="bg-[#D9E8FC] rounded-2xl">
      {/* CONTENT CONTAINER */}
      <div className="p-4">
        <div>
          <h1 className="text-[14px] font-black tracking-tight leading-4">{note.title}</h1>
          <span className="text-[10px] font-medium">{note.category}</span>
        </div>
        {/* LIST */}
        <ul className="text-[12px] leading-[12px]">
          {note.body.map((item, index) => (
            <li key={index} className='py-1'>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default NoteCard;
