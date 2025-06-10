"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link';

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

const Navbar = () => {
  const pathname = usePathname() || '/';

  const links = [
    { href: '/', label: 'Hakkımda' },
    { href: '/blog', label: 'Blog' },
    { href: '/projeler', label: 'Projeler' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <nav style={navStyle}>
      {links.map(link => {
        const isActive =
          (link.href === "/#about" && pathname === "/") ||
          (link.href === "/#intro" && pathname === "/") ||
          (link.href !== "/#about" && link.href !== "/#intro" && pathname.startsWith(link.href.replace("#about", "").replace("#intro", "")));

        return (
          <a
            key={link.href}
            href={link.href}
            style={{
              ...linkStyle,
              color: isActive ? '#0070f3' : '#222',
            }}
            className="nav-link"
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar; 