import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // 🧭 スクロール制御
  useEffect(() => {
    const hero = heroRef.current;
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = hero;
      // Hero内のスクロールが最下部に到達したら、次はページ全体にスクロールを移す
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        window.scrollTo({
          top: hero.offsetTop + hero.offsetHeight,
          behavior: "smooth",
        });
      }
    };
    if (hero) hero.addEventListener("scroll", handleScroll);
    return () => hero?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <style jsx global>{`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Noto+Serif+JP:wght@400;500&display=swap");

  html, body, #__next {
    margin: 0;
    padding: 0;
    background-image: url("/washi_gold.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

 /* --- HERO --- */
.hero-wrapper {
  margin: 1.5rem auto;
  width: calc(100% - 3rem);
  height: calc(100vh - 3rem);
  border-radius: 18px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}

/* fixed hero background */
.hero-bg {
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  width: calc(100% - 3rem);
  height: calc(100vh - 3rem);
  border-radius: 18px;
  overflow: hidden;
  z-index: 0;
}
.hero-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: var(--hero-image);
  transform: scale(1.03);
  transition: transform 10s ease-out;
}
.hero-bg.active::before {
  transform: scale(1);
}

/* overlay for text contrast */
.hero-overlay {
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  width: calc(100% - 3rem);
  height: calc(100vh - 3rem);
  border-radius: 18px;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.35) 0%,
    rgba(0,0,0,0.1) 60%,
    rgba(0,0,0,0.4) 100%
  );
  z-index: 1;
}

/* --- NAV MENU --- */
.nav-menu {
  position: fixed;
  top: 2.4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 3rem;
  color: #f6f4ed;
  font-family: "Cormorant Garamond", serif;
  font-size: 1rem;
  letter-spacing: 0.08em;
  z-index: 5;
}
.nav-item {
  text-align: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.nav-item:hover { opacity: 0.75; }
.nav-item span {
  display: block;
  font-family: "Noto Serif JP", serif;
  font-size: 0.8rem;
  color: #d6c68a; /* warm gold tone */
  letter-spacing: 0.04em;
}

/* --- Hamburger --- */
.hamburger {
  position: fixed;
  top: 2.2rem;
  right: 2.4rem;
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 6;
}
.hamburger span {
  display: block;
  height: 2px;
  background: #f6f4ed;
  border-radius: 2px;
  transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
}
.hamburger:hover span:nth-child(1){transform:translateY(-3px);}
.hamburger:hover span:nth-child(3){transform:translateY(3px);}
.hamburger.open span:nth-child(1){transform:rotate(45deg) translateY(9px);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:rotate(-45deg) translateY(-9px);}

/* --- Slide Menu (matching nav style) --- */
.slide-menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  max-width: 420px;
  background-image: url("/washi_gold.jpg");
  background-size: cover;
  background-position: center;
  transform: translateX(100%);
  opacity: 0;
  transition: transform .6s cubic-bezier(.4,0,.2,1),opacity .4s ease;
  z-index: 20;
  padding: 4rem 2rem;
}
.slide-menu.open {transform:translateX(0);opacity:1;}

.slide-menu a {
  display:block;
  margin:2rem 0;
  font-family:"Cormorant Garamond",serif;
  font-size:1.6rem;
  color:#2b2b2b;
  text-decoration:none;
  opacity:0;
  transform:translateX(40px);
  transition:all .5s ease;
  text-shadow:0 1px 2px rgba(255,255,255,.5);
}
.slide-menu.open a{opacity:1;transform:translateX(0);}
.slide-menu a span {
  display:block;
  font-family:"Noto Serif JP",serif;
  font-size:.85rem;
  color:#6a5d37;
}

/* --- Close Button --- */
.slide-close{
  position:absolute;
  top:24px; right:24px;
  width:32px; height:32px;
  cursor:pointer; z-index:25;
  display:flex; align-items:center; justify-content:center;
  transition:transform .3s ease,opacity .3s ease;
}
.slide-close::before,.slide-close::after{
  content:"";
  position:absolute;
  width:20px;height:2px;
  background-color:#2b2b2b;
  border-radius:2px;
  transition:background-color .3s ease;
}
.slide-close::before{transform:rotate(45deg);}
.slide-close::after{transform:rotate(-45deg);}
.slide-close:hover{transform:scale(1.1);}
.slide-close:hover::before,.slide-close:hover::after{
  background-color:#6a5d37;
}

/* --- Scroll Indicator --- */
.scroll-indicator{
  position:fixed;
  bottom:60px;
  left:50%;
  transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;gap:8px;z-index:3;
}
.scroll-text{
  font-family:"Cormorant Garamond",serif;
  font-size:1rem;color:#f4e7b7;letter-spacing:0.1em;
}
.scroll-icon{
  width:26px;height:26px;stroke:#f4e7b7;stroke-width:1.5;fill:none;
  animation:arrowFloat 2s ease-in-out infinite;
}
@keyframes arrowFloat{
  0%,100%{transform:translateY(0);opacity:0.6;}
  50%{transform:translateY(8px);opacity:1;}
}

/* --- Hero content (scrollable layer) --- */
.hero-content{
  position:relative;
  z-index:2;
  color:#fff;
  text-align:center;
  font-family:"Noto Serif JP",serif;
  padding-top:40vh;
  min-height:200vh;
}
.title{
  font-family:"Cormorant Garamond",serif;
  font-size:3.4rem;
  margin-bottom:1rem;
  letter-spacing:0.08em;
  color:#f7f4ef;
}
.subtitle{
  font-size:1.15rem;
  max-width:640px;
  margin:0 auto;
  opacity:0.95;
  line-height:1.9;
  color:#f4f2eb


  .dummy-section {
    background: rgba(0, 0, 0, 0.3);
    color: #f7f4ef;
    text-align: center;
    padding: 8rem 1.5rem;
    font-family: "Noto Serif JP", serif;
  }
`}</style>


      <div className="hero-wrapper" ref={heroRef}>
  <div
  className={`hero-bg ${currentIndex === 0 ? "active" : ""}`}
  style={{ "--hero-image": `url(${images[currentIndex]})` }}
></div>
<div className="hero-overlay" />
        {images.map((src, i) => (
          <div
            key={i}
            className={`hero-image ${currentIndex === i ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        {/* --- 上部メニュー --- */}
        <nav className="nav-menu">
          <Link href="/about">
            <div className="nav-item">
              About<span>宿について</span>
            </div>
          </Link>
          <Link href="/stay">
            <div className="nav-item">
              Stay<span>ご宿泊</span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="nav-item">
              Contact<span>お問い合わせ</span>
            </div>
          </Link>
        </nav>

        {/* --- ハンバーガー --- */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* --- スライドメニュー --- */}
        <div
          className={`menu-overlay ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        />
        <div className={`slide-menu ${menuOpen ? "open" : ""}`}>
            <div className="slide-close" onClick={() => setMenuOpen(false)} />
          <Link href="/about">
            About<span>宿について</span>
          </Link>
          <Link href="/stay">
            Stay<span>ご宿泊</span>
          </Link>
          <Link href="/contact">
            Contact<span>お問い合わせ</span>
          </Link>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="title">宿 -SHUKU-</h1>
            <p className="subtitle">
              心とからだをほどく。忍冬香る古蔵にて。
              <br />
              静けさの中に佇む時間をお愉しみください。
            </p>
          </div>

          <div className="scroll-indicator">
            <p className="scroll-text">scroll</p>
            <svg viewBox="0 0 24 24" className="scroll-icon">
              <path d="M4 9l8 8 8-8" />
            </svg>
          </div>

          <div className="dummy-section">
            <h2>宿について</h2>
            <p>
              下にスクロールすると説明文が出てきます。
              <br />
              Hero内最下部に達すると全ページがスクロール開始します。
            </p>
          </div>
        </div>
        </div> {/* closes hero-container */}

        {/* --- Scroll confirmation section --- */}
        <div
          style={{
            height: "150vh",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Noto Serif JP, serif",
            color: "#222",
          }}
        >
          <h2>Page scroll confirmed ✅</h2>
        
      </div> {/* closes hero-wrapper */}
    </>
  );
}
