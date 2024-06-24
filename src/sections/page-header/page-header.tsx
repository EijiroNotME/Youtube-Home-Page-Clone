import React, { useState } from 'react'
import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from "lucide-react"
import YoutubeIcon from "../../assets/icons/Youtube.png"
import Button from '../../components/buttons/Button'

function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  return (
    <section className='flex gap-10 justify-between lg:gap-20 pt-2 mb-6 mx-4'>
        {/* first section (Icon and Menu Button) */}
        <section className={`flex gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
            <Button variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="http:/">
                <img src={YoutubeIcon} alt="youtube icon" className='h-6' />
            </a>
        </section>

        {/* Second Section Search Bar and Microphone Button */}

        <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
          {showFullWidthSearch && (<Button onClick={ () => setShowFullWidthSearch(false)} size="icon" variant="ghost" className='flex-shrink-0' type='button'>
            <ArrowLeft />
          </Button>
          )}
          
          <section className='flex flex-grow max-w-[600px]'>
           <input type="search" placeholder='search' className='rounded-l-full 
           border border-secondary-border shadow-inner shadow-secondary
           py-1 px-4 text-lg w-full focus:border-blue-500 outline-none
           ' />
           <Button className='py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0'>
            <Search/>
           </Button>


          </section>
          <Button size="icon" className='flex-shrink-0' type='button'>
            <Mic />
          </Button>
        </form>

        {/* Third Section (Buttons) */}
        <section className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="ghost" className='md:hidden'>
            <Search />
          </Button>
          <Button size="icon" variant="ghost" className='md:hidden'>
            <Mic />
          </Button>
          <Button size="icon" variant="ghost">
            <Upload />
          </Button>
          <Button size="icon" variant="ghost">
            <Bell />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
        </section>


    </section>
  )
}

export default PageHeader