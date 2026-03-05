import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const ImpactGallery = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    const galleryItems = [
        {
            id: 1,
            type: 'image',
            src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-02-28 at 1.43.33 PM.jpeg`,
            caption: 'Community Harvest 2025',
        },
        {
            id: 2,
            type: 'image',
            src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-02-28 at 1.45.03 PM.jpeg`,
            caption: 'Sustainable Practices Explained',
        },
        {
            id: 3,
            type: 'image',
            src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-02-28 at 1.49.44 PM.jpeg`,
            caption: 'Farmer Support Initiative',
        },
        {
            id: 4,
            type: 'image',
            src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-03-01 at 9.33.16 AM.jpeg`,
            caption: 'Seed Distribution',
        },
        {
            id: 5,
            type: 'image',
            src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-03-01 at 9.33.17 AM.jpeg`,
            caption: 'Tech Demonstration',
        },
        {
            id: 6,
            type: 'image',
            src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-03-01 at 9.33.34 AM.jpeg`,
            caption: 'Annual Farmers Market',
        },
        {
            id: 7,
            type: 'image',
            src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-03-01 at 9.34.14 AM.jpeg`,
            caption: 'Local Partnerships',
        },
        {
            id: 8,
            type: 'image',
            src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-03-01 at 9.35.34 AM.jpeg`,
            caption: 'Agricultural Growth',
        }
    ];

    const videoHighlights = [
        {
            id: 'v1',
            type: 'video',
            src: 'https://img.youtube.com/vi/a9pSVHMJj6c/maxresdefault.jpg',
            caption: 'Farmer Support in Action',
            videoUrl: 'https://www.youtube.com/embed/a9pSVHMJj6c'
        },
        {
            id: 'v2',
            type: 'video',
            src: 'https://img.youtube.com/vi/9OCfU3ahOmM/maxresdefault.jpg',
            caption: '2026 Input Distribution Highlights',
            videoUrl: 'https://www.youtube.com/embed/9OCfU3ahOmM'
        },
        {
            id: 'v3',
            type: 'video',
            src: 'https://img.youtube.com/vi/jznMsypqv8k/maxresdefault.jpg',
            caption: 'Modern Farming Operations',
            videoUrl: 'https://www.youtube.com/embed/jznMsypqv8k'
        },
        {
            id: 'v4',
            type: 'video',
            src: 'https://img.youtube.com/vi/y21cZ-LW5yk/maxresdefault.jpg',
            caption: 'Credit Support Success Stories',
            videoUrl: 'https://www.youtube.com/embed/y21cZ-LW5yk'
        }
    ];

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

                {/* Masonry Grid */}
                <div className="masonry-grid">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="masonry-item card-interactive"
                            onClick={() => setSelectedMedia(item)}
                            style={{
                                position: 'relative',
                                borderRadius: 'var(--radius-md)', /* 'Service Cards' rounded corners */
                                overflow: 'hidden',
                                marginBottom: 'var(--space-md)',
                                cursor: 'pointer',
                                boxShadow: 'var(--shadow-sm)'
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.caption}
                                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                            />

                            {/* Video Play Overlay */}
                            {item.type === 'video' && (
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'var(--shadow-md)',
                                    zIndex: 2
                                }}>
                                    <Play size={32} className="text-primary" fill="currentColor" />
                                </div>
                            )}

                            {/* Caption Overlay */}
                            <div className="caption-overlay" style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: 'var(--space-lg) var(--space-md) var(--space-sm)',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                                color: 'white',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }}>
                                <h4 style={{ margin: 0, color: 'white', fontWeight: 500 }}>{item.caption}</h4>
                                {item.type === 'video' && <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8 }}>Watch Video</p>}
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
                            style={{ color: 'var(--primary)', marginBottom: 'var(--space-sm)' }}
                        >
                            Video Highlights
                        </motion.h3>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', margin: '0 auto', borderRadius: '2px' }}></div>
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
                                className="card-interactive"
                                onClick={() => setSelectedMedia(video)}
                                style={{
                                    position: 'relative',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-md)',
                                    aspectRatio: '9/16' // For YouTube Shorts
                                }}
                            >
                                <img
                                    src={video.src}
                                    alt={video.caption}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />

                                {/* Play Icon Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    padding: '1.25rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'var(--shadow-lg)',
                                    zIndex: 2,
                                    transition: 'transform 0.3s ease'
                                }}
                                    className="play-btn-overlay"
                                >
                                    <Play size={36} fill="var(--primary)" style={{ color: 'var(--primary)' }} />
                                </div>

                                {/* Caption Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: 'var(--space-xl) var(--space-md) var(--space-md)',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                                    color: 'white'
                                }}>
                                    <h4 style={{ margin: 0, color: 'white', fontWeight: 600, fontSize: '1.1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
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
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 'var(--space-md)'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedMedia(null)}
                            style={{
                                position: 'absolute',
                                top: 'var(--space-md)',
                                right: 'var(--space-md)',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                color: 'white',
                                padding: '0.5rem',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                zIndex: 1001,
                                display: 'flex'
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
                                maxWidth: selectedMedia.type === 'video' ? '400px' : '1000px', // Narrower for Shorts
                                width: '100%',
                                maxHeight: '90vh'
                            }}
                        >
                            {selectedMedia.type === 'video' ? (
                                <div style={{ position: 'relative', paddingBottom: '177.77%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)' }}>
                                    {/* 177.77% padding bottom for 9:16 aspect ratio (YouTube Shorts) */}
                                    <iframe
                                        src={`${selectedMedia.videoUrl}?autoplay=1&mute=0`}
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
                                    style={{ width: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: 'var(--radius-md)' }}
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
                .masonry-grid {
                    column-count: 3;
                    column-gap: var(--space-md);
                }
                
                .masonry-item {
                    break-inside: avoid;
                    display: inline-block;
                    width: 100%;
                }

                .masonry-item:hover .caption-overlay {
                    opacity: 1 !important;
                }

                .card-interactive:hover .play-btn-overlay {
                    transform: translate(-50%, -50%) scale(1.1) !important;
                }

                @media (max-width: 1024px) {
                    .masonry-grid {
                        column-count: 2;
                    }
                }

                @media (max-width: 640px) {
                    .masonry-grid {
                        column-count: 1;
                    }
                }
            `}</style>
        </section>
    );
};

export default ImpactGallery;
