import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* =========================================
   GLOWING JOINT
========================================= */

function Joint({ position, size = 0.1, color = "#c9a76b" }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />

      <meshStandardMaterial
        color={color}
        metalness={0.85}
        roughness={0.18}
        emissive={color}
        emissiveIntensity={0.45}
      />
    </mesh>
  );
}

/* =========================================
   BONE
========================================= */

function Bone({
  position,
  rotation = [0, 0, 0],
  length = 0.55,
  radius = 0.075,
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <capsuleGeometry args={[radius, length, 8, 24]} />

      <meshStandardMaterial
        color="#dcece5"
        metalness={0.45}
        roughness={0.24}
      />
    </mesh>
  );
}

/* =========================================
   SPINE
========================================= */

function Spine() {
  return (
    <group>
      {Array.from({ length: 13 }).map((_, i) => {
        const y = 0.86 - i * 0.115;

        return (
          <mesh key={i} position={[0, y, 0.14]}>
            <sphereGeometry args={[0.062, 24, 24]} />

            <meshStandardMaterial
              color="#d2aa68"
              metalness={0.8}
              roughness={0.2}
              emissive="#8c692f"
              emissiveIntensity={0.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* =========================================
   HUMAN ANATOMY
========================================= */

function PhysioHuman() {
  const body = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!body.current) return;

    /* Smooth body rotation */
    body.current.rotation.y =
      Math.sin(t * 0.32) * 0.24;

    /* Very subtle breathing movement */
    body.current.position.y =
      Math.sin(t * 1.15) * 0.025;

    /* Small natural tilt */
    body.current.rotation.z =
      Math.sin(t * 0.45) * 0.018;
  });

  return (
    <Float
      speed={1.15}
      rotationIntensity={0.08}
      floatIntensity={0.22}
    >
      <group ref={body} scale={0.92}>

        {/* Head */}

        <mesh position={[0, 1.66, 0]}>
          <sphereGeometry args={[0.18, 40, 40]} />

          <meshStandardMaterial
            color="#e0eee7"
            metalness={0.4}
            roughness={0.22}
          />
        </mesh>

        {/* Neck */}

        <Bone
          position={[0, 1.39, 0]}
          length={0.22}
          radius={0.078}
        />

        {/* Chest / torso */}

        <Bone
          position={[0, 0.91, 0]}
          length={0.7}
          radius={0.18}
        />

        {/* Spine */}

        <Spine />

        {/* Pelvis */}

        <mesh position={[0, 0.27, 0]}>
          <sphereGeometry args={[0.23, 32, 32]} />

          <meshStandardMaterial
            color="#c9a76b"
            metalness={0.8}
            roughness={0.2}
            emissive="#76552a"
            emissiveIntensity={0.18}
          />
        </mesh>

        {/* LEFT ARM */}

        <Joint
          position={[-0.3, 1.14, 0]}
          size={0.12}
        />

        <Bone
          position={[-0.44, 0.9, 0]}
          rotation={[0, 0, 0.34]}
        />

        <Joint
          position={[-0.57, 0.63, 0]}
          size={0.095}
          color="#43cdb2"
        />

        <Bone
          position={[-0.68, 0.36, 0]}
          rotation={[0, 0, 0.25]}
        />

        {/* RIGHT ARM */}

        <Joint
          position={[0.3, 1.14, 0]}
          size={0.12}
        />

        <Bone
          position={[0.44, 0.9, 0]}
          rotation={[0, 0, -0.34]}
        />

        <Joint
          position={[0.57, 0.63, 0]}
          size={0.095}
          color="#43cdb2"
        />

        <Bone
          position={[0.68, 0.36, 0]}
          rotation={[0, 0, -0.25]}
        />

        {/* LEFT LEG */}

        <Joint
          position={[-0.14, 0.1, 0]}
          size={0.1}
        />

        <Bone
          position={[-0.24, -0.34, 0]}
          rotation={[0, 0, 0.18]}
          length={0.64}
          radius={0.105}
        />

        <Joint
          position={[-0.31, -0.73, 0]}
          size={0.12}
          color="#43cdb2"
        />

        <Bone
          position={[-0.34, -1.12, 0]}
          rotation={[0, 0, 0.06]}
          length={0.57}
          radius={0.09}
        />

        {/* RIGHT LEG */}

        <Joint
          position={[0.14, 0.1, 0]}
          size={0.1}
        />

        <Bone
          position={[0.24, -0.34, 0]}
          rotation={[0, 0, -0.18]}
          length={0.64}
          radius={0.105}
        />

        <Joint
          position={[0.31, -0.73, 0]}
          size={0.12}
          color="#43cdb2"
        />

        <Bone
          position={[0.34, -1.12, 0]}
          rotation={[0, 0, -0.06]}
          length={0.57}
          radius={0.09}
        />

      </group>
    </Float>
  );
}

/* =========================================
   3D RINGS
========================================= */

function JointRings() {
  const shoulder = useRef();
  const knee = useRef();
  const outer = useRef();
  const inner = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (shoulder.current) {
      shoulder.current.rotation.z = t * 0.42;
    }

    if (knee.current) {
      knee.current.rotation.x = t * 0.52;
      knee.current.rotation.z = Math.sin(t * 0.5) * 0.2;
    }

    if (outer.current) {
      outer.current.rotation.y = -t * 0.18;
      outer.current.rotation.z =
        Math.sin(t * 0.25) * 0.15;
    }

    if (inner.current) {
      inner.current.rotation.y = t * 0.3;
    }
  });

  return (
    <group>

      {/* Shoulder ring */}

      <Torus
        ref={shoulder}
        args={[0.43, 0.012, 12, 80]}
        position={[0, 1.1, 0]}
      >
        <meshStandardMaterial
          color="#c9a76b"
          metalness={0.9}
          roughness={0.18}
          emissive="#c9a76b"
          emissiveIntensity={0.3}
        />
      </Torus>

      {/* Knee ring */}

      <Torus
        ref={knee}
        args={[0.48, 0.011, 12, 80]}
        position={[0, -0.7, 0]}
      >
        <meshStandardMaterial
          color="#39c9ae"
          metalness={0.75}
          roughness={0.2}
          emissive="#087d69"
          emissiveIntensity={0.7}
        />
      </Torus>

      {/* Large outer ring */}

      <Torus
        ref={outer}
        args={[2.0, 0.009, 12, 120]}
        rotation={[1.1, 0.2, 0]}
      >
        <meshStandardMaterial
          color="#c9a76b"
          metalness={0.85}
          roughness={0.2}
          emissive="#8e6b34"
          emissiveIntensity={0.25}
        />
      </Torus>

      {/* Inner ring */}

      <Torus
        ref={inner}
        args={[1.52, 0.006, 10, 100]}
        rotation={[1.35, -0.35, 0]}
      >
        <meshStandardMaterial
          color="#43cdb2"
          metalness={0.8}
          roughness={0.2}
          emissive="#0d9079"
          emissiveIntensity={0.5}
        />
      </Torus>

    </group>
  );
}

/* =========================================
   MOUSE PARALLAX
========================================= */

function Scene() {
  const scene = useRef();

  useFrame((state) => {
    if (!scene.current) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    scene.current.rotation.y = THREE.MathUtils.lerp(
      scene.current.rotation.y,
      mouseX * 0.16,
      0.035
    );

    scene.current.rotation.x = THREE.MathUtils.lerp(
      scene.current.rotation.x,
      -mouseY * 0.08,
      0.035
    );
  });

  return (
    <group ref={scene} position={[0, 0.2, 0]}>

      <group scale={0.88}>
        <PhysioHuman />
        <JointRings />
      </group>

    </group>
  );
}

/* =========================================
   MAIN HERO 3D
========================================= */

export default function Hero3D() {
  return (
    <div className="hero-3d">

      <Canvas
        camera={{
          position: [0, 0.1, 7],
          fov: 38,
        }}
        dpr={[1, 1.35]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >

        {/* Base lighting */}

        <ambientLight intensity={1.25} />

        {/* Main soft light */}

        <directionalLight
          position={[4, 5, 5]}
          intensity={2.2}
          color="#ffffff"
        />

        {/* Teal medical glow */}

        <pointLight
          position={[-3, 2, 3]}
          color="#27d6b2"
          intensity={8}
          distance={7}
        />

        {/* Warm gold rim light */}

        <pointLight
          position={[3, -2, 3]}
          color="#c9a76b"
          intensity={6}
          distance={7}
        />

        <Scene />

        {/* Soft floating particles */}

        <Sparkles
          count={65}
          scale={5}
          size={1.45}
          speed={0.25}
          color="#b8e8d5"
          opacity={0.48}
        />

      </Canvas>

      {/* Soft visual glow behind 3D */}

      <div className="hero-3d-glow" />

    </div>
  );
}

