"use client"

import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';

const MyReactComponent = ({location}) => {
    return (
        <div style={{ color: 'black', background: 'white', padding: '20px', borderRadius: '8px' }}>
            <h2>You are in {location}</h2>
            <p>This is your location content rendered in 3D space.</p>
        </div>
    );
};

const LocationScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Create scene, camera, and renderers
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        const cssRenderer = new CSS3DRenderer();

        if (mountRef.current) {
            const { clientWidth, clientHeight } = mountRef.current;

            // Set size of renderers
            renderer.setSize(clientWidth, clientHeight);
            cssRenderer.setSize(clientWidth, clientHeight);

            mountRef.current.appendChild(renderer.domElement);
            mountRef.current.appendChild(cssRenderer.domElement); // Append CSS3DRenderer

            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
        }

        // Create a cube and add to the scene
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshPhongMaterial({
            color: 'white',
            wireframe: true,
            transparent: true,
            opacity: 0.5,
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Add a light
        const light = new THREE.PointLight(0xffffff, 5);
        light.position.set(-1, 2, 2);
        scene.add(light);

        // Camera settings
        camera.position.set(0, 0.8, 2); // Position camera at z = 2, y = 0.8

        // Create the HTML element for the React component
        const reactDiv = document.createElement('div');
        reactDiv.style.width = '200px';
        reactDiv.style.height = 'auto';

        // Render the React component inside the div using ReactDOM
        const root = ReactDOM.createRoot(reactDiv);
        root.render(<MyReactComponent location="Germany" />);

        // Create a CSS3DObject from the React component's DOM element
        const cssObject = new CSS3DObject(reactDiv);

        // Position it in front of the camera along the Z-axis
        cssObject.position.set(0, 1, -200); // Adjust the Z value to move it forward/backward

        // Add CSS3DObject to the scene
        //scene.add(cssObject);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the cube
            cube.rotation.y += 0.005;

            // Render both the WebGL and CSS3D scenes
            renderer.render(scene, camera);
            cssRenderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
                mountRef.current.removeChild(cssRenderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default LocationScene;
