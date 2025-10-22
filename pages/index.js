import { useState, useEffect } from "react";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "'Noto Serif JP', serif",
        backgroundColor: "#e9e5db", // shuku-kokon の背景に近いベージュ
        overflowX: "hidden",
      }}
    >
      {/* 額縁風の余白を含んだコンテナ */}
      <div
        style={{
          margin: "0 auto",
          padding: "1.5rem",
          maxWidth: "1200px",
          backgroundColor: "#fff",
          boxShadow: "0 0 0 1px #d9d4c6 inset",
          position: "relative",
        }}
      >
        {/* ヒーローセクション */}
        <section
          style={{
            position: "relative",
            height: "90vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          {/* 背景画像 */}
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: currentIndex === index ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          ))}

          {/* ロゴと見出し */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              color: "#fff",
            }}
          >
            <img
              src="/logo.svg"
              alt="Shuku Kokon Logo"
              style={{ width: "80px", marginBottom: "1rem" }}
            />
            <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
              宿 -SHUKU-
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>
              心とからだをほどく。忍冬香る古蔵にて
            </p>
          </div>

          {/* メニューアイコン */}
          <div
            onClick={() => setMenuOpen(true)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "26px",
              height: "18px",
              cursor: "pointer",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                display: "block",
                height: "2px",
                backgroundColor: "#fff",
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
                transition: "0.3s",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                backgroundColor: "#fff",
                opacity: menuOpen ? 0 : 1,
                transition: "0.3s",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                backgroundColor: "#fff",
                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
                transition: "0.3s",
              }}
            />
          </div>

          {/* 右からスライドするメニュー */}
          {menuOpen && (
            <>
              {/* 背景のブラー＆ダークオーバーレイ */}
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

              {/* スライドパネル（幅40%） */}
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  width: "40%",
                  maxWidth: "420px",
                  height: "100%",
                  backgroundColor: "#f4f1ec",
                  color: "#333",
                  padding: "3rem 2rem",
                  zIndex: 11,
                  transform: menuOpen
                    ? "translateX(0%)"
                    : "translateX(100%)",
                  transition: "transform 0.4s ease",
                }}
              >
                {/* 閉じるボタン */}
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

                {/* リンク一覧 */}
                {[
                  { label: "宿について", id: "about" },
                  { label: "ご宿泊", id: "booking" },
                  { label: "お問い合わせ", id: "contact" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      fontSize: "1.5rem",
                      margin: "1rem 0",
                      textDecoration: "none",
                      color: "#333",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </>
          )}
        </section>
      </div>

      {/* 以下のセクションは必要に応じて同様に微調整してください */}
      <section
        id="about"
        style={{
          padding: "6rem 1rem",
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: 1.8,
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>宿について</h2>
        <p>
          海辺の古民家をリノベーションした宿で、木の温もりとモダンデザインを融合させた隠れ宿のような空間です。
          広いリビングやテラスからの夕陽をお楽しみください。
        </p>
      </section>

      <section
        id="booking"
        style={{
          padding: "6rem 1rem",
          textAlign: "center",
          backgroundColor: "#f8f8f8",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>ご宿泊</h2>
        <p style={{ marginBottom: "1rem" }}>宿泊日を選択してください。</p>
        <input
          type="date"
          style={{
            padding: "0.5rem",
            borderRadius: "0.25rem",
            border: "1px solid #ccc",
          }}
        />
      </section>

      <section
        id="contact"
        style={{
          padding: "6rem 1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>お問い合わせ</h2>
        <p>ご質問がありましたらお気軽にお問い合わせください。</p>
      </section>

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
  );
}
