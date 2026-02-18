import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-[var(--castle-dark)] flex items-center justify-center z-[100]"
    >
      <div className="relative">
        {/* Magic Circle */}
        <motion.div
          className="w-64 h-64 border-4 border-[var(--gryffindor-gold)]/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-8 border-4 border-[var(--gryffindor-red)]/40 rounded-full" />
          <div className="absolute inset-16 border-4 border-[var(--gryffindor-gold)]/50 rounded-full" />
        </motion.div>

        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-16 h-16 text-[var(--gryffindor-gold)]" />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="font-magical text-[var(--gryffindor-gold)] text-xl tracking-wider">
            Summoning Magic...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
