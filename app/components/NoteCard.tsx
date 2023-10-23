import React from 'react'

function NoteCard() {
  return (
    <section className="bg-[#D9E8FC] rounded-2xl">
      {/* CONTENT CONTAINER */}
      <div className="p-4">
        <div>
          <h1 className="text-[14px] font-black tracking-tight leading-4">Grocery List 10/23/23</h1>
          <span className="text-[10px] font-medium">To-do list</span>
        </div>
        {/* LIST */}
        <ol className="text-[12px] leading-[12px]">
          <li className='py-1'>Review of Previous Action Items</li>
          <li className='py-1'>Product Development Update</li>
          <li className='py-1'>User Feedback and Customer Insights</li>
          <li className='py-1'>Review of Previous Action Items</li>
          <li className='py-1'>Roadmap Discussion</li>
        </ol>
      </div>
    </section>
  );
}

export default NoteCard
