import { Users, Bed, Mountain } from 'lucide-react'

interface RoomsProps {
  language: 'en' | 'ja'
}

const content = {
  en: {
    title: 'Our Accommodations',
    subtitle: 'Traditional Japanese rooms designed for comfort',
    rooms: [
      {
        name: 'Deluxe Tatami Suite',
        description: 'Spacious traditional room with garden views, featuring authentic tatami flooring and modern amenities for the perfect blend of old and new.',
        image: '/images/rooms/room-1.jpg',
        capacity: '2-4 guests',
        size: '40 m²',
        features: ['Garden view', 'Private balcony', 'Tatami mat', 'Futon bedding'],
      },
      {
        name: 'Traditional Japanese Room',
        description: 'Classic ryokan experience with sliding shoji doors, comfortable futon bedding, and peaceful garden or mountain views.',
        image: '/images/rooms/room-2.jpg',
        capacity: '2-3 guests',
        size: '32 m²',
        features: ['Shoji doors', 'Mountain view', 'Tea ceremony set', 'Traditional bath'],
      },
      {
        name: 'Premium Garden Suite',
        description: 'Our most luxurious accommodation featuring panoramic garden views, private dining area, and enhanced traditional amenities.',
        image: '/images/rooms/room-3.jpg',
        capacity: '2-4 guests',
        size: '50 m²',
        features: ['Panoramic garden view', 'Private dining', 'Luxury bath', 'Personalized service'],
      },
    ],
  },
  ja: {
    title: '宿泊施設',
    subtitle: '快適性を重視した伝統的な日本のお部屋',
    rooms: [
      {
        name: 'デラックス畳スイート',
        description: '庭園.view、真正の畳の床と、新旧の完璧なBalanceのための最新の設備を備えた spacious な伝統的な部屋。',
        image: '/images/rooms/room-1.jpg',
        capacity: '2-4名',
        size: '40 ㎡',
        features: ['庭園.view', 'プライベートbalcony', '畳mat', 'Futon bedding'],
      },
      {
        name: '伝統的な日本のお部屋',
        description: 'スライドする襖、安心できるFuton bedding、そして静かな庭園または山岳.view による Classic 旅館experience。',
        image: '/images/rooms/room-2.jpg',
        capacity: '2-3名',
        size: '32 ㎡',
        features: ['襖', '山岳.view', '茶道セット', '伝統的なbath'],
      },
      {
        name: 'プレミアム庭園スイート',
        description: 'panoramic 庭園.view、private dining エリア、そして強化された伝統的な設備を備えた our most luxurious accommodation。',
        image: '/images/rooms/room-3.jpg',
        capacity: '2-4名',
        size: '50 ㎡',
        features: ['panoramic 庭園.view', 'private dining', 'luxury bath', 'personalized service'],
      },
    ],
  },
}

export default function Rooms({ language }: RoomsProps) {
  const t = content[language]

  return (
    <section id="rooms" className="section-spacing bg-background-surface">
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
            {language === 'en' 
              ? 'Each room is thoughtfully designed to provide the perfect balance of traditional Japanese aesthetics and modern comfort.'
              : '各お部屋は、伝統的な日本の美学と現代の快適性の完璧なbalance を提供するように慎重にデザインされています。'
            }
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {t.rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-background-elevated rounded-md overflow-hidden border border-neutral-200 hover:shadow-hover transition-all duration-slow hover:-translate-y-1"
            >
              {/* Room Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-luxury"
                />
              </div>

              {/* Room Content */}
              <div className="p-8">
                <h3 className="font-display font-semibold text-subhead-mobile lg:text-subhead text-neutral-900 mb-4">
                  {room.name}
                </h3>
                
                <p className="text-body text-neutral-700 mb-6 leading-relaxed line-clamp-3">
                  {room.description}
                </p>

                {/* Room Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-small text-neutral-500">
                    <Users size={16} className="mr-2" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center text-small text-neutral-500">
                    <Bed size={16} className="mr-2" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center text-small text-neutral-500">
                    <Mountain size={16} className="mr-2" />
                    <span>
                      {language === 'en' ? 'Mountain/Garden View' : '山岳/庭園.view'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-small font-medium text-neutral-900 mb-3 uppercase tracking-wider">
                    {language === 'en' ? 'Features' : '設備'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-caption font-light text-neutral-700 bg-neutral-100 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full h-12 bg-primary-500 text-neutral-50 font-medium text-sm tracking-wider rounded-sm hover:bg-primary-600 transition-colors duration-base"
                >
                  {language === 'en' ? 'View Details' : '詳細を見る'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
