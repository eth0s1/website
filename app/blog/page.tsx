import React from "react";
import Navbar from "@/src/components/Navbar";
import PostCard from "./PostCard";
import { blogPosts } from "../../content/blog";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1440, margin: '0 auto', padding: '2.5rem 1rem' }}>
        <h1 style={{
          fontSize: '2.7rem',
          marginBottom: 18,
          fontWeight: 800,
          color: '#111',
          letterSpacing: 0.5,
          fontFamily: 'Playfair Display, serif',
          textShadow: '0 2px 12px #0070f322',
          textAlign: 'center',
          lineHeight: 1.1,
        }}>
          Blog
        </h1>
        <div style={{
          width: '100%',
          height: 4,
          background: '#000',
          borderRadius: 2,
          marginBottom: 24,
          maxWidth: 180,
          margin: '0 auto 24px auto',
        }} />
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: '#444',
          maxWidth: 800,
          margin: '0 auto 38px auto',
          lineHeight: 1.6,
        }}>
          Okulda ve hobi olarak üzerinde çalıştığım projeleri ve çeşitli konular hakkındaki yazılarımı burada bulabilirsiniz.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
          width: '100%',
          minHeight: 400,
        }}>
          {blogPosts.map((post, idx) => (
            <PostCard key={post.slug} post={post} index={idx} />
          ))}
        </div>
      </main>
    </>
  );
} 