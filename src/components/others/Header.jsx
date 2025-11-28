import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between w-full text-white px-6 py-4'>
      
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>Amreet 🤑</span>
      </h1>

      <button className='bg-red-600 text-white text-xl px-4 py-2 rounded-md'>
        Log out
      </button>

    </div>
  )
}

export default Header
