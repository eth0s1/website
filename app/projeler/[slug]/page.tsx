"use client";
import React, { useState } from "react";
import { projects } from "../../../content/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProjeDetay({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  const [modalImg, setModalImg] = useState<string | null>(null);
  if (!project) return notFound();

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1rem' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: 24 }}>{project.title}</h1>
      <div style={{ color: '#444', fontSize: '1.1rem', marginBottom: 18 }}>{project.description}</div>
      <div style={{ color: '#888', fontSize: '1rem', marginBottom: 32 }}>{project.date}</div>
      {/* Galeri */}
      {project.gallery && project.gallery.length > 0 && (
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
            {project.gallery.map((img, i) => (
              <div key={img} style={{ minWidth: 320, maxWidth: 400, flex: '0 0 auto', borderRadius: 12, background: '#f5f5f5', boxShadow: '0 2px 12px #0001', padding: 6, cursor: 'pointer' }} onClick={() => setModalImg(img)}>
                <Image
                  src={img}
                  alt={project.title + ' görsel ' + (i+1)}
                  width={380}
                  height={240}
                  style={{ objectFit: 'contain', width: '100%', height: 220, borderRadius: 10 }}
                />
                <div style={{ textAlign: 'center', fontSize: 14, color: '#666', marginTop: 4 }}>
                  {project.slug === 'matlab-frekans-analizi'
                    ? 'Arayüz'
                    : project.slug === 'buckboost'
                      ? (img.toLowerCase().includes('schematic') && img.toLowerCase().includes('lm5118')
                          ? 'LM5118 Schematic'
                          : img.toLowerCase().includes('schematic')
                            ? 'Schematic'
                            : 'PCB')
                      : project.slug === 'motorcontrol'
                        ? (img.toLowerCase().includes('schematic') ? 'Schematic' : 'PCB')
                        : (i === 0 ? 'Android App' : (i > 0 && i < 4 ? 'PCB' : 'Schematic'))}
                </div>
              </div>
            ))}
          </div>
          {/* Modal */}
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
        </div>
      )}
      {/* Dosyalar */}
      {Array.isArray(project.files) && project.files.length > 0 && (
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontWeight: 600, marginBottom: 10, fontSize: '1.13rem' }}>İndirilebilir Dosyalar</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {project.files.map(file => (
              <a
                key={file.url}
                href={file.url}
                download
                style={{
                  display: 'inline-block',
                  padding: '0.7rem 1.4rem',
                  background: '#0070f3',
                  color: '#fff',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1.05rem',
                  boxShadow: '0 2px 8px #0070f322',
                  transition: 'background 0.2s, transform 0.2s',
                }}
              >
                {file.name} <span style={{ color: '#e0e0e0', fontWeight: 400, fontSize: '0.98em', marginLeft: 8 }}>{(file as any).size ? `(${(file as any).size})` : ''}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </main>
  );
} 