import Link from 'next/link';
import React from 'react';

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',
  padding: '1.2rem 0 1.2rem 0',
  borderBottom: '1px solid #eee',
  marginBottom: '2.5rem',
  fontFamily: 'inherit',
  fontSize: '1.15rem',
  background: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 10,
};

const linkStyle: React.CSSProperties = {
  color: '#222',
  textDecoration: 'none',
  fontWeight: 500,
  position: 'relative',
  padding: '0.2rem 0',
  transition: 'color 0.2s',
};

const Navbar = () => (
  <nav style={navStyle}>
    <Link href="/" style={linkStyle} className="nav-link">Hakkımda</Link>
    <Link href="/yazilar" style={linkStyle} className="nav-link">Yazılar</Link>
    <Link href="/projeler" style={linkStyle} className="nav-link">Projeler</Link>
    <Link href="/iletisim" style={linkStyle} className="nav-link">İletişim</Link>
  </nav>
);

export default Navbar; 