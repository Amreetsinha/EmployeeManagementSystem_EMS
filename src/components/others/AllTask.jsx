import React from 'react'

const AllTask = () => {
  return (
    <div id='alltask' className='bg-black-400 p-5 mt-5 h-48 overflow-auto'>

       
<div className="bg-red-400 py-3 px-5 rounded-lg shadow-md flex justify-between items-center  border-l-13 border-blue-500">
  <h2 className="text-lg font-semibold">Amreet</h2>
  <h3 className="text-black-700">Make a React Project</h3>
  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
    In Progress
  </span>
</div>

{/* Task 2 */}
<div className="bg-yellow-400 py-3 px-5 rounded-lg shadow-md flex justify-between items-center border-l-13 border-blue-500 mt-4">
  <h2 className="text-lg font-semibold">Rahul</h2>
  <h3 className="text-black-700">Finish DSA Assignment</h3>
  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
    Completed
  </span>
</div>

{/* Task 3 */}
<div className="bg-blue-400 py-3 px-5 rounded-lg shadow-md flex justify-between items-center border-l-13 border-blue-500 mt-4">
  <h2 className="text-lg font-semibold">Sneha</h2>
  <h3 className="text-black-700">Update UI Dashboard</h3>
  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
    Pending
  </span>
</div>

{/* Task 4 */}
<div className="bg-green-400 py-3 px-5 rounded-lg shadow-md flex justify-between items-center border-l-13 border-blue-500 mt-4">
  <h2 className="text-lg font-semibold">Rohan</h2>
  <h3 className="text-black-700">Write Spring Boot APIs</h3>
  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
    Review
  </span>
</div>

{/* Task 5 */}
<div className="bg-purple-400 py-3 px-5 rounded-lg shadow-md flex justify-between items-center border-l-13 border-blue-500 mt-4">
  <h2 className="text-lg font-semibold">Priya</h2>
  <h3 className="text-black-700">Fix Authentication Bug</h3>
  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
    On Hold
  </span>
</div>

    </div>
  )
}

export default AllTask