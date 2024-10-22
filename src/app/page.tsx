import React from 'react'
import Navbar from './Component/Navbar'


const Home = () => {
  return (
<div className='w-[100%] h-screen'>
    <Navbar/>
    <div className='flex justify-center items-center mt-10 '>
      <h1 className='bg-black text-white font-semibold text-[17px] rounded-lg p-6 hover:bg-red-600'>Home-page</h1>
      </div>      
    </div>  
    
  )
}

export default Home
