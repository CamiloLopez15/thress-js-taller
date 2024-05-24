import { useEffect, useState } from "react";

// import * as THREE from "three";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function VideoPlane({ videoUrl, ...props }: any) {
    const [video, setVideo] = useState<HTMLVideoElement | null>(null);

    useEffect(() => {
        const videoElement = Object.assign(document.createElement("video"), {
            src: videoUrl,
            crossOrigin: "anonymous",
            muted: true,
            loop: true,
        });

        videoElement.addEventListener('error', (e) => {
            console.error('Error loading video:', e);
        });

        videoElement.addEventListener('loadeddata', () => {
            videoElement.play().catch(error => {
                console.error('Error playing video:', error);
            });
        });

        setVideo(videoElement);
    }, [videoUrl]);

    if (!video) return null;
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
