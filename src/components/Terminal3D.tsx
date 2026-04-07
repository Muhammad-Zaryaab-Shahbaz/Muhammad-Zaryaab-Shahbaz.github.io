import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

const codeLines = [
  "const dev = {",
  '  name: "Zaryaab",',
  '  role: "Full Stack Dev",',
  "  skills: [",
  '    "React", "Node",',
  '    "Python", "Docker"',
  "  ],",
  '  passion: "Building"',
  "};",
];

function TerminalBox() {
  const groupRef = useRef<THREE.Group>(null);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < codeLines.length) {
        setDisplayedLines((prev) => [...prev, codeLines[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedLines([]);
          i = 0;
          const restart = setInterval(() => {
            if (i < codeLines.length) {
              setDisplayedLines((prev) => [...prev, codeLines[i]]);
              i++;
            } else {
              clearInterval(restart);
            }
          }, 300);
        }, 3000);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.05 + mouse.current.y * 0.1;
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.08 + mouse.current.x * 0.15;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Terminal body */}
      <RoundedBox args={[4.5, 3.2, 0.15]} radius={0.12} smoothness={4}>
        <meshStandardMaterial color="#141820" metalness={0.3} roughness={0.7} />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox args={[4.1, 2.6, 0.01]} radius={0.08} smoothness={4} position={[0, -0.1, 0.09]}>
        <meshStandardMaterial color="#0d1117" emissive="#0d1117" emissiveIntensity={0.1} />
      </RoundedBox>

      {/* Title bar dots */}
      {[[-1.7, 1.2, 0.09], [-1.5, 1.2, 0.09], [-1.3, 1.2, 0.09]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial
            color={["#ff5f57", "#febc2e", "#28c840"][i]}
            emissive={["#ff5f57", "#febc2e", "#28c840"][i]}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Code text */}
      {displayedLines.map((line, i) => (
        <Text
          key={`${i}-${line}`}
          position={[-1.8, 0.85 - i * 0.27, 0.1]}
          fontSize={0.14}
          font="/fonts/JetBrainsMono-Regular.woff"
          color="#2dd4bf"
          anchorX="left"
          anchorY="top"
          maxWidth={3.8}
        >
          {line}
        </Text>
      ))}

      {/* Cursor blink */}
      <mesh position={[-1.8 + (displayedLines.length > 0 ? (displayedLines[displayedLines.length - 1]?.length || 0) * 0.084 : 0), 0.85 - (displayedLines.length) * 0.27, 0.1]}>
        <planeGeometry args={[0.08, 0.16]} />
        <meshStandardMaterial color="#2dd4bf" emissive="#2dd4bf" emissiveIntensity={1} transparent opacity={Math.sin(Date.now() * 0.005) > 0 ? 1 : 0} />
      </mesh>

      {/* Glow */}
      <pointLight position={[0, 0, 2]} color="#2dd4bf" intensity={0.8} distance={6} />
    </group>
  );
}

const Terminal3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <TerminalBox />
      </Canvas>
    </div>
  );
};

export default Terminal3D;
