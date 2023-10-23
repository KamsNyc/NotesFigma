import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  
  import React from 'react'
import { FaPlus } from "react-icons/fa"
  
  function AddButton() {
    return (
        <>
        <Sheet>
  <SheetTrigger className="bg-black w-14 h-14 rounded-full z-[3] fixed bottom-8 right-5 text-white hover:scale-105 cursor-pointer duration-300 ease-out">
        <div className="flex items-center justify-center h-full">  <FaPlus size={25} />
      
      </div></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Create Note</SheetTitle>
      <SheetDescription>
        form for fields to create note
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        
        </>

        
     
    )
  }
  
  export default AddButton
  