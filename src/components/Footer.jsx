import React from 'react';
import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-secondary text-surface" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-md)' }}>
            <div className="container">

                <div className="flex-column md:flex-row justify-between w-full" style={{ gap: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>

                    {/* Brand Info */}
                    <div className="w-full md:w-1/3 flex-column gap-sm">
                        <a href="#" className="logo flex-row items-center" style={{ gap: '0.5rem', fontWeight: 600, fontSize: '1.5rem', color: 'var(--color-surface)', marginBottom: '1rem' }}>
                            <Sprout size={32} className="text-accent" />
                            <span>Blooming Fields Agriservices</span>
                        </a>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
                            Cultivating growth, empowering farmers, and building resilient agricultural ecosystems across the region.
                        </p>
                        <div className="social-links flex-row gap-sm mt-4" style={{ marginTop: '1rem' }}>
                            <a href="#" style={{ color: 'var(--color-surface)', transition: 'color 0.2s' }} className="hover:text-accent"><Facebook size={20} /></a>
                            <a href="#" style={{ color: 'var(--color-surface)', transition: 'color 0.2s' }} className="hover:text-accent"><Twitter size={20} /></a>
                            <a href="#" style={{ color: 'var(--color-surface)', transition: 'color 0.2s' }} className="hover:text-accent"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-1/4 flex-column gap-sm">
                        <h4 style={{ color: 'var(--color-surface)', fontSize: '1.125rem', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul className="flex-column gap-xs">
                            <li><a href="#services" style={{ color: 'rgba(255,255,255,0.7)' }}>Input Support</a></li>
                            <li><a href="#services" style={{ color: 'rgba(255,255,255,0.7)' }}>Credit Support</a></li>
                            <li><a href="#services" style={{ color: 'rgba(255,255,255,0.7)' }}>Buy and Sell</a></li>
                            <li><a href="#services" style={{ color: 'rgba(255,255,255,0.7)' }}>Farming Operations</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full md:w-1/3 flex-column gap-sm">
                        <h4 style={{ color: 'var(--color-surface)', fontSize: '1.125rem', marginBottom: '1rem' }}>Contact Us</h4>
                        <ul className="flex-column gap-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            <li className="flex-row items-center gap-sm">
                                <MapPin size={20} className="text-accent" />
                                <span>123 Agritech Valley, Suite 100</span>
                            </li>
                            <li className="flex-row items-center gap-sm">
                                <Phone size={20} className="text-accent" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex-row items-center gap-sm">
                                <Mail size={20} className="text-accent" />
                                <span>hello@bloomingfields.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div
                    className="flex-column md:flex-row justify-between items-center w-full"
                    style={{
                        paddingTop: 'var(--space-lg)',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.875rem'
                    }}
                >
                    <p>&copy; {new Date().getFullYear()} Blooming Fields Agriservices. All rights reserved.</p>
                    <div className="flex-row gap-sm mt-4 md:mt-0">
                        <a href="#">Privacy Policy</a>
                        <span>|</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>

            </div>

            <style>{`
        .w-full { width: 100%; }
        .mt-4 { margin-top: 1rem; }
        .hover\\:text-accent:hover { color: var(--color-accent) !important; }
        ul li a:hover { color: var(--color-accent) !important; }
        @media (min-width: 768px) {
          .md\\:flex-row { flex-direction: row; }
          .md\\:w-1\\/3 { width: 33.333333%; }
          .md\\:w-1\\/4 { width: 25%; }
          .md\\:mt-0 { margin-top: 0; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
