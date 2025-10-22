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
        backgroundImage: "url('/washi_gold.jpg')", // ← 和紙画像をアップしたら差し替え
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
      }}
    >
      {/* ヒーローカード */}
      <section
        className="hero"
        style={{
          maxWidth: '90%',
          margin: '2rem auto',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '0 1rem',
        }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Secret Beach Villa Fukutsu</h1>
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
      </section>

      {/* この下は従来の about / booking / contact セクション */}
      {/* 省略（前回コミットのコードと同じ） */}

      <style jsx>{`
        .hero {
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
