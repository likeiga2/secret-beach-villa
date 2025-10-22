import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState('');
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1f2937', color: '#fff', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Secret Beach Villa Fukutsu</h1>
        <p style={{ fontSize: '1.2rem' }}>和モダンの静かな宿泊施設で心休まるひとときを。</p>
      </section>
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>施設紹介</h2>
        <p style={{ lineHeight: '1.6' }}>
          福津の海辺に佇むシークレットビーチヴィラは、伝統的な和の雰囲気とモダンな快適さを兼ね備えています。広々としたリビングやオーシャンビューのテラスで特別なひとときをお過ごしください。
        </p>
      </section>
      <section id="booking" style={{ backgroundColor: '#f5f5f5', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>ご予約</h2>
        <label>
          宿泊日を選択してください：
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ marginLeft: '10px', padding: '8px' }} />
        </label>
        {date && (
          <div style={{ marginTop: '20px' }}>
            <button style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              予約リクエスト
            </button>
          </div>
        )}
      </section>
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>お問い合わせ</h2>
        <p>ご質問がありましたらお気軽にお問い合わせください。</p>
      </section>
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '20px', textAlign: 'center' }}>
        © 2025 Secret Beach Villa Fukutsu. All rights reserved.
      </footer>
    </div>
  );
}
