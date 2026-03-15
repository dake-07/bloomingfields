import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ClipboardList } from 'lucide-react';

const Hero = ({ onApplyClick }) => {
    return (
        <section className="hero" style={{ paddingTop: '120px', paddingBottom: 'var(--space-2xl)', overflow: 'hidden', position: 'relative' }}>

            {/* Lush Field Background Texture */}
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("${import.meta.env.BASE_URL}assets/modern_farmer_hero_v2.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2,
                    pointerEvents: 'none'
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
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        marginBottom: 'var(--space-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                >
                    <Leaf size={16} color="#FFFFFF" />
                    <span>Your Complete Agriservices Partner</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ color: '#FFFFFF', maxWidth: '900px', margin: '0 auto', marginBottom: 'var(--space-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                >
                    <span style={{ display: 'block', fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 600, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rooted in Excellence</span>
                    The All-in-One Growth Partner for <span style={{ color: '#5DBB3F', textShadow: 'none', position: 'relative' }}>
                        Modern Farmers
                        {/* Subtle underline SVG */}
                        <svg
                            style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%', height: '14px' }}
                            viewBox="0 0 200 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2.00037 6.45391C36.8778 3.52044 148.887 -1.69343 198.001 7.4539" stroke="#5DBB3F" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        marginBottom: 'var(--space-lg)',
                        lineHeight: 1.7,
                        fontWeight: 500,
                        color: '#FFFFFF',
                        textShadow: '0 4px 8px rgba(0,0,0,0.8)'
                    }}
                >
                    We empower your farm with high-quality inputs, tailored financing, and direct access to global markets—all in one place.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="cta-group flex-row justify-center gap-md"
                    style={{ flexWrap: 'wrap' }}
                >
                    <button onClick={onApplyClick} className="btn btn-primary flex-row items-center gap-xs" style={{ padding: '1rem 2rem', fontSize: '1.125rem', border: 'none', minHeight: '52px' }}>
                        <ClipboardList size={20} />
                        <span>Apply for Support</span>
                    </button>
                    <a href="#services" className="btn hero-btn-outline flex-row items-center gap-xs" style={{ padding: '1rem 2rem', fontSize: '1.125rem', minHeight: '52px' }}>
                        <span>Explore Services</span>
                        <span className="hero-arrow"><ArrowRight size={20} /></span>
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
                        <h3 className="text-primary" style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>50+</h3>
                        <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Total Farmer Base</span>
                    </div>
                    <div className="stat-item flex-column items-center">
                        <h3 className="text-primary" style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>GH₵ 300k+</h3>
                        <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Credit Disbursed</span>
                    </div>
                    <div className="stat-item flex-column items-center">
                        <h3 className="text-primary" style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>4</h3>
                        <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Core Services</span>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .hero-btn-outline {
                    background-color: rgba(255, 255, 255, 0.12);
                    border: 1.5px solid rgba(255, 255, 255, 0.7);
                    color: #FFFFFF;
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    transition: background-color 250ms ease, border-color 250ms ease, transform 250ms ease;
                }
                .hero-btn-outline:hover {
                    background-color: rgba(255, 255, 255, 0.22);
                    border-color: #FFFFFF;
                    transform: scale(1.03);
                }
                .hero-arrow {
                    display: inline-flex;
                    align-items: center;
                    transition: transform 220ms ease;
                }
                .hero-btn-outline:hover .hero-arrow {
                    transform: translateX(5px);
                }
            `}</style>
        </section>
    );
};

export default Hero;
