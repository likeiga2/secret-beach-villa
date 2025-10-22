import Link from 'next/link';

export default function Header() {
  return (
    <header style={{position:'fixed', top:0, width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 2rem', zIndex:1000, background:'rgba(0,0,0,0.5)', color:'#fff'}}>
      <h1 style={{fontSize:'1.2rem', margin:0}}>Secret Beach Villa Fukutsu</h1>
      <nav style={{display:'flex', gap:'1.5rem'}}>
        <Link href="/about">施設紹介</Link>
        <Link href="/stay">ご宿泊</Link>
        <Link href="/contact">お問い合わせ</Link>
      </nav>
    </header>
  );
}
