import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingOverlay({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[6px]"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-primary-gold/20 border-t-primary-gold animate-spin" />
              <img src="/logo.png" alt="Loading Logo" className="w-14 h-14 object-contain" />
            </div>
            <h2 className="text-lg font-bold text-slate-800 tracking-wide">
              Wealth<span className="text-primary-gold">Kraft</span>
            </h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
