import { OrbitControls, RoundedBox, Box, useTexture } from "@react-three/drei"
import {  } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import * as THREE from "three"


export default function Cube(){

  const [normalMap01, normalMap02, roughnessMap] = useTexture([
    "./textures/waternormals.jpeg",
    "./textures/SurfaceImperfections003_1K_Normal.jpg",
    "./textures/SurfaceImperfections003_1K_var1.jpg"]) 

  return (
    <>
      <OrbitControls /> 

      <directionalLight />

        <RigidBody type='fixed'>
          <Box 
          args={[10, 0.2, 10]}>
            <meshStandardMaterial 
            color={'#ccc'}
            normalMap={normalMap02}
            roughnessMap={roughnessMap}
            />
          </Box>
        </RigidBody>

      <RigidBody>      
        <RoundedBox
          radius={0.01}
          position={[0, 3, 0]}
          >
          <meshNormalMaterial 
            metalness={1}
            roughness={0.12}
            normalMap={ normalMap01 }
          />
       </RoundedBox>
      </RigidBody>
    </>
  )}