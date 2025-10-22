import { useState, useEffect } from "react";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4秒ごとに切り替え
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "sans-serif",
        backgroundColor: "#000",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {/* 背景画像 (フェード + ズーム) */}
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
              transform:
                currentIndex === index ? "scale(1)" : "scale(1.1)",
              transitionProperty: "opacity, transform",
              transitionDuration: "1s, 4s",
              zIndex: 0,
            }}
          />
        ))}

        {/* メニュー */}
        <nav
          style={{
            position: "absolute",
            top: "20px",
            right: "40px",
            zIndex: 2,
            display: "flex",
            gap: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {[
            { label: "施設紹介", id: "about" },
            { label: "ご予約", id: "booking" },
            { label: "お問い合わせ", id: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                color: "#fff",
                textDecoration: "none",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
              onMouseLeave={(e) => (e.target.style.opacity = 1)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ヒーローテキスト */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              textShadow: "0 3px 6px rgba(0,0,0,0.6)",
            }}
          >
            Secret Beach Villa Fukutsu
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            和モダンの静かな宿泊施設で心休まるひとときを。
          </p>
          <button
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#ffffffbb",
              color: "#000",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() =>
              document.getElementById("booking").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            ご予約へ
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "4rem 1rem",
          maxWidth: "800px",
          margin: "0 auto",
          color: "#333",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>施設紹介</h2>
        <p style={{ fontSize: "1rem" }}>
          海辺の古民家をリノベーションした宿で、木の温もりとモダンデザインを融合させた
          隠れ宿のような空間です。広いリビング、テラスからの夕陽をお楽しみください。
        </p>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        style={{
          padding: "4rem 1rem",
          textAlign: "center",
          backgroundColor: "#f8f8f8",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>ご予約</h2>
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

      {/* Contact Section */}
      <section
        id="contact"
        style={{ padding: "4rem 1rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>お問い合わせ</h2>
        <p>ご質問がありましたらお気軽にお問い合わせください。</p>
      </section>

      {/* Footer */}
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
