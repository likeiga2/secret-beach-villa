import { MapPin, Train, Car, Clock } from 'lucide-react'

interface AccessProps {
  language: 'en' | 'ja' | 'zh' | 'ko'
}

const content = {
  en: {
    title: 'Access & Location',
    subtitle: 'How to reach our tranquil retreat',
    description: 'Located in the heart of Japan\'s scenic countryside, our ryokan is easily accessible by train or car. The surrounding area offers breathtaking views and cultural sites.',
    transportation: {
      title: 'Transportation',
      byTrain: {
        title: 'By Train',
        steps: [
          'Take the Shinkansen to Kyoto Station (2.5 hours from Tokyo)',
          'Transfer to local train to nearby station (45 minutes)',
          'Take our complimentary shuttle service (10 minutes)',
        ],
      },
      byCar: {
        title: 'By Car',
        steps: [
          'Drive via expressway to nearest interchange (2 hours from Tokyo)',
          'Follow scenic mountain roads to our location (45 minutes)',
          'Complimentary parking available on-site',
        ],
      },
    },
    nearby: {
      title: 'Nearby Attractions',
      items: [
        {
          name: 'Historic Temple',
          distance: '5 minutes walk',
          description: 'Ancient Buddhist temple with beautiful gardens',
        },
        {
          name: 'Cherry Grove',
          distance: '10 minutes walk',
          description: 'Famous hanami spot with 200+ cherry trees',
        },
        {
          name: 'Mountain Trail',
          distance: '15 minutes walk',
          description: 'Scenic hiking trail with panoramic views',
        },
        {
          name: 'Traditional Village',
          distance: '20 minutes drive',
          description: 'Historic village preserved in traditional style',
        },
      ],
    },
    tips: {
      title: 'Travel Tips',
      items: [
        'Reservations recommended during peak seasons',
        'Complimentary shuttle service available from station',
        'Private parking available for guests arriving by car',
        'Currency exchange services at nearby station',
      ],
    },
  },
  ja: {
    title: 'アクセス・所在地',
    subtitle: '私たちの静かなretreat への行き方',
    description: '日本の美しいcountryside の心臓部にある our 旅館は、電車や車 easy にアクセスできます。周辺地域にはbreathtaking な景色と文化的なsite があります。',
    transportation: {
      title: '交通手段',
      byTrain: {
        title: '電車で',
        steps: [
          '東京から京都Station まで新幹線で（2.5時間）',
          '近くのStation までローカル電車に乗換えて（45分）',
          'our 無料シャトルservice で（10分）',
        ],
      },
      byCar: {
        title: '車で',
        steps: [
          '最近的IC まで高速道路で（東京から2時間）',
          '景色の良いMountain road を通って our location へ（45分）',
          '施設で無料parking 利用可能',
        ],
      },
    },
    nearby: {
      title: '附近の観光名所',
      items: [
        {
          name: '歴史ある寺院',
          distance: '徒歩5分',
          description: '美しい庭園がある古代の仏教寺院',
        },
        {
          name: '桜並木',
          distance: '徒歩10分',
          description: '200以上の桜の木がある有名な花見スポット',
        },
        {
          name: '山道',
          distance: '徒歩15分',
          description: 'panoramic な景色が見える景色の良いハイキングコース',
        },
        {
          name: '伝統的な村',
          distance: '車20分',
          description: '伝統的なスタイルで保存された歴史ある村',
        },
      ],
    },
    tips: {
      title: '旅行のコツ',
      items: [
        'ピークシーズンには予約が必要',
        'Station から無料シャトルservice 利用可能',
        '車でご到着のゲストにはprivate parking 利用可能',
        '附近的Station で為替service 利用可能',
      ],
    },
  },
  zh: {
    title: '交通与位置',
    subtitle: '如何到达我们的宁静度假地',
    description: '我们的日式旅馆位于日本风景如画的乡村中心，交通便利，可通过火车或汽车轻松抵达。周边地区拥有令人惊叹的景色和文化景点。',
    transportation: {
      title: '交通方式',
      byTrain: {
        title: '乘坐火车',
        steps: [
          '乘坐新干线到京都站（从东京出发2.5小时）',
          '转乘当地火车到附近车站（45分钟）',
          '乘坐我们的免费班车服务（10分钟）',
        ],
      },
      byCar: {
        title: '自驾前往',
        steps: [
          '经高速公路到达最近的高速公路出入口（从东京出发2小时）',
          '沿风景优美的山路前往我们的位置（45分钟）',
          '提供现场免费停车',
        ],
      },
    },
    nearby: {
      title: '附近景点',
      items: [
        {
          name: '历史寺庙',
          distance: '步行5分钟',
          description: '拥有美丽庭院的古老佛教寺庙',
        },
        {
          name: '樱花林',
          distance: '步行10分钟',
          description: '著名的赏樱地点，拥有200多棵樱花树',
        },
        {
          name: '山间小径',
          distance: '步行15分钟',
          description: '风景优美的远足步道，可欣赏全景',
        },
        {
          name: '传统村落',
          distance: '开车20分钟',
          description: '以传统风格保存的历史村落',
        },
      ],
    },
    tips: {
      title: '旅行贴士',
      items: [
        '旺季期间建议提前预订',
        '从车站提供免费班车服务',
        '为驾车前来的客人提供私人停车位',
        '附近车站提供货币兑换服务',
      ],
    },
  },
  ko: {
    title: '교통 및 위치',
    subtitle: '우리의 평화로운 휴양지까지 어떻게 가는지',
    description: '일본의 아름다운 시골 중앙에 위치한 our ryokan은 기차나 차로 easy하게 접근할 수 있습니다. 주변 지역은 breathtaking한 경치와 문화적인 site들을 제공합니다.',
    transportation: {
      title: '교통편',
      byTrain: {
        title: '기차로',
        steps: [
          '도쿄에서京都Station까지 新幹선으로（2.5시간）',
          '근처Station까지ローカル電車로 환승（45분）',
          'our 무료 셔틀service로（10분）',
        ],
      },
      byCar: {
        title: '차로',
        steps: [
          '도쿄에서最近的IC까지高速公路로（2시간）',
          '경치 좋은Mountain road을 통해 our location까지（45분）',
          '시설에서 무료parking 이용 가능',
        ],
      },
    },
    nearby: {
      title: '근처 관광지',
      items: [
        {
          name: '역사가 있는寺院',
          distance: '도보 5분',
          description: '아 아름다운庭원이 있는古代の仏教寺院',
        },
        {
          name: '桜並木',
          distance: '도보 10분',
          description: '200 이상의桜나무가 있는 유명한花見スポット',
        },
        {
          name: '산道',
          distance: '도보 15분',
          description: 'panoramic한 경치가 보이는 경치 좋은하이킹코스',
        },
        {
          name: '전통적인 마을',
          distance: '차 20분',
          description: '전통적인 스타일로保存된역사가 있는마을',
        },
      ],
    },
    tips: {
      title: '여행 노하우',
      items: [
        '피크 시즌에는 예약이 필요',
        'Station에서 무료 셔틀service 이용 가능',
        '차로 오신 guests에게는 private parking 이용 가능',
        '근처 Station에서為替 service 이용 가능',
      ],
    },
  },
}

export default function Access({ language }: AccessProps) {
  const t = content[language]

  return (
    <section id="access" className="section-spacing bg-background-surface">
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

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Transportation Info - 6 columns */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="font-display font-medium text-subhead-mobile lg:text-subhead text-neutral-900 mb-6 flex items-center">
                <Train className="mr-3 text-primary-500" size={24} />
                {t.transportation.byTrain.title}
              </h3>
              <ol className="space-y-4">
                {t.transportation.byTrain.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-neutral-50 rounded-full text-small font-medium flex items-center justify-center mr-4 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-body text-neutral-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-display font-medium text-subhead-mobile lg:text-subhead text-neutral-900 mb-6 flex items-center">
                <Car className="mr-3 text-primary-500" size={24} />
                {t.transportation.byCar.title}
              </h3>
              <ol className="space-y-4">
                {t.transportation.byCar.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-neutral-50 rounded-full text-small font-medium flex items-center justify-center mr-4 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-body text-neutral-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Nearby Attractions */}
            <div>
              <h3 className="font-display font-medium text-subhead-mobile lg:text-subhead text-neutral-900 mb-6 flex items-center">
                <MapPin className="mr-3 text-primary-500" size={24} />
                {t.nearby.title}
              </h3>
              <div className="space-y-4">
                {t.nearby.items.map((item, index) => (
                  <div key={index} className="bg-background-elevated p-4 rounded-md border border-neutral-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-body text-neutral-900">{item.name}</h4>
                      <span className="text-small text-primary-500 font-medium">{item.distance}</span>
                    </div>
                    <p className="text-small text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Container - 6 columns */}
          <div className="lg:col-span-6">
            <div className="bg-background-elevated rounded-md border border-neutral-200 overflow-hidden">
              {/* Map Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-neutral-400 mx-auto mb-4" />
                  <p className="text-body text-neutral-500 font-medium">
                    {language === 'en' ? 'Interactive Map' : language === 'ja' ? 'インタラクティブマップ' : language === 'zh' ? '互动地图' : 'Interactive Map'}
                  </p>
                  <p className="text-small text-neutral-400 mt-2">
                    {language === 'en' 
                      ? 'Replace with your Google Maps embed' 
                      : language === 'ja' 
                        ? 'Google Maps 埋め込みに置き換える'
                        : language === 'zh'
                          ? '替换为您的Google地图嵌入'
                          : 'Replace with your Google Maps embed'
                    }
                  </p>
                </div>
              </div>

              {/* Map Details */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-body text-neutral-700">
                    <MapPin size={20} className="mr-3 text-primary-500 flex-shrink-0" />
                    <span>
                      {language === 'en' 
                        ? 'Kyoto Prefecture, Japan' 
                        : language === 'ja'
                          ? '京都府、日本'
                          : language === 'zh'
                            ? '日本京都府'
                            : 'Kyoto Prefecture, Japan'
                      }
                    </span>
                  </div>
                  
                  <div className="flex items-center text-body text-neutral-700">
                    <Clock size={20} className="mr-3 text-primary-500 flex-shrink-0" />
                    <span>
                      {language === 'en' 
                        ? '2.5 hours from Tokyo by Shinkansen' 
                        : language === 'ja'
                          ? '新幹線で東京から2.5時間'
                          : language === 'zh'
                            ? '从东京乘坐新干线2.5小时'
                            : '도쿄에서 신칸센으로 2.5시간'
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Tips */}
            <div className="mt-8 bg-background-elevated p-6 rounded-md border border-neutral-200">
              <h3 className="font-display font-medium text-subhead-mobile lg:text-subhead text-neutral-900 mb-6">
                {t.tips.title}
              </h3>
              <ul className="space-y-3">
                {t.tips.items.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-body text-neutral-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
