"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/src/components/Navbar";

const sections = [
  { id: "intro", label: "Giriş", icon: "🏠" },
  { id: "about", label: "Hakkımda", icon: "👤" },
  { id: "tecrubeler", label: "Tecrübeler", icon: "💼" },
  { id: "beceriler", label: "Beceriler", icon: "🛠️" },
];

export default function Home() {
  const sectionRefs = {
    intro: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    tecrubeler: useRef<HTMLDivElement>(null),
    beceriler: useRef<HTMLDivElement>(null),
  };
  const [visibleSection, setVisibleSection] = useState("intro");
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const typewriterWords = ["Engineer!", "Electrical Engineer"];
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [engineerText, setEngineerText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = Object.entries(sectionRefs).map(([key, ref]) => {
        if (!ref.current) return { key, top: Infinity };
        const rect = ref.current.getBoundingClientRect();
        return { key, top: Math.abs(rect.top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setVisibleSection(offsets[0].key);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = typewriterWords[typewriterIndex];
    if (!isDeleting && engineerText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setEngineerText(currentWord.slice(0, engineerText.length + 1));
      }, 80);
    } else if (isDeleting && engineerText.length > 0) {
      timeout = setTimeout(() => {
        setEngineerText(currentWord.slice(0, engineerText.length - 1));
      }, 40);
    } else if (!isDeleting && engineerText.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && engineerText.length === 0) {
      setIsDeleting(false);
      setTypewriterIndex((prev) => (prev + 1) % typewriterWords.length);
    }
    return () => clearTimeout(timeout);
  }, [engineerText, isDeleting, typewriterIndex]);

  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    if (showWelcome) {
      timeout1 = setTimeout(() => setShowWelcome(false), 2200);
    } else {
      timeout2 = setTimeout(() => setShowWelcome(true), 1200);
    }
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [showWelcome]);

  const scrollToSection = (id: string) => {
    const ref = sectionRefs[id as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Ortak section style
  const sectionStyle = (id: string) => ({
    minHeight: '100vh',
    width: '100%',
    opacity: visibleSection === id ? 1 : 0.2,
    pointerEvents: visibleSection === id ? ('auto' as const) : ('none' as const),
    transition: 'opacity 0.6s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: visibleSection === id ? 2 : 1,
  });

  return (
    <div style={{ minHeight: '100vh', background: '#fff', position: 'relative', width: '100%' }}>
      <Navbar />
      {/* Sol ikonlu menü */}
      <aside style={{
        position: 'fixed',
        top: '30%',
        left: 32,
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}>
        {sections.map((section) => (
          <div key={section.id} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={() => setHoveredIcon(section.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: visibleSection === section.id ? 32 : 22,
                color: visibleSection === section.id ? '#0070f3' : '#bbb',
                transition: 'all 0.2s',
                outline: 'none',
                filter: visibleSection === section.id ? 'drop-shadow(0 2px 8px #0070f355)' : 'none',
                marginRight: 0,
                padding: 0,
                borderRadius: 8,
              }}
              aria-label={section.label}
            >
              {section.icon}
            </button>
            {/* Hover animasyonlu başlık etiketi */}
            <span
              style={{
                opacity: hoveredIcon === section.id ? 1 : 0,
                transform: hoveredIcon === section.id ? 'translateX(0)' : 'translateX(-16px)',
                pointerEvents: 'none',
                position: 'absolute',
                left: 40,
                background: '#fff',
                color: '#222',
                fontWeight: 500,
                fontSize: 16,
                borderRadius: 6,
                boxShadow: '0 2px 8px #0001',
                padding: '4px 14px',
                transition: 'opacity 0.25s, transform 0.25s',
                whiteSpace: 'nowrap',
                border: '1px solid #eee',
                marginLeft: 8,
              }}
            >
              {section.label}
            </span>
          </div>
        ))}
      </aside>
      {/* Açılış sekmesi */}
      <section ref={sectionRefs.intro} id="intro" style={sectionStyle('intro')}>
        <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontFamily: 'Fira Mono, monospace', fontSize: '3.5rem', letterSpacing: 2, color: '#111', marginBottom: 24 }}>
            Ethem Işıldar
          </h1>
          <div style={{ fontFamily: 'Fira Mono, monospace', fontSize: '2rem', color: '#0070f3', minHeight: 48, transition: 'opacity 0.5s', textAlign: 'center', height: 48 }}>
            Hi I&apos;m {engineerText}!
          </div>
        </div>
      </section>
      {/* Hakkımda */}
      <section ref={sectionRefs.about} id="about" style={sectionStyle('about')}>
        <main className="fade-in" style={{ maxWidth: 1400, margin: '0 auto', padding: '2.5rem 1rem', background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px #0001', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '0', minHeight: 400, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 50%', minWidth: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderTopLeftRadius: 24, borderBottomLeftRadius: 24, overflow: 'hidden' }}>
              <Image
                src="/pp.jpeg"
                alt="Ethem Işıldar Profil Fotoğrafı"
                width={700}
                height={700}
                quality={100}
                style={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: 500 }}
                priority
                unoptimized
              />
            </div>
            <div style={{ flex: '1 1 50%', minWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2.5rem 2rem' }}>
              <h1 style={{ fontSize: '2.4rem', marginBottom: '0.7rem' }}>Ethem Işıldar</h1>
              <p style={{ color: '#111', fontSize: '1.18rem', margin: '1.7rem 0 1.1rem 0' }}>
                Elektrik-Elektronik Mühendisi & Yazılım Geliştirici
              </p>
              <p style={{ fontSize: '1.08rem', marginBottom: '1.5rem', maxWidth: 500 }}>
                Merhaba! Ben Ethem Işıldar.<br />
                <br />
                Gazi Üniversitesi Elektrik-Elektronik Mühendisliği mezunuyum. Gömülü sistemler ve donanım tasarımı alanlarında projeler geliştiriyor, bu alanda kendimi sürekli olarak geliştirmeye devam ediyorum.<br />
                Bu site üzerinden portföyüme, yayınladığım makalelere ve üzerinde çalıştığım projelere ulaşabilirsiniz.
              </p>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-btn"
                style={{
                  display: 'inline-block',
                  padding: '0.7rem 1.7rem',
                  background: '#0070f3',
                  color: '#fff',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontSize: '1.15rem',
                  marginTop: '1.2rem',
                  fontWeight: 500,
                  boxShadow: '0 2px 8px #0070f322',
                  transition: 'background 0.2s, transform 0.2s',
                }}
              >
                CV Görüntüle
              </a>
            </div>
          </div>
          {/* Three images section */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '3rem',
            padding: '2rem',
            width: '100%'
          }}>
            <div style={{ 
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
            }}>
              <Image
                src="/1.jpeg"
                alt="Welcome"
                fill
                style={{ 
                  objectFit: 'cover'
                }}
                unoptimized
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                padding: '1.5rem'
              }}>
                <p style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 500, 
                  color: '#fff',
                  textAlign: 'center',
                  margin: 0
                }}>Welcome</p>
              </div>
            </div>
            <div style={{ 
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
            }}>
              <Image
                src="/2.jpeg"
                alt="to"
                fill
                style={{ 
                  objectFit: 'cover'
                }}
                unoptimized
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                padding: '1.5rem'
              }}>
                <p style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 500, 
                  color: '#fff',
                  textAlign: 'center',
                  margin: 0
                }}>to</p>
              </div>
            </div>
            <div style={{ 
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
            }}>
              <Image
                src="/3.jpeg"
                alt="My Page!!!"
                fill
                style={{ 
                  objectFit: 'cover'
                }}
                unoptimized
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                padding: '1.5rem'
              }}>
                <p style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 500, 
                  color: '#fff',
                  textAlign: 'center',
                  margin: 0
                }}>My Website!!!</p>
              </div>
            </div>
          </div>
        </main>
      </section>
      {/* Tecrübeler */}
      <section ref={sectionRefs.tecrubeler} id="tecrubeler" style={sectionStyle('tecrubeler')}>
        <div className="fade-in" style={{ maxWidth: 1400, margin: '0 auto', background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px #0001', padding: 48, display: 'flex', flexDirection: 'row', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Eğitim */}
          <div style={{ flex: '1 1 30%', minWidth: 320 }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 18, borderBottom: '2px solid #eee', paddingBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 24 }}>🎓</span> Eğitim
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 40 }}>
              <li style={{ marginBottom: 12 }}>
                <strong>Gölbaşı Anadolu Lisesi</strong> <span style={{ color: '#888', fontSize: '1rem' }}>(2017-2021)</span>
              </li>
              <li>
                <strong>Gazi Üniversitesi</strong> <span style={{ color: '#888', fontSize: '1rem' }}>(2021-2025)</span><br />
                <span style={{ display: 'block', color: '#444', fontSize: '1rem', marginLeft: 8 }}>Lisans</span>
                <span style={{ display: 'block', color: '#444', fontSize: '1rem', marginLeft: 8 }}>Elektrik Elektronik Mühendisliği</span>
              </li>
            </ul>
          </div>
          {/* İş Tecrübeleri */}
          <div style={{ flex: '1 1 30%', minWidth: 320 }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 18, borderBottom: '2px solid #eee', paddingBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 24 }}>💼</span> İş Tecrübeleri
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 40 }}>
              <li style={{ marginBottom: 18 }}>
                <strong>Ones Technology</strong> <span style={{ color: '#888', fontSize: '1rem' }}>(Temmuz 2024 - Eylül 2024)</span>
                <div style={{ color: '#666', fontSize: '1rem', marginTop: 6, minHeight: 24, marginLeft: 8 }}>Hardware Design Engineer Intern</div>
              </li>
              <li>
                <strong>Promec Engineering</strong> <span style={{ color: '#888', fontSize: '1rem' }}>(Şubat 2025 - Mayıs 2025)</span>
                <div style={{ color: '#666', fontSize: '1rem', marginTop: 6, minHeight: 24, marginLeft: 8 }}>Embedded Software Engineer Intern</div>
              </li>
            </ul>
          </div>
          {/* Gönüllülükler */}
          <div style={{ flex: '1 1 30%', minWidth: 320 }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 18, borderBottom: '2px solid #eee', paddingBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 24 }}>🤝</span> Gönüllülükler
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 40 }}>
              <li style={{ marginBottom: 18 }}>
                <strong>Cigre Gazi</strong> <span style={{ color: '#888', fontSize: '1rem' }}>(Şubat 2022 - Ekim 2022)</span>
                <div style={{ color: '#666', fontSize: '1rem', marginTop: 6, minHeight: 24, marginLeft: 8 }}>Başkan Yardımcısı</div>
              </li>
              <li style={{ marginBottom: 18 }}>
                <strong>ELİTAT - HSD Gazi</strong> <span style={{ color: '#888', fontSize: '1rem' }}>(Ekim 2022 - Şubat 2022)</span>
                <div style={{ color: '#666', fontSize: '1rem', marginTop: 6, minHeight: 24, marginLeft: 8 }}>Yönetim Kurulu Üyesi</div>
              </li>
              <li>
                <strong>Gazi Blockchain Topluluğu</strong>
                <div style={{ color: '#666', fontSize: '1rem', marginTop: 6, minHeight: 24, marginLeft: 8 }}>Kurucu Üye</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Beceriler */}
      <section ref={sectionRefs.beceriler} id="beceriler" style={sectionStyle('beceriler')}>
        <div className="fade-in" style={{ maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px #0001', padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 28 }}>🛠️</span> Beceriler
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 8, justifyContent: 'center' }}>
            {[
              { name: 'C', color: '#00599C' },
              { name: 'Matlab', color: '#e1670e' },
              { name: 'Simulink', color: '#f6a800' },
              { name: 'Altium Designer', color: '#a67c00' },
              { name: 'Proteus', color: '#3a3a3a' },
              { name: 'Microprocessors (STM32, ESP32, Arduino, PIC)', color: '#0070f3' },
            ].map(skill => (
              <div
                key={skill.name}
                style={{
                  background: skill.color + '22',
                  color: skill.color,
                  borderRadius: 12,
                  padding: '0.7rem 1.3rem',
                  fontWeight: 600,
                  fontSize: '1.08rem',
                  boxShadow: '0 2px 12px #0001',
                  transition: 'transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.09)';
                  e.currentTarget.style.boxShadow = '0 6px 24px #0070f344';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 12px #0001';
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
