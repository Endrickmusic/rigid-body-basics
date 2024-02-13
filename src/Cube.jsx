import { OrbitControls, RoundedBox } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import * as THREE from "three"


export default function Cube(){

  const normalM = useLoader(THREE.TextureLoader, "./textures/waternormals.jpeg"); 

  return (
    <>
      <OrbitControls />       
        <RoundedBox
          radius={0.01}
          >
          <meshNormalMaterial 
            metalness={1}
            roughness={0.12}
            normalMap={ normalM }
          />
       </RoundedBox>
    </>
  )}