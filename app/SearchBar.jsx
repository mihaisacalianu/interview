"use client"
import React, { useContext } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useSearch } from "../lib/SearchContext";
export function InputDemo() {
  return
}


const SearchBar = () => {

  const { searchTerm, setSearchTerm } = useSearch("");

  return (
    <form className='w-[30%] mx-auto m-10 flex items-center justify-center gap-3'>
      <label htmlFor="search"></label>
      <Input type="text" name="search" placeholder="search..."
      value={searchTerm}
      onChange={(event)=>setSearchTerm(event.target.value)}
      />
      <Button>Search</Button>
    </form>
  )
}

export default SearchBar
