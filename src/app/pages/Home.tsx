import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Sparkles, Code, Brain, Cpu, Rocket } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WizardCharacter } from '../components/WizardCharacter';
import { useState, useEffect } from 'react';

function Castle3D() {
  return (
    <group position={[0, -2, -5]}>
      {/* Main tower */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[2, 4, 2]} />
          <meshStandardMaterial color="#2a1f1f" roughness={0.8} />
        </mesh>
        <mesh position={[0, 4.5, 0]}>
          <coneGeometry args={[1.5, 2, 4]} />
          <meshStandardMaterial color="#8B0000" roughness={0.6} />
        </mesh>
      </Float>

      {/* Side towers */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh position={[-3, 1, 0]}>
          <boxGeometry args={[1.5, 3, 1.5]} />
          <meshStandardMaterial color="#2a1f1f" roughness={0.8} />
        </mesh>
        <mesh position={[-3, 2.8, 0]}>
          <coneGeometry args={[1.2, 1.5, 4]} />
          <meshStandardMaterial color="#8B0000" roughness={0.6} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.4}>
        <mesh position={[3, 1, 0]}>
          <boxGeometry args={[1.5, 3, 1.5]} />
          <meshStandardMaterial color="#2a1f1f" roughness={0.8} />
        </mesh>
        <mesh position={[3, 2.8, 0]}>
          <coneGeometry args={[1.2, 1.5, 4]} />
          <meshStandardMaterial color="#8B0000" roughness={0.6} />
        </mesh>
      </Float>

      {/* Ambient lights */}
      <pointLight position={[0, 5, 0]} color="#ffd700" intensity={2} distance={10} />
      <pointLight position={[-3, 3, 0]} color="#ff6b35" intensity={1} distance={5} />
      <pointLight position={[3, 3, 0]} color="#ff6b35" intensity={1} distance={5} />
    </group>
  );
}

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden bg-[var(--castle-dark)]">
        {/* 3D Castle Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
            <color attach="background" args={['#0a0a0f']} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffd700" />
            <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
            <Castle3D />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-20 pt-24 md:pt-32 px-6 md:px-8 max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center mb-16 md:mb-20"
          >
            {/* Gryffindor Banner */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block mb-6 md:mb-8 px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-[var(--gryffindor-red)] to-[#5a0000] border-2 border-[var(--gryffindor-gold)] rounded-lg shadow-2xl"
              style={{
                boxShadow: '0 0 40px rgba(255, 215, 0, 0.4)',
              }}
            >
              <Sparkles className="inline w-5 h-5 md:w-6 md:h-6 text-[var(--gryffindor-gold)] mr-2" />
              <span className="font-magical text-[var(--gryffindor-gold)] text-lg md:text-xl tracking-wider">
                GRYFFINDOR
              </span>
              <Sparkles className="inline w-5 h-5 md:w-6 md:h-6 text-[var(--gryffindor-gold)] ml-2" />
            </motion.div>

            <motion.h1
              className="font-magical text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6 bg-gradient-to-r from-[var(--gryffindor-gold)] via-[var(--ember-orange)] to-[var(--gryffindor-gold)] bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
              }}
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Lakshya Patel
            </motion.h1>

            <motion.h2
              className="font-magical text-3xl md:text-4xl text-[var(--parchment)] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Wizard of Code
            </motion.h2>

            <motion.p
              className="font-modern text-xl text-[var(--parchment)]/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              Engineering Intelligent Systems. Crafting Magical Digital Experiences.
            </motion.p>
          </motion.div>

          {/* Vision Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {[
              { icon: Brain, title: 'AI & ML', desc: 'Intelligent systems that learn and adapt' },
              { icon: Code, title: 'Full-Stack Development', desc: 'End-to-end digital experiences' },
              { icon: Cpu, title: 'IoT', desc: 'Connected devices and smart solutions' },
              { icon: Rocket, title: 'Product Management', desc: 'Pushing boundaries of technology' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7  }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div
                  className="p-6 bg-gradient-to-b from-[var(--card)]/80 to-[var(--card)]/40 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-xl shadow-xl transition-all duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gryffindor-gold)]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <item.icon className="w-12 h-12 text-[var(--gryffindor-gold)] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-magical text-xl text-[var(--gryffindor-gold)] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-modern text-sm text-[var(--parchment)]/70">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Scroll Introduction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            className="max-w-4xl mx-auto mb-32"
          >
            <div
              className="relative p-8 bg-gradient-to-br from-[var(--parchment)] to-[#d4c5a9] rounded-lg shadow-2xl border-4 border-[var(--gryffindor-gold)]/50"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'%23e8dcc4\'/%3E%3Cpath d=\'M0 0L50 50M50 50L100 0M50 50L0 100M50 50L100 100\' stroke=\'%23d4c5a9\' stroke-width=\'0.5\' opacity=\'0.3\'/%3E%3C/svg%3E")',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(139, 0, 0, 0.1)',
              }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[var(--gryffindor-gold)] rounded-full border-2 border-[var(--gryffindor-red)]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--gryffindor-gold)] rounded-full border-2 border-[var(--gryffindor-red)]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[var(--gryffindor-gold)] rounded-full border-2 border-[var(--gryffindor-red)]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[var(--gryffindor-gold)] rounded-full border-2 border-[var(--gryffindor-red)]" />

              <h3 className="font-magical text-3xl text-[var(--gryffindor-red)] mb-4 text-center">
                Vision
              </h3>
              <p className="font-modern text-lg text-[var(--castle-dark)] leading-relaxed mb-4">
                To forge the future of technology through innovation, intelligence, and imagination.
                As a Gryffindor developer, I believe in the courage to tackle impossible problems,
                the determination to build revolutionary systems, and the vision to create technology
                that empowers humanity.
              </p>
              <p className="font-modern text-lg text-[var(--castle-dark)] leading-relaxed">
                Specializing in product management, full-stack development, AI/ML and intelligent IoT systems, I craft
                solutions that are not just functional, but magical in their execution. From building highly scalable apps, 
                conversational AI assistants to engineering complex drone systems, every project is
                an opportunity to push the boundaries of what's possible.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Wizard Character */}
        <WizardCharacter
          message="Welcome to my magical realm of code and creation."
          showMessage={showMessage}
        />
      </div>
    </PageTransition>
  );
}
