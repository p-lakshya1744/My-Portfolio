import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface WizardCharacterProps {
  message?: string;
  showMessage?: boolean;
}

export function WizardCharacter({ message, showMessage }: WizardCharacterProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showOwl, setShowOwl] = useState(false);
  const constraintsRef = useRef(null);
  const { scrollY } = useScroll();

  const floatY = useTransform(scrollY, [0, 1000], [0, -20]);

  useEffect(() => {
    // Owl appears occasionally
    const owlInterval = setInterval(() => {
      setShowOwl(true);
      setTimeout(() => setShowOwl(false), 3000);
    }, 15000);

    return () => clearInterval(owlInterval);
  }, []);

  return (
    <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-40">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 pointer-events-auto cursor-grab active:cursor-grabbing scale-75 md:scale-100 origin-bottom-right"
        style={{ y: floatY }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Wizard Character */}
        <div className="relative">
          {/* Magical Glow */}
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl opacity-60"
            style={{
              background: 'radial-gradient(circle, var(--gryffindor-gold) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Wizard Avatar */}
          <div className="relative w-32 h-40 bg-gradient-to-b from-[var(--gryffindor-red)] to-[#5a0000] rounded-t-full border-2 border-[var(--gryffindor-gold)]/50 shadow-2xl">
            {/* Head */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#f4c8a8] rounded-full border-2 border-[var(--gryffindor-gold)]/30" />

            {/* Wizard Hat */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] rounded-t-full border border-[var(--gryffindor-gold)]/30">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-[var(--gryffindor-gold)] rounded-full" />
            </div>

            {/* Wand */}
            <motion.div
              className="absolute -right-6 top-16 w-12 h-1 bg-gradient-to-r from-[#8B4513] to-[#D2691E] rounded-full origin-left"
              animate={{
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="absolute -right-1 -top-2 w-4 h-4 text-[var(--gryffindor-gold)] animate-pulse" />
            </motion.div>

            {/* Robe Details */}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-[var(--gryffindor-red)]/80 to-[#5a0000] rounded-b-full">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 border-2 border-[var(--gryffindor-gold)]/40 rounded-full" />
            </div>
          </div>

          {/* Speech Bubble */}
          <AnimatePresence>
            {showMessage && message && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 px-4 py-3 bg-[var(--parchment)] border-2 border-[var(--gryffindor-gold)]/50 rounded-lg shadow-2xl"
                style={{
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                }}
              >
                <p className="font-modern text-sm text-[var(--castle-dark)] text-center">
                  {message}
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--parchment)] border-r-2 border-b-2 border-[var(--gryffindor-gold)]/50 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Owl Animation */}
      <AnimatePresence>
        {showOwl && (
          <motion.div
            initial={{ x: -100, y: 100 }}
            animate={{ x: window.innerWidth + 100, y: 150 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: 'linear' }}
            className="absolute pointer-events-none"
          >
            <div className="relative w-8 h-8 bg-gradient-to-b from-[#8B7355] to-[#5C4033] rounded-full">
              <div className="absolute -left-2 top-2 w-6 h-3 bg-[#8B7355] rounded-full -rotate-12" />
              <div className="absolute -right-2 top-2 w-6 h-3 bg-[#8B7355] rounded-full rotate-12" />
              <div className="absolute top-1 left-1/2 -translate-x-1/2 flex gap-1">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
