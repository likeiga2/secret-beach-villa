interface AboutProps {
  language: 'en' | 'ja' | 'zh' | 'ko'
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
    subtitle: '日本のおもてなしの伝統',
    description: `日本の最も美しい地域にある伝統的な旅館で、何世代にもわたってゲストをお迎えしてきました、私たちはゲストのcomfortを最優先を置く利他的なhosting、おもてなしの精神を体現しています。

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
  zh: {
    title: '我们的故事',
    subtitle: '日本待客之道的传统',
    description: `坐落在日本最美丽地区的中心，我们的传统旅馆世代迎接着客人。我们体现了omotenashi的精神——将客人舒适置于首位的无私待客之道。

我们精心保存的建筑特色包括正宗的榻榻米房间、传统的木制浴池，以及为反映季节变迁而设计的宁静花园。从精心挑选的艺术品到宁静庭院中流水的声音，每一个细节都旨在创造一个远离现代世界的圣地。

体验茶道仪式的神圣，品尝多道怀石料理，在天然温泉浴中找到宁静。在这里，时间以不同的方式流逝——以沉思和更新的节奏。`,
    features: [
      {
        title: '正宗建筑',
        description: '传统日式设计元素',
      },
      {
        title: '温泉体验',
        description: '天然温泉浴池',
      },
      {
        title: '怀石料理',
        description: '季节性多道用餐体验',
      },
      {
        title: '文化活动',
        description: '传统日式体验',
      },
    ],
  },
  ko: {
    title: '우리의 이야기',
    subtitle: '일본의 호스피탈리티 전통',
    description: `일본의 가장 아름다운 지역의 중심에 위치한 우리의 전통적인 여관(ryokan)은 여러 세대 동안 게스트를 맞이해왔습니다. 우리는 숙박객의 편안함을 최우선으로 두는 이타적 환대, 즉 오모테나시(omotenashi)의 정신을 구현하고 있습니다.

우리의 신중하게 보존된 건축은 진정한 다다미房间, 전통적인 나무 목욕탕, 그리고 계절의 변화를 반영하도록 설계된 평화로운 정원을 특징으로 합니다. 신중하게 선택된 예술품부터 평화로운 마당에서 물소리에 이르기까지 모든 디테일은 현대 세계로부터의 성소를 창조하려는 의도입니다.

다도(茶道)의 의식을 체험하고, seasonal 다코르스( courses )의 카이세키 요리를 음미하며, 자연 온천욕에서 고요함을 찾으세요. 여기서 시간은 다르게 흐릅니다 - 명상과 갱신의 속도로요.`,
    features: [
      {
        title: '정통 건축',
        description: '전통적인 일본 디자인 요소들',
      },
      {
        title: '온천 체험',
        description: '자연 온천욕',
      },
      {
        title: '카이세키 요리',
        description: '계절별 코스 요리',
      },
      {
        title: '문화 활동',
        description: '전통적인 일본 체험',
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
                  {language === 'en' ? 'Traditional Japanese Garden - A place of contemplation and beauty' : 
                   language === 'ja' ? '伝統的な日本庭園 - 瞑想と美しさの場所' :
                   language === 'zh' ? '传统日式庭园 - 冥想与美感之地' :
                   '전통 일본 정원 - 명상과 아름다움의 장소'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
