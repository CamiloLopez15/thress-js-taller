import { RoundedBox } from "@react-three/drei";
export function Decorations() {
    return (
        <>
                {/* Decorations */}
                <RoundedBox
                    receiveShadow
                    castShadow
                    smoothness={10}
                    radius={0.015}
                    position={[-7, 1, 1.6]}
                    scale={[4.2, 2, 2]}
                >
                    {/* Es una caja con los bordes redondeados, estos se redondean con el atributo smoothness y radius*/}
                    <meshStandardMaterial
                        color="#f4ae00"
                        envMapIntensity={0.5}
                        roughness={0}
                        metalness={0}
                    />
                </RoundedBox>

                <mesh position={[5, 1, 5]}>
                    <icosahedronGeometry />
                    <meshStandardMaterial
                        color="#8e00f4"
                        envMapIntensity={0.8}
                        roughness={0.2}
                        metalness={1}
                    />
                </mesh>
                <mesh
                    receiveShadow
                    castShadow
                    rotation-x={-Math.PI / 2}
                    position={[8, 1.1, 2]}
                    scale={[2, 2, 2]}
                >
                    <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
                    <meshStandardMaterial
                        color="#2d2d2d"
                        envMapIntensity={0.5}
                        roughness={0}
                        metalness={0}
                        wireframe
                    />
                    {/* Wireframe muestra la superficie de la primitiva, los vertices */}
                </mesh>
        </>
    );
}
