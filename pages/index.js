import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

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
        fontFamily: "sans-serif",
        backgroundColor: "#000",
        overflowX: "hidden",
      }}
    >
      <Header />
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
              zIndex: 0,
            }}
          />
        ))}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
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
              fontSize: "1.3rem",
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
            onClick={() => {
              window.location.href = "/stay";
            }}
          >
            ご予約へ
          </button>
        </div>
      </section>
    </div>
  );
}
