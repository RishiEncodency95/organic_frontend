"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { gsap } from 'gsap';

import { GALLERY_ITEMS, GalleryItem } from '@/app/data/galleryImages';
import SectionContainer from '@/app/components/layout/SectionContainer';
import { buildCloudinaryImageUrl, cloudinaryImageLoader, isCloudinaryImage } from '@/lib/cloudinaryImage';

const ALL_IMAGES: GalleryItem[] = GALLERY_ITEMS;

const PAGE_SIZE = 12;

const Lightbox = ({ images, activeIndex, onClose, onNav }: any) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const imgRef      = useRef<HTMLDivElement>(null);
  const infoRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(backdropRef.current, { opacity:0 }, { opacity:1, duration:0.32, ease:'power2.out' });
    gsap.fromTo(imgRef.current,  { scale:0.9, opacity:0, y:20 }, { scale:1, opacity:1, y:0, duration:0.4, ease:'expo.out' });
    gsap.fromTo(infoRef.current, { opacity:0, y:10 }, { opacity:1, y:0, duration:0.3, delay:0.15, ease:'power2.out' });
  }, []);

  const close = () => {
    gsap.to(imgRef.current,     { scale:0.95, opacity:0, y:10, duration:0.2, ease:'power2.in' });
    gsap.to(backdropRef.current,{ opacity:0, duration:0.25, delay:0.05, onComplete: onClose });
  };

  const navigate = (dir: string | number) => {
    gsap.to(imgRef.current, {
      x: dir === 'next' ? -30 : 30, opacity:0, duration:0.15, ease:'power2.in',
      onComplete: () => {
        onNav(dir);
        gsap.fromTo(imgRef.current,
          { x: dir === 'next' ? 30 : -30, opacity:0 },
          { x:0, opacity:1, duration:0.25, ease:'power2.out' }
        );
      },
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft')  navigate('prev');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex]);

  const img = images[activeIndex];
  const getImgSrc = (src: any) => typeof src === 'string' ? src : src?.src || "";

  const navBtn = (pos: 'left' | 'right', dir: 'prev' | 'next') => (
    <button
      onClick={(e) => { e.stopPropagation(); navigate(dir); }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
      style={{
        position:'absolute', [pos]:20, top:'50%', transform:'translateY(-50%)',
        background:'rgba(255,255,255,0.07)',
        border:'1px solid rgba(255,255,255,0.16)',
        borderRadius:4, width:40, height:40,
        display:'flex', alignItems:'center', justifyContent:'center',
        cursor:'pointer', color:'#fff', zIndex:10,
        transition:'background 0.18s',
      }}
    >
      {dir === 'prev' ? <ChevronLeft size={20}/> : <ChevronRight size={20}/>}
    </button>
  );

  return (
    <div ref={backdropRef} onClick={close} style={{
      position:'fixed', inset:0, zIndex:9999,
      background:'rgba(0,0,0,0.9)',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      backdropFilter:'blur(4px)',
    }}>
      {/* Close */}
      <button onClick={close}
        onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.16)'}
        onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.07)'}
        style={{
          position:'absolute', top:20, right:20,
          background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.16)',
          borderRadius:4, width:36, height:36,
          display:'flex', alignItems:'center', justifyContent:'center',
          cursor:'pointer', color:'#fff', zIndex:10, transition:'background 0.18s',
        }}
      ><X size={16}/></button>

      {navBtn('left', 'prev')}

      {/* Image */}
      <div ref={imgRef} onClick={e=>e.stopPropagation()} style={{
        maxWidth:'82vw', maxHeight:'78vh', borderRadius:10, overflow:'hidden',
      }}>
        <img src={getImgSrc(img.src)} alt={img.alt || img.title} style={{
          maxWidth:'82vw', maxHeight:'78vh', objectFit:'contain', display:'block',
        }}/>
      </div>

      {/* Info */}
      <div ref={infoRef} onClick={e=>e.stopPropagation()} style={{ marginTop:16, textAlign:'center' }}>
        <p style={{ color:'rgba(255,255,255,0.9)', fontSize:13, fontWeight:600, margin:'0 0 10px', letterSpacing:'0.02em' }}>
          {img.title}
        </p>
        <div style={{ display:'flex', gap:5, justifyContent:'center' }}>
          {images.map((_: any, i: number) => (
            <button key={i}
              onClick={(e) => { e.stopPropagation(); navigate(i > activeIndex ? 'next' : 'prev'); }}
              style={{
                width: i === activeIndex ? 20 : 6, height:4, borderRadius:2,
                background: i === activeIndex ? '#4caf50' : 'rgba(255,255,255,0.25)',
                border:'none', cursor:'pointer', padding:0,
                transition:'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      {navBtn('right', 'next')}
    </div>
  );
};

const GalleryCard = ({ img, onOpen }: any) => {
  const cardRef    = useRef<HTMLDivElement>(null);
  const imgRef     = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const labelRef   = useRef<HTMLDivElement>(null);
  const zoomRef    = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    gsap.to(imgRef.current,     { scale:1.05, duration:0.4, ease:'power2.out' });
    gsap.to(overlayRef.current, { opacity:1, duration:0.25 });
    if (zoomRef.current)  gsap.fromTo(zoomRef.current,  { scale:0.7, opacity:0 }, { scale:1, opacity:1, duration:0.25, ease:'back.out(1.5)' });
    if (labelRef.current) gsap.to(labelRef.current, { y:0, opacity:1, duration:0.25, ease:'power2.out' });
  };

  const onLeave = () => {
    gsap.to(imgRef.current,     { scale:1, duration:0.4, ease:'power2.out' });
    gsap.to(overlayRef.current, { opacity:0, duration:0.25 });
    if (zoomRef.current)  gsap.to(zoomRef.current,  { scale:0.7, opacity:0, duration:0.2 });
    if (labelRef.current) gsap.to(labelRef.current, { y:10, opacity:0, duration:0.2 });
  };

  const handleClick = () => {
    gsap.to(cardRef.current, { scale:0.97, duration:0.1, yoyo:true, repeat:1 });
    onOpen(img.id);
  };

  const usesCloudinaryLoader = isCloudinaryImage(img.src);

  return (
    <div ref={cardRef} onClick={handleClick} onMouseEnter={onEnter} onMouseLeave={onLeave}
      style={{ 
        ...img.style, 
        position:'relative', 
        borderRadius:14, 
        overflow:'hidden', 
        cursor:'pointer',
        backgroundColor: '#eef2ee',
      }}
    >
      <div ref={imgRef} style={{ width:'100%', height:'100%', overflow:'hidden', position:'relative' }}>
        <Image
          src={img.src}
          alt={img.alt || img.title}
          fill
          loader={usesCloudinaryLoader ? cloudinaryImageLoader : undefined}
          sizes="(max-width: 640px) 42vw, (max-width: 1024px) 35vw, 28vw"
          loading="lazy"
          placeholder={typeof img.src === 'string' ? 'empty' : 'blur'}
          style={{ 
            objectFit:'cover', 
          }}
        />
      </div>

      <div ref={overlayRef} style={{
        position:'absolute', inset:0, opacity:0, pointerEvents:'none',
        background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
      }}/>

      {img.hasLabel && (
        <>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)', zIndex:1, pointerEvents:'none' }}/>
          <div style={{ position:'absolute', bottom:14, left:14, zIndex:2 }}>
            <span style={{
              background:'rgba(15,55,17,0.88)',
              color:'#c8e6c9', fontSize:11, fontWeight:700,
              padding:'5px 12px', borderRadius:20,
              display:'inline-flex', alignItems:'center', gap:6,
              border:'1px solid rgba(76,175,80,0.4)',
              letterSpacing:'0.05em', textTransform:'uppercase',
              boxShadow:'0 2px 10px rgba(0,0,0,0.3)',
            }}>
              <Camera size={11}/> {img.title}
            </span>
          </div>
        </>
      )}

      {!img.hasLabel && (
        <>
          <div ref={zoomRef} style={{
            position:'absolute', top:'50%', left:'50%',
            transform:'translate(-50%,-50%)',
            zIndex:3, opacity:0,
            background:'rgba(255,255,255,0.15)',
            borderRadius:'50%', width:40, height:40,
            display:'flex', alignItems:'center', justifyContent:'center',
            border:'1px solid rgba(255,255,255,0.3)', pointerEvents:'none',
          }}>
            <ZoomIn size={16} color="#fff"/>
          </div>
          <div ref={labelRef} style={{
            position:'absolute', bottom:0, left:0, right:0,
            zIndex:3, opacity:0, transform:'translateY(10px)',
            padding:'10px 12px 12px',
            background:'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
            pointerEvents:'none',
          }}>
            <span style={{
              display:'inline-block',
              background:'rgba(15,55,17,0.85)',
              color:'#a5d6a7', fontSize:9, fontWeight:800,
              padding:'2px 8px', borderRadius:10,
              border:'1px solid rgba(76,175,80,0.3)',
              letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:4,
            }}>
              {img.category}
            </span>
            <p style={{ color:'#fff', fontSize:12, fontWeight:600, margin:0, letterSpacing:'0.01em' }}>
              {img.title}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const Pagination = ({ current, total, onChange }: any) => {
  const goTo = (p: number) => { if (p !== current && p >= 1 && p <= total) onChange(p); };

  const arrowBtn = (dir: 'prev' | 'next') => {
    const disabled = dir === 'prev' ? current === 1 : current === total;
    return (
      <button
        onClick={() => goTo(dir === 'prev' ? current - 1 : current + 1)}
        disabled={disabled}
        onMouseEnter={e => { if (!disabled) { e.currentTarget.style.background='#1b5e20'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#1b5e20'; }}}
        onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#444'; e.currentTarget.style.borderColor='rgba(0,0,0,0.18)'; }}
        style={{
          width:32, height:32, borderRadius:0,
          border:'1px solid rgba(0,0,0,0.18)',
          background:'transparent', color:'#444',
          display:'flex', alignItems:'center', justifyContent:'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.32 : 1,
          transition:'all 0.18s ease',
        }}
      >
        {dir === 'prev' ? <ChevronLeft size={14} strokeWidth={2}/> : <ChevronRight size={14} strokeWidth={2}/>}
      </button>
    );
  };

  const getPages = () => {
    const pages: (number | string)[] = [];
    const delta = 1;
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    pages.push(1);
    if (left > 2) pages.push('...');
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < total - 1) pages.push('...');
    if (total > 1) pages.push(total);
    return pages;
  };

  return (
    <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', marginTop:20, gap:0 }}>
      <span style={{ fontSize:12, color:'#888', marginRight:14, letterSpacing:'0.02em' }}>
        {current} / {total}
      </span>

      {arrowBtn('prev')}

      {getPages().map((p, idx) =>
        p === '...' ? (
          <span
            key={`ellipsis-${idx}`}
            style={{
              width:32, height:32, borderRadius:0,
              border:'1px solid rgba(0,0,0,0.18)',
              borderLeft:'none',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:12, color:'#999', userSelect:'none',
            }}
          >…</span>
        ) : (
          <button
            key={p}
            onClick={() => goTo(p as number)}
            onMouseEnter={e => { if (p !== current) { e.currentTarget.style.background='rgba(27,94,32,0.08)'; e.currentTarget.style.color='#1b5e20'; }}}
            onMouseLeave={e => { if (p !== current) { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#666'; }}}
            style={{
              width:32, height:32, borderRadius:0,
              border:'1px solid rgba(0,0,0,0.18)',
              borderLeft: p === 1 ? '1px solid rgba(0,0,0,0.18)' : 'none',
              background: p === current ? '#1b5e20' : 'transparent',
              color: p === current ? '#fff' : '#666',
              fontSize:12, fontWeight: p === current ? 700 : 500,
              cursor:'pointer', transition:'all 0.18s ease',
            }}
          >
            {p}
          </button>
        )
      )}

      {arrowBtn('next')}
    </div>
  );
};

const styleCycle = [
  { gridColumn:'span 5', gridRow:'span 12', hasLabel:true },
  { gridColumn:'span 3', gridRow:'span 8' },
  { gridColumn:'span 2', gridRow:'span 8' },
  { gridColumn:'span 2', gridRow:'span 8' },
  { gridColumn:'span 4', gridRow:'span 8' },
  { gridColumn:'span 3', gridRow:'span 8' },
  { gridColumn:'span 3', gridRow:'span 7' },
  { gridColumn:'span 2', gridRow:'span 14' },
  { gridColumn:'span 2', gridRow:'span 10' },
  { gridColumn:'span 2', gridRow:'span 10' },
  { gridColumn:'span 3', gridRow:'span 10' },
  { gridColumn:'span 3', gridRow:'span 7' },
];

interface GalleryGridProps {
  activeYear?: string;
  activeCategory?: string;
  searchQuery?: string;
  dbGallery?: any[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ 
  activeYear = 'All Years', 
  activeCategory = 'All Activities', 
  searchQuery = '',
  dbGallery = [] 
}) => {
  const [page, setPage]                   = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const dynamicImages = React.useMemo(() => {
    const publishedBackend = (dbGallery || [])
      .filter((g: any) => (!g.status || g.status === 'Published') && g.image)
      .map((g: any, i: number) => {
        const s = styleCycle[i % styleCycle.length];
        return {
          id: g._id || g.id || `uploaded-${i}`,
          src: g.image,
          title: g.title || g.category || 'Photo Asset',
          alt: g.imageAlt || g.title || g.category || 'Photo Asset',
          category: g.category,
          year: String(g.year),
          style: { gridColumn: s.gridColumn, gridRow: s.gridRow },
          hasLabel: true,
        };
      });

    if (publishedBackend.length === 0) {
      return ALL_IMAGES;
    }

    // Newly uploaded images appear first, followed by existing static demo images as fallback
    const fallbackRemaining = ALL_IMAGES.filter(
      (img) => !publishedBackend.some((b) => b.title && b.title === img.title)
    );

    return [...publishedBackend, ...fallbackRemaining];
  }, [dbGallery]);

  const filteredImages = React.useMemo(() => {
    const q = (searchQuery || '').trim().toLowerCase();
    return dynamicImages.filter((img) => {
      const matchYear = activeYear === 'All Years' || String(img.year) === String(activeYear);
      const matchCategory =
        activeCategory === 'All Activities' ||
        img.category?.toLowerCase() === activeCategory?.toLowerCase();
      const matchSearch =
        !q ||
        img.title?.toLowerCase().includes(q) ||
        img.category?.toLowerCase().includes(q);
      return matchYear && matchCategory && matchSearch;
    });
  }, [activeYear, activeCategory, searchQuery, dynamicImages]);

  const TOTAL_PAGES = Math.ceil(filteredImages.length / PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [activeYear, activeCategory, searchQuery]);

  const pageImages = filteredImages.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);

  // Warm the browser cache for the next set of admin-uploaded Cloudinary images.
  // It starts after the current page has had time to load, so pagination feels
  // immediate without competing with the initially visible cards.
  useEffect(() => {
    if (typeof window === 'undefined' || page >= TOTAL_PAGES) return;

    const nextImages = filteredImages
      .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
      .map((image) => image.src)
      .filter(isCloudinaryImage);

    if (nextImages.length === 0) return;

    const preloaders: HTMLImageElement[] = [];
    const timeoutId = window.setTimeout(() => {
      nextImages.forEach((src) => {
        const preloader = new window.Image();
        preloader.decoding = 'async';
        preloader.sizes = '(max-width: 640px) 42vw, (max-width: 1024px) 35vw, 28vw';
        preloader.srcset = [256, 384, 640, 750]
          .map((width) => `${buildCloudinaryImageUrl(src, width)} ${width}w`)
          .join(', ');
        preloader.src = buildCloudinaryImageUrl(src, 640);
        preloaders.push(preloader);
      });
    }, 1200);

    return () => {
      window.clearTimeout(timeoutId);
      preloaders.forEach((preloader) => {
        preloader.src = '';
        preloader.srcset = '';
      });
    };
  }, [filteredImages, page, TOTAL_PAGES]);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
    if (sectionRef.current) {
      window.scrollTo({ top: sectionRef.current.offsetTop - 80, behavior:'smooth' });
    }
  }, []);

  const openLightbox = (id: number | string) => {
    const idx = filteredImages.findIndex(i => i.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const navLightbox = (dir: string | number) => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return dir === 'next'
        ? (prev + 1) % filteredImages.length
        : (prev - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  return (
    <section ref={sectionRef} className="w-full py-8 font-inter min-h-[400px]">
      <SectionContainer>
        {filteredImages.length === 0 ? (
          <div className="w-full py-20 text-center text-gray-500 font-medium text-lg">
            No photos found for the selected filters.
          </div>
        ) : (
          <div ref={gridRef} style={{
            display:'grid',
            gridTemplateColumns:'repeat(12, 1fr)',
            gridAutoRows:'14px',
            gap:'8px',
          }}>
            {pageImages.map((img, index) => {
              const s = styleCycle[index % styleCycle.length];
              const styledImg = {
                ...img,
                style: { gridColumn: s.gridColumn, gridRow: s.gridRow },
                hasLabel: s.hasLabel || false,
              };
              return (
                <GalleryCard key={img.id} img={styledImg} onOpen={openLightbox}/>
              );
            })}
          </div>
        )}

        {TOTAL_PAGES > 1 && filteredImages.length > 0 && (
          <Pagination current={page} total={TOTAL_PAGES} onChange={handlePageChange}/>
        )}

        {lightboxIndex !== null && filteredImages.length > 0 && (
          <Lightbox
            images={filteredImages}
            activeIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNav={navLightbox}
          />
        )}
      </SectionContainer>
    </section>
  );
};

export default GalleryGrid;
