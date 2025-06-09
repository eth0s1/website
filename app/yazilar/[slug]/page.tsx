"use client";
import React, { useState } from "react";
import { yazilar } from "../../../content/yazilar";
import { useParams, notFound } from 'next/navigation';
import Image from "next/image";

export default function YaziDetay() {
  const params = useParams();
  const slug = params.slug;
  const yazi = yazilar.find(y => y.slug === slug);
  const [modalOpen, setModalOpen] = useState(false);
  if (!yazi) return notFound();
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1rem' }}>
      <h1 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#111', letterSpacing: 0.5, fontFamily: 'Segoe UI, Arial, sans-serif', textShadow: '0 2px 12px #0070f322', marginBottom: 18 }}>{yazi.title}</h1>
      <div style={{ width: '100%', height: 4, background: 'linear-gradient(90deg, #0070f3 0%, #00c6ff 100%)', borderRadius: 2, marginBottom: 32, maxWidth: 180 }} />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '2.5rem', alignItems: 'flex-start', marginBottom: 32 }}>
        <div style={{ width: 400, height: 260, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: 12, overflow: 'hidden', cursor: 'pointer' }}
          onClick={() => setModalOpen(true)}
          title="Büyütmek için tıklayın"
        >
          <Image src={yazi.image} alt={yazi.title} width={400} height={260} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: '#888', fontSize: 16, marginBottom: 10 }}>{yazi.date}</div>
          <p style={{ fontSize: '1.08rem', color: '#444', lineHeight: 1.7, marginBottom: 18 }}>{yazi.description}</p>
          <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
            {yazi.files?.map(file => (
              <li key={file.url} style={{ marginBottom: 8 }}>
                <a href={file.url} download style={{ color: '#1976d2', textDecoration: 'underline', fontSize: 16 }}>{file.name}</a>
                <span style={{ color: '#888', marginLeft: 8, fontSize: 14 }}>({file.size})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
          }}
        >
          <Image
            src={yazi.image}
            alt={yazi.title}
            width={900}
            height={600}
            style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: 16, boxShadow: '0 8px 32px #0008' }}
          />
        </div>
      )}
    </main>
  );
} 