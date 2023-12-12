'use client'
import React, { useState } from 'react'
import { RiSearchFill } from "react-icons/ri";

const SearchNavbar = () => {
    const [searchEvents, setSearchEvents] = useState("");
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchEvents(event.target.value);
      };
  return (
    <div className='mx-4 md:5/6 lg:w-2/6'>
        <div className='w-full relative flex items-center rounded-md'>
            <input
                type="text"
                value={searchEvents}
                onChange={handleSearch}
                placeholder="Search near you"
                className="w-full px-2 sm:px-4 py-1 sm:py-2  border-2 border-primary rounded-md focus:outline-none focus:ring-1 bg-transparent focus:ring-primary placeholder-primary"
            />
            <div className='absolute right-5'>
                <RiSearchFill />
            </div>
        </div>
    </div>
  )
}

export default SearchNavbar