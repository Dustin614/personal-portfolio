'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const LocationBanner = ({ location, opacity, isHovered }) => {
    const hoverOpacity = 1; // Full opacity when hovered
    const currentOpacity = isHovered ? hoverOpacity : opacity;

    return (
        <div
            style={{
                color: 'white',
                background: `rgba(0, 0, 0, ${currentOpacity})`,
                padding: '10px',
                borderRadius: '8px',
                border: `1px solid rgba(255, 255, 255, ${currentOpacity})`,
                transition: 'opacity 0.1s, background 0.1s, border 0.1s',
                opacity: currentOpacity
            }}
        >
            <span style={{ margin: 0, fontSize: '3em', paddingLeft: '20px', paddingRight: '20px' }}>{location}</span>
        </div>
    );
};

const Scene = ({ lightRef, isHovered }) => {
    const sphereRef = useRef();
    const textRef = useRef();
    const [rotation, setRotation] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const { camera } = useThree();

    useFrame((state, delta) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y += 0.005;
            setRotation(prev => prev + 0.002);
        }

        if (textRef.current) {
            const distance = camera.position.distanceTo(textRef.current.position);
            const maxDistance = 2;
            const minOpacity = .5;
            const newOpacity = Math.max(minOpacity, 1 - (distance / maxDistance));
            setOpacity(newOpacity);
        }
    });

    const radius = 1.5;

    return (
        <>
            <PerspectiveCamera makeDefault position={[-.4, .5, 2]} />
            <pointLight ref={lightRef} position={[-2, 3, 2]} intensity={1} />
            <mesh ref={sphereRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial color="white" wireframe transparent opacity={0.5} />
            </mesh>
            <group ref={textRef}>
                <Html
                    position={[
                        Math.sin(rotation) * radius + .5,
                        .3,
                        Math.cos(rotation) * radius
                    ]}
                    transform
                    occlude
                    center
                    scale={.05}
                >
                    <LocationBanner location="Germany" opacity={opacity} isHovered={isHovered} />
                </Html>
            </group>
        </>
    );
};

const LocationScene = () => {
    const lightRef = useRef();
    const [isLightReady, setIsLightReady] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (lightRef.current) {
            setIsLightReady(true);
        }
    }, [lightRef.current]);

    const fadeLight = (targetIntensity, duration) => {
        if (!lightRef.current) return;

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
            onMouseOver={() => {
                isLightReady && fadeLight(15, 800);
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                isLightReady && fadeLight(1, 800);
                setIsHovered(false);
            }}
        >
            <Canvas>
                <Scene lightRef={lightRef} isHovered={isHovered} />
            </Canvas>
        </div>
    );
};

export default LocationScene;