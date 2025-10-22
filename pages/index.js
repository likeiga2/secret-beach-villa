import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [fadeSections, setFadeSections] = useState([]);

  // 背景画像切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // スクロール監視
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600&family=Playfair+Display:wght@500&display=swap');

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
        }

        a {
          text-decoration: none !important;
          color: inherit !important;
        }

        /* Hero縮小アニメーション */
        @keyframes zoomOut {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        /* 下セクションフェードイン */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* スライドメニュー */
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* ハンバーガー */
        @keyframes burgerHover {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        /* 下矢印 */
        .scroll-indicator {
          position: absolute;
          bottom: 24px;
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
            transform: translate(-50%, 8px);
            opacity: 1;
          }
        }

        /* ナビゲーション */
        .nav-link {
          color: #fdfaf5;
          text-align: center;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
          text-transform: uppercase;
          font-family: 'Playfair Display', 'Noto Serif JP', serif;
        }

        .nav-link span.jp {
          display: block;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          font-family: 'Noto Serif JP', serif;
          margin-top: 2px;
        }

        .nav-link:hover {
          color: #e6dcc6;
        }
      `}</style>

      <div
        style={{
          fontFamily: "'Noto Serif JP', serif",
          margin: 0,
          padding: "24px",
        }}
      >
        {/* ===== ヒーローセクション ===== */}
        <section
          style={{
            position: "relative",
            height: "calc(100vh - 48px)",
            borderRadius: "16px",
            overflow: "hidden",
            margin: "0 auto",
            boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
            animation: "zoomOut 6s ease-in-out infinite alternate",
          }}
        >
          {/* 背景画像 */}
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: `center ${scrollY * 0.3}px`,
                position: "absolute",
                inset: 0,
                opacity: currentIndex === index ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
                transform: "scale(1.05)",
              }}
            />
          ))}

          {/* メニュー */}
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
            }}
          >
            <Link href="/about">
              <div className="nav-link">
                ABOUT
                <span className="jp">宿について</span>
              </div>
            </Link>
            <Link href="/stay">
              <div className="nav-link">
                STAY
                <span className="jp">ご宿泊</span>
              </div>
            </Link>
            <Link href="/contact">
              <div className="nav-link">
                CONTACT
                <span className="jp">お問い合わせ</span>
              </div>
            </Link>
          </nav>

          {/* ハンバーガーメニュー */}
          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.animation = "burgerHover 0.5s ease";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animation = "none";
            }}
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
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                display: "block",
                height: "2px",
                backgroundColor: "#fff",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                backgroundColor: "#fff",
                transition: "opacity 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                backgroundColor: "#fff",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </div>

          {/* キャッチコピー */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              color: "#fff",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                textShadow: "0 4px 8px rgba(0,0,0,0.6)",
              }}
            >
              宿 -SHUKU-
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                textShadow: "0 2px 6px rgba(0,0,0,0.5)",
              }}
            >
              心とからだをほどく。忍冬香る古蔵にて
            </p>
          </div>

          {/* 下矢印 */}
          <div className="scroll-indicator">↓</div>

          {/* スライドメニュー */}
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
                  backdropFilter: "blur(6px)",
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
                  backgroundImage: "url('/washi_gold.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#333",
                  padding: "3rem 2rem",
                  zIndex: 11,
                  animation: "slideIn 0.5s ease forwards",
                  boxShadow: "-4px 0 20px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  onClick={() => setMenuOpen(false)}
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "24px",
                    height: "24px",
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
                      backgroundColor: "#333",
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
                      backgroundColor: "#333",
                      transform: "rotate(-45deg)",
                    }}
                  />
                </div>

                {["about", "stay", "contact"].map((page, i) => (
                  <Link key={i} href={`/${page}`}>
                    <span
                      style={{
                        display: "block",
                        margin: "1.5rem 0",
                        fontSize: "1.5rem",
                      }}
                    >
                      {page === "about"
                        ? "宿について"
                        : page === "stay"
                        ? "ご宿泊"
                        : "お問い合わせ"}
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>

        {/* ===== 下層セクション ===== */}
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
      </div>
    </>
  );
}
