/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: 0418.rick (https://sketchfab.com/0418.rick)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/vaporwave-mountains-655309efbf7647f9a6f573a1196cfdc9
title: Vaporwave Mountains
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mountains_Draco.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={8}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
          </group>
          <group scale={8}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} />
          </group>
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} position={[-15,0, 0]}>
          <group scale={8}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
          </group>
          <group scale={8}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mountains_Draco.glb')
