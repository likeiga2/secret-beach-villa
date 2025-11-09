import { useState } from 'react'
import Navigation from './components/Navigation'
import HeroCarousel from './components/HeroCarousel'
import About from './components/About'
import Rooms from './components/Rooms'
import Experiences from './components/Experiences'
import Access from './components/Access'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [language, setLanguage] = useState<'en' | 'ja' | 'zh' | 'ko'>('en')

  return (
    <div className="min-h-screen bg-background-primary font-body">
      <Navigation language={language} setLanguage={setLanguage} />
      <main>
        <HeroCarousel language={language} />
        <About language={language} />
        <Rooms language={language} />
        <Experiences language={language} />
        <Access language={language} />
        <Contact language={language} />
      </main>
    </div>
  )
}

export default App
