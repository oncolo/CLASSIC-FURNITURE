'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, animate, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'

const stats = [
  { num: '2,400+', label: 'Pieces Crafted' },
  { num: '26', label: 'Years of Excellence' },
  { num: '98%', label: 'Client Satisfaction' },
  { num: '18', label: 'Design Awards' },
]

function CountUp({ value, trigger }: { value: string; trigger: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return

    const cleaned = value.replace(/[^0-9]/g, '')
    const target = parseInt(cleaned, 10) || 0

    const controls = animate(0, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(latest) {
        setCount(Math.floor(latest))
      },
    })

    return () => controls.stop()
  }, [value, trigger])

  const hasComma = value.includes(',')
  const hasPercent = value.includes('%')
  const hasPlus = value.includes('+')

  let formatted = count.toString()
  if (hasComma) {
    formatted = count.toLocaleString('en-US')
  }
  if (hasPlus) formatted += '+'
  if (hasPercent) formatted += '%'

  return <>{formatted}</>
}

function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 mx-6 md:mx-[60px] mt-10 md:mt-[80px] border-t border-b border-[rgba(0,0,0,0.1)]">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className={`flex flex-col items-center justify-center p-6 md:p-10 text-center ${i % 2 === 0 ? 'border-r border-[rgba(0,0,0,0.1)]' : ''} md:border-r md:last:border-none border-b md:border-b-0`}
        >
          <div style={{ color: 'var(--red)' }} className="text-3xl md:text-[48px] font-bold">
            <CountUp value={s.num} trigger={inView} />
          </div>
          <div className="text-[9px] md:text-[11px] tracking-[2px] md:tracking-[3px] uppercase text-[#888] mt-2">{s.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

function Featured() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      id="bespoke"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-[#111] text-white py-16 px-6 md:py-[100px] md:px-[60px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[80px] items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.9 }}
        style={{ perspective: 1200 }}
      >
        <motion.div
          whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ background: '#222', position: 'relative', overflow: 'hidden', borderRadius: 8, boxShadow: '0 30px 60px -12px rgba(0,0,0,0.8)', transformStyle: 'preserve-3d' }}
          className="aspect-[4/5] sm:w-[80%] md:w-full mx-auto"
        >
          <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80" alt="Bespoke Service" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '40%', height: '100%',
            background: 'var(--red)', opacity: 0.15,
          }} />
          <div style={{
            position: 'absolute', bottom: 0, right: 0,
            width: '40%', height: '40%',
            background: 'var(--red)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: 'translateZ(30px)',
          }} className="flex items-center justify-center">
            <div style={{ color: '#fff', textAlign: 'center' }}>
              <div className="text-2xl md:text-[36px] font-bold">25%</div>
              <div className="text-[9px] md:text-[10px] tracking-[2px] md:tracking-[3px] uppercase mt-1">Off Bespoke</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.9 }}
      >
        <p style={{ letterSpacing: 5, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[10px] md:text-[11px] mb-3">
          Bespoke Service
        </p>
        <h2 style={{ fontWeight: 700, lineHeight: 1.1, color: '#fff' }} className="text-4xl md:text-[52px] mb-6">
          Your Vision, <em>Our Craft</em>
        </h2>
        <p style={{ color: '#aaa', lineHeight: 1.8, fontStyle: 'italic' }} className="text-[14px] md:text-[16px] mb-8">
          Every piece tells a story. Our master craftsmen work closely with you to design furniture that reflects your personality and fits perfectly in your space.
        </p>
        <ul className="list-none mb-10">
          {['Personalized design consultation', 'Premium sustainably sourced wood', '60-day crafting timeline', '10-year structural warranty', 'White glove delivery & installation'].map(item => (
            <li key={item} className="flex items-center gap-4 py-3 border-b border-[rgba(255,255,255,0.1)] text-[13px] md:text-[14px] text-[#ddd] tracking-[1px]">
              <span style={{ background: 'var(--red)' }} className="w-6 h-[1px] shrink-0 block" />
              {item}
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ background: '#fff', color: 'var(--red)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: 'var(--red)', color: '#fff', border: 'none',
            fontFamily: 'inherit',
            letterSpacing: 2, cursor: 'pointer',
            textTransform: 'uppercase', transition: 'all 0.3s',
          }}
          className="px-8 py-4 md:px-[48px] md:py-[16px] text-[13px] md:text-[14px]"
        >
          Start Your Project
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

const testimonials = [
  {
    quote: "The dining table Classic Furniture crafted for us has become the centerpiece of our home — where family gathers, stories are shared, and memories are made.",
    author: "Meron Tadesse",
    location: "Bole, Addis Ababa"
  },
  {
    quote: "Exceptional craftsmanship and attention to detail. The bespoke bedroom set they built exceeds all our expectations in quality and aesthetic appeal.",
    author: "Dawit Kebede",
    location: "Kazanchis, Addis Ababa"
  },
  {
    quote: "Outstanding service from start to finish. The team helped us visualize our living room set and delivered a masterpiece that will last for generations.",
    author: "Helen Yoseph",
    location: "Old Airport, Addis Ababa"
  }
]

function Testimonial() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!inView) return
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [index, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-20 px-6 md:py-[120px] md:px-[60px] text-white text-center flex items-center justify-center min-h-[450px]"
    >
      {/* Background Image */}
      <motion.div
        animate={{
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      {/* Dark Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(15,15,15,0.85)',
        zIndex: -1,
      }} />

      <div className="relative z-10 max-w-[850px] w-full mx-auto flex flex-col items-center">
        {/* Quote Icon */}
        <div style={{ color: 'var(--red)' }} className="text-[70px] md:text-[90px] leading-[0.6] mb-6 md:mb-8 opacity-40 font-serif">“</div>

        {/* Animated Slide */}
        <div className="min-h-[180px] md:min-h-[140px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              <p className="text-[16px] md:text-[22px] font-sans font-medium text-[#f3f3f3] leading-relaxed max-w-[750px] italic">
                "{testimonials[index].quote}"
              </p>
              <p className="text-[10px] md:text-[11px] tracking-[4px] uppercase text-[#999] mt-6">
                — {testimonials[index].author}, <span style={{ color: 'var(--red)' }}>{testimonials[index].location}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-sm focus:outline-none"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === idx ? 'scale-125' : 'bg-white/30'}`}
                style={{ backgroundColor: index === idx ? 'var(--red)' : undefined }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-sm focus:outline-none"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-16 px-6 md:py-[100px] md:px-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Background Image */}
      <motion.div
        animate={{
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.8)',
        zIndex: -1,
      }} />

      <div className="relative z-10 w-full md:w-auto text-center md:text-left">
        <p style={{ letterSpacing: 5, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[10px] md:text-[11px] mb-4">
          Ready to Begin?
        </p>
        <h2 style={{ fontWeight: 700, lineHeight: 1.1 }} className="text-4xl md:text-[52px]">
          Visit Our<br /><em>Showroom</em> Today
        </h2>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start relative z-10 text-center md:text-left">
        <p className="text-[14px] opacity-85 italic max-w-[300px]">
          Experience our full collection in person. Our design consultants are ready to bring your vision to life.
        </p>
        <motion.button
          whileHover={{ background: '#fff', color: 'var(--red)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: 'var(--red)', color: '#fff', border: 'none',
            fontFamily: 'inherit',
            letterSpacing: 2, cursor: 'pointer',
            textTransform: 'uppercase', transition: 'all 0.3s',
          }}
          className="px-8 py-4 md:px-[52px] md:py-[18px] text-[13px] md:text-[14px] mt-4"
        >
          Book Appointment
        </motion.button>
      </div>
    </motion.div>
  )
}

function OurStory() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      id="our-story"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative py-20 px-6 md:py-[120px] md:px-[60px] text-white flex items-center justify-center text-center overflow-hidden"
    >
      {/* Anchor for craftsmanship link */}
      <div id="craftsmanship" style={{ position: 'absolute', top: 0, left: 0 }} />
      {/* Background Image */}
      <motion.div
        animate={{
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.75)',
        zIndex: -1,
      }} />

      <div className="max-w-[800px] relative z-10">
        <p style={{ letterSpacing: 5, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[10px] md:text-[11px] mb-4">
          Since 1998
        </p>
        <h2 style={{ fontWeight: 700, lineHeight: 1.1 }} className="text-4xl md:text-[52px] mb-6">
          Our <em style={{ fontStyle: 'italic', color: 'var(--red)' }}>Story</em>
        </h2>
        <div style={{ background: 'var(--red)' }} className="w-[60px] h-[4px] mx-auto mb-10" />
        <p className="text-[15px] md:text-[18px] leading-[1.8] text-[#ddd] mb-6">
          Founded in 1998 in the heart of Addis Ababa, Classic Furniture began with a simple vision: to bring timeless elegance and masterful craftsmanship to Ethiopian homes. Over the past two decades, we have grown from a small workshop to a premier destination for luxury furniture.
        </p>
        <p className="text-[15px] md:text-[18px] leading-[1.8] text-[#ddd] mb-6">
          Our master craftsmen pour their passion and decades of experience into every piece, ensuring that whether it's a bespoke dining table or a plush living room sofa, it stands as a testament to quality.
        </p>
        <p className="text-[15px] md:text-[18px] leading-[1.8] text-[#ddd]">
          Today, we remain committed to sustainability, sourcing premium materials responsibly, and delivering excellence that lasts generations. Your home is your sanctuary, and our story is about making it truly yours.
        </p>
      </div>
    </motion.div>
  )
}

function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative py-20 px-6 md:py-[120px] md:px-[60px] text-white flex flex-col md:flex-row gap-10 md:gap-[80px] flex-wrap justify-between overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        animate={{
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      {/* Dark Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(10,10,10,0.85)',
        zIndex: -1,
      }} />

      <div className="flex-1 min-w-[300px] relative z-10">
        <h2 style={{ fontWeight: 700, lineHeight: 1.1 }} className="text-4xl md:text-[52px] mb-6">
          Get In <em style={{ fontStyle: 'italic', color: 'var(--red)' }}>Touch</em>
        </h2>
        <p style={{ color: '#ccc', lineHeight: 1.8 }} className="text-[14px] md:text-[16px] mb-10 max-w-[400px]">
          Have a question about our bespoke services or want to visit our showroom? Send us a message and our team will get back to you shortly.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-start">
            <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: 'var(--red)' }} />
            <div>
              <div style={{ letterSpacing: 2, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[10px] md:text-[11px] mb-1">Location</div>
              <div className="text-[14px] md:text-[16px] text-[#eee]">Bole Road, Addis Ababa</div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: 'var(--red)' }} />
            <div>
              <div style={{ letterSpacing: 2, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[10px] md:text-[11px] mb-1">Email</div>
              <div className="text-[14px] md:text-[16px] text-[#eee]">info@classicfurniture.et</div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: 'var(--red)' }} />
            <div>
              <div style={{ letterSpacing: 2, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[10px] md:text-[11px] mb-1">Phone</div>
              <div className="text-[14px] md:text-[16px] text-[#eee]">+251 11 123 4567</div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}
        className="flex-1 min-w-[300px] p-8 md:p-12 rounded-lg relative z-10"
      >
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="p-4 border border-white/10 bg-transparent text-[14px] text-white placeholder-white/45 outline-none focus:border-[var(--red)] transition-colors" />
          <input type="email" placeholder="Email Address" className="p-4 border border-white/10 bg-transparent text-[14px] text-white placeholder-white/45 outline-none focus:border-[var(--red)] transition-colors" />
          <textarea placeholder="Your Message" rows={4} className="p-4 border border-white/10 bg-transparent text-[14px] text-white placeholder-white/45 resize-y outline-none focus:border-[var(--red)] transition-colors" />
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'var(--red)', color: '#fff', border: 'none',
              fontFamily: 'inherit',
              letterSpacing: 2, cursor: 'pointer',
              textTransform: 'uppercase', transition: 'all 0.3s',
            }}
            className="p-4 text-[13px] md:text-[14px] font-semibold"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}

function Footer() {
  return (
    <>
      <footer className="bg-[#111] text-white py-12 px-6 md:py-[60px] md:px-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-[60px]">
        <div>
          <div className="text-[18px] md:text-[20px] font-bold tracking-[2px] md:tracking-[3px] mb-4 md:mb-5">
            CLASSIC <span style={{ color: 'var(--red)' }}>FURNITURE</span>
          </div>
          <p className="text-[13px] md:text-[14px] text-[#777] leading-[1.7] italic max-w-[280px]">
            Bringing timeless elegance to Ethiopian homes since 1998. Every piece, a masterpiece.
          </p>
        </div>
        {[
          { title: 'Collection', links: ['Living Room', 'Dining', 'Bedroom', 'Office', 'Outdoor'] },
          { title: 'Company', links: ['Our Story', 'Craftsmanship', 'Sustainability', 'Careers'] },
          { title: 'Contact', links: ['Bole Road, AA', '+251 11 123 4567', 'info@classicfurniture.et', 'Mon–Sat 9–6pm'] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ letterSpacing: 4, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[10px] md:text-[11px] mb-4 md:mb-5">
              {col.title}
            </h4>
            {col.links.map(link => (
              <a key={link} href="#" style={{ letterSpacing: 1, transition: 'color 0.3s' }} className="block text-[13px] md:text-[14px] text-[#888] hover:text-[var(--red)] no-underline mb-2 md:mb-[10px]">
                {link}
              </a>
            ))}
          </div>
        ))}
      </footer>
      <div className="bg-[#0a0a0a] py-4 px-6 md:py-[20px] md:px-[60px] flex flex-col md:flex-row justify-between items-center text-center gap-2 md:gap-0 text-[10px] md:text-[12px] text-[#555] tracking-[2px] uppercase">
        <span>© 2026 Classic Furniture Ethiopia</span>
        <span>Crafted with Excellence</span>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <Featured />
      <OurStory />
      <Testimonial />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
