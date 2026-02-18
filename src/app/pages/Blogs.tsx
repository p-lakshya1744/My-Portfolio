import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { BookOpen, Calendar, Tag, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WizardCharacter } from '../components/WizardCharacter';
import { useState, useEffect } from 'react';

function FloatingScrolls() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffd700" />

      {Array.from({ length: 5 }).map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh
            position={[
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 3,
            ]}
          >
            <cylinderGeometry args={[0.05, 0.05, 1.5, 16]} />
            <meshStandardMaterial color="#e8dcc4" roughness={0.8} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Blogs() {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedTag, setSelectedTag] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const blogs = [
    {
      title: 'Building Intelligent Chatbots: A Deep Dive into NLP',
      date: 'February 10, 2026',
      excerpt: 'Exploring the architecture and implementation of state-of-the-art conversational AI systems using transformer models and natural language understanding.',
      tags: ['AI', 'NLP', 'Machine Learning'],
      readTime: '8 min read',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mastering Dynamic Programming: Patterns and Techniques',
      date: 'February 5, 2026',
      excerpt: 'A comprehensive guide to identifying and solving dynamic programming problems with practical examples and optimization strategies.',
      tags: ['DSA', 'Algorithms', 'Programming'],
      readTime: '12 min read',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Full-Stack Development in 2026: The Modern Stack',
      date: 'January 28, 2026',
      excerpt: 'Exploring the latest trends in web development, from React Server Components to edge computing and the future of full-stack architecture.',
      tags: ['Web Dev', 'Full-Stack', 'React'],
      readTime: '10 min read',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Computer Vision for Autonomous Systems',
      date: 'January 20, 2026',
      excerpt: 'Implementing real-time object detection and tracking for drone navigation using OpenCV and deep learning models.',
      tags: ['AI', 'Computer Vision', 'IoT'],
      readTime: '15 min read',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Graph Algorithms: From Theory to Practice',
      date: 'January 12, 2026',
      excerpt: 'Understanding graph traversal, shortest path algorithms, and their applications in real-world problem-solving.',
      tags: ['DSA', 'Algorithms', 'Data Structures'],
      readTime: '9 min read',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Machine Learning Model Optimization Techniques',
      date: 'January 5, 2026',
      excerpt: 'Advanced strategies for improving model performance, reducing latency, and optimizing resource usage in production ML systems.',
      tags: ['AI', 'Machine Learning', 'Research'],
      readTime: '11 min read',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const allTags = ['all', ...Array.from(new Set(blogs.flatMap(blog => blog.tags)))];

  const filteredBlogs = selectedTag === 'all'
    ? blogs
    : blogs.filter(blog => blog.tags.includes(selectedTag));

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--castle-dark)] overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <color attach="background" args={['#0a0a0f']} />
            <FloatingScrolls />
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
              Magical Chronicles
            </h1>
            <p className="font-modern text-xl text-[var(--parchment)]/80">
              Wisdom inscribed on enchanted scrolls
            </p>
          </motion.div>

          {/* Tag Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full font-modern text-sm transition-all duration-300 ${selectedTag === tag
                    ? 'bg-[var(--gryffindor-gold)] text-[var(--castle-dark)] shadow-lg shadow-[var(--gryffindor-gold)]/50'
                    : 'bg-[var(--card)]/60 text-[var(--parchment)] border border-[var(--gryffindor-gold)]/30 hover:border-[var(--gryffindor-gold)]'
                  }`}
              >
                {tag === 'all' ? 'All Topics' : tag}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative cursor-pointer"
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-[var(--parchment)] to-[#d4c5a9] rounded-2xl shadow-2xl border-4 border-[var(--gryffindor-gold)]/50 overflow-hidden">
                  {/* Parchment Texture */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'%23e8dcc4\'/%3E%3Cpath d=\'M0 0L50 50M50 50L100 0M50 50L0 100M50 50L100 100\' stroke=\'%23d4c5a9\' stroke-width=\'0.5\' opacity=\'0.3\'/%3E%3C/svg%3E")',
                    }}
                  />

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[var(--gryffindor-gold)] rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[var(--gryffindor-gold)] rounded-bl-2xl" />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gryffindor-gold)] to-[var(--gryffindor-red)] flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[var(--castle-dark)]/70">
                        <Calendar className="w-4 h-4" />
                        <span className="font-modern">{blog.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-magical text-2xl text-[var(--gryffindor-red)] mb-3 group-hover:text-[var(--gryffindor-gold)] transition-colors duration-300">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="font-modern text-[var(--castle-dark)] leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-3 py-1 bg-[var(--gryffindor-gold)]/10 border border-[var(--gryffindor-gold)]/30 rounded-full"
                        >
                          <Tag className="w-3 h-3 text-[var(--gryffindor-red)]" />
                          <span className="font-modern text-xs text-[var(--castle-dark)]">
                            {tag}
                          </span>
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-4 border-t-2 border-[var(--gryffindor-gold)]/30">
                      <span className="font-modern text-sm text-[var(--castle-dark)]/70">
                        {blog.readTime}
                      </span>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--gryffindor-red)] to-[#5a0000] text-[var(--gryffindor-gold)] rounded-lg hover:shadow-lg hover:shadow-[var(--gryffindor-gold)]/30 transition-all duration-300">
                        <span className="font-modern text-sm">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-8 bg-gradient-to-r from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-2xl shadow-xl text-center"
          >
            <h3 className="font-magical text-3xl text-[var(--gryffindor-gold)] mb-4">
              Stay Updated
            </h3>
            <p className="font-modern text-[var(--parchment)]/80 mb-6 max-w-2xl mx-auto">
              Subscribe to receive the latest insights on AI, algorithms, and cutting-edge development practices.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-[var(--gryffindor-gold)] to-[#d4af37] text-[var(--castle-dark)] font-modern rounded-lg hover:shadow-lg hover:shadow-[var(--gryffindor-gold)]/50 transition-all duration-300">
              Subscribe to Newsletter
            </button>
          </motion.div>
        </div>

        {/* Wizard Character */}
        <WizardCharacter
          message="Knowledge shared is knowledge multiplied."
          showMessage={showMessage}
        />
      </div>
    </PageTransition>
  );
}
