import { Leaf, Flower, Mountain, Snowflake } from 'lucide-react'

interface ExperiencesProps {
  language: 'en' | 'ja' | 'zh' | 'ko'
}

const content = {
  en: {
    title: 'Seasonal Experiences',
    subtitle: 'Discover the beauty of each season',
    description: 'From cherry blossoms in spring to snow-covered landscapes in winter, each season brings its own unique charm and traditional activities.',
    seasons: [
      {
        icon: Flower,
        name: 'Spring',
        nameJa: '春',
        period: 'March - May',
        periodJa: '3月 - 5月',
        description: 'Cherry blossom viewing, tea ceremony in the garden, and traditional spring cuisine featuring young bamboo shoots.',
        image: '/images/backgrounds/seasonal.jpg',
        activities: [
          'Hanami (cherry blossom viewing)',
          'Traditional tea ceremony',
          'Spring kaiseki cuisine',
          'Garden meditation',
        ],
      },
      {
        icon: Leaf,
        name: 'Summer',
        nameJa: '夏',
        period: 'June - August',
        periodJa: '6月 - 8月',
        description: 'Cool mountain air, evening festivals, traditional summer activities, and refreshing cold dishes.',
        image: '/images/amenities/dining.jpg',
        activities: [
          'Summer festivals',
          'Cold noodle dishes',
          'Evening garden walks',
          'Traditional cooling practices',
        ],
      },
      {
        icon: Mountain,
        name: 'Autumn',
        nameJa: '秋',
        period: 'September - November',
        periodJa: '9月 - 11月',
        description: 'Maple leaf viewing, harvest season cuisine, mushroom foraging, and cozy indoor activities.',
        image: '/images/backgrounds/interior.jpg',
        activities: [
          'Koyo (maple viewing)',
          'Seasonal harvest cuisine',
          'Mushroom foraging tours',
          'Traditional crafting',
        ],
      },
      {
        icon: Snowflake,
        name: 'Winter',
        nameJa: '冬',
        period: 'December - February',
        periodJa: '12月 - 2月',
        description: 'Snow-covered scenery, hot spring baths, winter comfort food, and contemplative indoor activities.',
        image: '/images/amenities/onsen.jpg',
        activities: [
          'Snow viewing (Yukiguni)',
          'Hot spring bathing',
          'Winter comfort food',
          'Indoor meditation',
        ],
      },
    ],
  },
  ja: {
    title: '季節の体験',
    subtitle: '各季節の美しさを発見してください',
    description: '春の桜から冬の雪に覆われた風景まで、each season には own unique charm と traditional activities をもたらします。',
    seasons: [
      {
        icon: Flower,
        name: '春',
        nameJa: '春',
        period: '3月 - 5月',
        periodJa: '3月 - 5月',
        description: '桜の観賞、庭園での茶道、 young bamboo shoot を特徴とする伝統的な春料理。',
        image: '/images/backgrounds/seasonal.jpg',
        activities: [
          '花見（桜の観賞）',
          '伝統的な茶道',
          '春の懐石料理',
          '庭園の瞑想',
        ],
      },
      {
        icon: Leaf,
        name: '夏',
        nameJa: '夏',
        period: '6月 - 8月',
        periodJa: '6月 - 8月',
        description: '涼しいMountain air、evening festivals、traditional 夏 activity、そしてrefreshing 冷たい料理。',
        image: '/images/amenities/dining.jpg',
        activities: [
          '夏祭り',
          '冷たい麺料理',
          '夕方の庭園walk',
          '伝統的な冷却practice',
        ],
      },
      {
        icon: Mountain,
        name: '秋',
        nameJa: '秋',
        period: '9月 - 11月',
        periodJa: '9月 - 11月',
        description: '紅葉観賞、harvest season cuisine、きのこ採り、そしてcozy 屋内のactivity。',
        image: '/images/backgrounds/interior.jpg',
        activities: [
          '紅葉（紅葉観賞）',
          '季節の収穫料理',
          'きのこ採りtour',
          '伝統的なcrafting',
        ],
      },
      {
        icon: Snowflake,
        name: '冬',
        nameJa: '冬',
        period: '12月 - 2月',
        periodJa: '12月 - 2月',
        description: '雪に覆われた景色、温泉、winter comfort food、そしてcontemplative 屋内のactivity。',
        image: '/images/amenities/onsen.jpg',
        activities: [
          '雪景色（雪国）',
          '温泉',
          '冬のcomfort food',
          '屋内のmeditation',
        ],
      },
    ],
  },
  zh: {
    title: '四季体验',
    subtitle: '发现每个季节的美丽',
    description: '从春天的樱花到冬天的雪景，每个季节都有其独特的魅力和传统活动。',
    seasons: [
      {
        icon: Flower,
        name: '春',
        nameJa: '春',
        period: '3月 - 5月',
        periodJa: '3月 - 5月',
        description: '赏樱、庭园茶道，以及以嫩笋为特色的传统春菜料理。',
        image: '/images/backgrounds/seasonal.jpg',
        activities: [
          '花见（赏樱）',
          '传统茶道',
          '春季怀石料理',
          '庭园冥想',
        ],
      },
      {
        icon: Leaf,
        name: '夏',
        nameJa: '夏',
        period: '6月 - 8月',
        periodJa: '6月 - 8月',
        description: '凉爽的山风、夜晚祭典、传统夏日活动和清爽的冷菜料理。',
        image: '/images/amenities/dining.jpg',
        activities: [
          '夏季节庆',
          '冷面料理',
          '夜晚庭园散步',
          '传统纳凉活动',
        ],
      },
      {
        icon: Mountain,
        name: '秋',
        nameJa: '秋',
        period: '9月 - 11月',
        periodJa: '9月 - 11月',
        description: '红叶观赏、秋季丰收料理、蘑菇采集，以及舒适的室内活动。',
        image: '/images/backgrounds/interior.jpg',
        activities: [
          '红叶（红叶观赏）',
          '季节丰收料理',
          '蘑菇采集之旅',
          '传统手工艺',
        ],
      },
      {
        icon: Snowflake,
        name: '冬',
        nameJa: '冬',
        period: '12月 - 2月',
        periodJa: '12月 - 2月',
        description: '雪景、温泉浴、冬日暖食，以及沉思性的室内活动。',
        image: '/images/amenities/onsen.jpg',
        activities: [
          '雪景观赏',
          '温泉浴',
          '冬日暖食',
          '室内冥想',
        ],
      },
    ],
  },
  ko: {
    title: '계절별 경험',
    subtitle: '각 계절의 아름다움을 발견하세요',
    description: '봄의 벚꽃부터 겨울의 눈으로 덮인 경치까지, 각 계절마다 고유한 매력과 전통적인 활동을 제공합니다.',
    seasons: [
      {
        icon: Flower,
        name: '봄',
        nameJa: '春',
        period: '3월 - 5월',
        periodJa: '3月 - 5月',
        description: '벚꽃 감상, 정원에서의 다도, 신선한 죽순을 특징으로 하는 전통적인 봄 요리.',
        image: '/images/backgrounds/seasonal.jpg',
        activities: [
          '한미 (벚꽃 감상)',
          '전통 다도',
          '봄 계절 카이세키 요리',
          '정원 명상',
        ],
      },
      {
        icon: Leaf,
        name: '여름',
        nameJa: '夏',
        period: '6월 - 8월',
        periodJa: '6月 - 8月',
        description: '시원한 산 바람, 저녁 축제, 전통적인 여름 활동, 그리고 상쾌한 차가운 요리.',
        image: '/images/amenities/dining.jpg',
        activities: [
          '여름 축제',
          '차가운 면요리',
          '저녁 정원 산책',
          '전통적인 시원함 유지법',
        ],
      },
      {
        icon: Mountain,
        name: '가을',
        nameJa: '秋',
        period: '9월 - 11월',
        periodJa: '9月 - 11月',
        description: '단풍 감상, 수확철 요리, 버섯采摘, 그리고 아늑한 실내 활동.',
        image: '/images/backgrounds/interior.jpg',
        activities: [
          '코요 (단풍 감상)',
          '계절 수확 요리',
          '버섯采摘 투어',
          '전통 공예',
        ],
      },
      {
        icon: Snowflake,
        name: '겨울',
        nameJa: '冬',
        period: '12월 - 2월',
        periodJa: '12月 - 2月',
        description: '눈으로 덮인 경치, 온천욕, 겨울 comfort food, 그리고 명상적 실내 활동.',
        image: '/images/amenities/onsen.jpg',
        activities: [
          '雪景 감상 (Yukiguni)',
          '온천욕',
          '겨울 comfort food',
          '실내 명상',
        ],
      },
    ],
  },
}

export default function Experiences({ language }: ExperiencesProps) {
  const t = content[language]

  return (
    <section id="experiences" className="section-spacing bg-background-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-small font-medium text-primary-500 uppercase tracking-wider mb-4">
            {t.subtitle}
          </p>
          <h2 className="font-display font-semibold text-headline-mobile lg:text-headline text-neutral-900 mb-6">
            {t.title}
          </h2>
          <p className="text-body-large text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="bg-background-surface rounded-md p-8 lg:p-12 border border-neutral-200">
          {/* Timeline Axis - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Horizontal line */}
              <div className="absolute top-14 left-0 right-0 h-0.5 bg-neutral-200" />
              <div className="absolute top-14 left-0 h-0.5 bg-primary-500 transition-all duration-luxury" 
                   style={{ width: `${(100 / (t.seasons.length - 1)) * 0}%` }} />
            </div>
          </div>

          {/* Seasons Grid */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {t.seasons.map((season, index) => {
              const IconComponent = season.icon
              return (
                <div key={index} className="text-center">
                  {/* Season Node */}
                  <div className="relative mb-8">
                    {/* Node Circle */}
                    <div className="w-14 h-14 bg-primary-50 border-2 border-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={24} className="text-primary-500" />
                    </div>
                    
                    {/* Season Name */}
                    <h3 className="font-display font-medium text-subhead-mobile lg:text-subhead text-neutral-900 mb-2">
                      {language === 'en' ? season.name : (language === 'zh' || language === 'ko') ? season.name : season.nameJa}
                    </h3>
                    
                    {/* Period */}
                    <p className="text-small text-neutral-500">
                      {language === 'en' ? season.period : (language === 'zh' || language === 'ko') ? season.period : season.periodJa}
                    </p>
                  </div>

                  {/* Season Image */}
                  <div className="aspect-[16/9] rounded-md overflow-hidden mb-6">
                    <img
                      src={season.image}
                      alt={`${season.name} experience`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-slow"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-body text-neutral-700 mb-6 leading-relaxed">
                    {season.description}
                  </p>

                  {/* Activities */}
                  <div className="text-left">
                    <h4 className="text-small font-medium text-neutral-900 mb-3 uppercase tracking-wider">
                      {language === 'en' ? 'Activities' : language === 'ja' ? 'アクティビティ' : language === 'zh' ? '活动' : '활동'}
                    </h4>
                    <ul className="space-y-2">
                      {season.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="text-small text-neutral-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="break-words overflow-hidden">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Cultural Experience Call-out */}
        <div className="mt-16 text-center">
          <div className="bg-background-surface rounded-md p-8 lg:p-12 border border-neutral-200">
            <img
              src="/images/experiences/tea-ceremony.jpg"
              alt="Traditional Japanese tea ceremony"
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-neutral-200"
            />
            <h3 className="font-display font-medium text-subhead-mobile lg:text-subhead text-neutral-900 mb-4">
              {language === 'en' ? 'Cultural Immersion' : language === 'ja' ? '文化への没入' : language === 'zh' ? '文化沉浸体验' : '문화 몰입'}
            </h3>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto leading-relaxed mb-6">
              {language === 'en' 
                ? 'Participate in authentic Japanese cultural activities including tea ceremony, calligraphy, and seasonal festivals with local artisans and cultural experts.'
                : language === 'ja'
                ? '茶道、書道、季節の祭りなどを地のartisanや文化 전문가 とともに参加してください。'
                : language === 'zh'
                ? '参与正宗的日本文化活动，包括茶道、书法和季节性节庆，与当地工匠和文化专家一起体验。'
                : '지역 장인 및 문화 전문가와 함께 다도, 서도, 계절 축제를 포함한 진정한 일본 문화 활동에 참여하세요.'
              }
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-12 px-6 bg-primary-500 text-neutral-50 font-medium text-sm tracking-wider rounded-sm hover:bg-primary-600 transition-colors duration-base"
            >
              {language === 'en' ? 'Learn More' : language === 'ja' ? '詳細を見る' : language === 'zh' ? '了解更多' : '더 알아보기'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
