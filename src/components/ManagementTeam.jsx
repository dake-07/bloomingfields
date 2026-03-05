import React from 'react';
import { motion } from 'framer-motion';

const ManagementTeam = () => {
    const team = [
        {
            id: 1,
            name: 'Mrs. Elsie Owusu',
            role: 'CEO',
            initials: 'EO',
            bgColor: '#1b3617' // Deep forest green
        },
        {
            id: 2,
            name: 'Mr. Peter Asare',
            role: 'Project Manager',
            initials: 'PA',
            bgColor: '#8a9a86' // Sage green
        },
        {
            id: 3,
            name: 'Emmanuel Amoo Darko',
            role: 'Project Analysis',
            initials: 'ED',
            bgColor: '#9e9e9e' // Soft earthy gray
        }
    ];

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
        <section id="management-team" className="section-padding bg-background w-full">
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-secondary"
                    >
                        Management Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted"
                        style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}
                    >
                        Meet the dedicated leaders driving our vision for a sustainable agricultural future.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-lg"
                >
                    {team.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={itemVariants}
                            className="card card-interactive flex-column items-center text-center"
                            style={{ padding: 'var(--space-xl) var(--space-md)' }}
                        >
                            {/* Avatar */}
                            <div
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    backgroundColor: member.bgColor,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    fontWeight: '600',
                                    fontFamily: 'var(--font-heading)',
                                    marginBottom: 'var(--space-md)',
                                    boxShadow: 'var(--shadow-md)'
                                }}
                            >
                                {member.initials}
                            </div>

                            {/* Details */}
                            <h3 className="text-primary" style={{ margin: '0 0 var(--space-xs) 0', fontSize: '1.25rem', fontWeight: '700' }}>
                                {member.name}
                            </h3>
                            <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', fontWeight: '500' }}>
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ManagementTeam;
