import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // 背景切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // パララックス効果
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        html,
        body,
        #__next {
          margin: 0;
          padding: 0;
          background-color: #e9e5db;
          overflow-x: hidden;
        }
        a {
          text-decoration: none !important;
          color: inherit !important;
        }
        .menuButton:hover span {
          transform: scale(1.1);
          opacity: 0.8;
        }
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
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>

      <div
        style={{
          fontFamily: "'Noto Serif JP', serif",
          margin: 0,
          padding: "0 16px",
        }}
      >
        {/* ===== Hero Section ===== */}
        <section
          style={{
            position: "relative",
            height: "100vh",
            borderRadius: "16px",
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          {/* 背景画像（クロスフェード＋パララックス） */}
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
                willChange: "transform, opacity",
              }}
            />
          ))}

          {/* ナビゲーションメニュー */}
          <nav
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              display: "flex",
              gap: "2rem",
              color: "#fff",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              fontSize: "0.95rem",
            }}
          >
            <Link href="/about">
              <span style={{ color: "#fff", cursor: "pointer" }}>宿について</span>
            </Link>
            <Link href="/stay">
              <span style={{ color: "#fff", cursor: "pointer" }}>ご宿泊</span>
            </Link>
            <Link href="/contact">
              <span style={{ color: "#fff", cursor: "pointer" }}>お問い合わせ</span>
            </Link>
          </nav>

          {/* ハンバーガーメニュー */}
          <div
            className="menuButton"
            onClick={() => setMenuOpen(true)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "30px",
              height: "20px",
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

          {/* メインテキスト */}
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

          {/* スライドメニュー */}
          {menuOpen && (
            <>
              {/* 背景のブラー */}
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
                  animation: "fadeIn 0.3s ease-in-out",
                }}
              />
              {/* スライドパネル */}
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  width: "60%",
                  maxWidth: "420px",
                  height: "100%",
                  backgroundColor: "#f4f1ec",
                  color: "#333",
                  padding: "3rem 2rem",
                  zIndex: 11,
                  animation: menuOpen ? "slideIn 0.4s ease forwards" : "slideOut 0.4s ease forwards",
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

                <Link href="/about">
                  <span style={{ display: "block", margin: "1rem 0", fontSize: "1.5rem" }}>宿について</span>
                </Link>
                <Link href="/stay">
                  <span style={{ display: "block", margin: "1rem 0", fontSize: "1.5rem" }}>ご宿泊</span>
                </Link>
                <Link href="/contact">
                  <span style={{ display: "block", margin: "1rem 0", fontSize: "1.5rem" }}>お問い合わせ</span>
                </Link>
              </div>
            </>
          )}
        </section>

        {/* 下層コンテンツ */}
        <section id="about" style={{ padding: "6rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>宿について</h2>
          <p style={{ lineHeight: 1.8 }}>
            当施設は古民家をリノベーションし、木の温もりとモダンなデザインを融合させた隠れ宿です。
          </p>
        </section>

        <section id="booking" style={{ padding: "6rem 1rem", textAlign: "center", backgroundColor: "#f8f8f8" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>ご宿泊</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <label htmlFor="checkin">チェックイン</label>
              <br />
              <input
                id="checkin"
                type="date"
                style={{ padding: "0.5rem", borderRadius: "0.25rem", border: "1px solid #ccc" }}
              />
            </div>
            <div>
              <label htmlFor="checkout">チェックアウト</label>
              <br />
              <input
                id="checkout"
                type="date"
                style={{ padding: "0.5rem", borderRadius: "0.25rem", border: "1px solid #ccc" }}
              />
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding: "6rem 1rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>お問い合わせ</h2>
          <p>ご質問などございましたらお気軽にお問い合わせください。</p>
        </section>

        <footer style={{ textAlign: "center", padding: "1rem", backgroundColor: "#000", color: "#fff" }}>
          © {new Date().getFullYear()} Secret Beach Villa Fukutsu
        </footer>
      </div>
    </>
  );
}
