import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Leaf } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container flex-column md:flex-row items-center" style={{ gap: 'var(--space-2xl)' }}>
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/2 w-full"
                    style={{ position: 'relative' }}
                >
                    <div style={{ position: 'relative' }}>
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                                alt="Blooming Fields modern farming"
                                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }}
                            />
                        </div>
                        {/* Overlay element */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10%',
                            right: '-10%', /* Move badge outside image */
                            backgroundColor: 'var(--color-surface)',
                            padding: 'var(--space-md) var(--space-lg)',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-lg)',
                            alignItems: 'center',
                            gap: 'var(--space-sm)',
                            zIndex: 10
                        }} className="hidden md:flex">
                            <Leaf className="text-primary" size={24} />
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-primary-dark)' }}>Sustainable</h4>
                                <span className="text-muted" style={{ fontSize: '0.875rem' }}>Ecosystem</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-1/2 w-full flex-column gap-md"
                >
                    <div className="badge" style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(45, 90, 39, 0.08)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', color: 'var(--color-primary-dark)', fontWeight: 600, fontSize: '0.875rem' }}>
                        About Us
                    </div>
                    <h2 className="text-secondary" style={{ margin: 0 }}>Rooted in Excellence, Growing with Purpose</h2>
                    <div className="flex-column gap-sm">
                        <p className="text-muted" style={{ fontSize: '1.125rem', lineHeight: 1.8, margin: 0 }}>
                            At Blooming Fields Agriservices, we believe that a thriving agricultural sector begins with a strong foundation.
                            We provide an integrated approach to farming, supporting growers from seed selection to final sale.
                        </p>
                        <p className="text-muted" style={{ fontSize: '1.125rem', lineHeight: 1.8, margin: 0 }}>
                            Our mission is to empower farmers, enhance yields, and build a sustainable agricultural ecosystem.
                        </p>
                    </div>

                    <div className="flex-column gap-md" style={{ marginTop: 'var(--space-sm)' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex-row items-start gap-sm card-interactive"
                            style={{
                                backgroundColor: '#f8f9fa',
                                padding: '1.25rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: 'var(--radius-md)', color: 'var(--color-accent)', boxShadow: 'var(--shadow-sm)' }}>
                                <Target size={24} />
                            </div>
                            <div>
                                <h4 className="text-secondary" style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Our Mission</h4>
                                <p className="text-muted" style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>To transform farming practices through high-quality inputs, fair credit, and reliable market access.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex-row items-start gap-sm card-interactive"
                            style={{
                                backgroundColor: '#f8f9fa',
                                padding: '1.25rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ backgroundColor: 'white', padding: '0.75rem', borderRadius: 'var(--radius-md)', color: 'var(--color-accent)', boxShadow: 'var(--shadow-sm)' }}>
                                <Eye size={24} />
                            </div>
                            <div>
                                <h4 className="text-secondary" style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Our Vision</h4>
                                <p className="text-muted" style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>To be the leading catalyst for agricultural prosperity and food security in the region.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .hidden { display: none; }
                .md\\:flex { display: flex; }
                @media (max-width: 768px) {
                    .md\\:flex { display: none !important; }
                }
            `}</style>
        </section>
    );
};

export default About;
