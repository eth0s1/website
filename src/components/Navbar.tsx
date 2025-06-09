"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/#intro", label: "Giriş" },
    { href: "/#about", label: "Hakkımda" },
    { href: "/yazilar", label: "Yazılar" },
    { href: "/projeler", label: "Projeler" },
    { href: "/iletisim", label: "İletişim" },
  ];
  return (
    <nav style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      background: '#fff',
      boxShadow: '0 2px 12px #0001',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 36,
      padding: '1.1rem 0 1.1rem 0',
      fontSize: '1.18rem',
      fontWeight: 500,
      letterSpacing: 0.2,
      fontFamily: 'Segoe UI, Fira Mono, Arial, sans-serif',
    }}>
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
              color: isActive ? '#0070f3' : '#222',
              textDecoration: 'none',
              margin: '0 18px',
              fontWeight: isActive ? 700 : 500,
              fontSize: isActive ? '1.25rem' : '1.13rem',
              letterSpacing: 0.3,
              borderBottom: isActive ? '2.5px solid #0070f3' : '2.5px solid transparent',
              transition: 'all 0.22s cubic-bezier(.4,2,.6,1)',
              borderRadius: 6,
              padding: '0.2rem 0.7rem',
              boxShadow: isActive ? '0 2px 12px #0070f322' : 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.11)';
              e.currentTarget.style.boxShadow = '0 4px 18px #0070f344';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = isActive ? '0 2px 12px #0070f322' : 'none';
            }}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
} 