"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

// Nebula component with custom shader
function Nebula({ position, color, scale = 1, rotation = [0, 0, 0] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  )
}

// Planet in the distance
function Planet() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -5, -100]}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color="#1e3a8a" emissive="#0c4a6e" emissiveIntensity={0.2} roughness={0.7} />
    </mesh>
  )
}

// Main scene component
function Scene() {
  const { camera } = useThree()
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY / window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useFrame((state, delta) => {
    // Parallax camera movement based on scroll
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -scrollY * 2, 0.1)
  })

  return (
    <>
      <color attach="background" args={["#0A0A0A"]} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={60} />

      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      {/* Stars with different layers for parallax */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
      <Stars radius={50} depth={30} count={3000} factor={2} saturation={1} fade={false} />

      {/* Nebulas */}
      <Nebula position={[-10, 5, -30]} color="#6C1EDF" scale={8} />
      <Nebula position={[15, -8, -40]} color="#2DD4BF" scale={10} rotation={[0.5, 0.2, 0]} />
      <Nebula position={[0, 20, -60]} color="#6C1EDF" scale={15} />

      {/* Distant planet */}
      <Planet />
    </>
  )
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}
