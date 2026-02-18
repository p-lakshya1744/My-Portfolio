import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { BarChart3, Code2, Trophy, TrendingUp } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WizardCharacter } from '../components/WizardCharacter';
import { useState, useEffect } from 'react';

function AnalyticsViz() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />

      {/* Floating Data Cubes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 12) * Math.PI * 2) * 3,
            Math.sin(i * 0.5) * 2,
            Math.sin((i / 12) * Math.PI * 2) * 3,
          ]}
          rotation={[i * 0.2, i * 0.3, 0]}
        >
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#ffd700' : '#8B0000'}
            emissive={i % 2 === 0 ? '#ffd700' : '#8B0000'}
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </>
  );
}

export default function DSAStats() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const platforms = [
    {
      name: 'LeetCode',
      icon: Code2,
      profileUrl: 'https://leetcode.com/u/p_lakshya1744/',
      stats: {
        problemsSolved: 114,
        rating: 'None',
        rank: 'Profile',
        contests: 0,
      },
      color: '#ffa116',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      name: 'Codeforces',
      icon: Trophy,
      profileUrl: 'https://codeforces.com/profile/p-lakshya1744',
      stats: {
        problemsSolved: 47,
        rating: 'None',
        rank: 'Profile',
        contests: 0,
      },
      color: '#1f8acb',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'CodeChef',
      icon: BarChart3,
      profileUrl: 'https://www.codechef.com/users/ap_lakshya1744',
      stats: {
        problemsSolved: 42,
        rating: 'None',
        rank: 'Profile',
        contests: 0,
      },
      color: '#5b4638',
      gradient: 'from-amber-700 to-yellow-600',
    },
    {
      name: 'HackerRank',
      icon: TrendingUp,
      profileUrl: 'https://www.hackerrank.com/p_lakshya1744',
      stats: {
        problemsSolved: 4,
        rating: 'None',
        rank: 'Profile',
        contests: 0,
      },
      color: '#00ea64',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const githubStats = {
    totalRepos: 27,
    totalStars: 4,
    contributions: 469,
    pullRequests: 6,
    issues: 0,
    followers: 1,
  };

  const topLanguages = [
    { name: 'Javascript', percentage: 35, color: '#3776ab' },
    { name: 'TypeScript', percentage: 28, color: '#f7df1e' },
    { name: 'C++', percentage: 18, color: '#3178c6' },
    { name: 'Python', percentage: 12, color: '#007396' },
    { name: 'Java', percentage: 7, color: '#00599c' },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--castle-dark)] overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <color attach="background" args={['#0a0a0f']} />
            <AnalyticsViz />
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
              Enchanted Analytics
            </h1>
            <p className="font-modern text-xl text-[var(--parchment)]/80">
              Data-driven mastery visualized
            </p>
          </motion.div>

          {/* Coding Platform Stats */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative"
              >
                <div className="relative p-5 md:p-8 bg-gradient-to-br from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Animated Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Header */}
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${platform.color}20` }}
                      >
                        <platform.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: platform.color }} />
                      </div>
                      <h3 className="font-magical text-xl md:text-2xl text-[var(--gryffindor-gold)]">
                        {platform.name}
                      </h3>
                    </div>
                    <a
                      href={platform.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-modern border-2 self-start sm:self-auto hover:brightness-110 transition-all cursor-pointer"
                      style={{
                        borderColor: platform.color,
                        color: platform.color,
                        backgroundColor: `${platform.color}10`,
                      }}
                    >
                      {platform.stats.rank}
                    </a>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="p-3 md:p-4 bg-[var(--card)]/50 rounded-xl border border-[var(--gryffindor-gold)]/20">
                      <p className="font-modern text-xs md:text-sm text-[var(--parchment)]/60 mb-1">
                        Problems Solved
                      </p>
                      <p className="font-magical text-2xl md:text-3xl text-[var(--gryffindor-gold)]">
                        {platform.stats.problemsSolved}
                      </p>
                    </div>
                    <div className="p-3 md:p-4 bg-[var(--card)]/50 rounded-xl border border-[var(--gryffindor-gold)]/20">
                      <p className="font-modern text-xs md:text-sm text-[var(--parchment)]/60 mb-1">
                        Rating
                      </p>
                      <p className="font-magical text-2xl md:text-3xl text-[var(--gryffindor-gold)]">
                        {platform.stats.rating}
                      </p>
                    </div>
                    <div className="p-3 md:p-4 bg-[var(--card)]/50 rounded-xl border border-[var(--gryffindor-gold)]/20 sm:col-span-2">
                      <p className="font-modern text-xs md:text-sm text-[var(--parchment)]/60 mb-1">
                        Contests Participated
                      </p>
                      <p className="font-magical text-2xl md:text-3xl text-[var(--gryffindor-gold)]">
                        {platform.stats.contests}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-magical text-4xl text-[var(--gryffindor-gold)] mb-8 text-center">
              GitHub Contributions
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(githubStats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-6 bg-gradient-to-br from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-xl shadow-xl text-center"
                >
                  <p className="font-magical text-3xl text-[var(--gryffindor-gold)] mb-2">
                    {value}
                  </p>
                  <p className="font-modern text-xs text-[var(--parchment)]/70 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Language Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="p-8 bg-gradient-to-br from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-2xl shadow-2xl"
          >
            <h2 className="font-magical text-4xl text-[var(--gryffindor-gold)] mb-8 text-center">
              Top Languages
            </h2>

            <div className="space-y-6">
              {topLanguages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-modern text-[var(--parchment)]">
                      {lang.name}
                    </span>
                    <span className="font-modern text-sm text-[var(--gryffindor-gold)]">
                      {lang.percentage}%
                    </span>
                  </div>

                  <div className="relative h-4 bg-[var(--card)] rounded-full overflow-hidden border border-[var(--gryffindor-gold)]/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 1, delay: 0.9 + index * 0.1 + 0.3 }}
                      className="h-full relative"
                      style={{ backgroundColor: lang.color }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 p-8 bg-gradient-to-br from-[var(--parchment)] to-[#d4c5a9] rounded-2xl shadow-2xl border-4 border-[var(--gryffindor-gold)]/50 max-w-4xl mx-auto"
          >
            <h3 className="font-magical text-3xl text-[var(--gryffindor-red)] mb-4 text-center">
              The Numbers Speak
            </h3>
            <p className="font-modern text-lg text-[var(--castle-dark)] leading-relaxed text-center">
              Over 160+ problems solved across platforms, participating in 0 contests,
              and maintaining a consistent coding practice. These statistics represent significant
              hours of problem-solving, algorithm optimization, and continuous learning in the
              art of computational thinking.
            </p>
          </motion.div>
        </div>

        {/* Wizard Character */}
        <WizardCharacter
          message="Data reveals the truth of dedication and growth."
          showMessage={showMessage}
        />
      </div>
    </PageTransition>
  );
}
