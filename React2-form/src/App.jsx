import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    email:""
  });

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  console.log(formData.name);
  console.log(formData.email);

  return (
    <div className='min-h-dvh bg-black text-white'>
      <div>
        <form action="">
          <input name='name' onChange={handleChange} value={formData.name} type="text" placeholder='Name'/>
          <input name='email' onChange={handleChange} value={formData.email} type="text" placeholder='Email'/>
        </form>
      </div>
    </div>
  )
}

export default App