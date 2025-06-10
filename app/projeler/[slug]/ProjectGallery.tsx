"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProjectGalleryProps {
  gallery: string[];
  title: string;
  slug: string;
}

export default function ProjectGallery({ gallery, title, slug }: ProjectGalleryProps) {
  const [modalImg, setModalImg] = useState<string | null>(null);

  const getAltText = (img: string, i: number) => {
    const lowerImg = img.toLowerCase();
    if (slug === 'matlab-frekans-analizi') return 'Arayüz';
    if (slug === 'buckboost') {
      if (lowerImg.includes('schematic') && lowerImg.includes('lm5118')) return 'LM5118 Schematic';
      if (lowerImg.includes('schematic')) return 'Schematic';
      return 'PCB';
    }
    if (slug === 'motorcontrol') {
      return lowerImg.includes('schematic') ? 'Schematic' : 'PCB';
    }
    if (i === 0) return 'Android App';
    if (i > 0 && i < 4) return 'PCB';
    return 'Schematic';
  };

  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontWeight: 600, marginBottom: 10, fontSize: '1.13rem' }}>Proje Görselleri</div>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: 18,
          paddingBottom: 8,
          borderBottom: '1px solid #eee',
          marginBottom: 8
        }}>
          {gallery.map((img, i) => (
            <div key={img} style={{ minWidth: 320, maxWidth: 400, flex: '0 0 auto', borderRadius: 12, background: '#f5f5f5', boxShadow: '0 2px 12px #0001', padding: 6, cursor: 'pointer' }} onClick={() => setModalImg(img)}>
              <Image
                src={img}
                alt={`${title} görsel ${i + 1}: ${getAltText(img, i)}`}
                width={380}
                height={240}
                style={{ objectFit: 'contain', width: '100%', height: 220, borderRadius: 10 }}
                unoptimized
              />
              <div style={{ textAlign: 'center', fontSize: 14, color: '#666', marginTop: 4 }}>
                {getAltText(img, i)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImg && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Büyük görsel" style={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: 16, boxShadow: '0 4px 32px #0008', background: '#fff' }} />
        </div>
      )}
    </>
  );
} 