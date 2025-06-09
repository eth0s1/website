import React from "react";
import Navbar from "../../src/components/Navbar";

export default function Iletisim() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>İletişim</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Benimle e-posta veya LinkedIn üzerinden iletişime geçebilirsiniz:
        </p>
        <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
          <a href="mailto:isildarethem@gmail.com" style={{ color: '#fff', background: '#0070f3', padding: '0.7rem 1.5rem', borderRadius: 8, fontSize: '1.1rem', textDecoration: 'none', fontWeight: 500 }}>Mail Gönder</a>
          <a href="https://www.linkedin.com/in/ethemisildar" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#0a66c2', padding: '0.7rem 1.5rem', borderRadius: 8, fontSize: '1.1rem', textDecoration: 'none', fontWeight: 500 }}>LinkedIn</a>
        </div>
      </main>
    </>
  );
} 