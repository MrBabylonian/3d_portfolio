import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky_scene.glb";
// import { SkyGUI } from "../ModelGUI/SkyGUI.jsx";

export function Sky({ isIslandMoving, isRotating, ...props }) {
  const { nodes, materials } = useGLTF(skyScene);
  const skyRef = useRef();

  const rotationSpeed = useRef(0.1 * Math.PI);
  const dampingFactor = 0.99;

  useFrame((_, delta) => {
    if (isRotating) {
      rotationSpeed.current = 0.1 * Math.PI;
      skyRef.current.rotation.y += rotationSpeed.current * delta;
    } else {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001 | !isIslandMoving) {
        rotationSpeed.current = 0;
      }
      skyRef.current.rotation.y += rotationSpeed.current * delta;
    }
  });

  /*   SkyGUI((gui) => {
    const skyRotation = gui.addFolder("Rotation");
    skyRotation.add(skyRef.current.rotation, "x", 0, Math.PI * 2, 0.01);
    skyRotation.add(skyRef.current.rotation, "y", 0, Math.PI * 2, 0.01);
    skyRotation.add(skyRef.current.rotation, "z", 0, Math.PI * 2, 0.01);

    const skyScale = gui.addFolder("Scale");
    skyScale.add(skyRef.current.scale, "x", 1, 500, 1).name("uniform scale");
  }); */

  return (
    <group ref={skyRef} {...props} dispose={null}>
      3
      <group>
        <mesh
          castShadow={true}
          receiveShadow={true}
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

export default Sky;

useGLTF.preload(skyScene);
