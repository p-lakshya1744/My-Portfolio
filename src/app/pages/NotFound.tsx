import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Sparkles } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--castle-dark)] flex items-center justify-center overflow-hidden px-8">
        {/* Magical Background Effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[var(--gryffindor-gold)] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="mb-8"
          >
            <Sparkles className="w-24 h-24 text-[var(--gryffindor-gold)] mx-auto animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-magical text-9xl mb-4 text-[var(--gryffindor-gold)]"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-magical text-4xl mb-4 text-[var(--parchment)]"
          >
            Page Lost in the Forbidden Forest
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-modern text-xl text-[var(--parchment)]/70 mb-12 max-w-md mx-auto"
          >
            The magic you seek cannot be found here. Perhaps it was taken by mischievous magical creatures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--gryffindor-gold)] to-[#d4af37] text-[var(--castle-dark)] font-magical text-xl rounded-lg hover:shadow-2xl hover:shadow-[var(--gryffindor-gold)]/50 transition-all duration-300"
            >
              <Home className="w-6 h-6" />
              Return to Hogwarts
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
