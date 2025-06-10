"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types/blog";

interface PostCardProps {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      style={{
        background: '#fff',
        borderRadius: 22,
        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s, transform 0.2s',
        minHeight: 260,
        maxWidth: 1100,
        margin: '0 auto',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.045)';
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.25)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
      }}
    >
      <div style={{ width: 400, height: 260, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={260}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem 1.7rem 2.2rem 1.7rem', rowGap: 18, overflowY: 'auto', maxHeight: 260 }}>
        <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <h2 style={{ fontSize: '1.38rem', marginBottom: 14, fontWeight: 600, letterSpacing: 0.2, lineHeight: 1.3 }}>{post.title}</h2>
          <p style={{ color: '#444', fontSize: '1.05rem', marginBottom: 20, lineHeight: 1.7, letterSpacing: 0.01 }}>{post.description}</p>
          <div style={{ color: '#888', fontSize: '1.08rem', marginTop: 'auto', letterSpacing: 0.01, lineHeight: 1.5 }}>
            {post.date}
            {post.hazirlayanlar && (
              <>
                <span style={{ margin: '0 6px' }}>•</span>
                <span>{post.hazirlayanlar}</span>
              </>
            )}
          </div>
          <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: '#666', textAlign: 'center' }}>Detaylar için tıklayınız &gt;&gt;</p>
        </Link>
      </div>
    </div>
  );
} 