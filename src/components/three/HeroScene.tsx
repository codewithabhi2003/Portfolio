import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import CodeBlock, { type CodeLine } from "../CodeBlock";

/**
 * Signature 3D piece: a floating, gently-tilting code editor window —
 * literally what Abhishek's day looks like — orbited by a few of his
 * core stack tags drifting through 3D space. Reacts to pointer position
 * for parallax depth.
 */

const CODE_LINES: CodeLine[] = [
  { indent: 0, content: <><span className="tok-key">const</span> developer = {"{"}</> },
  { indent: 1, content: <>name: <span className="tok-string">'Abhishek Vishwakarma'</span>,</> },
  { indent: 1, content: <>role: <span className="tok-string">'Full-Stack Developer'</span>,</> },
  { indent: 1, content: <>stack: [<span className="tok-string">'React'</span>, <span className="tok-string">'Node'</span>, <span className="tok-string">'MongoDB'</span>],</> },
  { indent: 1, content: <>shipping: <span className="tok-bool">true</span>,</> },
  { indent: 1, content: <>hireable: <span className="tok-bool">true</span>,</> },
  { indent: 0, content: <>{"}"}</> },
  { indent: 0, content: <span className="tok-comment">// let's build something real</span> },
];

const TAGS = [
  { label: "React", color: "#33e0ff", pos: [-2.35, 1.15, -0.6] as const, amp: 0.16, speed: 0.6 },
  { label: "Node.js", color: "#ff6a2c", pos: [2.5, 0.85, -0.3] as const, amp: 0.2, speed: 0.5 },
  { label: "MongoDB", color: "#4dff9a", pos: [-2.1, -1.25, -0.4] as const, amp: 0.14, speed: 0.7 },
  { label: "Socket.io", color: "#8b6bff", pos: [2.3, -1.05, -0.5] as const, amp: 0.18, speed: 0.45 },
  { label: "Gemini · Groq", color: "#ff6a2c", pos: [0, 1.75, -0.8] as const, amp: 0.12, speed: 0.55 },
];

function FloatingTag({
  label,
  color,
  pos,
  amp,
  speed,
}: (typeof TAGS)[number]) {
  const ref = useRef<THREE.Group>(null);
  const seed = useRef(Math.random() * Math.PI * 2).current;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + seed;
    if (ref.current) {
      ref.current.position.y = pos[1] + Math.sin(t) * amp;
      ref.current.position.x = pos[0] + Math.cos(t * 0.7) * amp * 0.6;
    }
  });

  return (
    <group ref={ref} position={pos}>
      <Html center distanceFactor={7.5} style={{ pointerEvents: "none" }}>
        <div
          className="whitespace-nowrap rounded-md border px-2.5 py-1 font-mono text-[11px] backdrop-blur-sm"
          style={{
            borderColor: `${color}4d`,
            background: "rgba(10,10,10,0.6)",
            color,
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}

function CodePanel({ narrow }: { narrow: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame(({ clock, pointer: p }) => {
    pointer.current.x += (p.x - pointer.current.x) * 0.04;
    pointer.current.y += (p.y - pointer.current.y) * 0.04;
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.25) * 0.12 + pointer.current.x * 0.25;
      group.current.rotation.x = Math.sin(t * 0.2) * 0.05 - pointer.current.y * 0.12;
      group.current.position.y = Math.sin(t * 0.4) * 0.12;
    }
  });

  return (
    <group ref={group}>
      <Html
        transform
        occlude={false}
        distanceFactor={narrow ? 5.6 : 4.6}
        style={{ pointerEvents: "none" }}
      >
        <CodeBlock
          filename="developer.js"
          lines={CODE_LINES}
          width="300px"
          cursor
          className="shadow-2xl shadow-black/50"
        />
      </Html>
    </group>
  );
}

const HeroScene = () => {
  const [ready, setReady] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.4, 6.5], fov: 42 }}
        dpr={[1, 1.75]}
        onCreated={() => setReady(true)}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <CodePanel narrow={narrow} />
          {!narrow && TAGS.map((tag) => <FloatingTag key={tag.label} {...tag} />)}
          <Sparkles count={40} scale={[8, 5.5, 6]} size={1.2} speed={0.2} color="#ff6a2c" opacity={0.25} />
        </Suspense>
      </Canvas>
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        } bg-background`}
      />
    </div>
  );
};

export default HeroScene;
