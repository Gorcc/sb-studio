import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'

function Model({ mousePosition, isHovering }) {
  const gltf = useGLTF('/assets/abstract_design.glb')
  const modelRef = useRef()
  const rotationSpeed = useRef(0.005) // Base rotation speed

  // Handle animation - position and rotation
  useFrame((state, delta) => {
    if (!modelRef.current) return
    
    // Auto-rotation - always rotate but speed changes based on hover
    const targetSpeed = isHovering ? 0.001 : 0.005 // Slow down when hovering
    rotationSpeed.current += (targetSpeed - rotationSpeed.current) * 0.1
    
    modelRef.current.rotation.y += rotationSpeed.current
    
    // Move toward mouse position with smooth lerping
    modelRef.current.position.x += (mousePosition.x - modelRef.current.position.x) * 0.05
    modelRef.current.position.y += (mousePosition.y - modelRef.current.position.y) * 0.05
    
    // Subtle "floating" animation
    const time = state.clock.getElapsedTime()
    modelRef.current.position.y += Math.sin(time) * 0.01
  })

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }
  }, [gltf])

  return (
    <group 
      ref={modelRef}
      scale={0.8}
      rotation={[0, Math.PI / 4, 0]}
    >
      <primitive object={gltf.scene} />
    </group>
  )
}

export default function Scene3D() {
  // State to track mouse position and interaction
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const canvasRef = useRef()
  const lastMousePos = useRef({ x: 0, y: 0 })

  // Handle mouse movement
  const handleMouseMove = (event) => {
    if (!canvasRef.current) return
    
    // Get canvas dimensions
    const rect = canvasRef.current.getBoundingClientRect()
    
    // Calculate normalized coordinates (-1 to 1)
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    
    // Calculate mouse velocity (for interaction intensity)
    const velocity = Math.sqrt(
      Math.pow(x - lastMousePos.current.x, 2) + 
      Math.pow(y - lastMousePos.current.y, 2)
    )
    
    // Update hover state based on mouse activity
    setIsHovering(velocity > 0.01)
    
    // Set mouse position (scaled for scene)
    setMousePosition({ x: x * 4, y: y * 3 })
    
    // Save last position for velocity calculation
    lastMousePos.current = { x, y }
  }

  // Reset hover state when mouse stops moving
  useEffect(() => {
    if (isHovering) {
      const timer = setTimeout(() => {
        setIsHovering(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isHovering, mousePosition])

  return (
    <div 
      ref={canvasRef}
      style={{ 
        position: 'relative',
        width: '100%', 
        height: '100vh'
      }}
      onMouseMove={handleMouseMove}
    >
      <Canvas
        shadows
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent'
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 600]}
            fov={20}
          />

          {/* Enhanced lighting for modern look */}
          <ambientLight intensity={4} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={2} 
            castShadow 
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <spotLight 
            position={[15, 20, 10]} 
            angle={0.35} 
            penumbra={1} 
            intensity={5.5} 
            castShadow 
          />
          <pointLight position={[10, 10, 10]} intensity={2} color="#ff7e5f" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00c9ff" />

          {/* Model with mouse control and auto-rotation */}
          <Model 
            mousePosition={mousePosition} 
            isHovering={isHovering}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}