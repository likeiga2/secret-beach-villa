import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroCarouselProps {
  language: 'en' | 'ja'
}

const content = {
  en: {
    headline: 'Experience Authentic Japanese Hospitality',
    subheadline: 'Where tradition meets tranquility in the heart of Japan',
    cta: 'Discover Our Retreat',
  },
  ja: {
    headline: '本格的な日本の旅館体験',
    subheadline: '伝統と靜寂が出会う、日本の心臓部で',
    cta: '私たちの宿をご確認ください',
  },
}

const slides = [
  {
    image: '/images/hero/hero-1.jpg',
    title: {
      en: 'Welcome to Your Tranquil Retreat',
      ja: '静かなリトリートへようこそ',
    },
    subtitle: {
      en: 'Experience the essence of traditional Japanese hospitality',
      ja: '日本の伝統的なおもてなしの本質をご体験ください',
    },
  },
  {
    image: '/images/hero/hero-2.jpg',
    title: {
      en: 'Where Serenity Begins',
      ja: '静寂が始まる場所',
    },
    subtitle: {
      en: 'Find peace in our carefully crafted spaces',
      ja: '丁寧に創られた空間で平穏をお求めください',
    },
  },
  {
    image: '/images/hero/hero-3.jpg',
    title: {
      en: 'Your Journey of Discovery',
      ja: 'あなたの発見の旅',
    },
    subtitle: {
      en: 'Immerse yourself in authentic Japanese culture',
      ja: '本格的な日本文化に浸ってください',
    },
  },
]

export default function HeroCarousel({ language }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const t = content[language]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section id="home" className="relative h-[70vh] overflow-hidden mt-24 rounded-2xl mx-4 shadow-2xl">
      {/* Carousel Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-luxury ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-neutral-900/50 rounded-2xl" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="font-display font-bold text-display-mobile lg:text-display mb-6 leading-tight tracking-tight">
              {slides[currentSlide].title[language]}
            </h1>
            <p className="font-body text-body-large lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-neutral-100">
              {slides[currentSlide].subtitle[language]}
            </p>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bronze-gradient h-16 px-8 text-neutral-50 font-semibold text-sm tracking-wider rounded-lg hover:scale-105 transition-all duration-base shadow-xl hover:shadow-2xl border border-primary-400/20 backdrop-blur-sm"
            >
              {t.cta}
            </button>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-neutral-50/20 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-50 hover:bg-neutral-50/30 transition-all duration-base border border-neutral-50/30 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-neutral-50/20 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-50 hover:bg-neutral-50/30 transition-all duration-base border border-neutral-50/30 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-base ${
                index === currentSlide
                  ? 'bg-neutral-50 scale-110 shadow-lg'
                  : 'bg-neutral-50/60 hover:bg-neutral-50/80 hover:scale-105 shadow-md'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-8 text-neutral-50/75">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-8 bg-neutral-50/50" />
          <p className="text-xs font-light tracking-wider transform -rotate-90 origin-center whitespace-nowrap">
            {language === 'en' ? 'Scroll' : 'スクロール'}
          </p>
        </div>
      </div>
    </section>
  )
}
