import React from 'react';

const Footer = () => (
  <footer style={{
    textAlign: 'center',
    padding: '2rem 0 1.5rem 0',
    borderTop: '1px solid #eee',
    marginTop: '2rem',
    color: '#888',
    fontSize: '1rem',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'center',
  }}>
    <div>
      <strong>İletişim:</strong>
      <div style={{ marginTop: 6 }}>
        <a href="mailto:isildarethem@gmail.com" style={{ color: '#0070f3', marginRight: 12 }}>isildarethem@gmail.com</a>
        <span style={{ marginRight: 12 }}>|</span>
        <a href="https://www.linkedin.com/in/ethemisildar" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>LinkedIn</a>
      </div>
    </div>
    <div style={{ marginTop: 8, fontSize: '0.95rem', color: '#aaa' }}>
      © {new Date().getFullYear()} Ethem Işıldar. Tüm hakları saklıdır.
    </div>
  </footer>
);

export default Footer; 