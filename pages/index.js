import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const [fadeSections, setFadeSections] = useState([]);

  // 背景画像の切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Hero内スクロール監視 → 下部でページスクロール開始
  useEffect(() => {
    const heroEl = heroRef.current;
    const handleHeroScroll = (e) => {
      const el = e.target;
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 5) {
        window.scrollTo({ top: window.scrollY + 2, behavior: "smooth" });
      }
    };
    heroEl.addEventListener("scroll", handleHeroScroll);
    return () => heroEl.removeEventListener("scroll", handleHeroScroll);
  }, []);

  // 下層セクションのフェードイン
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

        a {
          text-decoration: none !important;
          color: inherit !important;
        }

        /* ===============================
           Hero内部スクロール＋ズーム切替
           =============================== */
        .hero-section {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          margin: 0 auto;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
          background-color: transparent;
          perspective: 1000px;
          height: 100vh;
        }

        .hero-scroll-container {
          position: relative;
          height: 160vh;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scrollbar-width: none;
        }
        .hero-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 1.2s ease-in-out, transform 6s ease-in-out;
          will-change: transform, opacity;
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

        .hero-text {
          position: sticky;
          top: 40%;
          text-align: center;
          color: #fff;
          z-index: 3;
          text-shadow: 0 3px 10px rgba(0,0,0,0.6);
          font-family: 'Playfair Display', 'Noto Serif JP', serif;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          font-size: 1.4rem;
          animation: bounce 1.6s infinite;
          opacity: 0.9;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translate(-50%, 0);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, 6px);
            opacity: 1;
          }
        }

        /* ===============================
           高級スライドメニュー
           =============================== */
        @keyframes slideLuxury {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeUpMenu {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* ===============================
           下層フェードイン
           =============================== */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ================= Hero Section ================= */}
      <section className="hero-section">
        <div ref={heroRef} className="hero-scroll-container">
          {images.map((src, index) => (
            <div
              key={index}
              className={`hero-image ${
                currentIndex === index ? "active" : "inactive"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}

          {/* 中央キャッチコピー */}
          <div className="hero-text">
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              宿 -SHUKU-
            </h1>
            <p style={{ fontSize: "1.2rem" }}>
              心とからだをほどく。忍冬香る古蔵にて
            </p>
          </div>

          {/* ナビゲーション */}
          <nav
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              display: "flex",
              gap: "3rem",
              alignItems: "center",
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.1em",
            }}
          >
            <Link href="/about">ABOUT</Link>
            <Link href="/stay">STAY</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>

          {/* ハンバーガーメニュー */}
          <div
            onClick={() => setMenuOpen(true)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "30px",
              height: "22px",
              cursor: "pointer",
              zIndex: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span style={{ height: "2px", backgroundColor: "#fff" }} />
            <span style={{ height: "2px", backgroundColor: "#fff" }} />
            <span style={{ height: "2px", backgroundColor: "#fff" }} />
          </div>

          {/* 下矢印 */}
          <div className="scroll-indicator">↓</div>

          {/* 高級スライドメニュー */}
          {menuOpen && (
            <>
              <div
                onClick={() => setMenuOpen(false)}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  zIndex: 10,
                }}
              />
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  width: "60%",
                  maxWidth: "420px",
                  height: "100%",
                  background: "rgba(10,10,10,0.95)",
                  color: "#fdfaf5",
                  zIndex: 11,
                  animation: "slideLuxury 0.6s ease forwards",
                  boxShadow: "-4px 0 30px rgba(0,0,0,0.5)",
                  padding: "5rem 3rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <div
                  onClick={() => setMenuOpen(false)}
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "26px",
                    height: "26px",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#e6dcc6",
                      transform: "rotate(45deg)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#e6dcc6",
                      transform: "rotate(-45deg)",
                    }}
                  />
                </div>

                {[
                  { en: "ABOUT", jp: "宿について", link: "/about" },
                  { en: "STAY", jp: "ご宿泊", link: "/stay" },
                  { en: "CONTACT", jp: "お問い合わせ", link: "/contact" },
                ].map((item, i) => (
                  <Link key={i} href={item.link}>
                    <div
                      style={{
                        opacity: 0,
                        animation: `fadeUpMenu 0.6s ease ${0.2 + i * 0.15}s forwards`,
                        margin: "1.8rem 0",
                        letterSpacing: "0.15em",
                        fontFamily:
                          "'Cormorant Garamond', 'Noto Serif JP', serif",
                        textTransform: "uppercase",
                        fontSize: "2rem",
                        color: "#fdfaf5",
                        cursor: "pointer",
                        transition: "color 0.4s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#e6dcc6")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#fdfaf5")
                      }
                    >
                      {item.en}
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.9rem",
                          color: "#d8d3c4",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.jp}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ================= 下層セクション ================= */}
      {[
        { title: "宿について", text: "古民家をリノベーションし..." },
        { title: "ご宿泊", text: "チェックイン日とチェックアウト日..." },
        { title: "お問い合わせ", text: "ご質問・ご相談などお気軽に..." },
      ].map((s, i) => (
        <section
          key={i}
          className="fade-section"
          style={{
            opacity: fadeSections.includes(i) ? 1 : 0,
            animation: fadeSections.includes(i)
              ? "fadeUp 1.2s ease forwards"
              : "none",
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

      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        © {new Date().getFullYear()} Secret Beach Villa Fukutsu
      </footer>
    </>
  );
}
