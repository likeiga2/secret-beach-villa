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
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Noto+Serif+JP:wght@400;600&family=Playfair+Display:wght@500&display=swap");

        html,
        body,
        #__next {
          margin: 0;
          padding: 0;
          background-image: url("/washi_gold.jpg");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        .hero-wrapper {
          margin: 1.5rem auto;
          width: calc(100% - 3rem);
          height: calc(100vh - 3rem);
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .hero-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.15);
          transition: opacity 1.5s ease, transform 8s ease;
        }
        .hero-image.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          scrollbar-width: none;
        }
        .hero-container::-webkit-scrollbar {
          display: none;
        }

        /* --- NAV MENU --- */
        .nav-menu {
          position: absolute;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 3rem;
          color: #fff;
          font-family: "Playfair Display", serif;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          z-index: 5;
        }
        .nav-item {
          text-align: center;
          cursor: pointer;
        }
        .nav-item span {
          display: block;
          font-family: "Noto Serif JP", serif;
          font-size: 0.75rem;
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
          transition: transform 0.3s ease;
        }
        .hamburger span {
          display: block;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hamburger:hover span:nth-child(1) {
          transform: translateY(-3px);
        }
        .hamburger:hover span:nth-child(3) {
          transform: translateY(3px);
        }
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translateY(9px);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translateY(-9px);
        }

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
          margin: 1.8rem 0;
          font-family: "Playfair Display", serif;
          font-size: 1.4rem;
          color: #222;
          text-decoration: none;
          opacity: 0;
          transform: translateX(40px);
          transition: all 0.5s ease;
        }
        .slide-menu.open a {
          opacity: 1;
          transform: translateX(0);
        }
        .slide-menu a:nth-child(1) {
          transition-delay: 0.1s;
        }
        .slide-menu a:nth-child(2) {
          transition-delay: 0.2s;
        }
        .slide-menu a:nth-child(3) {
          transition-delay: 0.3s;
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(4px);
          background: rgba(0, 0, 0, 0.4);
          z-index: 10;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* --- Scroll indicator --- */
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
          font-family: "Playfair Display", serif;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
        }
        .scroll-icon {
          width: 28px;
          height: 28px;
          stroke: #fff;
          stroke-width: 1.5;
          fill: none;
          animation: arrowFloat 2s ease-in-out infinite;
        }

        @keyframes arrowFloat {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(8px);
            opacity: 1;
          }
        }

        /* --- Content --- */
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
          font-size: 3rem;
          margin-top: 45vh;
          margin-bottom: 1rem;
        }
        .subtitle {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
          line-height: 1.8;
        }

        .dummy-section {
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
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
      </div>
    </>
  );
}
