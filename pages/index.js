import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const images = ["/IMG_5949.jpeg", "/IMG_5947.jpeg", "/IMG_5941.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
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
          animation: fadeIn 2s ease forwards;
        }

        .scroll-text {
          font-family: "Playfair Display", serif;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          opacity: 0.9;
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dummy-section {
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          text-align: center;
          padding: 8rem 1.5rem;
          font-family: "Noto Serif JP", serif;
        }
      `}</style>

      <div className="hero-wrapper">
        {images.map((src, i) => (
          <div
            key={i}
            className={`hero-image ${currentIndex === i ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

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
              この構成がVercelで安定して動作します。
            </p>
          </
