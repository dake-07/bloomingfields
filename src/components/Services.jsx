import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, CreditCard, ShoppingCart, Tractor } from 'lucide-react';

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const services = [
        {
            id: 1,
            title: 'Input Support',
            icon: <Sprout size={32} className="text-primary" />,
            description: 'High-quality seeds, organic fertilizers, and sustainable crop protection to maximize your yield from day one.',
            span: 'col-span-1 md:col-span-2',
            bg: 'bg-surface'
        },
        {
            id: 2,
            title: 'Credit Support',
            icon: <CreditCard size={32} className="text-accent" />,
            description: 'Flexible financing solutions tailored for seasonal agricultural cycles. Grow now, pay post-harvest.',
            span: 'col-span-1 md:col-span-1',
            bg: 'bg-primary',
            textMain: 'white',
            textMuted: 'rgba(255,255,255,0.8)'
        },
        {
            id: 3,
            title: 'Buy and Sell',
            icon: <ShoppingCart size={32} className="text-primary" />,
            description: 'Direct market access cutting out the middlemen. Get fair prices for your produce seamlessly.',
            span: 'col-span-1 md:col-span-1',
            bg: 'bg-surface'
        },
        {
            id: 4,
            title: 'Farming Operations',
            icon: <Tractor size={32} className="text-primary" />,
            description: 'End-to-end operational support, machinery leasing, and expert agronomic advice directly on your farm.',
            span: 'col-span-1 md:col-span-2',
            bg: 'bg-surface'
        }
    ];

    return (
        <section id="services" className="section-padding bg-background w-full">
            <div className="container">

                <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-secondary"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted"
                        style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}
                    >
                        Comprehensive solutions designed to support every stage of the agricultural lifecycle.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="bento-grid"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className={`card card-interactive flex-column ${service.bg} ${service.span}`}
                            style={{
                                color: service.textMain || 'var(--color-text-main)',
                                minHeight: '280px',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <div
                                    className="icon-wrapper"
                                    style={{
                                        marginBottom: 'var(--space-md)',
                                        display: 'inline-flex',
                                        padding: '1rem',
                                        borderRadius: 'var(--radius-md)',
                                        backgroundColor: service.bg === 'bg-primary' ? 'rgba(255,255,255,0.1)' : 'rgba(45,90,39,0.05)'
                                    }}
                                >
                                    {service.icon}
                                </div>
                                <h3 style={{ color: service.textMain || 'var(--color-secondary)' }}>{service.title}</h3>
                                <p style={{ color: service.textMuted || 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                                    {service.description}
                                </p>
                            </div>

                            <a href="#contact" className="flex-row items-center learn-more-link" style={{ marginTop: 'var(--space-md)', fontWeight: 600, color: service.bg === 'bg-primary' ? 'var(--color-accent)' : 'var(--color-primary)', display: 'inline-flex', width: 'fit-content' }}>
                                Learn more &rarr;
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: var(--space-md);
        }
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-lg);
          }
          .md\\:col-span-2 { grid-column: span 2 / span 2; }
          .md\\:col-span-1 { grid-column: span 1 / span 1; }
        }
      `}</style>
        </section>
    );
};

export default Services;
