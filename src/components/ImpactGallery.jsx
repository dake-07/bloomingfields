import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems, videoHighlights } from '../data/data';

const ImpactGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const allMedia = [...galleryItems, ...videoHighlights];

    const openMedia = (index) => setSelectedIndex(index);
    const closeMedia = () => setSelectedIndex(null);

    const goNext = useCallback(() => {
        setSelectedIndex((i) => (i + 1) % allMedia.length);
    }, [allMedia.length]);

    const goPrev = useCallback(() => {
        setSelectedIndex((i) => (i - 1 + allMedia.length) % allMedia.length);
    }, [allMedia.length]);

    // Keyboard navigation
    useEffect(() => {
        if (selectedIndex === null) return;
        const onKey = (e) => {
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'Escape') closeMedia();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [selectedIndex, goNext, goPrev]);

    const selectedMedia = selectedIndex !== null ? allMedia[selectedIndex] : null;

    // Bento layout: indices 0 and 7 are hero (span-2)
    const isBentoHero = (index) => index === 0 || index === 7;

    return (
        <section id="impact" className="section-padding bg-background w-full">
            <div className="container">
                {/* Header */}
                <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="text-primary"
                    >
                        Impact Gallery
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted"
                        style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}
                    >
                        See the tangible results of our partnerships and sustainable farming practices in action.
                    </motion.p>
                </div>

                {/* ── BENTO GRID (desktop) / SWIPE CAROUSEL (mobile) ── */}
                <div className="bento-gallery">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`bento-item${isBentoHero(index) ? ' bento-hero' : ''}`}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.55, delay: index * 0.05 }}
                            onClick={() => openMedia(index)}
                        >
                            <img
                                src={item.src}
                                alt={item.caption}
                                loading="lazy"
                                className="bento-img"
                            />
                            {/* Cinematic hover caption */}
                            <div className="bento-overlay">
                                <span className="bento-label">{item.caption}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── VIDEO HIGHLIGHTS ── */}
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
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto', borderRadius: '2px' }} />
                    </div>

                    <div className="video-grid">
                        {videoHighlights.map((video, index) => (
                            <motion.div
                                key={video.id}
                                className="video-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                onClick={() => openMedia(galleryItems.length + index)}
                            >
                                <img
                                    src={video.src}
                                    alt={video.caption}
                                    loading="lazy"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                                {/* Pulsing play button */}
                                <div className="play-wrap">
                                    <div className="play-pulse" />
                                    <div className="play-circle">
                                        <Play size={30} fill="var(--color-primary)" style={{ color: 'var(--color-primary)', marginLeft: '3px' }} />
                                    </div>
                                </div>
                                {/* Caption */}
                                <div className="video-caption-overlay">
                                    <span>{video.caption}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── LIGHTBOX with prev/next ── */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        className="lightbox-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMedia}
                    >
                        {/* Close */}
                        <button className="lightbox-close" onClick={closeMedia} aria-label="Close">
                            <X size={28} />
                        </button>

                        {/* Prev */}
                        <button
                            className="lightbox-nav lightbox-prev"
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            aria-label="Previous"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Media */}
                        <motion.div
                            key={selectedIndex}
                            className="lightbox-content"
                            initial={{ opacity: 0, scale: 0.93 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.93 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedMedia.type === 'video' ? (
                                <div style={{ position: 'relative', paddingBottom: '177.77%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                                    <iframe
                                        src={`${selectedMedia.videoUrl}?autoplay=1&rel=0`}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={selectedMedia.caption}
                                    />
                                </div>
                            ) : (
                                <img
                                    src={selectedMedia.src}
                                    alt={selectedMedia.caption}
                                    style={{ width: '100%', maxHeight: '82vh', objectFit: 'contain', borderRadius: 'var(--radius-md)', display: 'block' }}
                                />
                            )}
                            <p className="lightbox-caption">{selectedMedia.caption}</p>
                            <p className="lightbox-counter">{selectedIndex + 1} / {allMedia.length}</p>
                        </motion.div>

                        {/* Next */}
                        <button
                            className="lightbox-nav lightbox-next"
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            aria-label="Next"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                /* ── BENTO GRID ── */
                .bento-gallery {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-auto-rows: 260px;
                    gap: 10px;
                }
                .bento-item {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    background: #e8e4da;
                }
                /* Hero items span 2 columns */
                .bento-hero {
                    grid-column: span 2;
                }
                .bento-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 500ms ease;
                }
                .bento-item:hover .bento-img {
                    transform: scale(1.06);
                }

                /* Cinematic caption overlay — slides up on hover */
                .bento-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%);
                    display: flex;
                    align-items: flex-end;
                    padding: 1.25rem 1rem;
                    opacity: 0;
                    transition: opacity 300ms ease;
                }
                .bento-item:hover .bento-overlay {
                    opacity: 1;
                }
                .bento-label {
                    color: white;
                    font-size: 0.9rem;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                    text-shadow: 0 1px 4px rgba(0,0,0,0.6);
                    transform: translateY(6px);
                    transition: transform 300ms ease;
                }
                .bento-item:hover .bento-label {
                    transform: translateY(0);
                }

                /* ── MOBILE: horizontal swipe carousel ── */
                @media (max-width: 640px) {
                    .bento-gallery {
                        display: flex;
                        overflow-x: auto;
                        scroll-snap-type: x mandatory;
                        gap: 10px;
                        padding-bottom: 8px;
                        -webkit-overflow-scrolling: touch;
                    }
                    .bento-gallery::-webkit-scrollbar { display: none; }
                    .bento-item {
                        flex: 0 0 80vw;
                        height: 240px;
                        scroll-snap-align: start;
                        grid-column: unset !important;
                    }
                }
                @media (max-width: 1024px) and (min-width: 641px) {
                    .bento-gallery {
                        grid-template-columns: repeat(2, 1fr);
                        grid-auto-rows: 220px;
                    }
                    .bento-hero { grid-column: span 2; }
                }

                /* ── VIDEO GRID ── */
                .video-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 12px;
                }
                .video-card {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    aspect-ratio: 9/16;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
                    transition: transform 280ms ease, box-shadow 280ms ease;
                }
                .video-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 28px rgba(0,0,0,0.18);
                }
                /* Pulsing play */
                .play-wrap {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 68px; height: 68px;
                    display: flex; align-items: center; justify-content: center;
                    z-index: 2;
                }
                .play-pulse {
                    position: absolute; inset: 0;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.28);
                    animation: pulse-ring 2.2s ease-out infinite;
                }
                @keyframes pulse-ring {
                    0%   { transform: scale(1); opacity: 0.8; }
                    70%  { transform: scale(1.65); opacity: 0; }
                    100% { transform: scale(1.65); opacity: 0; }
                }
                .play-circle {
                    position: relative;
                    width: 62px; height: 62px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.93);
                    display: flex; align-items: center; justify-content: center;
                    box-shadow: 0 4px 18px rgba(0,0,0,0.25);
                    transition: transform 220ms ease, background 220ms ease;
                }
                .video-card:hover .play-circle {
                    transform: scale(1.1);
                    background: white;
                }
                .video-card:hover .play-pulse { animation-duration: 1.1s; }
                .video-caption-overlay {
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    padding: 3rem 1rem 1rem;
                    background: linear-gradient(to top, rgba(0,0,0,0.82), transparent);
                    color: white;
                    font-weight: 600;
                    font-size: 0.92rem;
                    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
                }

                /* ── LIGHTBOX ── */
                .lightbox-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.96);
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                }
                .lightbox-content {
                    max-width: 900px;
                    width: 100%;
                    max-height: 90vh;
                    text-align: center;
                }
                .lightbox-close {
                    position: absolute;
                    top: 1.25rem; right: 1.25rem;
                    background: rgba(255,255,255,0.1);
                    border: none; color: white;
                    width: 44px; height: 44px;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; z-index: 1001;
                    transition: background 200ms;
                }
                .lightbox-close:hover { background: rgba(255,255,255,0.2); }
                .lightbox-nav {
                    position: absolute;
                    top: 50%; transform: translateY(-50%);
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.15);
                    color: white;
                    width: 52px; height: 52px;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; z-index: 1001;
                    transition: background 200ms;
                }
                .lightbox-nav:hover { background: rgba(255,255,255,0.18); }
                .lightbox-prev { left: 1.25rem; }
                .lightbox-next { right: 1.25rem; }
                .lightbox-caption {
                    color: rgba(255,255,255,0.9);
                    font-weight: 500;
                    margin-top: 1rem;
                    font-size: 1rem;
                }
                .lightbox-counter {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.8rem;
                    margin-top: 0.25rem;
                }
                @media (max-width: 640px) {
                    .lightbox-prev { left: 0.5rem; }
                    .lightbox-next { right: 0.5rem; }
                    .lightbox-nav { width: 42px; height: 42px; }
                }
            `}</style>
        </section>
    );
};

export default ImpactGallery;
