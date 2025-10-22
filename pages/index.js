import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState('');

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Secret Beach Villa Fukutsu</h1>
        <p style={{ fontSize: '1.2rem' }}>和モダンの静かな宿泊施設で心休まるひとときを。</p>
      </section>
    </div>
  );
}
