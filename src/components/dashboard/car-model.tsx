
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

interface GLTFResult extends GLTF {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.MeshStandardMaterial;
  };
}

const Model = () => {
  const { nodes, materials } = useGLTF(
    "/car.glb"
  ) as unknown as GLTFResult;

  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.body.geometry}
        material={materials.body}
        position={[0, 0.4, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        geometry={nodes.glass.geometry}
        material={materials.glass}
        position={[0, 0.4, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        geometry={nodes.wheels_front.geometry}
        material={materials.wheels}
        position={[0, 0.4, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        geometry={nodes.wheels_rear.geometry}
        material={materials.wheels}
        position={[0, 0.4, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
       <mesh
        geometry={nodes.lights_front.geometry}
        material={materials.lights_front}
        position={[0, 0.4, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
    </group>
  );
};


export function CarModel() {
    return (
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Model />
          <OrbitControls 
            enableZoom={false}
            enablePan={false} 
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 2.5}
            />
          <Environment preset="sunset" />
        </Canvas>
      );
}

useGLTF.preload('/car.glb');
