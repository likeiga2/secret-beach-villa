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

        .hero-scroll {
