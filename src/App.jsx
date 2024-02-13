import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

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
      <Suspense>  
        <Physics>
          <Cube />
        </Physics>
      </Suspense>
    </Canvas>
  </>
  )
}

export default App
