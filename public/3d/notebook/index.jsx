/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf 
Author: ISUS (https://sketchfab.com/ISUS41)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pc-in-apple-imac-style-df8163b56ada446fbfac3a9d43ea5256
Title: PC in Apple IMAC Style
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function NotebookModel(props) {
  const { nodes, materials } = useGLTF('/3d/notebook/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0,1,0]} scale={2}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.diannao} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.diannao} />
      </group>
    </group>
  )
}

useGLTF.preload('/3d/notebook/scene.gltf')
