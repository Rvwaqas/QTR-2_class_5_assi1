import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='w-[100%] h-[5rem] bg-gray-400'>
        <div className='flex p-6 justify-center'>
            <ul className='flex justify-center space-x-4 '>
                <li className='bg-white px-3 py-2 rounded-sm font-medium text-[15px] hover:bg-red-600'><Link href={'/'}>Home</Link></li>
            <li className='bg-white px-3 py-2 rounded-sm font-medium text-[15px] hover:bg-red-600'><Link href={'/service'}>Service</Link></li>
            <li className='bg-white px-3 py-2 rounded-sm font-medium text-[15px] hover:bg-red-600'><Link href={'/feacture'}>Features</Link></li>
            <li className='bg-white px-3 py-2 rounded-sm font-medium text-[15px] hover:bg-red-600'><Link href={'/about'}>About</Link></li>
            <li className='bg-white px-3 py-2 rounded-sm font-medium text-[15px] hover:bg-red-600'><Link href={'/contact'}>Contact</Link></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
