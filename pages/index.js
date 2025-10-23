import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  // Auto image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Scroll handoff logic
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      if (hero.scrollTop + hero.clientHeight >= hero.scrollHeight - 10) {
        window.scrollTo({
          top: hero.offsetTop + hero.offsetHeight,
          behavior: "smooth",
        });
      }
    };

    hero.addEventListener("scroll", handleScroll);
    return () => hero.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Noto+Serif+JP:wght@400;500&display=swap");

        html,
        body,
        #__next {
          margin: 0;
          padding: 0;
          background: url("/washi_gold.jpg") center/cover fixed;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        /* HERO CONTAINER */
        .hero-wrapper {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        /* STACK MULTIPLE BACKGROUND IMAGES */
        .hero-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: 0;
        }

        .hero-bg img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.1);
          transition: opacity 1.5s ease-in-out, transform 6s ease-out;
        }

        .hero-bg img.active {
          opacity: 1;
          transform: scale(1);
          z-index: 1;
        }

        /* OVERLAY */
        .hero-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.35) 0%,
            rgba(0, 0, 0, 0.15) 50%,
            rgba(0, 0, 0, 0.45) 100%
          );
          z-index: 2;
        }

        /* NAV MENU */
        .nav-menu {
          position: fixed;
          top: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 3rem;
          z-index: 10;
        }

        .nav-item {
          text-align: center;
          cursor: pointer;
          color: #f6f4ed;
          font-family: "Cormorant Garamond", serif;
          font-size: 1.1rem;
          letter-spacing: 0.07em;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
          transition: opacity 0.3s ease;
        }

        .nav-item:hover {
          opacity: 0.75;
        }

        .nav-item span {
          display: block;
          margin-top: 0.2rem;
          font-family: "Noto Serif JP", serif;
          font-size: 0.8rem;
          color: #d6c68a;
        }

        .nav-menu a {
          text-decoration: none !important;
          border: none !important;
        }

        /* HAMBURGER */
        .hamburger {
          position: fixed;
          top: 2.4rem;
          right: 2.4rem;
          width: 30px;
          height: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          z-index: 11;
        }

        .hamburger span {
          height: 2px;
          background: #f6f4ed;
          border-radius: 2px;
          transition: all 0.4s ease;
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

        /* SLIDE MENU */
        .slide-menu {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 60%;
          max-width: 400px;
          background: url("/washi_gold.jpg") center/cover;
          transform: translateX(100%);
          opacity: 0;
          transition: all 0.6s ease;
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
        }

        .slide-menu a span {
          display: block;
          font-family: "Noto Serif JP", serif;
          font-size: 0.85rem;
          color: #6a5d37;
        }

        .slide-close {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 32px;
          height: 32px;
          cursor: pointer;
        }

        .slide-close::before,
        .slide-close::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 2px;
          background-color: #2b2b2b;
        }

        .slide-close::before {
          transform: rotate(45deg);
        }

        .slide-close::after {
          transform: rotate(-45deg);
        }

        /* HERO CONTENT */
        .hero-container {
          position: relative;
          z-index: 3;
          height: 100vh;
          overflow-y: auto;
          scroll-behavior: smooth;
        }

        .hero-container::-webkit-scrollbar {
          display: none;
        }

        .hero-content {
          text-align: center;
          color: #fff;
          font-family: "Noto Serif JP", serif;
          padding-top: 40vh;
          min-height: 200vh;
        }

        .title {
          font-family: "Cormorant Garamond", serif;
          font-size: 3.4rem;
          margin-bottom: 1rem;
          color: #f7f4ef;
        }

        .subtitle {
          font-size: 1.1rem;
          max-width: 640px;
          margin: 0 auto;
          color: #f4f2eb;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          line-height: 1.8;
        }

        .dummy-section {
          background: rgba(0, 0, 0, 0.3);
          color: #f7f4ef;
          text-align: center;
          padding: 8rem 1.5rem;
        }
      `}</style>

      <div className="hero-wrapper">
        <div className="hero-bg">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={i === currentIndex ? "active" : ""}
            />
          ))}
        </div>

        <div className="hero-overlay" />

        {/* Top Menu */}
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

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Slide Menu */}
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

        {/* Scrollable Text Content */}
        <div className="hero-container" ref={heroRef}>
          <div className="hero-content">
            <h1 className="title">宿 -SHUKU-</h1>
            <p className="subtitle">
              心とからだをほどく。忍冬香る古蔵にて。
              <br />
              静けさの中に佇む時間をお愉しみください。
            </p>
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

      {/* Page content BELOW hero */}
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
      </div>
    </>
  );
}
