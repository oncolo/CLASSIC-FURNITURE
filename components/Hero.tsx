'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const images = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-[100vh] flex items-center relative overflow-hidden px-6 md:px-[60px]">
      {/* Background Carousel */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.03 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5.2, ease: 'easeOut' }}
            alt="Hero Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
          />
        </AnimatePresence>
      </div>

      {/* Dark Overlay for readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)',
        zIndex: -1,
      }} />

      {/* Content */}
      <div className="relative z-[2] max-w-[580px] w-full pt-16 md:pt-0">

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          style={{ lineHeight: 1.05, fontWeight: 700, color: '#fff' }}
          className="text-5xl md:text-[72px] my-5 md:my-[30px]"
        >
          Where<br />Craft Meets<br />
          <em style={{ fontStyle: 'italic', color: 'var(--red)' }}>Elegance</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          style={{ lineHeight: 1.7, color: '#ccc', maxWidth: 400 }}
          className="text-[15px] md:text-[16px]"
        >
          Handcrafted furniture that transforms your living space into a timeless sanctuary of beauty and comfort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-8 md:mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.03, background: '#fff', color: 'var(--red)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'var(--red)', color: '#fff', border: 'none',
              fontFamily: 'inherit',
              letterSpacing: 2, cursor: 'pointer',
              textTransform: 'uppercase', transition: 'all 0.3s',
            }}
            className="px-8 py-4 text-[13px] md:text-[14px] text-center"
          >
            Explore Collection
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.4)',
              fontFamily: 'inherit',
              letterSpacing: 2, cursor: 'pointer',
              textTransform: 'uppercase', transition: 'all 0.3s',
            }}
            className="px-8 py-4 text-[13px] md:text-[14px] text-center"
          >
            Contact
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
