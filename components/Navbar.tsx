'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Collection', href: '/#collection' },
  { label: 'Craftsmanship', href: '/#craftsmanship' },
  { label: 'Bespoke', href: '/#bespoke' },
  { label: 'Our Story', href: '/#our-story' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-[60px] h-[72px]"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.90)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(200,16,46,0.12)',
        transition: 'background 0.3s',
      }}
    >
      <Link href="/" style={{ fontSize: 20, fontWeight: 700, letterSpacing: 2, textDecoration: 'none', color: 'inherit' }} className="md:text-[22px] md:tracking-[3px]">
        CLASSIC <span style={{ color: 'var(--red)' }}>FURNITURE</span>
      </Link>

      <div className="hidden lg:flex gap-10">
        {navLinks.map((item) => (
          <NavLink key={item.label} label={item.label} href={item.href} />
        ))}
      </div>

      <div className="hidden lg:block">
        <motion.button
          onClick={() => window.location.href = '/#contact'}
          whileHover={{ scale: 1.04, background: '#111' }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: 'var(--red)',
            color: '#fff',
            border: 'none',
            padding: '10px 28px',
            fontFamily: 'inherit',
            fontSize: 13,
            letterSpacing: 2,
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'background 0.3s',
          }}
        >
          Contact
        </motion.button>
      </div>

      <button className="lg:hidden text-2xl text-[var(--dark)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[72px] left-0 right-0 bg-white shadow-xl flex flex-col p-6 gap-6 lg:hidden border-t border-[rgba(200,16,46,0.1)]"
          >
            {navLinks.map((item) => (
              <div key={item.label} onClick={() => setMobileMenuOpen(false)}>
                <NavLink label={item.label} href={item.href} />
              </div>
            ))}
            <motion.button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '/#contact';
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'var(--red)',
                color: '#fff',
                border: 'none',
                padding: '12px',
                fontFamily: 'inherit',
                fontSize: 13,
                letterSpacing: 2,
                cursor: 'pointer',
                textTransform: 'uppercase',
                width: '100%',
                marginTop: 10,
              }}
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ label, href }: { label: string, href: string }) {
  return (
    <Link
      href={href}
      style={{
        fontSize: 13,
        letterSpacing: 2,
        textDecoration: 'none',
        color: 'var(--dark)',
        textTransform: 'uppercase',
        fontWeight: 400,
        position: 'relative',
        paddingBottom: 4,
      }}
      className="nav-link block"
    >
      {label}
    </Link>
  )
}
