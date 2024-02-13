import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useControls, Leva } from 'leva'

import './App.css'

import Cube from './Cube.jsx'

function App() {
  const [count, setCount] = useState(0)

  const config = useControls('Controls', {
    backgroundColor : '#ffffff'
  })

  return (
  <>
    <Leva collapsed/>
    <Canvas
    camera={{ 
      position: [4.5, 2.5,5.5],
      fov: 40 }}  
    >
      <color attach="background" args={[config.backgroundColor]} />
      <Cube />
    </Canvas>
  </>
  )
}

export default App
