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
    overflow: hidden;
    position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  }

  .hero-image {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transform: scale(1.05);
    transition: opacity 1.5s ease-in-out, transform 12s ease-out;
  }
  .hero-image.active {
    opacity: 1;
    transform: scale(1);
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%);
    z-index: 1;
  }

  /* --- NAV MENU --- */
  .nav-menu {
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 3rem;
    color: #f7f4ef;
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
  .nav-item:hover {
    opacity: 0.8;
  }
  .nav-item span {
    display: block;
    font-family: "Noto Serif JP", serif;
    font-size: 0.8rem;
    color: #f4e7b7;
    letter-spacing: 0.04em;
  }

  /* --- Hamburger --- */
  .hamburger {
    position: absolute;
    top: 26px;
    right: 28px;
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
    background: #f7f4ef;
    border-radius: 2px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .hamburger:hover span:nth-child(1) { transform: translateY(-3px); }
  .hamburger:hover span:nth-child(3) { transform: translateY(3px); }
  .hamburger.open span:nth-child(1) { transform: rotate(45deg) translateY(9px); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translateY(-9px); }

  /* --- Slide Menu --- */
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
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
    z-index: 20;
    padding: 4rem 2rem;
  }
  .slide-menu.open {
    transform: translateX(0);
    opacity: 1;
  }
  .slide-menu a {
    display: block;
    margin: 2rem 0;
    font-family: "Cormorant Garamond", serif;
    font-size: 1.6rem;
    color: #2b2b2b;
    text-decoration: none;
    opacity: 0;
    transform: translateX(40px);
    transition: all 0.5s ease;
    text-shadow: 0 1px 2px rgba(255,255,255,0.5);
  }
  .slide-menu.open a { opacity: 1; transform: translateX(0); }
  .slide-menu a span {
    display: block;
    font-family: "Noto Serif JP", serif;
    font-size: 0.85rem;
    color: #6a5d37;
  }

  /* --- Scroll Indicator --- */
  .scroll-indicator {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    z-index: 3;
  }
  .scroll-text {
    font-family: "Cormorant Garamond", serif;
    font-size: 1rem;
    color: #f4e7b7;
    letter-spacing: 0.1em;
  }
  .scroll-icon {
    width: 26px;
    height: 26px;
    stroke: #f4e7b7;
    stroke-width: 1.5;
    fill: none;
    animation: arrowFloat 2s ease-in-out infinite;
  }

  @keyframes arrowFloat {
    0%, 100% { transform: translateY(0); opacity: 0.6; }
    50% { transform: translateY(8px); opacity: 1; }
  }

  /* --- Text content --- */
  .hero-content {
    position: relative;
    min-height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    font-family: "Noto Serif JP", serif;
    z-index: 2;
  }
  .title {
    font-family: "Cormorant Garamond", serif;
    font-size: 3.4rem;
    margin-top: 45vh;
    margin-bottom: 1rem;
    letter-spacing: 0.08em;
    color: #f7f4ef;
  }
  .subtitle {
    font-size: 1.15rem;
    max-width: 640px;
    margin: 0 auto;
    opacity: 0.95;
    line-height: 1.9;
    color: #f4f2eb;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }

  .dummy-section {
    background: rgba(0, 0, 0, 0.3);
    color: #f7f4ef;
    text-align: center;
    padding: 8rem 1.5rem;
    font-family: "Noto Serif JP", serif;
  }
`}</style>


      <div className="hero-wrapper" ref={heroRef}>
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
