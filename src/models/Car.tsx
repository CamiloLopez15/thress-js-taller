/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
    nodes: {
        Cylinder018_Cylinder007: THREE.Mesh;
        Cylinder018_Cylinder007_1: THREE.Mesh;
    };
    materials: {
        Car: THREE.MeshStandardMaterial;
        Windshield: THREE.MeshStandardMaterial;
    };
};

export function Car(props: JSX.IntrinsicElements["group"]) {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials } = useGLTF(
      "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/zombie-car/model.gltf"
    ) as unknown as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={0.1}>
                <mesh
                    geometry={nodes.Cylinder018_Cylinder007.geometry}
                    material={materials.Car}
                />
                <mesh
                    geometry={nodes.Cylinder018_Cylinder007_1.geometry}
                    material={materials.Windshield}
                />
            </group>
        </group>
    );
}

useGLTF.preload(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/zombie-car/model.gltf"
);
