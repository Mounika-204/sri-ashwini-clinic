
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* =========================================
   GLOWING JOINT
========================================= */

function Joint({ position, size = 0.1, color = "#c9a76b" }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        metalness={0.75}
        roughness={0.25}
        emissive={color}
        emissiveIntensity={0.3}
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
      <capsuleGeometry args={[radius, length, 4, 10]} />
      <meshStandardMaterial
        color="#dcece5"
        metalness={0.4}
        roughness={0.3}
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
            <sphereGeometry args={[0.062, 12, 12]} />
            <meshStandardMaterial
              color="#d2aa68"
              metalness={0.7}
              roughness={0.25}
              emissive="#8c692f"
              emissiveIntensity={0.3}
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

function PhysioHuman({ bodyRef }) {
  return (
    <group ref={bodyRef} scale={0.92}>

      {/* Head */}
      <mesh position={[0, 1.66, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color="#e0eee7"
          metalness={0.35}
          roughness={0.3}
        />
      </mesh>

      {/* Neck */}
      <Bone
        position={[0, 1.39, 0]}
        length={0.22}
        radius={0.078}
      />

      {/* Chest */}
      <Bone
        position={[0, 0.91, 0]}
        length={0.7}
        radius={0.18}
      />

      <Spine />

      {/* Pelvis */}
      <mesh position={[0, 0.27, 0]}>
        <sphereGeometry args={[0.23, 16, 16]} />
        <meshStandardMaterial
          color="#c9a76b"
          metalness={0.7}
          roughness={0.25}
          emissive="#76552a"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* LEFT ARM */}
      <Joint position={[-0.3, 1.14, 0]} size={0.12} />

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
      <Joint position={[0.3, 1.14, 0]} size={0.12} />

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
      <Joint position={[-0.14, 0.1, 0]} size={0.1} />

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
      <Joint position={[0.14, 0.1, 0]} size={0.1} />

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
  );
}

/* =========================================
   3D RINGS
========================================= */

function JointRings({ ringRefs }) {
  return (
    <group>

      <Torus
        ref={ringRefs.shoulder}
        args={[0.43, 0.012, 6, 40]}
        position={[0, 1.1, 0]}
      >
        <meshStandardMaterial
          color="#c9a76b"
          metalness={0.8}
          roughness={0.25}
          emissive="#c9a76b"
          emissiveIntensity={0.25}
        />
      </Torus>

      <Torus
        ref={ringRefs.knee}
        args={[0.48, 0.011, 6, 40]}
        position={[0, -0.7, 0]}
      >
        <meshStandardMaterial
          color="#39c9ae"
          metalness={0.7}
          roughness={0.25}
          emissive="#087d69"
          emissiveIntensity={0.55}
        />
      </Torus>

      <Torus
        ref={ringRefs.outer}
        args={[2.0, 0.009, 6, 48]}
        rotation={[1.1, 0.2, 0]}
      >
        <meshStandardMaterial
          color="#c9a76b"
          metalness={0.8}
          roughness={0.25}
          emissive="#8e6b34"
          emissiveIntensity={0.2}
        />
      </Torus>

      <Torus
        ref={ringRefs.inner}
        args={[1.52, 0.006, 6, 40]}
        rotation={[1.35, -0.35, 0]}
      >
        <meshStandardMaterial
          color="#43cdb2"
          metalness={0.75}
          roughness={0.25}
          emissive="#0d9079"
          emissiveIntensity={0.4}
        />
      </Torus>

    </group>
  );
}

/* =========================================
   OPTIMIZED SCENE
   One useFrame callback for all animations
========================================= */

function Scene() {
  const scene = useRef();
  const body = useRef();

  const ringRefs = {
    shoulder: useRef(),
    knee: useRef(),
    outer: useRef(),
    inner: useRef(),
  };

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pointer = state.pointer;

    if (scene.current) {
      scene.current.rotation.y = THREE.MathUtils.lerp(
        scene.current.rotation.y,
        pointer.x * 0.16,
        0.035
      );

      scene.current.rotation.x = THREE.MathUtils.lerp(
        scene.current.rotation.x,
        -pointer.y * 0.08,
        0.035
      );
    }

    if (body.current) {
      body.current.rotation.y = Math.sin(t * 0.32) * 0.24;
      body.current.position.y = Math.sin(t * 1.15) * 0.025;
      body.current.rotation.z = Math.sin(t * 0.45) * 0.018;
    }

    if (ringRefs.shoulder.current) {
      ringRefs.shoulder.current.rotation.z = t * 0.42;
    }

    if (ringRefs.knee.current) {
      ringRefs.knee.current.rotation.x = t * 0.52;
      ringRefs.knee.current.rotation.z = Math.sin(t * 0.5) * 0.2;
    }

    if (ringRefs.outer.current) {
      ringRefs.outer.current.rotation.y = -t * 0.18;
      ringRefs.outer.current.rotation.z = Math.sin(t * 0.25) * 0.15;
    }

    if (ringRefs.inner.current) {
      ringRefs.inner.current.rotation.y = t * 0.3;
    }
  });

  return (
    <group ref={scene} position={[0, 0.2, 0]}>
      <group scale={0.88}>
        <PhysioHuman bodyRef={body} />
        <JointRings ringRefs={ringRefs} />
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
        dpr={[1, 1.1]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >

        <ambientLight intensity={1.1} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={1.8}
          color="#ffffff"
        />

        <pointLight
          position={[-3, 2, 3]}
          color="#27d6b2"
          intensity={5}
          distance={7}
        />

        <pointLight
          position={[3, -2, 3]}
          color="#c9a76b"
          intensity={4}
          distance={7}
        />

        <Scene />

        <Sparkles
          count={20}
          scale={5}
          size={1.2}
          speed={0.2}
          color="#b8e8d5"
          opacity={0.4}
        />

      </Canvas>

      <div className="hero-3d-glow" />

    </div>
  );
}
