'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const products = [
  {
    tag: 'Living Room',
    name: 'Beautiful Sofas',
    desc: 'Modern sofas combining ultimate comfort and elegance',
    price: 'Ask Price',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Dining',
    name: 'Modern Dining Tables',
    desc: 'Perfect dining tables for memorable family gatherings',
    price: 'Ask Price',
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Living Room',
    name: 'TV Stands',
    desc: 'Elegant TV stands that add beauty to your living room',
    price: 'Ask Price',
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Bedroom',
    name: 'Comfortable Beds',
    desc: 'Luxurious and comfortable beds ideal for your rest',
    price: 'Ask Price',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Kids',
    name: "Children's Study Tables",
    desc: 'Ergonomic and comfortable study tables for children',
    price: 'Ask Price',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Decor',
    name: 'Modern Rugs',
    desc: 'Premium quality rugs that brighten up your home interior',
    price: 'Ask Price',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Living Room',
    name: 'Center Tables',
    desc: 'Modern center tables that complete your living space',
    price: 'Ask Price',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Living Room',
    name: 'Classic Armchairs',
    desc: 'Elegant and relaxing armchairs for reading and unwinding',
    price: 'Ask Price',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Bedroom',
    name: 'Premium Wardrobes',
    desc: 'Spacious wardrobes with luxurious finishes and ample storage',
    price: 'Ask Price',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

  return (
    <section id="collection" ref={ref} className="relative py-16 px-6 md:py-[100px] md:px-[60px] overflow-hidden">
      {/* Background Image */}
      <motion.div 
        animate={{
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 24,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }} 
      />
      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: -1,
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-[60px] relative z-10 gap-6"
      >
        <div>
          <p style={{ letterSpacing: 5, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[10px] md:text-[11px] mb-3">
            Our Collection
          </p>
          <h2 style={{ fontWeight: 700, lineHeight: 1.1, color: '#fff' }} className="text-4xl md:text-[48px]">
            Crafted for<br /><em style={{ color: 'var(--red)' }}>Generations</em>
          </h2>
        </div>
        <button style={{
          letterSpacing: 2, textTransform: 'uppercase',
          color: '#fff', cursor: 'pointer', border: 'none',
          background: 'none', fontFamily: 'inherit',
          borderBottom: '1px solid var(--red)', paddingBottom: 4,
        }} className="text-[12px] md:text-[13px] self-start sm:self-auto">View All</button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {products.map((p, i) => (
          <ProductCard key={p.name} product={p} delay={i * 0.1} inView={inView} onClick={() => setSelectedProduct(p)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[rgba(0,0,0,0.9)] z-[100] flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row max-w-[900px] w-full max-h-[90vh] md:max-h-[80vh] overflow-y-auto"
            >
              <div className="flex-1 bg-[#f0ece8] min-h-[250px] md:min-h-auto">
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="flex-1 p-6 md:p-10 flex flex-col text-[var(--dark)]">
                <p style={{ letterSpacing: 3, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[10px] md:text-[12px] mb-2 md:mb-3">
                  {selectedProduct.tag}
                </p>
                <h3 style={{ fontWeight: 700 }} className="text-2xl md:text-[32px] mb-3 md:mb-4">{selectedProduct.name}</h3>
                <p style={{ color: '#666', lineHeight: 1.6, fontStyle: 'italic' }} className="text-[14px] md:text-[16px] mb-4 md:mb-6">
                  {selectedProduct.desc}
                </p>
                <div style={{ background: 'var(--off)', borderLeft: '4px solid var(--red)' }} className="p-4 rounded-lg mb-6 md:mb-8">
                  <p className="text-[13px] md:text-[14px] font-bold">Included:</p>
                  <ul className="pl-5 mt-2 text-[12px] md:text-[13px] text-[#555] leading-[1.8] list-disc">
                    <li>Premium Quality Materials</li>
                    <li>Free Delivery within Addis Ababa</li>
                    <li>Full 4-Year Structural Warranty</li>
                    <li>Free Installation Service</li>
                  </ul>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-3 md:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: 'var(--red)', color: '#fff', border: 'none',
                      fontFamily: 'inherit',
                      letterSpacing: 2, cursor: 'pointer',
                      textTransform: 'uppercase',
                    }}
                    className="py-3 md:py-4 px-6 md:px-8 text-[12px] md:text-[14px] flex-1"
                    onClick={() => {
                      setSelectedProduct(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Inquire Now
                  </motion.button>
                  <motion.button
                    whileHover={{ background: '#eee' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: 'transparent', color: 'var(--dark)', border: '1px solid #ddd',
                      fontFamily: 'inherit',
                      letterSpacing: 2, cursor: 'pointer',
                      textTransform: 'uppercase',
                    }}
                    className="py-3 md:py-4 px-6 md:px-8 text-[12px] md:text-[14px]"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function ProductCard({ product, delay, inView, onClick }: { product: typeof products[0]; delay: number; inView: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.1)', rotateX: 2, rotateY: -2 }}
      onClick={onClick}
      style={{
        background: '#fff',
        cursor: 'pointer', position: 'relative', overflow: 'hidden',
        transformStyle: 'preserve-3d',
        perspective: 1200,
        border: '1px solid #f0ece8',
      }}
      className="p-6 md:p-8 rounded-lg"
    >
      <div style={{
        aspectRatio: '4/3', background: '#f0ece8',
        perspective: 1000, position: 'relative'
      }} className="mb-4 md:mb-6 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          style={{ width: '100%', height: '100%', borderRadius: 6, overflow: 'hidden' }}
        >
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: 'var(--red)', color: '#fff',
          fontWeight: 700,
          borderRadius: 4, letterSpacing: 1, boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }} className="py-1 px-2 md:px-3 text-[9px] md:text-[10px]">
          4-Year Warranty
        </div>
      </div>
      <p style={{ letterSpacing: 3, textTransform: 'uppercase', color: 'var(--red)' }} className="text-[9px] md:text-[10px] mb-2">
        {product.tag}
      </p>
      <h3 style={{ fontWeight: 700, color: 'var(--dark)' }} className="text-lg md:text-[20px] mb-2">{product.name}</h3>
      <p style={{ color: '#777', lineHeight: 1.6, fontStyle: 'italic' }} className="text-[12px] md:text-[13px]">{product.desc}</p>
      <div style={{
        borderTop: '1px solid #f0ece8',
      }} className="flex items-center justify-between mt-4 md:mt-5 pt-4 md:pt-5">
        <motion.button
          whileHover={{ background: 'var(--red)', color: '#fff' }}
          style={{
            background: 'none', border: '1px solid var(--red)',
            color: 'var(--red)',
            fontFamily: 'inherit', letterSpacing: 2,
            textTransform: 'uppercase', cursor: 'pointer',
            transition: 'all 0.3s', width: '100%'
          }}
          className="py-2 px-4 md:px-5 text-[10px] md:text-[11px]"
        >
          Inquire Now
        </motion.button>
      </div>
    </motion.div>
  )
}
