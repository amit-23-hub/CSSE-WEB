import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [data, setData] = useState({ name: '', username: '', collegeName:"",password: '', confirmpass: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmpass) {
      alert('Passwords do not match!');
      return;
    }
    axios.post('http://localhost:5000/userauth/signuser', data)
      .then(response => {
        console.log(response.data);
        setSubmittedData(response.data.user);
      })
      .catch(err => console.log(err));
  };

  console.log(data);

  return (
    <div class="relative min-h-screen  grid dark:bg-gray-950 ">
    <div class=" text-center">
    
    <div className='flex items-center justify-center'>
    <div className='bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10'>
      <form onSubmit={handleSubmit}>
        <h3 className='font-bold text-lg text-white'>SIGN UP</h3>
        <input
          type='text'
          placeholder='Name'
          className='infoInput  border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white '
          name='name'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Username'
          className='infoInput  border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white'
          name='username'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Collage name'
          className='infoInput  border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white'
          name='collegeName'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          className='infoInput  border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white'
          name='password'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          className='infoInput  border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white '
          name='confirmpass'
          
          onChange={handleChange}
        />
        <button  type="submit" className=" mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
SIGN UP
</span>
</button>
      </form>
      
      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Username: {submittedData.username}</p>
        </div>
      )}
    </div>
    </div>
    </div>
    </div>
    
    
  );
};

export default Auth;
