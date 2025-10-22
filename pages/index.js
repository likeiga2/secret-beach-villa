import { useState, useEffect } from 'react';

export default function Home() {
  const images = ['/IMG_5949.jpeg', '/IMG_5947.jpeg', '/IMG_5941.jpeg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Hero card container with margin and rounded corners */}
      <section
        style={{
          margin: '1cm',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          position: 'relative',
          minHeight: '70vh',
        }}
      >
        {/* Hero image layer with zoom-out animation */}
        <div
          className="hero-image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          }}
        ></div>
        {/* Hero content overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#fff',
            textAlign: 'center',
            padding: '0 1rem',
          }}
        >
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
              document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })
            }
          >
            ご予約へ
          </button>
        </div>
      </section>
      {/* About section */}
      <section id="about" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>施設紹介</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          海辺の古民家をリノベーションしたSecret Beach Villa Fukutsuは、木の温もりとモダンデザインが融合した隠れ家のような空間です。広々としたリビング、テラスからの夕陽、自然と調和した静かな時間をお楽しみください。
        </p>
      </section>
      {/* Booking section */}
      <section id="booking" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>ご予約</h2>
        <p style={{ marginBottom: '1rem' }}>宿泊日を選択してください。</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
        />
        {date && (
          <div style={{ marginTop: '1rem' }}>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0070f3',
                color: '#fff',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              予約リクエスト
            </button>
          </div>
        )}
      </section>
      {/* Contact section */}
      <section id="contact" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>お問い合わせ</h2>
        <p>ご不明な点がございましたらお気軽にお問い合わせください。</p>
      </section>
      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#666' }}>
        © {new Date().getFullYear()} Secret Beach Villa Fukutsu. All rights reserved.
      </footer>
      <style jsx>{`
        .hero-image {
          animation: zoomOut 8s linear infinite;
        }
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
