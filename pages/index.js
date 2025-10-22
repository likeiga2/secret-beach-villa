import { useState, useEffect } from 'react';

export default function Home() {
  const images = ['/IMG_5949.jpeg', '/IMG_5947.jpeg', '/IMG_5941.jpeg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        backgroundImage: "url('/washi_gold.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          maxWidth: '90%',
          margin: '1cm auto',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '0 1rem',
        }}
      >
        {/* 背景画像 (フェード付き) */}
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === currentIndex ? 1 : i === prevIndex ? 0 : 0,
              transition: 'opacity 2s ease-in-out',
              animation: i === currentIndex ? 'zoomOut 8s ease-in-out infinite' : 'none',
              zIndex: i === currentIndex ? 1 : 0,
            }}
          ></div>
        ))}

        {/* Hero Text */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            Secret Beach Villa Fukutsu
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              textShadow: '0 3px 6px rgba(0,0,0,0.5)',
            }}
          >
            和モダンの静かな宿泊施設で心休まるひとときを。
          </p>
          <button
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ffffffaa',
              color: '#000',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() =>
              document
                .getElementById('booking')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            ご予約へ
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: '3rem 1rem',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#333',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>施設紹介</h2>
        <p style={{ fontSize: '1rem' }}>
          海辺の古民家をリノベーションした宿で、木の温もりとモダンデザインを融合させた隠れ宿のような空間です。
        </p>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        style={{
          padding: '3rem 1rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>ご予約</h2>
        <p style={{ marginBottom: '1rem' }}>宿泊日を選択してください。</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '0.25rem',
            border: '1px solid #ccc',
          }}
        />
        {date && (
          <div style={{ marginTop: '1rem' }}>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
              }}
            >
              予約リクエスト
            </button>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: '3rem 1rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>お問い合わせ</h2>
        <p style={{ marginBottom: '1rem' }}>
          ご質問がある方はお気軽にご連絡ください。
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '1rem 0',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: '#fff',
        }}
      >
        © {new Date().getFullYear()} Secret Beach Villa Fukutsu
      </footer>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes zoomOut {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
