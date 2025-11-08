import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  language: 'en' | 'ja'
  setLanguage: (lang: 'en' | 'ja') => void
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
  },
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = content[language]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-base border-b ${
        isScrolled 
          ? 'bg-background-elevated/95 backdrop-blur-sm shadow-card border-neutral-200/30' 
          : 'bg-white/80 backdrop-blur-sm border-neutral-200/20 shadow-sm'
      }`}
      style={{ height: '96px' }}
    >
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
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
            className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-fast border border-neutral-200 hover:border-primary-300 rounded-lg shadow-sm hover:shadow-md bg-white/50 backdrop-blur-sm"
          >
            {language === 'en' ? '日本語' : 'EN'}
          </button>

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
    </nav>
  )
}
