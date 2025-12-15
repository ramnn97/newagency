import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { gsap } from 'gsap';

interface BallpitProps {
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  followCursor?: boolean;
}

const Ballpit: React.FC<BallpitProps> = ({
  count = 200,
  gravity = 0.7,
  friction = 0.8,
  wallBounce = 0.95,
  followCursor = true
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const ballsRef = useRef<THREE.InstancedMesh | null>(null);
  const positionsRef = useRef<Float32Array | null>(null);
  const velocitiesRef = useRef<Float32Array | null>(null);
  const sizesRef = useRef<Float32Array | null>(null);
  const mousePositionRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize Three.js components
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0.2); // Semi-transparent background
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Create balls with more vibrant colors
    const geometry = new THREE.SphereGeometry(0.1, 32, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(Math.random() * 0xffffff),
      metalness: 0.3,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9,
    });

    const balls = new THREE.InstancedMesh(geometry, material, count);
    scene.add(balls);
    ballsRef.current = balls;

    // Initialize positions, velocities, and sizes
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3); // RGB colors

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      
      // Random positions within a larger space
      positions[idx] = (Math.random() - 0.5) * 15;
      positions[idx + 1] = (Math.random() - 0.5) * 15;
      positions[idx + 2] = (Math.random() - 0.5) * 15;
      
      // Random velocities
      velocities[idx] = (Math.random() - 0.5) * 0.2;
      velocities[idx + 1] = (Math.random() - 0.5) * 0.2;
      velocities[idx + 2] = (Math.random() - 0.5) * 0.2;
      
      // Random sizes
      sizes[i] = Math.random() * 0.2 + 0.1;
      
      // Random colors
      colors[idx] = Math.random(); // R
      colors[idx + 1] = Math.random(); // G
      colors[idx + 2] = Math.random(); // B
    }

    positionsRef.current = positions;
    velocitiesRef.current = velocities;
    sizesRef.current = sizes;

    // Set initial colors for balls
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      color.setRGB(colors[idx], colors[idx + 1], colors[idx + 2]);
      balls.setColorAt(i, color);
    }
    balls.instanceColor!.needsUpdate = true;

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      if (!cameraRef.current || !mountRef.current) return;
      
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      mousePositionRef.current.set(x, y, 0);
      mousePositionRef.current.unproject(cameraRef.current);
    };

    if (followCursor) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (!ballsRef.current || !positionsRef.current || !velocitiesRef.current || !sizesRef.current) return;
      
      // Update ball positions
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        
        // Apply gravity
        velocitiesRef.current[idx + 1] -= gravity * 0.01;
        
        // Apply friction
        velocitiesRef.current[idx] *= friction;
        velocitiesRef.current[idx + 1] *= friction;
        velocitiesRef.current[idx + 2] *= friction;
        
        // Update positions
        positionsRef.current[idx] += velocitiesRef.current[idx];
        positionsRef.current[idx + 1] += velocitiesRef.current[idx + 1];
        positionsRef.current[idx + 2] += velocitiesRef.current[idx + 2];
        
        // Wall collisions (larger bounds)
        const size = sizesRef.current[i];
        const bounds = 7;
        
        if (positionsRef.current[idx] > bounds - size || positionsRef.current[idx] < -bounds + size) {
          velocitiesRef.current[idx] *= -wallBounce;
          positionsRef.current[idx] = positionsRef.current[idx] > 0 ? bounds - size : -bounds + size;
        }
        
        if (positionsRef.current[idx + 1] > bounds - size || positionsRef.current[idx + 1] < -bounds + size) {
          velocitiesRef.current[idx + 1] *= -wallBounce;
          positionsRef.current[idx + 1] = positionsRef.current[idx + 1] > 0 ? bounds - size : -bounds + size;
        }
        
        if (positionsRef.current[idx + 2] > bounds - size || positionsRef.current[idx + 2] < -bounds + size) {
          velocitiesRef.current[idx + 2] *= -wallBounce;
          positionsRef.current[idx + 2] = positionsRef.current[idx + 2] > 0 ? bounds - size : -bounds + size;
        }
        
        // Mouse interaction
        if (followCursor) {
          const dx = mousePositionRef.current.x - positionsRef.current[idx];
          const dy = mousePositionRef.current.y - positionsRef.current[idx + 1];
          const dz = mousePositionRef.current.z - positionsRef.current[idx + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < 2) {
            const force = (2 - distance) * 0.02;
            velocitiesRef.current[idx] += dx * force;
            velocitiesRef.current[idx + 1] += dy * force;
            velocitiesRef.current[idx + 2] += dz * force;
          }
        }
        
        // Update instanced matrix
        const matrix = new THREE.Matrix4();
        matrix.setPosition(
          positionsRef.current[idx],
          positionsRef.current[idx + 1],
          positionsRef.current[idx + 2]
        );
        ballsRef.current.setMatrixAt(i, matrix);
      }
      
      if (ballsRef.current) {
        ballsRef.current.instanceMatrix.needsUpdate = true;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (mountRef.current && rendererRef.current?.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [count, gravity, friction, wallBounce, followCursor]);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1
      }}
    />
  );
};

export default Ballpit;