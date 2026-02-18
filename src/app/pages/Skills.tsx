import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { PageTransition } from '../components/PageTransition';
import { WizardCharacter } from '../components/WizardCharacter';
import { useState, useEffect } from 'react';
import { Code, Database, Cloud, Wrench, Brain, Palette } from 'lucide-react';

function MagicalOrbs() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />

      {Array.from({ length: 20 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.1, 16, 16]}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
        >
          <meshStandardMaterial
            color={i % 2 === 0 ? '#ffd700' : '#8B0000'}
            emissive={i % 2 === 0 ? '#ffd700' : '#8B0000'}
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </>
  );
}

export default function Skills() {
  const [showMessage, setShowMessage] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'C/C++/C#', level: 95, color: '#00599c' },
        { name: 'JavaScript/TypeScript', level: 95, color: '#f7df1e' },
        { name: 'Python', level: 95, color: '#3776ab' },
        { name: 'Dart', level: 90, color: '#a8b9cc' },
        { name: 'Java', level: 80, color: '#007396' },
        { name: 'SQL', level: 85, color: '#4479a1' },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Scikit-learn', level: 95, color: '#f7931e' },
        { name: 'TensorFlow', level: 90, color: '#ff6f00' },
        { name: 'NLP', level: 85, color: '#4db6ac' },
        { name: 'PyTorch', level: 85, color: '#ee4c2c' },
        { name: 'Computer Vision', level: 80, color: '#5c6bc0' },
        { name: 'Deep Learning', level: 75, color: '#ab47bc' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      icon: Palette,
      skills: [
        { name: 'React', level: 95, color: '#61dafb' },
        { name: 'Flutter', level: 95, color: '#61dafb' },
        { name: 'Node.js', level: 95, color: '#339933' },
        { name: 'Express', level: 95, color: '#000000' },
        { name: 'Flask/FastAPI/Django', level: 85, color: '#009688' },
        { name: 'Tkinter', level: 80, color: '#009688' },
        { name: 'Next.js', level: 70, color: '#000000' },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 95, color: '#47a248' },
        { name: 'PostgreSQL', level: 90, color: '#336791' },
        { name: 'MySQL', level: 95, color: '#4479a1' },
        { name: 'Redis', level: 80, color: '#dc382d' },
        { name: 'Firebase', level: 85, color: '#ffca28' },
        { name: 'Supabase', level: 85, color: '#ffca28' },
        { name: 'Cassandra', level: 75, color: '#ffca28' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS/GCP', level: 85, color: '#ff9900' },
        { name: 'Docker', level: 90, color: '#2496ed' },
        { name: 'Kubernetes', level: 75, color: '#326ce5' },
        { name: 'Git', level: 95, color: '#f05032' },
        { name: 'CI/CD', level: 90, color: '#4caf50' },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'VS Code/Thonny', level: 95, color: '#007acc' },
        { name: 'Jupyter', level: 95, color: '#f37626' },
        { name: 'Postman', level: 95, color: '#ff6c37' },
        { name: 'Linux', level: 85, color: '#fcc624' },
        { name: 'IoT', level: 90, color: '#00bcd4' },
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--castle-dark)] overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <color attach="background" args={['#0a0a0f']} />
            <MagicalOrbs />
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
              Spell Mastery
            </h1>
            <p className="font-modern text-xl text-[var(--parchment)]/80">
              The arsenal of a modern wizard
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: catIndex * 0.1 }}
                className="p-8 bg-gradient-to-br from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-2xl shadow-2xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gryffindor-gold)]/20 to-[var(--gryffindor-red)]/20 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-[var(--gryffindor-gold)]" />
                  </div>
                  <h2 className="font-magical text-2xl text-[var(--gryffindor-gold)]">
                    {category.category}
                  </h2>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group cursor-pointer"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-modern text-[var(--parchment)]">
                          {skill.name}
                        </span>
                        <span className="font-modern text-sm text-[var(--gryffindor-gold)]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-[var(--card)] rounded-full overflow-hidden border border-[var(--gryffindor-gold)]/20">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                          className="h-full bg-gradient-to-r from-[var(--gryffindor-gold)] to-[var(--ember-orange)] relative"
                          style={{
                            boxShadow: hoveredSkill === skill.name
                              ? `0 0 15px ${skill.color}`
                              : 'none',
                          }}
                        >
                          {/* Glow effect */}
                          {hoveredSkill === skill.name && (
                            <motion.div
                              className="absolute inset-0 bg-white/30"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-8 bg-gradient-to-br from-[var(--parchment)] to-[#d4c5a9] rounded-2xl shadow-2xl border-4 border-[var(--gryffindor-gold)]/50"
          >
            <h3 className="font-magical text-3xl text-[var(--gryffindor-red)] mb-4 text-center">
              Continuous Learning
            </h3>
            <p className="font-modern text-lg text-[var(--castle-dark)] leading-relaxed text-center">
              A true wizard never stops learning. Currently expanding knowledge in Advanced Deep Learning,
              System Design and Blockchain Technologies. The journey of mastery is endless,
              and every day brings new spells to master.
            </p>
          </motion.div>
        </div>

        {/* Wizard Character */}
        <WizardCharacter
          message="Master your craft, one spell at a time."
          showMessage={showMessage}
        />
      </div>
    </PageTransition>
  );
}
