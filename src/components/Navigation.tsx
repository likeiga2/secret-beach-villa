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
    
