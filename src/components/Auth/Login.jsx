import React, { useState } from 'react'



const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Submitted");
    console.log("email is", email);
    console.log("password is",password);
    
     
    setemail('')
    setpassword('')
    
    
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
      
      <div className='border-2 border-red-600 p-10 rounded-xl'>
        
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col gap-6 w-80'>

          <input
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
            
            
          }}
          required
            type="email"
            placeholder='Enter email'
            className='text-white placeholder-gray-300 
                       bg-white/10 border-2 border-emerald-500 
                       outline-none text-lg py-3 px-4 rounded-lg'
          />

          <input
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
            
            
          }}
          required
            type="password"
            placeholder='Enter password'
            className='text-white placeholder-gray-300 
                       bg-white/10 border-2 border-emerald-500 
                       outline-none text-lg py-3 px-4 rounded-lg'
          />

          <button
            className='bg-emerald-600 hover:bg-emerald-700 
                       text-white py-3 rounded-lg text-lg font-semibold'>
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login
