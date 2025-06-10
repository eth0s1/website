'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        color: '#333'
      }}>Bir Hata Oluştu</h1>
      <h2 style={{
        fontSize: '1.5rem',
        marginBottom: '2rem',
        color: '#666'
      }}>Üzgünüz, bir şeyler yanlış gitti.</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={reset}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Tekrar Dene
        </button>
        <a
          href="/"
          style={{
            padding: '0.75rem 1.5rem',
            background: '#333',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1rem'
          }}
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
} 