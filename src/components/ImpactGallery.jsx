import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { galleryItems, videoHighlights } from '../data/data';

const ImpactGallery = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    return (
        <section id="impact" className="section-padding bg-background w-full">
            <div className="container">
                <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-primary"
                    >
                        Impact Gallery
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted"
                        style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}
                    >
                        See the tangible results of our partnerships and sustainable farming practices in action.
                    </motion.p>
                </div>

                {/* CSS Grid — 3 equal columns, no orphan gaps */}
                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            className="gallery-card"
                            onClick={() => setSelectedMedia(item)}
                        >
                            <div className="gallery-img-wrap">
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    loading="lazy"
                                    className="gallery-img"
                                />
                            </div>
                            {/* Always-visible caption */}
                            <div className="gallery-caption">
                                <span>{item.caption}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Video Highlights Section */}
                <div style={{ marginTop: 'var(--space-2xl)' }}>
                    <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}
                        >
                            Video Highlights
                        </motion.h3>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--space-md)'
                    }}>
                        {videoHighlights.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="video-card"
                                onClick={() => setSelectedMedia(video)}
                                style={{
                                    position: 'relative',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-md)',
                                    aspectRatio: '9/16'
                                }}
                            >
                                <img
                                    src={video.src}
                                    alt={video.caption}
                                    loading="lazy"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />

                                {/* Larger pulsing play button */}
                                <div className="play-btn-wrap">
                                    <div className="play-btn-pulse" />
                                    <div className="play-btn-inner">
                                        <Play size={32} fill="var(--color-primary)" style={{ color: 'var(--color-primary)', marginLeft: '3px' }} />
                                    </div>
                                </div>

                                {/* Caption Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0, left: 0, right: 0,
                                    padding: 'var(--space-xl) var(--space-md) var(--space-md)',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                                    color: 'white'
                                }}>
                                    <h4 style={{ margin: 0, color: 'white', fontWeight: 600, fontSize: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                        {video.caption}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMedia(null)}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.98)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 'var(--space-md)'
                        }}
                    >
                        <button
                            onClick={() => setSelectedMedia(null)}
                            aria-label="Close modal"
                            style={{
                                position: 'absolute',
                                top: 'var(--space-md)', right: 'var(--space-md)',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none', color: 'white',
                                padding: '0.5rem', borderRadius: '50%',
                                cursor: 'pointer', zIndex: 1001, display: 'flex'
                            }}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: selectedMedia.type === 'video' ? '400px' : '1000px',
                                width: '100%', maxHeight: '90vh'
                            }}
                        >
                            {selectedMedia.type === 'video' ? (
                                <div style={{ position: 'relative', paddingBottom: '177.77%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                                    <iframe
                                        src={`${selectedMedia.videoUrl}?autoplay=1&mute=0&showinfo=0&modestbranding=1&rel=0`}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={selectedMedia.caption}
                                    ></iframe>
                                </div>
                            ) : (
                                <img
                                    src={selectedMedia.src}
                                    alt={selectedMedia.caption}
                                    style={{ width: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: 'var(--radius-md)' }}
                                />
                            )}
                            <h3 style={{ color: 'white', textAlign: 'center', marginTop: 'var(--space-md)' }}>
                                {selectedMedia.caption}
                            </h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                /* CSS Grid — eliminates masonry column gap orphans */
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--space-md);
                }
                @media (max-width: 1024px) {
                    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 640px) {
                    .gallery-grid { grid-template-columns: 1fr; }
                }

                .gallery-card {
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    cursor: pointer;
                    box-shadow: var(--shadow-sm);
                    background: var(--color-surface);
                    transition: transform 300ms ease, box-shadow 300ms ease;
                }
                .gallery-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-md);
                }

                .gallery-img-wrap {
                    width: 100%;
                    aspect-ratio: 4 / 3;
                    overflow: hidden;
                }
                .gallery-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 400ms ease;
                }
                .gallery-card:hover .gallery-img {
                    transform: scale(1.04);
                }

                /* Always-visible caption */
                .gallery-caption {
                    padding: 0.55rem var(--space-sm);
                    background: var(--color-surface);
                    border-top: 2px solid var(--color-primary);
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--color-secondary);
                    letter-spacing: 0.01em;
                    text-align: center;
                }

                /* Pulsing video play button */
                .play-btn-wrap {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 72px; height: 72px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                }
                .play-btn-pulse {
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.25);
                    animation: pulse-ring 2s ease-out infinite;
                }
                @keyframes pulse-ring {
                    0%   { transform: scale(1);   opacity: 0.7; }
                    70%  { transform: scale(1.6); opacity: 0; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
                .play-btn-inner {
                    position: relative;
                    width: 64px; height: 64px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.92);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
                    transition: transform 250ms ease, background 250ms ease;
                }
                .video-card:hover .play-btn-inner {
                    transform: scale(1.1);
                    background: white;
                }
                .video-card:hover .play-btn-pulse {
                    animation-duration: 1s;
                }
            `}</style>
        </section>
    );
};

export default ImpactGallery;
