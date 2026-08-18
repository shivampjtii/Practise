import React, { useState } from 'react'

const Form = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData((prev)=>({...prev, [name]: value}));
  }

  return (
    <div className='flex p-4'>
        <form action="" className='flex flex-col gap-4'>
            <input name='name' value={formData.name} onChange={handleChange} className='border rounded p-2' type="text" placeholder='Name' />
            <input name='email' value={formData.email} onChange={handleChange} className='border rounded p-2' type="email" placeholder='Email' />
            <input name='password' value={formData.password} onChange={handleChange} className='border rounded p-2' type="password" placeholder='Password' />
            <button className='border rounded p-2 cursor-pointer' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form