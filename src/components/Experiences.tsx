import { Leaf, Flower, Mountain, Snowflake } from 'lucide-react'

interface ExperiencesProps {
  language: 'en' | 'ja'
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
                      {language === 'en' ? season.name : season.nameJa}
                    </h3>
                    
                    {/* Period */}
                    <p className="text-small text-neutral-500">
                      {language === 'en' ? season.period : season.periodJa}
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
                      {language === 'en' ? 'Activities' : 'アクティビティ'}
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
              {language === 'en' ? 'Cultural Immersion' : '文化への没入'}
            </h3>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto leading-relaxed mb-6">
              {language === 'en' 
                ? 'Participate in authentic Japanese cultural activities including tea ceremony, calligraphy, and seasonal festivals with local artisans and cultural experts.'
                : '茶道、書道、季節の祭りなどを地のartisanや文化 전문가 とともに参加してください。'
              }
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-12 px-6 bg-primary-500 text-neutral-50 font-medium text-sm tracking-wider rounded-sm hover:bg-primary-600 transition-colors duration-base"
            >
              {language === 'en' ? 'Learn More' : '詳細を見る'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
