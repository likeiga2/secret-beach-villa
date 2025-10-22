import { useState, useEffect } from 'react';

export default function Home() {
  const images = ['/IMG_5949.jpeg', '/IMG_5947.jpeg', '/IMG_5941.jpeg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [date, setDate] = useState('');
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 800); // フェードアウトの時間
    }, 8000); // 画像切り替えのサイクル
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
        margin: 0,
        padding: 0,
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        {/* 背景画像 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1s ease-in-out, transform 8s ease-out',
            opacity: fade ? 1 : 0,
            transform: fade ? 'scale(1.05)' : 'scale(1.1)',
            zIndex: 0,
          }}
        ></div>

        {/* テキスト */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', textShadow: '0 4px 8px rgba(0,0,0,0.6)' }}>
            Secret Beach Villa Fukutsu
          </h1>
          <p
            style={{
              fontSize: '1.3rem',
              marginBottom: '2rem',
              textShadow: '0 3px 6px rgba(0,0,0,0.5)',
            }}
          >
            和モダンの静かな宿泊施設で心休まるひとときを。
          </p>
          <button
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ffffffcc',
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

        {/* 背景オーバーレイ */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            zIndex: 0,
          }}
        ></div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: '4rem 1rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#333',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>施設紹介</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          海辺の古民家をリノベーションした宿で、木の温もりとモダンデザインを融合させた隠れ宿のような空間です。
          広々としたリビングやテラスから望む海辺の夕日をぜひお楽しみください。
        </p>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        style={{
          padding: '4rem 1rem',
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
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
          padding: '4rem 1rem',
          textAlign: 'center',
          color: '#333',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>お問い合わせ</h2>
        <p>ご質問がある方はお気軽にご連絡ください。</p>
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
    </div>
  );
}
