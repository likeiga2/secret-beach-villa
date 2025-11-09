import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

interface NavigationProps {
  language: 'en' | 'ja' | 'zh' | 'ko'
  setLanguage: (lang: 'en' | 'ja' | 'zh' | 'ko') => void
}

const content = {
  en: {
    navItems: [
      { label: 'About', href: '#about' },
      { label: 'Rooms', href: '#rooms' },
      { label: 'Experiences', href: '#experiences' },
      { label: 'Access', href: '#access' },
      { label: 'Contact', href: '#contact' },
    ],
    bookNow: 'Book Now',
    logo: 'Ryokan',
    languageName: 'English',
  },
  ja: {
    navItems: [
      { label: '旅館について', href: '#about' },
      { label: 'お部屋', href: '#rooms' },
      { label: '体験', href: '#experiences' },
      { label: 'アクセス', href: '#access' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
    bookNow: '今すぐ予約',
    logo: '旅館',
    languageName: '日本語',
  },
  zh: {
    navItems: [
      { label: '关于我们', href: '#about' },
      { label: '客房', href: '#rooms' },
      { label: '体验', href: '#experiences' },
      { label: '交通', href: '#access' },
      { label: '联系', href: '#contact' },
    ],
    bookNow: '立即预订',
    logo: '旅馆',
    languageName: '中文',
  },
  ko: {
    navItems: [
      { label: '소개', href: '#about' },
      { label: '객실', href: '#rooms' },
      { label: '체험', href: '#experiences' },
      { label: '교통', href: '#access' },
      { label: '문의', href: '#contact' },
    ],
    bookNow: '지금 예약',
    logo: '료칸',
    languageName: '한국어',
  },
}

const languages = [
  { code: 'en' as const, name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ja' as const, name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'zh' as const, name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ko' as const, name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
]

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => setIsLanguageOpen(false)
    if (isLanguageOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isLanguageOpen])

  const t = content[language]
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  return (
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
    {/* Logo */}
    <div className="flex-shrink-0">
      <a 
        href="#home" 
        className="text-2xl font-display font-semibold text-neutral-900 hover:text-primary-500 transition-colors duration-fast drop-shadow-sm"
      >
        {t.logo}
      </a>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex items-center space-x-8">
      {t.navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sm font-medium tracking-wider text-neutral-700 hover:text-primary-500 transition-all duration-fast border-b-2 border-transparent hover:border-primary-500 pb-2 px-2 rounded-sm hover:bg-primary-50/30"
        >
          {item.label}
        </a>
      ))}
    </div>

    {/* Language Toggle & CTA */}
    <div className="flex items-center space-x-4">
      {/* Language Dropdown */}
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsLanguageOpen(!isLanguageOpen)
          }}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-fast border border-neutral-200 hover:border-primary-300 rounded-lg shadow-sm hover:shadow-md bg-white/50 backdrop-blur-sm group"
        >
          <Globe size={16} className="text-neutral-500" />
          <span className="hidden sm:inline">{currentLanguage.flag} {currentLanguage.nativeName}</span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
          <ChevronDown 
            size={14} 
            className={`text-neutral-500 transition-transform duration-fast ${isLanguageOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {/* Language Dropdown Menu */}
        {isLanguageOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-background-elevated border border-neutral-200 rounded-lg shadow-lg overflow-hidden z-50">
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsLanguageOpen(false)
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-primary-50 transition-colors duration-fast ${
                    language === lang.code 
                      ? 'bg-primary-50 text-primary-600 font-semibold' 
                      : 'text-neutral-700'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.nativeName}</span>
                  {language === lang.code && (
                    <span className="ml-auto text-primary-500">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Book Now Button */}
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden lg:block h-12 px-6 bg-primary-500 text-neutral-50 font-semibold text-sm tracking-wider rounded-lg hover:bg-primary-600 hover:scale-105 transition-all duration-fast shadow-lg hover:shadow-xl border border-primary-400/20"
      >
        {t.bookNow}
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 text-neutral-700 hover:text-primary-500 transition-colors duration-fast"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="lg:hidden bg-background-elevated border-t border-neutral-200 shadow-lg">
      <div className="px-6 py-4 space-y-4">
        {t.navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-neutral-700 hover:text-primary-500 transition-colors duration-fast py-3 px-2 rounded-md hover:bg-primary-50/50 font-medium"
          >
            {item.label}
          </a>
        ))}
        
        {/* Mobile Language Selector */}
        <div className="pt-2 border-t border-neutral-200">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 px-2">
            Language / 言語
          </p>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsMobileMenuOpen(false)
                }}
                className={`flex items-center space-x-2 px-3 py-2 text-left rounded-md transition-colors duration-fast ${
                  language === lang.code 
                    ? 'bg-primary-50 text-primary-600 border border-primary-200' 
                    : 'text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
                }`}
              >
                <span className="text-sm">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.nativeName}</span>
              </button>
            ))}
          </div>
        </div>
        
        <button 
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
          className="w-full h-12 bg-primary-500 text-neutral-50 font-semibold text-sm tracking-wider rounded-lg hover:bg-primary-600 transition-colors duration-fast mt-4 shadow-lg"
        >
          {t.bookNow}
               </button>
      </div>
    </div>
  )}
  )
}
