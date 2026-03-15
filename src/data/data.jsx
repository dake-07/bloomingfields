import React from 'react';
import { Sprout, CreditCard, ShoppingCart, Tractor } from 'lucide-react';

export const servicesData = [
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

export const teamData = [
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
    },
    {
        id: 4,
        name: 'Beloveson Quaye Mensah',
        role: 'PA to the CEO',
        initials: 'BM',
        bgColor: '#b8926a' // Warm earthy tone
    }
];

export const galleryItems = [
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
        id: 10,
        type: 'image',
        src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-03-09 at 8.28.40 PM.jpeg`,
        caption: 'Field Operations & Support',
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
    },
    {
        id: 9,
        type: 'image',
        src: `${import.meta.env.BASE_URL}assets/gallery/WhatsApp Image 2026-03-05 at 7.52.11 AM - Copy.jpeg`,
        caption: 'Community Support & Partnership',
    }
];

export const videoHighlights = [
    {
        id: 'v1',
        type: 'video',
        src: 'https://img.youtube.com/vi/a9pSVHMJj6c/hqdefault.jpg',
        caption: 'Farmer Support in Action',
        videoUrl: 'https://www.youtube.com/embed/a9pSVHMJj6c'
    },
    {
        id: 'v2',
        type: 'video',
        src: 'https://img.youtube.com/vi/9OCfU3ahOmM/hqdefault.jpg',
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
