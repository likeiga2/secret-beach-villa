import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroCarouselProps {
  language: 'en' | 'ja' | 'zh' | 'ko'
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
  zh: {
    headline: '体验正宗的日式款待',
    subheadline: '传统与宁静相遇，在日本的心脏地带',
    cta: '探索我们的度假胜地',
  },
  ko: {
    headline: '정통 일본식 호스피탈리티 체험',
    subheadline: '전통과 평온함이 만나는 일본의 Heartland에서',
    cta: '우리의 Retreat를 발견하세요',
  },
}

const slides = [
  {
    image: '/images/hero/hero-1.jpg',
    title: {
      en: 'Welcome to Your Tranquil Retreat',
      ja: '静かなリトリートへようこそ',
      zh: '欢迎来到您的宁静度假胜地',
      ko: '조용한 Retreat에 오신 것을 환영합니다',
    },
    subtitle: {
      en: 'Experience the essence of traditional Japanese hospitality',
      ja: '日本の伝統的なおもてなしの本質をご体験ください',
      zh: '体验传统日式款待的精髓',
      ko: '전통적인 일본식 호스피탈리티의 정수를 경험하세요',
    },
  },
  {
    image: '/images/hero/hero-2.jpg',
    title: {
      en: 'Where Serenity Begins',
      ja: '静寂が始まる場所',
      zh: '宁静开始的地方',
      ko: '고요함이 시작되는 장소',
    },
    subtitle: {
      en: 'Find peace in our carefully crafted spaces',
      ja: '丁寧に創られた空間で平穏をお求めください',
      zh: '在我们精心打造的空间中寻找平静',
      ko: '정성스럽게 만들어진 공간에서 평화를 찾으세요',
    },
  },
  {
    image: '/images/hero/hero-3.jpg',
    title: {
      en: 'Your Journey of Discovery',
      ja: 'あなたの発見の旅',
      zh: '您的发现之旅',
      ko: '당신의 발견의 여정',
    },
    subtitle: {
      en: 'Immerse yourself in authentic Japanese culture',
      ja: '本格的な日本文化に浸ってください',
      zh: '沉浸在正宗的日本文化中',
      ko: '진정한 일본 문화에 몰입하세요',
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
    <section id="home" className="relative h-[85vh] overflow-hidden mt-24 rounded-2xl mx-4 shadow-2xl">
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


    </section>
  )
}
