
import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex item-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>

       <div className='flex gap-5'>

 {/* High Priority */}
<div className='ml-5 flex-shrink-0 h-full p-5 w-[300px] bg-red-500 rounded-xl'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
    <h4><b>12-Jan-2025</b></h4>
  </div>
  <h2 className='mt-5 text-2xl font-semibold'>Study for CCEE</h2>
  <p className='text-sm mt-2'>
    Prepare theory and revise important concepts for the upcoming CCEE exam.
  </p>
</div>

 {/* Moderate Priority */}
<div className='ml-5 flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-yellow-500 px-3 py-1 rounded'>Moderate</h3>
    <h4><b>15-Jan-2025</b></h4>
  </div>
  <h2 className='mt-5 text-2xl font-semibold'>DSA Practice – Arrays & Strings</h2>
  <p className='text-sm mt-2'>
    Solve LeetCode problems on arrays and strings to strengthen core logic.
  </p>
</div>

<div className='ml-5 flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-green-600 px-3 py-1 rounded'>Low</h3>
    <h4><b>18-Jan-2025</b></h4>
  </div>
  <h2 className='mt-5 text-2xl font-semibold'>React Revision – Hooks</h2>
  <p className='text-sm mt-2'>
    Revise useState, useEffect, and custom hooks for better component control.
  </p>
</div>

{/* Medium Priority */}
<div className='ml-5 flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-blue-600 px-3 py-1 rounded'>Medium</h3>
    <h4><b>20-Jan-2025</b></h4>
  </div>
  <h2 className='mt-5 text-2xl font-semibold'>Fix UI Styles for Dashboard</h2>
  <p className='text-sm mt-2'>
    Improve spacing, colors, and alignment to make the dashboard more clean.
  </p>
</div>

 {/* Medium Priority */}
<div className='ml-5 flex-shrink-0 h-full p-5 w-[300px] bg-purple-500 rounded-xl'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-purple-700 px-3 py-1 rounded'>Medium</h3>
    <h4><b>22-Jan-2025</b></h4>
  </div>
  <h2 className='mt-5 text-2xl font-semibold'>Backend API Development</h2>
  <p className='text-sm mt-2'>
    Build REST APIs for authentication, tasks, and user management features.
  </p>
</div>

{/* Java OOP Concepts */}
<div className='ml-5 flex-shrink-0 h-full p-5 w-[300px] bg-indigo-400 rounded-xl'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-indigo-600 px-3 py-1 rounded'>Moderate</h3>
    <h4><b>26-Jan-2025</b></h4>
  </div>
  <h2 className='mt-5 text-2xl font-semibold'>Java OOP – Polymorphism & Encapsulation</h2>
  <p className='text-sm mt-2'>
    Revisit OOP principles and implement examples for better understanding.
  </p>
</div>

{/* Spring Security Task */}
<div className='ml-5 flex-shrink-0 h-full p-5 w-[300px] bg-cyan-400 rounded-xl'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-cyan-600 px-3 py-1 rounded'>Medium</h3>
    <h4><b>27-Jan-2025</b></h4>
  </div>
  <h2 className='mt-5 text-2xl font-semibold'>Spring Security – JWT Basics</h2>
  <p className='text-sm mt-2'>
    Learn how JWT authentication works and secure endpoints using filters.
  </p>
</div>

</div>


        
        

    </div>
  )
}

export default TaskList