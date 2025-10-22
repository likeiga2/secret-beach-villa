import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const [fadeSections, setFadeSections] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = document.querySelectorAll(".fade-section");
      sectionEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight * 0.8) {
          setFadeSections((prev) => [...new Set([...prev, i])]);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Noto+Serif+JP:wght@400;600&family=Playfair+Display:wght@500&display=swap');

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

        a { text-decoration: none; color: inherit; }

        /* ===== Hero Section ===== */
        .hero-wrapper {
          margin: 24px auto;
          max-width: calc(100% - 48px);
          height: calc(100vh - 48px);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        .hero-scroll {
          height: 160vh;
          overflow-y: scroll;
          scrollbar-width: none;
        }
        .hero-scroll::-webkit-scrollbar { display: none; }

        .hero-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 1.5s ease-in-out, transform 6s ease-in-out;
        }
        .hero-image.active {
          opacity: 1;
          transform: scale(1);
          animation: zoomOutHero 9s ease-in-out forwards;
        }
        .hero-image.inactive {
          opacity: 0;
          transform: scale(1.15);
        }

        @keyframes zoomOutHero {
          0% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        /* ===== Hero Content ===== */
        .hero-content {
          position: relative;
          padding-top: 60vh;
          color: #fff;
          text-align: center;
          font-family: 'Noto Serif JP', serif;
        }
        .fade-text {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1.2s ease forwards;
          animation-delay: 0.4s;
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ===== Navigation ===== */
        .hero-nav {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 3rem;
          z-index: 10;
          color: #fff;
          text-align: center;
          font-family: 'Playfair Display', 'Noto Serif JP', serif;
          letter-spacing: 0.1em;
        }
        .hero-nav .nav-item:hover { color: #e6dcc6; }
        .hero-nav .jp { display: block; font-size: 0.8rem; margin-top: 2px; }

        /* ===== Hamburger ===== */
        .menu-icon {
          position: absolute;
          top: 20px;
          right: 28px;
          width: 32px;
          height: 22px;
          z-index: 15;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease;
        }
        .menu-icon:hover { transform: scale(1.05); }
        .bar {
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .menu-icon:hover .bar:nth-child(2) { width: 80%; }
        .menu-icon:hover .bar:nth-child(3) { width: 60%; }

        /* ===== Scroll Indicator ===== */
        .scroll-indicator {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #fff;
          z-index: 15;
          animation: fadeIn 2s ease forwards;
        }
        .scroll-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          text-transform: lowercase;
          opacity: 0.9;
        }
        .scroll-icon {
          width: 22px;
          height: 22px;
          stroke: #fff;
          stroke-width: 1.5;
          fill: none;
          animation: arrowFloat 1.8s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes arrowFloat {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(6px); opacity: 1; }
        }

        /* ===== Fade Section ===== */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="hero-wrapper">
        <div ref={heroRef} className="hero-scroll">
          {images.map((src, i) => (
            <div
              key={i}
              className={`hero-image ${currentIndex === i ? "active" : "inactive"}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}

          {/* 上部メニュー */}
          <nav className="hero-nav">
            <Link href="/about"><div className="nav-item">ABOUT<span className="jp">宿について</span></div></Link>
            <Link href="/stay"><div className="nav-item">STAY<span className="jp">ご宿泊</span></div></Link>
            <Link href="/contact"><div className="nav-item">CONTACT<span className="jp">お問い合わせ</span></div></Link>
          </nav>

          {/* ハンバーガー */}
          <div className="menu-icon" onClick={() => setMenuOpen(true)}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>

          {/* Hero text */}
          <div className="hero-content">
            <h1 className="fade-text" style={{ fontSize: "3rem", marginBottom: "1rem" }}>宿 -SHUKU-</h1>
            <p className="fade-text" style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
              心とからだをほどく。忍冬香る古蔵にて。
              <br />静けさの中に佇む時間をお愉しみください。
            </p>
          </div>

          {/* scroll */}
          <div className="scroll-indicator">
            <p className="scroll-text">scroll</p>
            <svg viewBox="0 0 24 24" className="scroll-icon">
              <path d="M4 9l8 8 8-8" />
            </svg>
          </div>
        </div>
      </div>

      {/* 下層セクション */}
      {[
        { title: "宿について", text: "築100年の古蔵を改装した静謐な宿。金和紙の灯りが包み込みます。" },
        { title: "ご宿泊", text: "一日一組限定。全室から海と松林を望め、自然と調和した滞在を。" },
        { title: "お問い合わせ", text: "ご予約・ご相談はお気軽にご連絡ください。" },
      ].map((s, i) => (
        <section
          key={i}
          className="fade-section"
          style={{
            opacity: fadeSections.includes(i) ? 1 : 0,
            animation: fadeSections.includes(i) ? "fadeUp 1.2s ease forwards" : "none",
            padding: "6rem 1rem",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.title}</h2>
          <p>{s.text}</p>
        </section>
      ))}

      <footer style={{ textAlign: "center", padding: "1rem", backgroundColor: "#000", color: "#fff" }}>
        © {new Date().getFullYear()} Secret Beach Villa Fukutsu
      </footer>
    </>
  );
}
