import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Trophy, Award, Medal, Star, Users, Building } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WizardCharacter } from '../components/WizardCharacter';
import { useState, useEffect } from 'react';

function TrophyDisplay() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#ffd700" />
      <pointLight position={[-5, 5, -5]} intensity={1} color="#ff6b35" />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.3, 1.5, 32]} />
          <meshStandardMaterial
            color="#ffd700"
            metalness={0.9}
            roughness={0.1}
            emissive="#ffd700"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial
            color="#ffd700"
            metalness={0.9}
            roughness={0.1}
            emissive="#ffd700"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function Achievements() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: 'PAN-BS #ML Runner-Up',
      organization: 'IIT Madras',
      year: '2024',
      description: 'Achieved Runner-Up position in a prestigious Machine Learning competition',
      metric: 'F1 Score: 0.9478',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Award,
      title: 'Best Startup Award @Hackquest',
      organization: 'UIT, Prayagraj',
      year: '2025',
      description: 'Awarded Best Startup award out of 200+ nationwide teams',
      metric: 'First-ever win',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'First Runner Up @DevGathering',
      organization: 'MIET, Meerut',
      year: '2025',
      description: 'Acheived First Runner-Up position in a hackathon comprising 250+ teams',
      metric: 'Most unexpected',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Building,
      title: 'IBM Internship',
      organization: 'IBM Corporation',
      year: '2024',
      description: 'Developed intelligent automation solutions and chatbot systems',
      metric: 'Excellence Award',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Medal,
      title: 'Regional Coordinator',
      organization: 'IIT Madras',
      year: '2022-Present',
      description: 'Elected as Regional Coordinator of Delhi-NCR region in my house',
      metric: 'Won Elections',
      color: 'from-indigo-500 to-purple-500',
    },
    // {
    //   icon: Star,
    //   title: 'Research Excellence',
    //   organization: 'Academic Publications',
    //   year: '2024',
    //   description: 'Published research on machine learning optimization techniques',
    //   metric: 'Peer Reviewed',
    //   color: 'from-red-500 to-pink-500',
    // },
  ];

  const stats = [
    { label: 'Projects Completed', value: '20+', color: '#ffd700' },
    { label: 'Hackathons Won', value: '5+', color: '#ff6b35' },
    { label: 'Events Attended', value: '30+', color: '#d4af37' },
    { label: 'Code Contributions', value: '500+', color: '#8B0000' },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--castle-dark)] overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <color attach="background" args={['#0a0a0f']} />
            <TrophyDisplay />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 md:pt-32 px-6 md:px-8 max-w-7xl mx-auto pb-20 md:pb-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-magical text-5xl md:text-6xl mb-4 text-[var(--gryffindor-gold)]">
              Trophy Hall
            </h1>
            <p className="font-modern text-xl text-[var(--parchment)]/80">
              Victories earned through courage and skill
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 bg-gradient-to-br from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-2xl shadow-xl text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at center, ${stat.color}20, transparent)`,
                    }}
                  />

                  <h3
                    className="font-magical text-4xl mb-2 relative"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </h3>
                  <p className="font-modern text-sm text-[var(--parchment)]/70 relative">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, rotateY: -30, y: 50 }}
                animate={{ opacity: 1, rotateY: 0, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="relative h-full p-6 bg-gradient-to-br from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Pedestal Effect */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-[var(--gryffindor-gold)]/30 to-transparent blur-sm" />

                  {/* Icon */}
                  <div className="relative mb-4">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--gryffindor-gold)] to-[var(--ember-orange)] flex items-center justify-center shadow-lg"
                      style={{
                        boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
                      }}
                    >
                      <achievement.icon className="w-10 h-10 text-[var(--castle-dark)]" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="font-magical text-2xl text-[var(--gryffindor-gold)] mb-2 text-center">
                    {achievement.title}
                  </h3>

                  <div className="text-center mb-3">
                    <p className="font-modern text-sm text-[var(--parchment)]">
                      {achievement.organization}
                    </p>
                    <p className="font-modern text-xs text-[var(--parchment)]/60">
                      {achievement.year}
                    </p>
                  </div>

                  <p className="font-modern text-sm text-[var(--parchment)]/80 mb-4 text-center leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Metric Badge */}
                  <div className="flex justify-center">
                    <div className="px-4 py-2 bg-gradient-to-r from-[var(--gryffindor-gold)]/20 to-[var(--gryffindor-red)]/20 border border-[var(--gryffindor-gold)]/50 rounded-full">
                      <span className="font-modern text-xs text-[var(--gryffindor-gold)]">
                        {achievement.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 p-8 bg-gradient-to-br from-[var(--parchment)] to-[#d4c5a9] rounded-2xl shadow-2xl border-4 border-[var(--gryffindor-gold)]/50 max-w-4xl mx-auto"
          >
            <p className="font-magical text-2xl text-[var(--gryffindor-red)] text-center mb-4">
              "It is our choices that show what we truly are, far more than our abilities."
            </p>
            <p className="font-modern text-center text-[var(--castle-dark)]/70">
              - Albus Dumbledore
            </p>
          </motion.div>
        </div>

        {/* Wizard Character */}
        <WizardCharacter
          message="Every achievement is a stepping stone to greater magic."
          showMessage={showMessage}
        />
      </div>
    </PageTransition>
  );
}
