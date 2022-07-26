/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/80s_Draco.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      {/* <mesh geometry={nodes.Icosphere.geometry} material={nodes.Icosphere.material} position={[-0.44, 0, 0]} />
      <mesh geometry={nodes.Island009.geometry} material={nodes.Island009.material} /> */}
      {/* <mesh
        geometry={nodes.Plane.geometry}
        material={materials['Material.003']}
        rotation={[0, Math.PI / 2, 0]}
        scale={8}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials['Material.001']}
        rotation={[0, Math.PI / 2, 0]}
        scale={8}
      /> */}
      {/* <mesh geometry={nodes.Island001.geometry} material={nodes.Island001.material} position={[0, 0, 0]} /> */}
      <mesh
        geometry={nodes.Island013.geometry}
        material={materials['mt_palette_main.003']}
        position={[0, 0, -5.54]}
        scale={2.13}
      />
    </group>
  )
}

useGLTF.preload('/80s_Draco.glb')
