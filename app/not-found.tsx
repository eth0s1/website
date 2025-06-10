export default function NotFound() {
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
      }}>404</h1>
      <h2 style={{
        fontSize: '1.5rem',
        marginBottom: '2rem',
        color: '#666'
      }}>Sayfa Bulunamadı</h2>
      <a
        href="/"
        style={{
          padding: '0.75rem 1.5rem',
          background: '#0070f3',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '1rem'
        }}
      >
        Ana Sayfaya Dön
      </a>
    </div>
  );
} 