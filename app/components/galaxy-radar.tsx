"use client"

import { useRef, useState, useEffect, useMemo, useCallback } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars, PerspectiveCamera, Environment } from "@react-three/drei"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap" // Import gsap

// Helper function to normalize an angle to be between 0 and 2*PI
const normalizeAngle = (angle: number) => {
  return ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
}

// Helper function to check if an angle is within a sector (handles wrap-around)
const isAngleInSector = (angle: number, sectorStart: number, sectorEnd: number) => {
  angle = normalizeAngle(angle)
  sectorStart = normalizeAngle(sectorStart)
  sectorEnd = normalizeAngle(sectorEnd)

  if (sectorStart <= sectorEnd) {
    // Normal case: sector does not cross 0/2PI boundary
    return angle >= sectorStart && angle <= sectorEnd
  } else {
    // Sector crosses 0/2PI boundary (e.g., from 300 deg to 30 deg)
    return angle >= sectorStart || angle <= sectorEnd
  }
}

// Radar Grid Component (Concentric Circles Only)
function RadarGrid({ currentOpacity }: { currentOpacity: number }) {
  const gridRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (gridRef.current) {
      // Subtle rotation for the grid itself
      gridRef.current.rotation.z += 0.0005
    }
  })

  const rings = useMemo(() => {
    const ringGeometries = []
    const numRings = 5 // Number of concentric circles
    const maxRadius = 4.5 // Increased radius by 2 (from 2.5 to 4.5)

    for (let i = 1; i <= numRings; i++) {
      const radius = (maxRadius / numRings) * i
      ringGeometries.push(
        <mesh key={`ring-${i}`}>
          <ringGeometry args={[radius - 0.005, radius, 64]} /> {/* Inner, Outer, Segments (thinner) */}
          <meshBasicMaterial
            color="#3b82f6" // Changed to bluish color
            transparent
            opacity={currentOpacity * (0.2 - i * 0.02)}
            side={THREE.DoubleSide}
          />
        </mesh>,
      )
    }
    return ringGeometries
  }, [currentOpacity])

  return <group ref={gridRef}>{rings}</group>
}

// Single Blip Component
function SingleBlip({
  position,
  color,
  size,
  globalOpacity,
  beamRotation,
  beamThetaLength,
}: {
  position: [number, number, number]
  color: number
  size: number
  globalOpacity: number
  beamRotation: number
  beamThetaLength: number
}) {
  const blipRef = useRef<THREE.Mesh>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Calculate blip's angle once
  const blipAngle = useMemo(() => {
    return normalizeAngle(Math.atan2(position[1], position[0]))
  }, [position])

  useEffect(() => {
    if (!blipRef.current) return

    // Introduce a small offset to synchronize blip appearance with the visual beam
    // This compensates for any slight lag in rendering or perception.
    // A positive offset makes the blip appear slightly later relative to the beam's start.
    const angleOffset = 0.05 // Adjust this value (in radians) as needed for perfect sync

    const beamStartAdjusted = beamRotation + angleOffset
    const beamEndAdjusted = beamRotation + beamThetaLength + angleOffset

    const shouldBeVisible = isAngleInSector(blipAngle, beamStartAdjusted, beamEndAdjusted)

    if (shouldBeVisible && !isVisible) {
      setIsVisible(true)
      gsap.to(blipRef.current.material, {
        opacity: globalOpacity,
        duration: 0, // Make appearance instantaneous
        ease: "none", // No easing needed for instantaneous
      })
    } else if (!shouldBeVisible && isVisible) {
      setIsVisible(false)
      gsap.to(blipRef.current.material, {
        opacity: 0,
        duration: 0.5, // Keep fade out duration
        ease: "power2.in",
      })
    }
  }, [beamRotation, beamThetaLength, blipAngle, globalOpacity, isVisible])

  return (
    <mesh ref={blipRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0} /> {/* Start with opacity 0 */}
      {/* Point light intensity is now conditional on blip visibility */}
      <pointLight color={color} intensity={isVisible ? globalOpacity * 0.075 * 1.8 : 0} distance={0.5 * 1.8} />
    </mesh>
  )
}

// Scanning Beam Component (2D Wedge with Gradient)
function ScanningBeam({
  isScanning,
  onScanComplete,
  currentOpacity,
  onBeamRotate, // New prop to pass rotation up
}: {
  isScanning: boolean
  onScanComplete: () => void
  currentOpacity: number
  onBeamRotate: (rotation: number) => void
}) {
  const beamRef = useRef<THREE.Mesh>(null)
  const [currentRotation, setCurrentRotation] = useState(0)
  const [scanFinished, setScanFinished] = useState(false)

  const beamThetaLength = useMemo(() => 10 * (Math.PI / 180), []) // 10 degrees

  const beamGeometry = useMemo(() => {
    const radius = 4.5 // Increased radius by 2 (from 2.5 to 4.5)
    const height = 0.1 // Flatness (z-dimension)
    const radialSegments = 64 // For smooth curve

    // Create a ConeGeometry, which forms a wedge when thetaLength is less than 2*PI
    const geometry = new THREE.ConeGeometry(radius, height, radialSegments, 1, false, 0, beamThetaLength)

    // Orient it flat on the XY plane and ensure its base is at the origin
    geometry.rotateX(Math.PI / 2)
    geometry.translate(0, 0, 0) // Ensure the center of the base is at (0,0,0)

    return geometry
  }, [beamThetaLength])

  useFrame((state, delta) => {
    if (isScanning && beamRef.current && !scanFinished) {
      const rotationSpeed = 2.5 // Changed speed to 2.5
      const newRotation = currentRotation + delta * rotationSpeed
      setCurrentRotation(newRotation)
      beamRef.current.rotation.z = newRotation // Rotate around Z-axis for 2D effect
      onBeamRotate(newRotation) // Pass current rotation to parent

      // Trigger scan complete after one full 360-degree rotation
      if (newRotation >= Math.PI * 2) {
        setScanFinished(true) // Mark scan as finished
        onScanComplete()
      }
    }
  })

  if (!isScanning) return null

  return (
    <mesh ref={beamRef} geometry={beamGeometry}>
      <meshBasicMaterial color="#3b82f6" transparent opacity={currentOpacity * 0.6} side={THREE.DoubleSide} />{" "}
      {/* Changed to bluish color, adjusted opacity for trail */}
    </mesh>
  )
}

// Radar Blips/Targets
function RadarBlips({
  currentOpacity,
  beamRotation,
  beamThetaLength,
}: {
  currentOpacity: number
  beamRotation: number
  beamThetaLength: number
}) {
  const blipsRef = useRef<THREE.Group>(null)

  const blipPositions = useMemo(() => {
    // Scaling factor for blips based on new maxRadius (4.5 / 2.5 = 1.8)
    const scaleFactor = 1.8
    return [
      { x: 0, y: 0, color: 0xff0000, size: 0.075 * scaleFactor }, // Center red dot
      { x: 1.25 * 0.6 * scaleFactor, y: 0.25 * 0.6 * scaleFactor, color: 0xff0000, size: 0.05 * 0.6 * scaleFactor }, // Red dot
      { x: 3.25 * 0.6 * scaleFactor, y: 1.25 * 0.6 * scaleFactor, color: 0xff0000, size: 0.1 * 0.6 * scaleFactor }, // Red dot
      { x: -3 * 0.6 * scaleFactor, y: -1 * 0.6 * scaleFactor, color: 0xff0000, size: 0.075 * 0.6 * scaleFactor }, // Red dot
      { x: 0.5 * 0.6 * scaleFactor, y: -2.25 * 0.6 * scaleFactor, color: 0xff0000, size: 0.075 * 0.6 * scaleFactor }, // Red dot
    ]
  }, [])

  return (
    <group ref={blipsRef}>
      {blipPositions.map((blip, index) => (
        <SingleBlip
          key={`blip-${index}`}
          position={[blip.x, blip.y, 0.1]}
          color={blip.color}
          size={blip.size}
          globalOpacity={currentOpacity}
          beamRotation={beamRotation}
          beamThetaLength={beamThetaLength}
        />
      ))}
    </group>
  )
}

// Particle Field for Galaxy Effect (kept for background ambiance)
function GalaxyParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const scaleFactor = 1.8 // Based on 4.5 / 2.5

    for (let i = 0; i < count; i++) {
      // Create spiral galaxy pattern
      const radius = Math.random() * (15 * scaleFactor) + 5 * scaleFactor
      const angle = Math.random() * Math.PI * 2
      const height = (Math.random() - 0.5) * (5 * scaleFactor)

      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = Math.sin(angle) * radius
      positions[i * 3 + 2] = height

      // Color variation
      const colorChoice = Math.random()
      if (colorChoice < 0.4) {
        colors[i * 3] = 0.42 // Purple
        colors[i * 3 + 1] = 0.12
        colors[i * 3 + 2] = 0.87
      } else if (colorChoice < 0.7) {
        colors[i * 3] = 0.18 // Cyan
        colors[i * 3 + 1] = 0.83
        colors[i * 3 + 2] = 0.75
      } else {
        colors[i * 3] = 1 // White
        colors[i * 3 + 1] = 1
        colors[i * 3 + 2] = 1
      }
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.z += 0.0005
      particlesRef.current.rotation.y += 0.0002
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03 * 1.8} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

// HUD Elements (kept for overall UI, can be adjusted)
function RadarHUD({ isScanning, scanComplete }: { isScanning: boolean; scanComplete: boolean }) {
  const hudRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (hudRef.current) {
      hudRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh && child.material) {
          const material = child.material as THREE.MeshBasicMaterial
          material.opacity = 0.7 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2
        }
      })
    }
  })

  return (
    <group ref={hudRef}>
      {/* Removed: Corner brackets */}
      {/* Removed: Status Text (FOSLX RADAR SYSTEM, STATUS: ONLINE) */}
    </group>
  )
}

// Main Radar Scene
function RadarScene({
  isScanning,
  scanComplete,
  onScanComplete,
  radarOpacity, // New prop for animation
  beamRotation, // New prop for blip visibility
  beamThetaLength, // New prop for blip visibility
  onBeamRotate, // New prop to pass rotation up
}: {
  isScanning: boolean
  scanComplete: boolean
  onScanComplete: () => void
  radarOpacity: number
  beamRotation: number
  beamThetaLength: number
  onBeamRotate: (rotation: number) => void
}) {
  const { camera } = useThree()
  const scaleFactor = 1.8 // Based on 4.5 / 2.5

  useFrame((state) => {
    // Subtle camera movement, scaled
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * (0.1 * scaleFactor)
    camera.position.y = Math.cos(state.clock.elapsedTime * 0.15) * (0.05 * scaleFactor)
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <color attach="background" args={["#0A0A0A"]} />
      <PerspectiveCamera makeDefault position={[0, 0, 24.5]} fov={60} />{" "}
      {/* Camera Z position remains to allow radar to appear larger */}
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 2.5 * scaleFactor]} intensity={0.075 * scaleFactor} color="#6C1EDF" />{" "}
      {/* Scaled light position and intensity */}
      <Environment preset="night" />
      <GalaxyParticles />
      <RadarGrid currentOpacity={radarOpacity} /> {/* Pass opacity prop */}
      <RadarBlips currentOpacity={radarOpacity} beamRotation={beamRotation} beamThetaLength={beamThetaLength} />{" "}
      {/* Pass opacity and beam info */}
      <ScanningBeam
        isScanning={isScanning}
        onScanComplete={onScanComplete}
        currentOpacity={radarOpacity}
        onBeamRotate={onBeamRotate} // Pass callback
      />{" "}
      {/* Pass opacity prop */}
      <RadarHUD isScanning={isScanning} scanComplete={scanComplete} />
      {/* Additional atmospheric effects */}
      <Stars
        radius={25 * scaleFactor}
        depth={12.5 * scaleFactor}
        count={1250 * scaleFactor}
        factor={1 * scaleFactor}
        saturation={0}
        fade
        speed={0.25 * scaleFactor}
      />{" "}
      {/* Scaled star parameters */}
    </>
  )
}

export default function GalaxyRadar() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [showEnter, setShowEnter] = useState(false)
  const [radarOpacity, setRadarOpacity] = useState(1) // State for radar fade-out animation
  const [beamRotation, setBeamRotation] = useState(0) // New state for beam rotation
  const beamThetaLength = useMemo(() => 10 * (Math.PI / 180), []) // 10 degrees, consistent with ScanningBeam

  useEffect(() => {
    // Auto-start scanning after 1 second
    const timer = setTimeout(() => {
      setIsScanning(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleScanComplete = () => {
    setIsScanning(false)
    setScanComplete(true)

    // Animate radar opacity to 0
    gsap.to(
      { opacity: 1 }, // Start value
      {
        opacity: 0, // End value
        duration: 0.8, // Fade out over 0.8 seconds
        onUpdate: function () {
          setRadarOpacity(this.targets()[0].opacity)
        },
        onComplete: () => {
          setShowEnter(true) // Show button after fade-out
        },
      },
    )
  }

  const handleEnter = () => {
    // Navigate to main website or dashboard
    window.location.href = "/"
  }

  const handleBeamRotate = useCallback((rotation: number) => {
    setBeamRotation(rotation)
  }, [])

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* 3D Radar Canvas */}
      <Canvas className="absolute inset-0">
        <RadarScene
          isScanning={isScanning}
          scanComplete={scanComplete}
          onScanComplete={handleScanComplete}
          radarOpacity={radarOpacity} // Pass opacity to scene
          beamRotation={beamRotation} // Pass beam rotation
          beamThetaLength={beamThetaLength} // Pass beam angle
          onBeamRotate={handleBeamRotate} // Pass callback to update beam rotation
        />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* FOSLX Logo */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
          <div className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">FOSL</span>
            <span className="text-blue-400">X</span>
          </div>
        </div>

        {/* System Status (Removed) */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 text-right"></div>

        {/* Bottom Status Bar (Removed content) */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 z-10">
          <div className="flex justify-between items-center">
            {/* Removed: Scanning in progress..., Analysis complete..., Ready for access. */}
            {/* Removed: COORDINATES */}
          </div>
        </div>

        {/* Enter Button */}
        {showEnter && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto">
            <div className="text-center">
              <Button
                onClick={handleEnter}
                size="lg"
                className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl sm:text-3xl font-bold shadow-2xl transform transition-all duration-500 opacity-0 scale-0 animate-button-appear flex items-center justify-center"
              >
                ENTER
              </Button>
            </div>
          </div>
        )}

        {/* Scanning Progress (Removed) */}
        {isScanning && (
          <div className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-center">{/* Removed: Progress bar and text */}</div>
          </div>
        )}
      </div>

      {/* Audio Effect (Optional) */}
      <audio autoPlay loop>
        <source src="/placeholder.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
