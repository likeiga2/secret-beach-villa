import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState('');

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <section style={{ position: 'relative', minHeight: '100vh', backgroundImage: "url('/bg_test.jpg')", backgroundSize: 'cover', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Secret Beach Villa Fukutsu</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textShadow: '0 1px 3px rgba(0,0,0,.5)' }}>和モダンの静かな宿泊施設で心休まるひとときを。</p>
        <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#ffffffaa', color: '#000', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }} onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}>予約する</button>
      </section>
      <section id="about" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>施設紹介</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>海辺の古民家をリノベーションしたヴィラ。木の温もりとモダンなデザインが融合した隠れ家で、広々としたリビングやテラスからの夕日を楽しめます。</p>
      </section>
      <section id="booking" style={{ padding: '4rem 1rem', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>ご予約</h2>
        <p style={{ marginBottom: '1rem' }}>宿泊日を選択してください。</p>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }} />
        {date && (
          <div style={{ marginTop: '1rem' }}>
            <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#00b894', color: '#fff', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>
              予約リクエスト
            </button>
          </div>
        )}
      </section>
      <section id="contact" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>お問い合わせ</h2>
        <p>ご質問がありましたらお気軽にお問い合わせください。</p>
      </section>
      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#222', color: '#fff' }}>
        © {new Date().getFullYear()} Secret Beach Villa Fukutsu
      </footer>
    </div>
  );
}
