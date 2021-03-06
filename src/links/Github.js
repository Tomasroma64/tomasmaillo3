/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/links/github.gltf");
  return (
    <mesh
      ref={group}
      scale={0.13}
      dispose={null}
      rotation={[Math.PI / 2, 0, 0]}
      {...props}
      geometry={nodes.Plane.geometry}
      material={nodes.Plane.material}
    >
      <meshBasicMaterial color={"#111111"} />
    </mesh>
  );
}

useGLTF.preload("/github.gltf");
