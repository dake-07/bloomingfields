import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/data';

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
                    {servicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className={`service-card card card-interactive flex-column ${service.bg} ${service.span}`}
                            style={{
                                color: service.textMain || 'var(--color-text-main)',
                                minHeight: '300px',
                                justifyContent: 'space-between',
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-lg)',
                                border: service.bg === 'bg-primary'
                                    ? 'none'
                                    : '1px solid rgba(45, 90, 39, 0.1)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Subtle top-edge gradient accent for white cards */}
                            {service.bg !== 'bg-primary' && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                                    borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                                    opacity: 0.6,
                                }} />
                            )}

                            <div>
                                {/* Icon wrapper with subtle glow */}
                                <div
                                    className="service-icon-wrapper"
                                    style={{
                                        marginBottom: 'var(--space-md)',
                                        display: 'inline-flex',
                                        padding: '1.1rem',
                                        borderRadius: 'var(--radius-md)',
                                        backgroundColor: service.bg === 'bg-primary'
                                            ? 'rgba(255,255,255,0.15)'
                                            : 'rgba(45,90,39,0.07)',
                                        boxShadow: service.bg === 'bg-primary'
                                            ? '0 0 20px rgba(255,255,255,0.1)'
                                            : '0 0 20px rgba(45, 90, 39, 0.15)',
                                        transition: 'box-shadow var(--transition-normal), transform var(--transition-normal)',
                                    }}
                                >
                                    {service.icon}
                                </div>

                                <h3 style={{
                                    color: service.textMain || 'var(--color-secondary)',
                                    fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                                    fontWeight: 700,
                                    marginBottom: 'var(--space-xs)',
                                    letterSpacing: '-0.01em',
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    color: service.textMuted || 'var(--color-text-muted)',
                                    fontSize: '0.975rem',
                                    lineHeight: 1.7,
                                    marginBottom: 0,
                                }}>
                                    {service.description}
                                </p>
                            </div>

                            {/* Learn more with animated arrow */}
                            <a
                                href="#contact"
                                className="learn-more-link"
                                style={{
                                    marginTop: 'var(--space-lg)',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    color: service.bg === 'bg-primary' ? 'var(--color-accent)' : 'var(--color-primary)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    width: 'fit-content',
                                    letterSpacing: '0.01em',
                                }}
                            >
                                <span>Learn more</span>
                                <span className="learn-more-arrow">&rarr;</span>
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

        /* Arrow animation */
        .learn-more-link .learn-more-arrow {
          display: inline-block;
          transition: transform 250ms ease-in-out;
        }
        .service-card:hover .learn-more-arrow {
          transform: translateX(6px);
        }

        /* Icon glow on card hover */
        .service-card:hover .service-icon-wrapper {
          box-shadow: 0 0 28px rgba(45, 90, 39, 0.28);
          transform: scale(1.05);
        }
        .bg-primary .service-card:hover .service-icon-wrapper,
        .service-card.bg-primary:hover .service-icon-wrapper {
          box-shadow: 0 0 28px rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        /* Enhanced card hover */
        .service-card.card-interactive:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 40px -8px rgba(45, 90, 39, 0.14);
        }
      `}</style>
        </section>
    );
};

export default Services;
