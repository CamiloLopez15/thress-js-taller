import {
    Environment,
    GizmoHelper,
    GizmoViewport,
    OrbitControls,
    Stars,
} from "@react-three/drei";

import { Decorations, VideoPlane } from "@/components";
import { Car, Mago } from "@/models";
import { Suspense } from "react";

export function HomeScene() {
    return (
        <>
            <OrbitControls />
            {/* // Definimos el controlador de rotación */}
            {/* Lights */}
            <pointLight
                position={[10, 15, 15]} // Define la posición de la luz en el espacio 3D
                color="#570c0c" // Establece el color de la luz
                castShadow // Habilita la capacidad de la luz para proyectar sombras
                intensity={5} // Ajusta la intensidad de la luz
                shadow-camera-near={0.1} // Establece el plano más cercano de la cámara de sombras
                shadow-camera-far={200} // Establece el plano más lejano de la cámara de sombras
                shadow-camera-left={-20} // Límite izquierdo del frustum de la cámara de sombras
                shadow-camera-right={20} // Límite derecho del frustum de la cámara de sombras
                shadow-camera-top={20} // Límite superior del frustum de la cámara de sombras
                shadow-camera-bottom={-20} // Límite inferior del frustum de la cámara de sombras
                shadow-mapSize-width={1024} // Define el ancho del mapa de sombras
                shadow-mapSize-height={1024} // Define la altura del mapa de sombras
            />
            <directionalLight
                position={[10, 15, 15]} // Define la posición de la luz en el espacio 3D
                color="#570c0c" // Establece el color de la luz
                castShadow // Habilita la capacidad de la luz para proyectar sombras
                intensity={5} // Ajusta la intensidad de la luz
                shadow-camera-near={0.1} // Establece el plano más cercano de la cámara de sombras
                shadow-camera-far={200} // Establece el plano más lejano de la cámara de sombras
                shadow-camera-left={-20} // Límite izquierdo del frustum de la cámara de sombras
                shadow-camera-right={20} // Límite derecho del frustum de la cámara de sombras
                shadow-camera-top={20} // Límite superior del frustum de la cámara de sombras
                shadow-camera-bottom={-20} // Límite inferior del frustum de la cámara de sombras
                shadow-mapSize-width={1024} // Define el ancho del mapa de sombras
                shadow-mapSize-height={1024} // Define la altura del mapa de sombras
            />
            <color attach="background" args={["#000"]} />
            {/* // Definimos el color
            de fondo de la pantalla // Definimos el canvas en el que se muestra
            la pantalla */}
            <Environment preset="city" />
            {/*// Definimos el ambiente en el que se
            muestra la pantalla // Atributo Background muestra un fondo en el
            cual se está sacando la luz, estos son HDRI // Atributo preset
            define el fondo de donde se saca la luz, estos son HDRI // Atributo
            files es similar a preset pero acepta un array de archivos y
            nosotros escogemos el que queremos usar para el HDRI */}
            {/* <ambientLight intensity={0.5} /> // Definimos la luz ambiente y su intensidad*/}
            <group position={[0, -3, 0]}>
                {/* // Es como el div en HTML, pero con un aspecto 3D, nos permite agrupar meshes */}

                <VideoPlane videoUrl="/suiza.mp4" />
                <VideoPlane
                    videoUrl="/suiza.mp4"
                    position={[0, 5, -0.51]}
                    rotation-y={Math.PI} /* Rotar 180° en el eje Y */
                />

                {/* Video wall */}
                <mesh position={[0, 5, 0]}>
                    {/* // Mesh tiene tres atributos, position, rotation y scale Sirve para crear un elemento 3D */}
                    <boxGeometry args={[17, 10, 1]} />
                    {/* // Definimos el tamaño de la caja o de la elemento */}
                    <meshStandardMaterial
                        color="black"
                        envMapIntensity={0.5}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
                {/* Base */}
                <mesh position={[0, -5, 0]}>
                    <cylinderGeometry args={[10, 10, 10, 64]} />
                    {/* // Las características de cada objeto primitivo 3D como la
                    altura y otros // se pasan como elementos de un array en el
                    atributo args. */}
                    <meshStandardMaterial
                        color="black"
                        roughness={0}
                        metalness={0}
                        envMapIntensity={0.5}
                    />
                    {/* // Atributos: // args: Array de elementos que definen la
                    forma de la primitiva // color: Color de la primitiva //
                    roughness: la rugosidad de la primitiva, valores entre 0 y 1
                    // metalness: Factor de metalización de la primitiva,
                    valores entre 0 y 1 // envMapIntensity: Intensidad de la luz
                    de la envío, que tanto refleja del mapa HDRI, valores entre
                    0 y 1 // bumpScale: Factor de elevación de la primitiva,
                    valores entre 0 y 1 // displacementScale: Factor de
                    desplazamiento de la primitiva, valores entre 0 y 1 */}
                </mesh>

                <Car position={[-5, 1, -4]} rotation-y={Math.PI} scale={2} />
                <Suspense fallback={null}>
                    <Mago
                        position={[5, 0, -4]}
                        rotation-y={Math.PI}
                        scale={2}
                    />
                </Suspense>
                <Decorations />
            </group>
            <Stars
                radius={50}
                depth={50}
                count={5000}
                factor={20}
                saturation={1}
                fade={true}
                speed={1}
            />
            {/* // Definimos los estrellas */}

            {/* Ver rotaciones en THREE.js */}
            <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
                <GizmoViewport
                    axisColors={["red", "green", "blue"]}
                    labelColor="black"
                />
            </GizmoHelper>
        </>
    );
}
