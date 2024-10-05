'use client'; // Client-side rendering mode for Next.js or similar frameworks

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';

const MyReactComponent = ({ location }) => {
    return (
        <div style={{ color: 'white', background: 'gray', padding: '20px', borderRadius: '8px', border: '1px solid white' }}>
            <h2>You are in {location}</h2>
            <p>This is your location content rendered in 3D space.</p>
        </div>
    );
};

const Scene = ({ lightRef }) => {
    const sphereRef = useRef();

    useFrame(() => {
        sphereRef.current.rotation.y += 0.005;
    });

    return (
        <>
            <pointLight ref={lightRef} position={[-1, 2, 2]} intensity={1} />
            <mesh ref={sphereRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial color="white" wireframe transparent opacity={0.5} />
            </mesh>

            <Html position={[0, 0, 0]} transform>
                <MyReactComponent location="Germany" />
            </Html>
        </>
    );
};

const LocationScene = () => {
    const lightRef = useRef();
    const [isLightReady, setIsLightReady] = useState(false);

    useEffect(() => {
        // When the lightRef is populated, mark it as ready
        if (lightRef.current) {
            setIsLightReady(true);
        }
    }, [lightRef.current]);

    const fadeLight = (targetIntensity, duration) => {
        if (!lightRef.current) return; // Ensure the light is initialized

        const startIntensity = lightRef.current.intensity;
        const startTime = performance.now();

        const animateFade = (time) => {
            const elapsed = time - startTime;
            const fraction = Math.min(elapsed / duration, 1);
            lightRef.current.intensity = startIntensity + (targetIntensity - startIntensity) * fraction;

            if (fraction < 1) {
                requestAnimationFrame(animateFade);
            }
        };

        requestAnimationFrame(animateFade);
    };

    return (
        <div
            style={{ position: 'relative', width: '100%', height: '100%' }}
            onMouseOver={() => isLightReady && fadeLight(15, 800)}
            onMouseLeave={() => isLightReady && fadeLight(1, 800)}
        >
            <Canvas>
                {/*<ambientLight intensity={0.5} />*/}
                <Scene lightRef={lightRef} />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default LocationScene;
