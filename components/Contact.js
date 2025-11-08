import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

interface ContactProps {
  language: 'en' | 'ja'
}

const content = {
  en: {
    title: 'Contact & Reservations',
    subtitle: 'We look forward to welcoming you',
    description: 'Ready to experience authentic Japanese hospitality? Contact us to make a reservation or if you have any questions about your stay.',
    form: {
      name: 'Full Name',
      namePlaceholder: 'Enter your full name',
      email: 'Email Address',
      emailPlaceholder: 'Enter your email address',
      phone: 'Phone Number',
      phonePlaceholder: 'Enter your phone number',
      checkIn: 'Check-in Date',
      checkOut: 'Check-out Date',
      guests: 'Number of Guests',
      guestsPlaceholder: 'Select number of guests',
      message: 'Message',
      messagePlaceholder: 'Tell us about your preferences or any special requests...',
      submit: 'Send Inquiry',
    },
    contact: {
      title: 'Contact Information',
      phone: {
        label: 'Phone',
        value: '+81 (0) 75-123-4567',
      },
      email: {
        label: 'Email',
        value: 'reservations@ryokan.com',
      },
      address: {
        label: 'Address',
        value: '123 Temple Street, Kyoto Prefecture, Japan',
      },
      hours: {
        label: 'Reception Hours',
        value: '7:00 AM - 10:00 PM (Daily)',
      },
    },
    links: {
      title: 'Quick Links',
      booking: 'Book on Airbnb',
      website: 'Official Website',
    },
  },
  ja: {
    title: 'お問い合わせ・予約',
    subtitle: 'お迎えすることを楽しみにしています',
    description: '本格的な日本のおもてなしを体験 готовы ですか？予約をするため、またはご滞在についてご質問がある際には私たちにご連絡ください。',
    form: {
      name: 'お名前',
      namePlaceholder: 'お名前をご入力ください',
      email: 'メールアドレス',
      emailPlaceholder: 'メールアドレスをご入力ください',
      phone: '電話番号',
      phonePlaceholder: '電話番号をご入力ください',
      checkIn: 'チェックイン日',
      checkOut: 'チェックアウト日',
      guests: 'お客様人数',
      guestsPlaceholder: '人数をお選びください',
      message: 'メッセージ',
      messagePlaceholder: 'ご希望や特別なご要望をお聞かせください...',
      submit: '問い合わせを送る',
    },
    contact: {
      title: '連絡先情報',
      phone: {
        label: '電話',
        value: '+81 (0) 75-123-4567',
      },
      email: {
        label: 'メール',
        value: 'reservations@ryokan.com',
      },
      address: {
        label: '住所',
        value: '京都府京都市寺町123',
      },
      hours: {
        label: '受付時間',
        value: '午前7時 - 午後10時（毎日）',
      },
    },
    links: {
      title: 'クイックリンク',
      booking: 'Airbnb で予約',
      website: '公式サイト',
    },
  },
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  })

  const t = content[language]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Log form data for demonstration
    console.log('Form submitted with data:', formData)
    
    // Show user feedback
    const message = language === 'en' 
      ? 'Thank you for your inquiry! In a real implementation, this would send your message to the ryokan. For now, the form data is logged to the console.' 
      : 'お問い合わせありがとうございます。実際の実装では、旅館にメッセージが送信されます。フォームデータがコンソールに記録されました。'
    
    alert(message)
    
    // In a real implementation, you would send the data to your backend/email service here
    // Example: sendToBackend(formData)
  }

  return (
    <section id="contact" className="section-spacing bg-background-primary">
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

        {/* Quick Booking Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            onClick={(e) => {
              e.preventDefault();
              alert(language === 'en' 
                ? 'This would link to your Airbnb listing. Please update this link with your actual booking URL.'
                : 'これはあなたのAirbnbリスティングにリンクします。実際の予約URLに更新してください。'
              );
            }}
            className="bronze-gradient h-14 px-8 text-neutral-50 font-medium text-sm tracking-wider rounded-sm hover:scale-105 transition-all duration-base flex items-center justify-center cursor-pointer"
          >
            {t.links.booking}
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              alert(language === 'en' 
                ? 'This would link to your official website. Please update this link with your actual website URL.'
                : 'これはあなたの公式ウェブサイトにリンクします。実際のウェブサイトURLに更新してください。'
              );
            }}
            className="h-14 px-8 bg-primary-500 text-neutral-50 font-medium text-sm tracking-wider rounded-sm hover:bg-primary-600 hover:scale-105 transition-all duration-base flex items-center justify-center cursor-pointer"
          >
            {t.links.website}
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background-surface p-8 rounded-md border border-neutral-200">
            <h3 className="font-display font-medium text-subhead-mobile lg:text-subhead text-neutral-900 mb-8">
              {language === 'en' ? 'Send us a message' : 'メッセージを送る'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-small font-medium text-neutral-700 mb-2">
                    {t.form.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.form.namePlaceholder}
                    required
                    className="w-full h-14 px-5 bg-background-elevated border border-neutral-200 rounded-sm focus:border-primary-500 focus:outline-none transition-colors duration-base"
                  />
                </div>
                <div>
                  <label className="block text-small font-medium text-neutral-700 mb-2">
                    {t.form.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.form.emailPlaceholder}
                    required
                    className="w-full h-14 px-5 bg-background-elevated border border-neutral-200 rounded-sm focus:border-primary-500 focus:outline-none transition-colors duration-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-small font-medium text-neutral-700 mb-2">
                  {t.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.form.phonePlaceholder}
                  className="w-full h-14 px-5 bg-background-elevated border border-neutral-200 rounded-sm focus:border-primary-500 focus:outline-none transition-colors duration-base"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-small font-medium text-neutral-700 mb-2">
                    {t.form.checkIn}
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full h-14 px-5 bg-background-elevated border border-neutral-200 rounded-sm focus:border-primary-500 focus:outline-none transition-colors duration-base"
                  />
                </div>
                <div>
                  <label className="block text-small font-medium text-neutral-700 mb-2">
                    {t.form.checkOut}
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full h-14 px-5 bg-background-elevated border border-neutral-200 rounded-sm focus:border-primary-500 focus:outline-none transition-colors duration-base"
                  />
                </div>
                <div>
                  <label className="block text-small font-medium text-neutral-700 mb-2">
                    {t.form.guests}
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full h-14 px-5 bg-background-elevated border border-neutral-200 rounded-sm focus:border-primary-500 focus:outline-none transition-colors duration-base"
                  >
                    <option value="">{t.form.guestsPlaceholder}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-small font-medium text-neutral-700 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.form.messagePlaceholder}
                  rows={4}
                  className="w-full px-5 py-4 bg-background-elevated border border-neutral-200 rounded-sm focus:border-primary-500 focus:outline-none transition-colors duration-base resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-primary-500 text-neutral-50 font-medium text-sm tracking-wider rounded-sm hover:bg-primary-600 transition-colors duration-base flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                {t.form.submit}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-background-elevated p-8 rounded-md border border-neutral-200">
              <h3 className="font-display font-medium text-subhead-mobile lg:text-subhead text-neutral-900 mb-8">
                {t.contact.title}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={20} className="mr-4 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-small font-medium text-neutral-900 mb-1">{t.contact.phone.label}</p>
                    <p className="text-body text-neutral-700">{t.contact.phone.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={20} className="mr-4 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-small font-medium text-neutral-900 mb-1">{t.contact.email.label}</p>
                    <p className="text-body text-neutral-700">{t.contact.email.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin size={20} className="mr-4 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-small font-medium text-neutral-900 mb-1">{t.contact.address.label}</p>
                    <p className="text-body text-neutral-700">{t.contact.address.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={20} className="mr-4 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-small font-medium text-neutral-900 mb-1">{t.contact.hours.label}</p>
                    <p className="text-body text-neutral-700">{t.contact.hours.value}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-background-elevated rounded-md border border-neutral-200 overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-neutral-400 mx-auto mb-4" />
                  <p className="text-body text-neutral-500 font-medium">
                    {language === 'en' ? 'Location Map' : '所在マップ'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
