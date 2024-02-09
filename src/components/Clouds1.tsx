/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: RandyGF (https://sketchfab.com/RandyGF)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cloud-3a76eb255e3c4c0199bbfedb2b54342f
Title: Cloud
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Clouds1(props) {
  const { nodes, materials } = useGLTF("../src/components/cloud.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Cloud} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Cloud} />
    </group>
  );
}

useGLTF.preload("../src/components/cloud.glb");
