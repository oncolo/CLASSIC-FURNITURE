'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background soft ambient lighting */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'var(--red)',
          opacity: 0.05,
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0,
        }} 
      />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center gap-8">
        {/* Animated Custom Chair Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ color: 'var(--red)' }}
          className="w-24 h-24 mb-2"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full stroke-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12V32" strokeWidth="2" strokeLinecap="round"/>
            <path d="M48 12V32" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 18H48" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 32H52" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 32C12 37.5228 16.4772 42 22 42H42C47.5228 42 52 37.5228 52 32" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 42V54" strokeWidth="2" strokeLinecap="round"/>
            <path d="M44 42V54" strokeWidth="2" strokeLinecap="round"/>
            <path d="M28 12H36" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* 404 Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-playfair, serif)' }}
          className="text-7xl md:text-8xl font-bold tracking-tight text-[#eee] select-none"
        >
          404
        </motion.h1>

        {/* Bilingual Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-4 text-center px-4"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-[#eee]">
            ገጹ አልተገኘም | Page Not Found
          </h2>
          
          <p className="text-sm md:text-base text-[#aaa] leading-relaxed max-w-md italic">
            "ይህ ገጽ ከclassic የቤት ዕቃዎች ስብስባችን ውስጥ አልተገኘም። ወደ መነሻ ገጽ ተመልሰው ሌሎች ምርቶችን መመልከት ይችላሉ።"
          </p>
          
          <p className="text-xs md:text-sm text-[#777] leading-relaxed max-w-md">
            This page seems to be missing from our collection. Let's guide you back to our timeless furniture catalog.
          </p>
        </motion.div>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: 'var(--red)',
                color: '#fff',
                border: 'none',
                fontFamily: 'inherit',
                letterSpacing: '2px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
              className="px-8 py-4 md:px-10 md:py-4 text-xs md:text-sm font-semibold shadow-lg hover:shadow-xl"
            >
              Return to Gallery / ወደ መነሻ ገጽ
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
