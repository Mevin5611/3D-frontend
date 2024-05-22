// src/components/Upload.js
import React, { useState } from 'react';
import axios from '../axios';  // Import the Axios instance

const Upload = () => {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('model', file);

    try {
      await axios.post('https://threed-backend-iknx.onrender.com/upload', formData);
      alert('Model uploaded successfully');
    } catch (err) {
      console.error(err);
      alert('Error uploading model');
    }
  };

  return (
    <form onSubmit={onSubmit} className='bg-white shadow-md p-4 rounded-md h-[250px] w-[250px] text-center '>
      <h3 className='font-bold'>Upload 3D Model</h3>
      <input
        type="text"
        placeholder="Model Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className='border rounded-md p-1 w-[200px] mt-3'
      />
      <input
        type="file"
        onChange={onFileChange}
        accept=".glb"
        required
        className='border rounded-md p-1 w-[200px] mt-2'
      />
      <button className='border rounded-md p-1 w-[200px] mt-10 bg-green-500 text-white' type="submit">Upload</button>
    </form>
  );
};

export default Upload;
