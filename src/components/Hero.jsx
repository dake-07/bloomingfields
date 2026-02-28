import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero" style={{ paddingTop: '120px', paddingBottom: 'var(--space-2xl)', overflow: 'hidden', position: 'relative' }}>

            {/* Lush Field Background Texture */}
            <div
                style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '-50px',
                    width: 'calc(100% + 100px)',
                    height: 'calc(100% + 100px)',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.25,
                    filter: 'blur(10px) saturate(1.2)',
                    zIndex: -2,
                    pointerEvents: 'none',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
                }}
            />

            <div className="container flex-column items-center text-center">

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="badge flex-row items-center gap-xs"
                    style={{
                        backgroundColor: 'rgba(45, 90, 39, 0.08)',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        color: 'var(--color-primary-dark)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        marginBottom: 'var(--space-lg)',
                        border: '1px solid rgba(45, 90, 39, 0.1)'
                    }}
                >
                    <Leaf size={16} className="text-primary" />
                    <span>Empowering Modern Agriculture</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ maxWidth: '900px', margin: '0 auto', marginBottom: 'var(--space-md)' }}
                >
                    Cultivating Growth with <span style={{ color: 'var(--color-primary)', position: 'relative' }}>
                        Smart Solutions
                        {/* Subtle underline SVG */}
                        <svg
                            style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%', height: '12px' }}
                            viewBox="0 0 200 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2.00037 6.45391C36.8778 3.52044 148.887 -1.69343 198.001 7.4539" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-muted"
                    style={{
                        fontSize: '1.125rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        marginBottom: 'var(--space-lg)',
                        lineHeight: 1.7
                    }}
                >
                    Your trusted partner in farming. From high-quality inputs and flexible credit to seamless market access, we build resilient agricultural ecosystems.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="cta-group flex-row justify-center gap-md"
                    style={{ flexWrap: 'wrap' }}
                >
                    <a href="#services" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                        Explore Services
                    </a>
                    <a href="#about" className="btn btn-secondary flex-row items-center gap-xs" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                        <span>About Us</span>
                        <ArrowRight size={20} />
                    </a>
                </motion.div>

                {/* Hero Visual Details (Stats inside hero for immediate trust) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="hero-stats bg-surface card-interactive"
                    style={{
                        marginTop: 'var(--space-2xl)',
                        padding: 'var(--space-md) var(--space-xl)',
                        borderRadius: 'var(--radius-lg)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '100%',
                        maxWidth: '800px',
                        flexWrap: 'wrap',
                        gap: 'var(--space-md)',
                        boxShadow: 'var(--shadow-md)',
                        border: '1px solid rgba(45, 90, 39, 0.05)'
                    }}
                >
                    <div className="stat-item flex-column items-center">
                        <h3 className="text-primary" style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>100%</h3>
                        <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quality Assured</span>
                    </div>
                    <div className="stat-item flex-column items-center">
                        <h3 className="text-primary" style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>24/7</h3>
                        <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Expert Support</span>
                    </div>
                    <div className="stat-item flex-column items-center">
                        <h3 className="text-primary" style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>4</h3>
                        <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Services</span>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
