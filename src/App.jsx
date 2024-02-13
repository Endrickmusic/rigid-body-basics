import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

import './App.css'

import Cube from './Cube.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Canvas
    camera={{ 
      position: [4.5, 2.5,5.5],
      fov: 40 }}  
    >
      <color attach="background" args={['#b1a3c2']} />
      <Cube />
    </Canvas>
  </>
  )
}

export default App
