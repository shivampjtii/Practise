import React from 'react'

const Form = () => {
  return (
    <div className='flex p-4'>
        <form action="" className='flex flex-col gap-4'>
            <input className='border rounded p-2' type="text" placeholder='Name' />
            <input className='border rounded p-2' type="email" placeholder='Email' />
            <input className='border rounded p-2' type="password" placeholder='Password' />
            <button className='border rounded p-2 cursor-pointer' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form