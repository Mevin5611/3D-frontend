import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import axios from '../axios';  // Import the Axios instance

const Model = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

const ModelViewer = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const res = await axios.get('https://threed-backend-iknx.onrender.com/models');
        setModels(res.data);
      } catch (err) {
        console.error('Error fetching models:', err);
      }
    };
    fetchModels();
  }, []);

  return (
    <div>
      {models.map((model) => (
        <div key={model._id} style={{ marginBottom: '10px', marginTop: '10px' }} className=' bg-white shadow-md rounded-md h-[400px]'>
          <h3 className='text-center font-bold text-2xl'>{model.name}</h3>
          <Canvas className='h-full' >
            <ambientLight intensity={1.5} />
            <pointLight position={[0, 0, 0]} />
            <OrbitControls target={[0, 0, 0]} />
            <Model path={`https://threed-backend-iknx.onrender.com/${model.model}`} />
          </Canvas>
        </div>
      ))}
    </div>
  );
};

export default ModelViewer;
