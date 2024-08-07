import React, { useState } from 'react'
import MobileNav from './MobileNav'
import { LuMenu } from '../../assets/icons.jsx'
import logoIcon from '../../assets/images/logo.png';
import './style.css';


const Navbar = () => {

  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }



  return (
    <nav className='py-4 px-6 w-full flex items-center justify-between'>
        <div className='lg:hidden'>
            <LuMenu size={30} onClick={() => setOpen(!open)} className='text-gray-500'/>
        </div>
        <div className='w-1/2 flex items-center justify-center text-tertiary hover:scale-105 transition-all ease-linear duration-150'>
            <img className='color w-full h-full cursor-pointer' src={logoIcon}  alt="logo" />
        </div>
        <div className={`fixed top-0 right-0 w-full h-screen bg-quaternary ${open ? 'translate-x-0' : '-translate-x-full'} transition-all ease-in-out duration-300 `}>
          <MobileNav onClick={onClose}/>
        </div>
    </nav>
  )
}

export default Navbar
