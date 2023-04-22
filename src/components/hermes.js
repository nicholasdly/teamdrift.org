/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("hermes.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 43.4, 0]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_1.geometry}
          material={materials["Paint_-_Metallic_(Silver)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_2.geometry}
          material={materials["Paint_-_Metallic_(Black)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_3.geometry}
          material={materials["Paint_-_Enamel_Glossy_(Yellow)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_4.geometry}
          material={materials["Powder_Coat_(Green)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_5.geometry}
          material={materials["Coating_-_Black_Oxide"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_6.geometry}
          material={materials["Opaque(165,132,0)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_7.geometry}
          material={materials["Bamboo_Light_-_Semigloss"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_8.geometry}
          material={materials["Carbon_Fiber_-_Plain"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_9.geometry}
          material={materials["Steel_-_Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_10.geometry}
          material={materials["LED_(Green)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_11.geometry}
          material={materials["Plastic_-_Matte_(Yellow)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_12.geometry}
          material={
            materials["PA_12_-_Nylon_-_PA_603-CF_(with_EOS_P_3D_Printers)"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_13.geometry}
          material={materials["Paint_-_Metallic_(Green)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_14.geometry}
          material={materials["Paint_-_Metallic_(Red)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_15.geometry}
          material={materials["Aluminum_-_Anodized_Rough_(Blue)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_16.geometry}
          material={materials["Powder_Coat_-_Rough_(Yellow)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_17.geometry}
          material={materials.PEEK}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_18.geometry}
          material={materials["Acrylic_(Clear)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_19.geometry}
          material={materials["Aluminum_-_Anodized_Rough_(Red)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_20.geometry}
          material={materials["Copper_-_Patina"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_21.geometry}
          material={materials["Paint_-_Enamel_Glossy_(Green)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_22.geometry}
          material={materials["Nylon_6-6_(White)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hermes_3D_Model_23.geometry}
          material={materials["Aluminum_-_Polished"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hermes.gltf");