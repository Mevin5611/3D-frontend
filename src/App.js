import React from 'react';
import Upload from './components/Upload';
import ModelViewer from './components/ModelViewer';

const App = () => {
  return (
    <div>
      <h1 className='text-4xl text-center mt-5 font-bold'>3D Models</h1>
      <div className='grid grid-cols-12 mt-10'>
      <div className='col-span-3 ms-5 '>
      <div className='fixed'>
      <Upload />
      </div>
      </div>
      <div className='col-span-9'>
      <ModelViewer />
      </div>
      </div>
    </div>
  )
}

export default App;
