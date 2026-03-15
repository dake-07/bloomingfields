import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onNavigate, showPortal }) => {
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
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`navbar ${isScrolled ? 'scrolled' : 'header-blur'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'all 0.3s ease-in-out',
                backgroundColor: isScrolled ? 'rgba(244, 241, 234, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
            }}
        >
            <div className="container flex-row items-center justify-between">
                {/* Logo */}
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(false); }} className="logo flex-row items-center" style={{ gap: '0.5rem', fontWeight: 600, fontSize: '1.25rem', color: (isScrolled || showPortal) ? '#2D5A27' : '#FFFFFF', textShadow: (isScrolled || showPortal) ? 'none' : '0px 1px 4px rgba(0,0,0,0.8)', transition: 'all 0.3s' }}>
                    <Sprout size={32} style={{ filter: (isScrolled || showPortal) ? 'none' : 'drop-shadow(0px 1px 4px rgba(0,0,0,0.8))' }} />
                    <span>Blooming Fields Agriservices</span>
                </a>

                {/* Desktop Navigation */}
                <div className="desktop-nav md-flex flex-row items-center gap-lg">
                    {showPortal ? (
                        <button
                            onClick={() => onNavigate && onNavigate(false)}
                            className="btn btn-secondary flex-row items-center gap-xs"
                            style={{ border: 'none' }}
                        >
                            <ArrowLeft size={20} />
                            <span>Back to Home</span>
                        </button>
                    ) : (
                        <>
                            <div className="nav-links flex-row" style={{ gap: '2rem' }}>
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            if (onNavigate) {
                                                onNavigate(false);
                                                // Slight delay so the home view renders before scrolling
                                                setTimeout(() => {
                                                    const el = document.querySelector(link.href);
                                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                                }, 100);
                                            }
                                        }}
                                        className="nav-link"
                                        style={{ fontWeight: 500, fontSize: '1rem', transition: 'all 0.2s', color: isScrolled ? '#2D5A27' : '#FFFFFF', textShadow: isScrolled ? 'none' : '0px 1px 4px rgba(0,0,0,0.8)' }}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                            <button onClick={(e) => onNavigate && onNavigate(true)} className="btn btn-primary" style={{ border: 'none', padding: '0.75rem 2rem' }}>
                                Apply for Support
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                {!showPortal && (
                    <button
                        className="mobile-toggle md-hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: isScrolled ? 'var(--color-primary)' : '#FFFFFF', filter: isScrolled ? 'none' : 'drop-shadow(0px 1px 4px rgba(0,0,0,0.8))', transition: 'all 0.3s' }}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                )}
                {showPortal && (
                    <button
                        className="mobile-toggle md-hidden"
                        onClick={() => onNavigate && onNavigate(false)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                        <ArrowLeft size={20} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Back</span>
                    </button>
                )}
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {!showPortal && isMobileMenuOpen && (
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
                                    onClick={(e) => {
                                        setIsMobileMenuOpen(false);
                                        if (onNavigate) {
                                            onNavigate(false);
                                            setTimeout(() => {
                                                const el = document.querySelector(link.href);
                                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                            }, 100);
                                        }
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                className="btn btn-primary"
                                style={{ display: 'flex', marginTop: '1rem', justifyContent: 'center', border: 'none', width: '100%' }}
                                onClick={(e) => {
                                    setIsMobileMenuOpen(false);
                                    if (onNavigate) onNavigate(true);
                                }}
                            >
                                Apply for Support
                            </button>
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
          opacity: 0.9;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
