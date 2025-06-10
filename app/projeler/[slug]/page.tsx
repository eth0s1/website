import React from "react";
import { projects } from "../../../content/projects";
import { notFound } from "next/navigation";
import ProjectGallery from "./ProjectGallery";

// Sayfa props tipi
interface ProjeDetayProps {
  params: {
    slug: string;
  };
}

// Opsiyonel: Statik sayfalar oluşturmak için
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjeDetay({ params }: ProjeDetayProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1rem' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: 24 }}>{project.title}</h1>
      <div style={{ color: '#444', fontSize: '1.1rem', marginBottom: 18 }}>{project.description}</div>
      <div style={{ color: '#888', fontSize: '1rem', marginBottom: 32 }}>{project.date}</div>

      {/* Galeri - Client Component olarak */}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGallery gallery={project.gallery} title={project.title} slug={project.slug} />
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
                {file.name} 
                {file.size && <span style={{ color: '#e0e0e0', fontWeight: 400, fontSize: '0.98em', marginLeft: 8 }}>({file.size})</span>}
              </a>
            ))}
          </div>
        </div>
      )}
    </main>
  );
} 