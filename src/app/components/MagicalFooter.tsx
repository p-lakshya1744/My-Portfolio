import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export function MagicalFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="relative z-20 py-8 border-t border-[var(--gryffindor-gold)]/30 bg-[var(--castle-dark)]/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[var(--gryffindor-gold)] animate-pulse" />
            <p className="font-magical text-[var(--gryffindor-gold)]">
              Lakshya Patel
            </p>
          </div>
          
          <div className="flex items-center gap-2 font-modern text-sm text-[var(--parchment)]/70">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-[var(--gryffindor-red)] fill-current animate-pulse" />
            <span>and</span>
            <Sparkles className="w-4 h-4 text-[var(--gryffindor-gold)]" />
            <span>magic</span>
          </div>
          
          <p className="font-modern text-sm text-[var(--parchment)]/70">
            © 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
