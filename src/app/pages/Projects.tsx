import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import { ExternalLink, Github, Sparkles, Bot, Cpu, Radio, Code, Zap } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WizardCharacter } from '../components/WizardCharacter';
import { useState, useEffect } from 'react';

function MagicalArtifacts() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffd700" />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5, 32, 32]} position={[-2, 1, 0]}>
          <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere args={[0.3, 32, 32]} position={[2, -1, 1]}>
          <meshStandardMaterial color="#8B0000" emissive="#8B0000" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2.5}>
        <Sphere args={[0.4, 32, 32]} position={[0, 2, -1]}>
          <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={0.6} metalness={0.8} roughness={0.2} />
        </Sphere>
      </Float>
    </>
  );
}

export default function Projects() {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'SmartScriber',
      category: 'full-stack',
      icon: Bot,
      description: 'Smart email-based expense manager that detects subscriptions/purchases, extracts billing details and provides structured insights to help users avoid hidden charges and manage digital spending effortlessly.',
      tech: ['Flutter', 'Django', 'NLP', 'MongoDB'],
      impact: 'Built with scalable architecture to support 1,000+ concurrent users across India with secure, real-time email processing.',
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'CodeConnect',
      category: 'full-stack',
      icon: Cpu,
      description: 'Community-driven learning platform empowering Tier-2 and Tier-3 college students with mentorship, structured coding guidance, project support and career-focused resources to bridge the opportunity gap in tech.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      impact: 'Designed to scale for 5,000+ learners nationwide, supporting concurrent users with a reliable, growth-ready backend.',
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Ms Nova',
      category: 'ai-ml',
      icon: Bot,
      description: 'Advanced conversational AI assistant with natural language processing, context awareness, and multi-domain knowledge integration.',
      tech: ['Python', 'ReactJs', 'TensorFlow', 'NLP'],
      impact: 'Handling 10K+ verbal conversations daily automating almost every digital task',
      github: '#',
      demo: '#',
      color: 'from-green-500 to-emerald-500',
    },
    // {
    //   title: 'Robosoccer',
    //   category: 'ai-ml',
    //   icon: Radio,
    //   description: 'Advanced drone control system with computer vision, autonomous navigation, and real-time object detection.',
    //   tech: ['Python', 'OpenCV', 'ROS', 'Computer Vision'],
    //   impact: 'Achieved 90% autonomous flight accuracy',
    //   github: '#',
    //   demo: '#',
    //   color: 'from-orange-500 to-red-500',
    // },
    // {
    //   title: 'Full-Stack E-Commerce Platform',
    //   category: 'ai-ml',
    //   icon: Code,
    //   description: 'Scalable e-commerce solution with real-time inventory, payment integration, and advanced analytics dashboard.',
    //   tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    //   impact: 'Supporting 1000+ concurrent users with 99.9% uptime',
    //   github: '#',
    //   demo: '#',
    //   color: 'from-indigo-500 to-purple-500',
    // },
    // {
    //   title: 'Real-Time Analytics Dashboard',
    //   category: 'ai-ml',
    //   icon: Zap,
    //   description: 'Interactive data visualization platform with live updates, custom metrics, and predictive analytics.',
    //   tech: ['React', 'D3.js', 'WebSocket', 'Python'],
    //   impact: 'Processing 1M+ data points per hour',
    //   github: '#',
    //   demo: '#',
    //   color: 'from-yellow-500 to-orange-500',
    // },

  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-stack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'iot', label: 'IoT' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--castle-dark)] overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            <color attach="background" args={['#0a0a0f']} />
            <MagicalArtifacts />
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
              Magical Artifacts
            </h1>
            <p className="font-modern text-xl text-[var(--parchment)]/80">
              Projects forged in the fires of innovation
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-modern transition-all duration-300 ${selectedCategory === cat.id
                  ? 'bg-[var(--gryffindor-gold)] text-[var(--castle-dark)] shadow-lg shadow-[var(--gryffindor-gold)]/50'
                  : 'bg-[var(--card)]/60 text-[var(--parchment)] border border-[var(--gryffindor-gold)]/30 hover:border-[var(--gryffindor-gold)]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-6 bg-gradient-to-br from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Magical Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gryffindor-gold)]/20 to-[var(--gryffindor-red)]/20 flex items-center justify-center">
                      <project.icon className="w-8 h-8 text-[var(--gryffindor-gold)]" />
                    </div>
                    <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-[var(--gryffindor-gold)] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <h3 className="font-magical text-2xl text-[var(--gryffindor-gold)] mb-3">
                    {project.title}
                  </h3>

                  <p className="font-modern text-sm text-[var(--parchment)]/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-modern bg-[var(--gryffindor-gold)]/10 text-[var(--gryffindor-gold)] border border-[var(--gryffindor-gold)]/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="mb-4 p-3 bg-[var(--gryffindor-red)]/10 border-l-2 border-[var(--gryffindor-gold)] rounded">
                    <p className="font-modern text-xs text-[var(--parchment)]/70">
                      <strong className="text-[var(--gryffindor-gold)]">Impact:</strong> {project.impact}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] border border-[var(--gryffindor-gold)]/30 rounded-lg hover:border-[var(--gryffindor-gold)] transition-all duration-300 flex-1 justify-center"
                    >
                      <Github className="w-4 h-4 text-[var(--gryffindor-gold)]" />
                      <span className="font-modern text-sm text-red-500 font-bold">CONFIDENTIAL</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--gryffindor-gold)] to-[#d4af37] rounded-lg hover:shadow-lg hover:shadow-[var(--gryffindor-gold)]/50 transition-all duration-300 flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4 text-[var(--castle-dark)]" />
                      <span className="font-modern text-sm text-[var(--castle-dark)]">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wizard Character */}
        <WizardCharacter
          message="These artifacts represent the mastery of code and creativity."
          showMessage={showMessage}
        />
      </div>
    </PageTransition>
  );
}
