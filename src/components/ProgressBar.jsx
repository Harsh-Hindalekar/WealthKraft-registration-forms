import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full h-1.5 bg-slate-100 relative rounded-full overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary-gold to-primary-gold rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute right-0 top-0 h-full w-4 bg-white/40 blur-[2px] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
      </motion.div>
    </div>
  );
}
