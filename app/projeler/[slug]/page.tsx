"use client";
import React, { useState } from "react";
import { projects } from "../../../content/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjeDetay({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  const [modalImg, setModalImg] = useState<string | null>(null);

  if (!project) {
    return (
      <>
        <Navbar />
        <main style={{ maxWidth: 1440, margin: '0 auto', padding: '2.5rem 1rem' }}>
          <h1 style={{ fontSize: '2.7rem', marginBottom: 18, fontWeight: 800, color: '#111', letterSpacing: 0.5, fontFamily: 'Playfair Display, serif', textShadow: '0 2px 12px #0070f322', textAlign: 'center', lineHeight: 1.1 }}>
            Proje Bulunamadı
          </h1>
          <div style={{ width: '100%', height: 4, background: '#000', borderRadius: 2, marginBottom: 24, maxWidth: 180, margin: '0 auto 24px auto' }} />
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#444', maxWidth: 800, margin: '0 auto 38px auto', lineHeight: 1.6 }}>
            Aradığınız proje bulunamadı. Lütfen ana sayfaya dönün.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/projeler" style={{ 
              display: 'inline-block',
              padding: '0.8rem 1.5rem',
              background: '#000',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              transition: 'all 0.2s ease'
            }}>
              Projelere Dön
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1440, margin: '0 auto', padding: '2.5rem 1rem' }}>
        <h1 style={{ fontSize: '2.7rem', marginBottom: 18, fontWeight: 800, color: '#111', letterSpacing: 0.5, fontFamily: 'Playfair Display, serif', textShadow: '0 2px 12px #0070f322', textAlign: 'center', lineHeight: 1.1 }}>
          {project.title}
        </h1>
        <div style={{ width: '100%', height: 4, background: '#000', borderRadius: 2, marginBottom: 24, maxWidth: 180, margin: '0 auto 24px auto' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36, width: '100%', minHeight: 400 }}>
          <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)', display: 'flex', flexDirection: 'column', alignItems: 'stretch', overflow: 'hidden', minHeight: 260, maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <div style={{ width: '100%', height: 400, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem 1.7rem 2.2rem 1.7rem', rowGap: 18, overflowY: 'auto' }}>
              <div>
                <p style={{ color: '#444', fontSize: '1.05rem', marginBottom: 20, lineHeight: 1.7, letterSpacing: 0.01 }}>{project.description}</p>
                <div style={{ color: '#888', fontSize: '1.08rem', marginTop: 'auto', letterSpacing: 0.01, lineHeight: 1.5 }}>
                  {project.date}
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/projeler" style={{ 
              display: 'inline-block',
              padding: '0.8rem 1.5rem',
              background: '#000',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              transition: 'all 0.2s ease'
            }}>
              Projelere Dön
            </Link>
          </div>
        </div>
      </main>
    </>
  );
} 