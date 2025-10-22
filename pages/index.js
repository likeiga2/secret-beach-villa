import { useState, useEffect } from 'react';

export default function Home() {
  const images = ['/IMG_5949.jpeg', '/IMG_5947.jpeg', '/IMG_5941.jpeg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <section
        className="hero"
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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

      <section id="about" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>施設紹介</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          海辺の古民家をリノベーションしたヴィラ。木の温もりとモダンなデザインが融合した隠れ家で、広々としたリビングやテラスからの夕日を楽しめます。
        </p>
      </section>

      <section id="booking" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>ご予約</h2>
        <p style={{ marginBottom: '1rem' }}>宿泊日を選択してください</p>
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
                backgroundColor: '#34d399',
                color: '#fff',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ご予約をリクエストする
            </button>
          </div>
        )}
      </section>

      <section id="contact" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>お問い合わせ</h2>
        <p>ご不明な点やご質問がございましたら、お気軽にお問い合わせください。</p>
      </section>

      <footer
        style={{
          padding: '1rem',
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
          color: '#333',
        }}
      >
        &copy; {new Date().getFullYear()} Secret Beach Villa Fukutsu
      </footer>

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
