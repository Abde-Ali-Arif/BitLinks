import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='h-20 bg-purple-700 flex justify-between px-3 items-center text-white'>
        <div className='logo font-bold text-3xl'>BitLinks</div>
        <ul className='flex justify-center items-center gap-4'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'>
              <Link href='/generate'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1.5 font-bold'>Try Now</button></Link>
              <Link href='/github'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1.5 font-bold'>Git Hub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
