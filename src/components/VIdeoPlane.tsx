import { useEffect, useState } from "react";

// import * as THREE from "three";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function VideoPlane({ videoUrl, ...props }: any) {
    const [video] = useState(() =>
        // Object.assign permite copiar propiedades de uno o más objetos fuente a un objeto destino.
        // Aquí, se crea un elemento de video y se le asignan varias propiedades.
        Object.assign(document.createElement("video"), {
            src: videoUrl, // La fuente del video, que es una prop que se pasa al componente.
            crossOrigin: "anonymous", // Configura el atributo crossOrigin para permitir cargar recursos de diferentes dominios.
            muted: true, // Se muestra el video sin sonido.
            loop: true, // El video se reproducirá en bucle continuamente.
        })
    )

    useEffect(() => {
        video.play();
    }, [video]);
    return (
        <>
            <mesh
                castShadow
                receiveShadow
                position={[0, 5, 0.51]}
                scale={[16, 9, 1]}
                {...props}
            >
                <planeGeometry />
                {/* Es un plano o una pared, no tiene grosor, no tiene volumen */}
                {/* <meshStandardMaterial
                    color="#f00"
                    envMapIntensity={0.5}
                    roughness={0.2}
                    metalness={0.8}
                /> */}
                <meshBasicMaterial>
                  <videoTexture attach="map" args={[video]} />
                </meshBasicMaterial>
            </mesh>
        </>
    );
}
