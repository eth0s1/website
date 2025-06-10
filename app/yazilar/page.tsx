"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { yazilar } from "../../content/yazilar";
import Navbar from "../../components/Navbar";

export default function Yazilar() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(-20px)';
      
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = 'all 0.8s ease-out';
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, []);

  const setRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) {
      cardRefs.current[idx] = el;
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1440, margin: '0 auto', padding: '2.5rem 1rem' }}>
        <h1 ref={titleRef} style={{
          fontSize: '2.7rem',
          marginBottom: 18,
          fontWeight: 800,
          color: '#111',
          letterSpacing: 0.5,
          fontFamily: 'Playfair Display, serif',
          textShadow: '0 2px 12px #0070f322',
          textAlign: 'center',
          lineHeight: 1.1,
        }}>
          Yazılarım
        </h1>
        <div style={{
          width: '100%',
          height: 4,
          background: '#000',
          borderRadius: 2,
          marginBottom: 24,
          maxWidth: 180,
          margin: '0 auto 24px auto',
        }} />
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: '#444',
          maxWidth: 800,
          margin: '0 auto 38px auto',
          lineHeight: 1.6,
        }}>
          Okul kapsamında ve hobi olarak uğraştığım yazılara ve küçük projeleri bu sekmede inceleyebilirsiniz.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
          width: '100%',
          minHeight: 400,
        }}>
          {yazilar.map((yazi, idx) => (
            <div
              key={yazi.slug}
              ref={(el) => setRef(el, idx)}
              style={{
                background: '#fff',
                borderRadius: 22,
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s, transform 0.2s',
                minHeight: 260,
                maxWidth: 1100,
                margin: '0 auto',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.045)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
              }}
            >
              <div style={{ width: 400, height: 260, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Image
                  src={yazi.image}
                  alt={yazi.title}
                  width={400}
                  height={260}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem 1.7rem 2.2rem 1.7rem', rowGap: 18, overflowY: 'auto', maxHeight: 260 }}>
                <Link href={`/yazilar/${yazi.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <h2 style={{ fontSize: '1.38rem', marginBottom: 14, fontWeight: 600, letterSpacing: 0.2, lineHeight: 1.3 }}>{yazi.title}</h2>
                  <p style={{ color: '#444', fontSize: '1.05rem', marginBottom: 20, lineHeight: 1.7, letterSpacing: 0.01 }}>{yazi.description}</p>
                  <div style={{ color: '#888', fontSize: '1.08rem', marginTop: 'auto', letterSpacing: 0.01, lineHeight: 1.5 }}>
                    {yazi.date}
                    {yazi.hazirlayanlar && (
                      <>
                        <span style={{ margin: '0 6px' }}>•</span>
                        <span>{yazi.hazirlayanlar}</span>
                      </>
                    )}
                  </div>
                  <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: '#666', textAlign: 'center' }}>Detaylar için tıklayınız &gt;&gt;</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
} 