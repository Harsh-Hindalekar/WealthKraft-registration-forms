import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Step0() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showThoughts, setShowThoughts] = useState(false);
  const [visibleThoughts, setVisibleThoughts] = useState([]);
  const [autoNavigateTriggered, setAutoNavigateTriggered] = useState(false);

  // Client images array
  const clientImages = [
    "/images/profile1.jpg",
    "/images/profile2.jpg",
    "/images/profile3.jpg",
    "/images/profile3.jpg",
    "/images/profile3.jpg"
  ];

  // Thought/quote texts
  const thoughts = [
    "CRM-Driven Active Client Support",
    "20+ Years Of Market Experience",
    "India Level Award Winning Company"
  ];

  // Slideshow carousel - auto-change images every 2.5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % clientImages.length);
    }, 2500);

    return () => clearInterval(slideInterval);
  }, [clientImages.length]);

  // Trigger thoughts animation after component mounts
  useEffect(() => {
    setShowThoughts(true);
  }, []);

  // Animate thoughts one by one with 1 second delay
  useEffect(() => {
    if (!showThoughts) return;

    const thoughtTimings = thoughts.map((_, idx) => {
      return setTimeout(() => {
        setVisibleThoughts((prev) => [...prev, idx]);
      }, idx * 1000);
    });

    // Calculate when all thoughts are visible
    const allThoughtsVisibleTime = (thoughts.length - 1) * 1000;

    return () => thoughtTimings.forEach((timeout) => clearTimeout(timeout));
  }, [showThoughts, thoughts.length]);

  // Auto-navigate after all animations complete and 8-10 seconds have passed
  useEffect(() => {
    if (visibleThoughts.length === thoughts.length && !autoNavigateTriggered) {
      const navigationDelay = setTimeout(() => {
        setAutoNavigateTriggered(true);
        navigate('/step1');
      }, 8000);

      return () => clearTimeout(navigationDelay);
    }
  }, [visibleThoughts.length, thoughts.length, navigate, autoNavigateTriggered]);

  // Handle click anywhere to navigate
  const handlePageClick = () => {
    if (visibleThoughts.length === thoughts.length) {
      navigate('/step1');
    }
  };

  return (
    <div
      onClick={handlePageClick}
      className="min-h-screen w-full bg-gradient-to-br from-surface-start to-surface-end cursor-pointer"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 60%),
          linear-gradient(to bottom right, #fdfbfb, #ebedee)
        `
      }}
    >
      {/* Main Container */}
      <div className="w-full min-h-screen flex flex-col">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full px-4 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6"
        >
          <div className="max-w-6xl mx-auto">
            {/* Top Header Card */}
            <motion.div
              className="bg-gradient-to-r from-primary-gold to-secondary-gold text-white rounded-2xl px-6 md:px-8 py-4 md:py-5 shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1 className="text-lg md:text-2xl font-bold tracking-wide text-center">
                Building Wealth in a Peaceful Way
              </h1>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-4 md:mt-6 text-center"
            >
              <p className="text-base md:text-lg text-slate-600 font-medium">
                Your journey to financial prosperity starts here
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Section - Responsive Layout */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 py-6 md:py-8">
          <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
            {/* Image Slideshow Section - Left on Desktop, Top on Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-sm lg:max-w-none h-72 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                {/* Image Container */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={clientImages[currentImageIndex]}
                      alt={`Client ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x500?text=Client+Photo";
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-300" />

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {clientImages.map((_, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        scale: idx === currentImageIndex ? 1.2 : 1,
                        opacity: idx === currentImageIndex ? 1 : 0.5
                      }}
                      className="h-2 rounded-full bg-white"
                      style={{
                        width: idx === currentImageIndex ? "24px" : "8px"
                      }}
                    />
                  ))}
                </div>

                {/* Thought Cards Overlay on Mobile / Below on Desktop */}
                <div className="absolute -bottom-32 md:-bottom-24 lg:hidden left-0 right-0 px-4 flex flex-col gap-3">
                  <AnimatePresence>
                    {visibleThoughts.map((thoughtIdx) => (
                      <ThoughtCard
                        key={thoughtIdx}
                        text={thoughts[thoughtIdx]}
                        index={thoughtIdx}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Thoughts/Popups Section - Right on Desktop, Bottom on Mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col justify-center gap-4 md:gap-5 hidden lg:flex"
            >
              <div className="space-y-4">
                <AnimatePresence>
                  {visibleThoughts.map((thoughtIdx) => (
                    <ThoughtCard
                      key={thoughtIdx}
                      text={thoughts[thoughtIdx]}
                      index={thoughtIdx}
                      isDesktop
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* Call to Action Text */}
              {visibleThoughts.length === thoughts.length && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-slate-200"
                >
                  <p className="text-sm md:text-base text-slate-600">
                    Click anywhere or wait to continue your wealth-building journey
                  </p>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mt-3 text-primary-gold font-semibold"
                  >
                    ↓ Next Step
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Mobile CTA */}
        {visibleThoughts.length === thoughts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:hidden px-4 md:px-8 pb-6 md:pb-8 text-center"
          >
            <p className="text-sm md:text-base text-slate-600 mb-2">
              Click anywhere to continue
            </p>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <span className="text-primary-gold font-semibold text-lg">↓</span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/**
 * ThoughtCard Component - Individual animated popup card
 */
function ThoughtCard({ text, index, isDesktop = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      className={`backdrop-blur-md rounded-2xl border border-white/30 shadow-lg p-4 md:p-5 ${
        isDesktop
          ? "bg-white/10 hover:bg-white/15 transition-colors duration-300"
          : "bg-white/15"
      }`}
    >
      <div className="flex items-start gap-3 md:gap-4">
        {/* Icon Circle */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary-gold to-secondary-gold flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md"
        >
          {index + 1}
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm md:text-base font-semibold text-slate-800 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
