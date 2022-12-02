import Link from 'next/link'
import React from 'react'
import {AiOutlineSearch,AiOutlineBell,AiOutlineShoppingCart} from 'react-icons/ai'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-10'>
      <Link href='/'>
        <h1 className='text-2xl font-bold font-stix_two '>ARTSY.</h1>
      </Link>
      <ul className='flex items-center gap-10 text-lg'>
        <Link href='/'>
          Home
        </Link>
        <Link href='marketplace'>
          Marketplace
        </Link>
        <Link href='auctions'>
          Auctions
        </Link>
        <Link href='drop'>
          Drop
        </Link>
      </ul>
      <div className='flex gap-5 items-center cursor-pointer text-lg'>
      <AiOutlineSearch/>
      <AiOutlineShoppingCart/>
      <AiOutlineBell/>
      </div>
    </nav>
  )
}

export default Navbar