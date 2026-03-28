import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Torus, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, quickStats } from "../data/portfolioData";
import { useRef } from "react";
import TypingText from "./TypingText";
import ParticlesBg from "./ParticlesBg";

function FloatingScene() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.4} floatIntensity={1.8}>
        <Sphere args={[1.15, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial color="#7c3aed" distort={0.45} speed={2} roughness={0.1} metalness={0.3} />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <Torus args={[2.1, 0.08, 32, 120]} rotation={[Math.PI / 2, 0.2, 0]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
        </Torus>
      </Float>

      <Float speed={2.2} rotationIntensity={1.6} floatIntensity={1.4}>
        <mesh position={[-2.2, 1.4, -1]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#f472b6" metalness={0.4} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh position={[2.1, -1.2, 0.4]}>
          <icosahedronGeometry args={[0.45]} />
          <meshStandardMaterial color="#60a5fa" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 overflow-hidden">
      <ParticlesBg />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
            Hi, I’m <span className="gradient-text">Himanshu Sekhar Behera</span>
          </h1>

          <p className="mt-5 text-xl sm:text-2xl font-semibold text-white/90">
            <TypingText
              texts={[
                "MERN Stack Developer",
                "Java Developer",
                "Spring Boot Developer",
                "Full Stack Web Developer",
              ]}
            />
          </p>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl leading-8">
            {personalInfo.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition">
              <Mail size={20} />
            </a>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {quickStats.map((stat) => (
              <div key={stat.label} className="glass rounded-3xl p-5 card-hover">
                <p className="text-sm text-white/60">{stat.label}</p>
                <p className="mt-2 font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[620px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-glow" />
          <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[3, 4, 2]} intensity={2.5} />
            <pointLight position={[-4, -3, -2]} intensity={2} color="#7c3aed" />
            <pointLight position={[4, 3, 3]} intensity={2} color="#06b6d4" />
            <FloatingScene />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
          </Canvas>

          <div className="absolute bottom-6 left-6 right-6 glass rounded-3xl p-5">
            <p className="text-sm text-white/60">Current Focus</p>
            <p className="mt-2 text-lg font-semibold">
              MERN Stack, Java, Spring Boot & Premium Frontend UI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}