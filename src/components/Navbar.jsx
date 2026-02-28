import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll to add background to navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'About Us', href: '#about' },
        { name: 'Impact', href: '#impact' },
    ];

    return (
        <nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'all 0.3s ease-in-out',
                backgroundColor: isScrolled ? 'rgba(244, 241, 234, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
            }}
        >
            <div className="container flex-row items-center justify-between">
                {/* Logo */}
                <a href="#" className="logo flex-row items-center" style={{ gap: '0.5rem', fontWeight: 600, fontSize: '1.25rem', color: 'var(--color-primary)' }}>
                    <Sprout size={32} />
                    <span>Blooming Fields Agriservices</span>
                </a>

                {/* Desktop Navigation */}
                <div className="desktop-nav md-flex flex-row items-center gap-lg">
                    <div className="nav-links flex-row gap-md">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link text-primary"
                                style={{ fontWeight: 500, fontSize: '1rem', transition: 'color 0.2s' }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <a href="#contact" className="btn btn-primary">Partner with Us</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle md-hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-nav md-hidden bg-surface"
                        style={{ position: 'absolute', top: '100%', left: 0, right: 0, padding: 'var(--space-md)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}
                    >
                        <div className="flex-column gap-sm">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link text-primary"
                                    style={{ display: 'block', padding: '0.75rem 0', borderBottom: '1px solid rgba(45,90,39,0.1)', fontWeight: 500 }}
                                    onClick={() => setTimeout(() => setIsMobileMenuOpen(false), 150)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="btn btn-primary"
                                style={{ display: 'flex', marginTop: '1rem', justifyContent: 'center' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Partner with Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .md-flex { display: none; }
        @media (min-width: 768px) {
          .md-flex { display: flex; }
          .md-hidden { display: none !important; }
        }
        .nav-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
