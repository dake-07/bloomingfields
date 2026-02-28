import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, BarChart3, TrendingUp } from 'lucide-react';

const TrustSignals = () => {
    const testimonials = [
        {
            id: 1,
            name: "Kwame Osei",
            role: "Maize Farmer, Techiman",
            quote: "Blooming Fields provided the high-yield seeds and fertilizer on credit. My harvest doubled this season, and they helped me sell directly to top buyers.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            id: 2,
            name: "Akua Mensah",
            role: "Operations Manager, Abundance Farms",
            quote: "The end-to-end operational support is unmatched. Their agronomists are knowledgeable, and the credit terms are incredibly fair and transparent.",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
    ];

    return (
        <section id="impact" className="section-padding bg-surface">
            <div className="container">

                <div className="flex-column md:flex-row gap-xl items-center">

                    {/* Left: Metrics & Story */}
                    <div className="md:w-1/2 flex-column gap-md">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-secondary">Proven Impact on the Ground</h2>
                            <p className="text-muted" style={{ fontSize: '1.125rem' }}>
                                We don't just supply inputs; we guarantee outcomes. Our data-driven approach ensures that every seed planted and every loan granted translates to tangible growth.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-2 gap-sm"
                            style={{ marginTop: 'var(--space-md)' }}
                        >
                            <div className="flex-row items-center gap-xs">
                                <CheckCircle className="text-accent" size={24} />
                                <span className="text-secondary" style={{ fontWeight: 600 }}>100% Traceable</span>
                            </div>
                            <div className="flex-row items-center gap-xs">
                                <Users className="text-accent" size={24} />
                                <span className="text-secondary" style={{ fontWeight: 600 }}>Community Backed</span>
                            </div>
                            <div className="flex-row items-center gap-xs">
                                <BarChart3 className="text-accent" size={24} />
                                <span className="text-secondary" style={{ fontWeight: 600 }}>Data-Driven Yields</span>
                            </div>
                            <div className="flex-row items-center gap-xs">
                                <TrendingUp className="text-accent" size={24} />
                                <span className="text-secondary" style={{ fontWeight: 600 }}>Guaranteed Off-take</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Testimonials (Impact) */}
                    <div className="md:w-1/2 flex-column gap-md w-full" style={{ scrollMarginTop: '100px' }}>
                        {testimonials.map((test, index) => (
                            <motion.div
                                key={test.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                                className="card border-1"
                                style={{ backgroundColor: 'var(--color-background)' }}
                            >
                                <p className="text-secondary" style={{ fontStyle: 'italic', marginBottom: 'var(--space-md)' }}>
                                    "{test.quote}"
                                </p>
                                <div className="flex-row items-center gap-sm">
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '1rem' }}>{test.name}</h4>
                                        <span className="text-muted" style={{ fontSize: '0.875rem' }}>{test.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            <style>{`
        .w-full { width: 100%; }
        @media (min-width: 768px) {
          .md\\:flex-row { flex-direction: row; }
          .md\\:w-1\\/2 { width: 50%; }
        }
      `}</style>
        </section>
    );
};

export default TrustSignals;
