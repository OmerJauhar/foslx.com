"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Text3D } from "@react-three/drei"
import type * as THREE from "three"
import { gsap } from "gsap"
import { TypeAnimation } from "react-type-animation"

export function Terminal3D({ position, rotation, scale }) {
  const terminalRef = useRef<THREE.Group>(null)
  const cubeRef = useRef<THREE.Mesh>(null)

  // Animation for the wireframe cube
  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.5
      cubeRef.current.rotation.x += delta * 0.2
    }

    if (terminalRef.current) {
      // Subtle floating animation
      terminalRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <group ref={terminalRef} position={position} rotation={rotation} scale={scale}>
      {/* Terminal Frame */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[3, 1.8, 0.1]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.8}
          roughness={0.2}
          emissive="#a855f7"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[2.8, 1.6]} />
        <meshBasicMaterial color="#0A0A0A" />
      </mesh>

      {/* Glowing Edges */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[2.9, 1.7, 0.01]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.8} wireframe={true} />
      </mesh>

      {/* 3D Wireframe Cube */}
      <mesh ref={cubeRef} position={[-1.1, 0, 0.2]} scale={0.2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#3b82f6" wireframe={true} />
      </mesh>

      {/* Status Text */}
      <Text3D
        position={[0, -0.7, 0.2]}
        size={0.08}
        height={0.01}
        curveSegments={4}
        bevelEnabled={false}
        font="/fonts/Geist_Regular.json"
      >
        FOSL X v2.3.8 | SYSTEMS: NOMINAL | AGENTS DEPLOYED: 1,024+
        <meshBasicMaterial color="#3b82f6" />
      </Text3D>

      {/* Mission Active Tag */}
      <mesh position={[0.8, 0.2, 0.2]}>
        <planeGeometry args={[0.8, 0.15]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.7} />
      </mesh>

      <Text3D
        position={[0.5, 0.2, 0.25]}
        size={0.06}
        height={0.01}
        curveSegments={4}
        bevelEnabled={false}
        font="/fonts/Geist_Regular.json"
      >
        // MISSION_ACTIVE
        <meshBasicMaterial color="#FFFFFF" />
      </Text3D>
    </group>
  )
}

export default function TerminalInterface() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isDeploying, setIsDeploying] = useState(false)
  const [deployProgress, setDeployProgress] = useState(0)

  // Only render particles after hydration to avoid hydration mismatch
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => { setHasMounted(true) }, [])
  const particles = useMemo(() => {
    if (!hasMounted) return []
    return Array.from({ length: 20 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5,
      duration: Math.random() * 10 + 5,
    }))
  }, [hasMounted])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isDeploying) {
      const interval = setInterval(() => {
        setDeployProgress((prev) => {
          const newProgress = prev + 5
          if (newProgress >= 100) {
            clearInterval(interval)
            setTimeout(() => setIsDeploying(false), 1000)
            return 100
          }
          return newProgress
        })
      }, 50)

      return () => clearInterval(interval)
    }
  }, [isDeploying])

  const handleTerminalClick = () => {
    if (!isDeploying) {
      setIsDeploying(true)
      setDeployProgress(0)
    }
  }

  const handleTerminalHover = (entering: boolean) => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        boxShadow: entering
          ? "0 0 20px 2px #a855f7, inset 0 0 10px 1px #a855f7"
          : "0 0 10px 1px #a855f7, inset 0 0 5px 0.5px #a855f7",
        duration: 0.3,
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[400px] sm:max-w-[600px] aspect-[16/9] mx-auto my-8 cursor-pointer transition-transform"
      onClick={handleTerminalClick}
      onMouseEnter={() => handleTerminalHover(true)}
      onMouseLeave={() => handleTerminalHover(false)}
      style={{
        perspective: "1000px",
        transform: isVisible ? "rotateX(10deg)" : "rotateX(20deg)",
        transformStyle: "preserve-3d",
        boxShadow: "0 0 10px 1px #a855f7, inset 0 0 5px 0.5px #a855f7",
        transition: "transform 0.5s ease-out",
      }}
    >
      {/* Terminal Frame */}
      <div
        className="absolute inset-0 bg-[#111111] border-2 border-[#a855f7] rounded-md overflow-hidden"
        style={{
          boxShadow: "inset 0 0 20px rgba(168, 85, 247, 0.3)",
          transform: isVisible ? "translateZ(0)" : "translateZ(-20px)",
          transition: "transform 0.5s ease-out",
        }}
      >
        {/* Terminal Header with Dots */}
        <div className="h-5 sm:h-6 w-full bg-black/80 flex items-center px-2 sm:px-3 border-b border-purple-900/30">
          <div className="flex space-x-1.5 sm:space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/70"></div>
          </div>
        </div>

        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-0 bg-scanline opacity-10"></div>
        </div>

        {/* Floating Particles (client-only) */}
        {hasMounted && (
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-[#a855f7]"
                style={{
                  top: `${p.top}%`,
                  left: `${p.left}%`,
                  opacity: p.opacity,
                  animation: `float ${p.duration}s linear infinite`,
                }}
              />
            ))}
          </div>
        )}

        {/* Terminal Content */}
        <div className="p-4 sm:p-6 font-mono text-white h-full text-xs sm:text-sm">
          <div className="mb-1 sm:mb-2">
            <span className="text-[#3b82f6]">&gt; FOSL X TERMINAL // [SYSTEM READY]</span>
          </div>
          <div className="mb-2 sm:mb-4">
            <span className="text-[#3b82f6]">&gt; LOADING CORE DIRECTIVES...</span>
          </div>

          {isVisible && (
            <div className="space-y-1">
              <div>
                <TypeAnimation sequence={["const foslX = {", 500]} speed={50} wrapper="div" cursor={false} repeat={0} />
              </div>

              <div className="pl-2 sm:pl-4">
                <TypeAnimation
                  sequence={[500, "expertise: 'web development & AI Agents',", 500]}
                  speed={50}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                />
                <span className="text-[#3b82f6] ml-1 sm:ml-2">// [✔] VERIFIED</span>
              </div>

              <div className="pl-2 sm:pl-4 focus-line group">
                <TypeAnimation
                  sequence={[1000, "focus: 'innovative solutions',", 500]}
                  speed={50}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                />
                <span className="text-[#3b82f6] ml-1 sm:ml-2">// [⚠] OVERRIDE: CREATIVITY=MAX</span>
              </div>

              <div className="pl-2 sm:pl-4">
                <TypeAnimation
                  sequence={[1500, "mission: 'help businesses grow'", 500]}
                  speed={50}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                />
                <span className="text-[#3b82f6] ml-1 sm:ml-2">// [⚡] EXECUTE</span>
              </div>

              <div>
                <TypeAnimation sequence={[2000, "};", 500]} speed={50} wrapper="div" cursor={false} repeat={0} />
              </div>

              <div className="mt-2 sm:mt-4">
                <TypeAnimation sequence={[2500, "foslX", 500]} speed={50} wrapper="span" cursor={true} repeat={0} />
                <span className="text-[#3b82f6] ml-1 sm:ml-2">// [STATUS: ONLINE]</span>
              </div>
            </div>
          )}

          {/* Deploy Sequence */}
          {isDeploying && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 sm:p-8 z-20">
              <div className="text-[#a855f7] text-base sm:text-xl mb-4 sm:mb-6">INITIALIZING DEPLOYMENT SEQUENCE</div>
              <div className="w-full max-w-xs sm:max-w-md h-4 sm:h-6 bg-gray-900 rounded-full overflow-hidden mb-2 sm:mb-4">
                <div
                  className="h-full bg-gradient-to-r from-[#a855f7] to-[#3b82f6] transition-all duration-100"
                  style={{ width: `${deployProgress}%` }}
                ></div>
              </div>
              <div className="text-[#3b82f6] text-sm sm:text-base">INITIALIZING CORE SYSTEMS... {deployProgress}%</div>
              {deployProgress === 100 && (
                <div className="text-[#a855f7] mt-2 sm:mt-4 animate-pulse text-sm sm:text-base">
                  DEPLOYMENT SUCCESSFUL
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
