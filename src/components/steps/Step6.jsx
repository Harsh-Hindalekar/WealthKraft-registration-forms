import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Step6({ formData = {} }) {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    // Extract name from form data
    if (formData.fullName) {
      const firstName = formData.fullName.split(' ')[0];
      setDisplayName(firstName);
    }
  }, [formData]);

  const handleExplore = () => {
    window.open('https://www.ketanmali.com', '_blank');
  };

  const handleBackHome = () => {
    navigate('/step0');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-surface-start to-surface-end flex items-center justify-center p-4 md:p-8"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 60%),
          linear-gradient(to bottom right, #fdfbfb, #ebedee)
        `
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 text-center space-y-6 md:space-y-8">
          {/* Success Icon Animation */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary-gold to-secondary-gold flex items-center justify-center shadow-lg">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl"
              >
                ✓
              </motion.div>
            </div>
          </motion.div>

          {/* Main Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Thank You{displayName && `, ${displayName}`}!
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Your form has been submitted successfully
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              We've received your information and will get in touch with you shortly. Your journey towards building wealth peacefully has just begun.
            </p>
            <div className="inline-block bg-gradient-to-r from-primary-gold/10 to-secondary-gold/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 border border-primary-gold/20">
              <p className="text-sm md:text-base text-primary-gold font-semibold">
                📧 Check your email for further updates
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
          />

          {/* Explore Website Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-slate-600 text-base md:text-lg font-medium">
              Discover more about our wealth management expertise
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleExplore}
              className="w-full bg-gradient-to-r from-primary-gold to-secondary-gold text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Visit Ketan Mali - Our Main Site</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ExternalLink size={20} />
              </motion.div>
            </motion.button>

            <p className="text-xs md:text-sm text-slate-500">
              www.ketanmali.com
            </p>
          </motion.div>

          {/* Back Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBackHome}
            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-3 px-6 rounded-2xl border border-slate-200 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Start Another Journey</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>

          {/* Footer Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xs md:text-sm text-slate-500 pt-4"
          >
            Building Wealth in a Peaceful Way • WealthKraft Registration
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

