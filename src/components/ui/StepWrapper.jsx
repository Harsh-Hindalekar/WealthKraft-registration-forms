import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.4, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1 
    }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function StepWrapper({ title, subtitle, stepInfo, children }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col w-full px-6 py-6"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <span className="inline-block px-3 py-1 bg-secondary-gold/10 text-primary-gold text-xs font-bold tracking-wider rounded-full mb-3">
          {stepInfo}
        </span>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        {subtitle && <p className="text-muted-text mt-1 text-sm">{subtitle}</p>}
      </motion.div>
      
      <div className="flex flex-col gap-6">
        {React.Children.map(children, child => (
          <motion.div variants={itemVariants}>
            {child}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
