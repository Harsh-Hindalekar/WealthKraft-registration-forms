import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full h-1 bg-gray-100 relative">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary-gold to-primary-gold"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}
