interface AboutProps {
  language: 'en' | 'ja'
}

const content = {
  en: {
    title: 'Our Story',
    subtitle: 'A legacy of Japanese hospitality',
    description: `Nestled in the heart of Japan's most scenic region, our traditional ryokan has been welcoming guests for generations. We embody the spirit of omotenashi - the selfless hospitality that puts guests' comfort above all else.

Our carefully preserved architecture features authentic tatami rooms, traditional wooden baths, and serene gardens designed to reflect the changing seasons. Every detail, from the carefully chosen artwork to the sound of water in our peaceful courtyard, is intended to create a sanctuary from the modern world.

Experience the ritual of the tea ceremony, savor multi-course kaiseki cuisine, and find stillness in our natural hot spring baths. Here, time moves differently - at the pace of contemplation and renewal.`,
    features: [
      {
        title: 'Authentic Architecture',
        description: 'Traditional Japanese design elements',
      },
      {
        title: 'Onsen Experience',
        description: 'Natural hot spring baths',
      },
      {
        title: 'Kaiseki Cuisine',
        description: 'Seasonal multi-course dining',
      },
      {
        title: 'Cultural Activities',
        description: 'Traditional Japanese experiences',
      },
    ],
  },
  ja: {
    title: '私たちの物語',
    subtitle: '日本のおもてなし традиция',
    description: `日本の最も美しい地域にある伝統的な旅館で、何世代にもわたってゲストをお迎えしてきました私たちはゲストのcomfortを最優先を置く利他的なhosting、おもてなし的精神を体現しています。

慎重に 保存された私たちのarchitectureは真正の畳の部屋、伝統的な木製のbath、および Seasonal change 反映するために設計された静かな Garden を特徴としています。アートの精心して選んだことまで、すべての detail が現代の世界からの避難所 create する意図されています。

茶の儀式の儀式を体験し、seasonal multi-courseの懐石料理美食を楽しみ、自然の温泉で静止を見つけてください。ここで、time は differently move します - 省察とrenewal の pace で。`,
    features: [
      {
        title: '本格的な建築',
        description: '伝統的な日本のデザイン要素',
      },
      {
        title: '温泉体験',
        description: '自然な温泉',
      },
      {
        title: '懐石料理',
        description: '季節のコース料理',
      },
      {
        title: '文化活動',
        description: '伝統的な日本の体験',
      },
    ],
  },
}

export default function About({ language }: AboutProps) {
  const t = content[language]

  return (
    <section id="about" className="section-spacing bg-background-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column - 7 columns (60/40 split) */}
          <div className="lg:col-span-7">
            <div className="max-w-3xl">
              <p className="text-small font-semibold text-primary-500 uppercase tracking-wider mb-6 border-l-4 border-primary-500/30 pl-4">
                {t.subtitle}
              </p>
              <h2 className="font-display font-semibold text-headline-mobile lg:text-headline text-neutral-900 mb-8 leading-tight tracking-tight">
                {t.title}
              </h2>
              <div className="space-y-6 text-body text-neutral-700 leading-relaxed">
                {t.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="relative pl-4 border-l-2 border-neutral-200/50 hover:border-primary-300/50 transition-colors duration-slow">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid - 5 columns */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 lg:p-6 bg-background-elevated rounded-xl border border-neutral-200/50 hover:shadow-luxury transition-all duration-slow luxury-hover group min-h-[160px] lg:min-h-[180px]"
                >
                  <h3 className="font-display font-semibold text-subhead-mobile lg:text-subhead text-neutral-900 mb-3 lg:mb-4 group-hover:text-primary-600 transition-colors duration-slow leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-body text-neutral-700 leading-relaxed break-words overflow-hidden">
                    {feature.description}
                  </p>
                  <div className="mt-3 lg:mt-4 w-8 lg:w-12 h-1 bg-primary-500/20 group-hover:bg-primary-500/40 transition-colors duration-slow rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Image - Decorative */}
        <div className="relative mt-16 lg:mt-24">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-luxury-lg">
            <img
              src="/images/backgrounds/garden.jpg"
              alt="Traditional Japanese garden"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
                <p className="text-sm font-medium text-neutral-700">
                  {language === 'en' ? 'Traditional Japanese Garden - A place of contemplation and beauty' : '伝統的な日本庭園 - 瞑想と美しさの場所'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
