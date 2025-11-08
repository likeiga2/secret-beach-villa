# Japanese Ryokan Website Template - Customization Guide

## Overview
This is a beautiful, customizable website template for traditional Japanese ryokan (inn) properties. The design follows authentic Japanese aesthetics with modern functionality, making it perfect for Airbnb properties or traditional lodging businesses.

## 🎨 Design Features
- **Authentic Japanese Design**: Traditional color palette with burgundy (#6B3A3A) and warm earth tones
- **Luxury Spacing**: Generous whitespace (ma concept) for contemplative browsing
- **Bilingual Support**: English/Japanese toggle functionality
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Premium Typography**: Playfair Display for headlines, Lato for body text, Noto JP for Japanese

## 📁 File Structure for Easy Customization

### Images (Replace these with your own)
```
public/images/
├── hero/
│   ├── hero-1.jpg          # Main hero image 1 (ryokan exterior/garden)
│   ├── hero-2.jpg          # Main hero image 2 (traditional room)
│   └── hero-3.jpg          # Main hero image 3 (onsen/experience)
├── rooms/
│   ├── room-1.jpg          # Deluxe tatami suite
│   ├── room-2.jpg          # Traditional Japanese room
│   └── room-3.jpg          # Premium garden suite
├── experiences/
│   └── tea-ceremony.jpg    # Cultural activities
├── amenities/
│   ├── onsen.jpg           # Hot spring bath
│   └── dining.jpg          # Kaiseki dining
└── backgrounds/
    ├── garden.jpg          # Decorative garden image
    ├── seasonal.jpg        # Seasonal beauty
    └── interior.jpg        # Traditional interior
```

### Content Customization Points

#### 1. Hero Section
**File**: `src/components/HeroCarousel.tsx`
- **Slides**: Update the `slides` array with your property images
- **Headlines**: Change title and subtitle text
- **CTA Button**: Update button text and link

```typescript
const slides = [
  {
    image: '/images/hero/hero-1.jpg', // Replace with your image
    title: {
      en: 'Your Property Name',
      ja: 'あなたの宿名',
    },
    subtitle: {
      en: 'Your unique value proposition',
      ja: 'あなたのUnique な価値提案',
    },
  },
]
```

#### 2. About Section
**File**: `src/components/About.tsx`
- **Story**: Update the description with your property's story
- **Features**: Modify the 4 feature cards
- **Images**: Replace the garden image

#### 3. Rooms Section
**File**: `src/components/Rooms.tsx`
- **Room Types**: Update room names, descriptions, and features
- **Images**: Replace room images
- **Pricing**: Add pricing information if needed

#### 4. Experiences Section
**File**: `src/components/Experiences.tsx`
- **Seasonal Activities**: Customize seasonal experiences
- **Cultural Activities**: Add your specific offerings
- **Images**: Replace experience images

#### 5. Access Section
**File**: `src/components/Access.tsx`
- **Location**: Update address and transportation details
- **Map**: Replace map placeholder with Google Maps embed
- **Nearby Attractions**: Add local points of interest

#### 6. Contact Section
**File**: `src/components/Contact.tsx`
- **Contact Info**: Update phone, email, address
- **Booking Links**: Add your Airbnb/booking links
- **Form**: Customize form fields as needed

## 🔧 Technical Customization

### Colors & Branding
**File**: `tailwind.config.js`
Update the color palette in the theme configuration:

```javascript
colors: {
  primary: {
    500: '#YOUR_BRAND_COLOR', // Main brand color
    600: '#YOUR_HOVER_COLOR',
    900: '#YOUR_DARK_COLOR',
  },
}
```

### Typography
**File**: `tailwind.config.js`
Customize fonts if you have specific brand fonts:

```javascript
fontFamily: {
  display: ['Your-Font', 'Playfair Display', 'serif'],
  body: ['Your-Font', 'Lato', 'sans-serif'],
}
```

### Content Language
**File**: `src/App.tsx`
Change default language:
```typescript
const [language, setLanguage] = useState<'en' | 'ja'>('en') // Change to 'ja' for Japanese default
```

## 📱 Adding Google Maps

### Replace Map Placeholder
In `src/components/Access.tsx`, replace the map placeholder with Google Maps:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="100%"
  style="border:0;"
  allowFullScreen
  loading="lazy"
/>
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Web
The `dist/` folder contains your production-ready website.

## 🎯 Key Features to Customize

1. **Property Name**: Update in Navigation component
2. **Contact Information**: Update in Contact component
3. **Booking Links**: Add your booking platform URLs
4. **Images**: Replace all placeholder images
5. **Content**: Update all text content
6. **SEO**: Update meta tags in `index.html`

## 📞 Support

This template is designed to be easily customizable. Key points to remember:
- All images should be high-quality (WebP format recommended)
- Maintain the aspect ratios for best results
- Test all customizations on mobile devices
- Keep the traditional Japanese aesthetic

## 🔗 Integration Options

- **Airbnb**: Add your listing URL to booking buttons
- **Booking.com**: Link to your property page
- **Direct Booking**: Create a booking form backend
- **Social Media**: Add your Instagram/social links
- **Email**: Connect form to email service (Formspree, Netlify Forms, etc.)

---

*Template created with traditional Japanese design principles in mind, honoring the concepts of ma (間), wabi-sabi, and omotenashi.*
