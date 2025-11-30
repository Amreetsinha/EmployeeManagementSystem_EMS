import React from 'react'

const CreateTask = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center  p-5">
             <form className="w-full max-w-lg bg-gray-600 p-8 rounded-2xl shadow-lg">

            {/* Task Title */}
            <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Task Title</h3>
            <input 
                type="text" 
                placeholder="Enter Here" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>

            {/* Description */}
            <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <textarea 
                cols="30" 
                rows="6"
                placeholder="Write description..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            </div>

            {/* Date */}
            <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Date</h3>
            <input 
                type="date" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>

            {/* Assign To */}
            <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Assign To</h3>
            <input 
                type="text"
                placeholder="Student Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>

            {/* Category */}
            <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <input 
                type="text"
                placeholder="Enter Input"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Add Task
            </button>

  </form>
        </div>
  )
}

export default CreateTask