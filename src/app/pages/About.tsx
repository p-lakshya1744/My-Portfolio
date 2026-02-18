import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, OrbitControls } from '@react-three/drei';
import { BookOpen, GraduationCap, Briefcase, Target, Heart } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WizardCharacter } from '../components/WizardCharacter';
import { useState, useEffect } from 'react';

function FloatingBooks() {
  const books = [
    { position: [-3, 2, 0], color: '#8B0000' },
    { position: [3, 1, 0], color: '#ffd700' },
    { position: [-2, -1, 2], color: '#d4af37' },
    { position: [2, -2, 1], color: '#8B0000' },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />

      {books.map((book, index) => (
        <Float key={index} speed={2 + index * 0.5} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={book.position as [number, number, number]}>
            <boxGeometry args={[0.8, 1.2, 0.2]} />
            <meshStandardMaterial color={book.color} roughness={0.5} metalness={0.3} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function About() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const educationData = [
    {
      degree: 'BTech in Computer Science & Engineering',
      institution: 'Institute of Engineering and Rural Technology',
      period: '2023 - 2027',
      description: 'Specializing in full-stack engineering. Developing end-to-end web and cross-platform mobile applications.',
    },
    {
      degree: 'BS in Data Science & Applications',
      institution: 'Indian Institute of Technology (IIT), Madras',
      period: '2023 - 2025',
      description: 'Specialized in AI/ML and Intelligent Systems. Dropped Out in 2nd year',
    },
  ];

  const experienceData = [
    {
      role: 'AI/ML Intern',
      company: 'IBM SkillsBuild',
      period: 'June, 2024 - July, 2024',
      description: 'Built and deployed intelligent chatbot systems and predictive ML models leveraging IBM Cloud and Cloud Pak for Data',
    },
    {
      role: 'Freelancer',
      company: 'Various Organizations',
      period: '2022 - Present',
      description: 'Leading technical projects and delivering industry-ready products',
    },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--castle-dark)] overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <color attach="background" args={['#0a0a0f']} />
            <FloatingBooks />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 md:pt-32 px-6 md:px-8 max-w-7xl mx-auto pb-20 md:pb-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="font-magical text-5xl md:text-6xl mb-4 text-[var(--gryffindor-gold)]">
              About the Wizard
            </h1>
            <p className="font-modern text-xl text-[var(--parchment)]/80">
              Knowledge. Courage. Leadership.
            </p>
          </motion.div>

          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-20 p-8 bg-gradient-to-br from-[var(--parchment)] to-[#d4c5a9] rounded-2xl shadow-2xl border-4 border-[var(--gryffindor-gold)]/50 max-w-4xl mx-auto"
          >
            <BookOpen className="w-12 h-12 text-[var(--gryffindor-red)] mb-4" />
            <h2 className="font-magical text-3xl text-[var(--gryffindor-red)] mb-4">
              The Journey
            </h2>
            <p className="font-modern text-lg text-[var(--castle-dark)] leading-relaxed mb-4">
              I am Lakshya Patel, a passionate technologist and visionary developer combining the
              courage of Gryffindor with the precision of modern engineering. My journey in the
              realm of technology has been driven by an insatiable curiosity and determination to
              create intelligent systems that solve real-world problems.
            </p>
            <p className="font-modern text-lg text-[var(--castle-dark)] leading-relaxed">
              From crafting Full-stack software solutions, AI-powered chatbots to engineering complex IoT solutions, I believe in
              building technology that not only works but inspires. Every line of code is a spell,
              every algorithm a magical incantation that brings ideas to life.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-xl shadow-xl"
            >
              <Target className="w-10 h-10 text-[var(--gryffindor-gold)] mb-4" />
              <h3 className="font-magical text-2xl text-[var(--gryffindor-gold)] mb-4">
                Mission
              </h3>
              <p className="font-modern text-[var(--parchment)]/80 leading-relaxed">
                To leverage cutting-edge AI, machine learning, and software engineering to create
                innovative solutions that empower individuals and organizations. Every project is
                an opportunity to push boundaries and redefine what's possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-xl shadow-xl"
            >
              <Heart className="w-10 h-10 text-[var(--gryffindor-gold)] mb-4" />
              <h3 className="font-magical text-2xl text-[var(--gryffindor-gold)] mb-4">
                Philosophy
              </h3>
              <p className="font-modern text-[var(--parchment)]/80 leading-relaxed">
                Technology should be magical yet accessible, powerful yet elegant. I believe in
                clean code, scalable architecture, and user-centric design. Like a true Gryffindor,
                I face challenges head-on with courage and creativity.
              </p>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-10 h-10 text-[var(--gryffindor-gold)]" />
              <h2 className="font-magical text-4xl text-[var(--gryffindor-gold)]">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="p-6 bg-gradient-to-r from-[var(--card)]/80 to-[var(--card)]/60 backdrop-blur-sm border-l-4 border-[var(--gryffindor-gold)] rounded-r-xl shadow-lg"
                >
                  <h3 className="font-magical text-2xl text-[var(--gryffindor-gold)] mb-2">
                    {edu.degree}
                  </h3>
                  <p className="font-modern text-[var(--parchment)] mb-1">
                    {edu.institution}
                  </p>
                  <p className="font-modern text-sm text-[var(--parchment)]/60 mb-3">
                    {edu.period}
                  </p>
                  <p className="font-modern text-[var(--parchment)]/80">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-10 h-10 text-[var(--gryffindor-gold)]" />
              <h2 className="font-magical text-4xl text-[var(--gryffindor-gold)]">
                Experience & Leadership
              </h2>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="p-6 bg-gradient-to-r from-[var(--card)]/80 to-[var(--card)]/60 backdrop-blur-sm border-l-4 border-[var(--gryffindor-red)] rounded-r-xl shadow-lg"
                >
                  <h3 className="font-magical text-2xl text-[var(--gryffindor-gold)] mb-2">
                    {exp.role}
                  </h3>
                  <p className="font-modern text-[var(--parchment)] mb-1">
                    {exp.company}
                  </p>
                  <p className="font-modern text-sm text-[var(--parchment)]/60 mb-3">
                    {exp.period}
                  </p>
                  <p className="font-modern text-[var(--parchment)]/80">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wizard Character */}
        <WizardCharacter
          message="Every great wizard masters both knowledge and courage."
          showMessage={showMessage}
        />
      </div>
    </PageTransition>
  );
}
