import React from 'react'
import MeshArray from '../MeshArray/MeshArray'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import {useSelector} from 'react-redux'
const SpawnPlatform = () => {
  const meshes = useSelector(({meshReducer}) => meshReducer);
  return (
    <>
      <Canvas
        children
        colorManagement
        shadowMap
        style={{ height: '88vh' }}
        camera={{ position: [0, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>

          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[20, 20]} />
            <meshStandardMaterial
              color='lightblue'
              attach='material'
              factor={0.6}
      />
            {/* <shadowMaterial attach='material' opacity={0.3} /> */}
          </mesh>
          
          <MeshArray meshes={meshes} />
        </group>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default SpawnPlatform
