# 🎂 Gina Birthday Experience

A personalized, animated birthday webpage built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Content Placeholders

All content placeholders are located in `app/lib/content.ts`. Replace the placeholder text with your personal messages:

- `CUTE_SHORT_MESSAGE` - Your sweet message
- `FUNNY_MESSAGE` - Your playful/funny message  
- `ROMANTIC_MESSAGE` - Your romantic message
- `EMOTIONAL_MESSAGE` - Your heartfelt message
- `SPECIAL_REVEAL_MESSAGE` - Special surprise message
- `SURPRISE_MESSAGE` - Final birthday surprise
- `FINAL_MESSAGE` - Closing message
- `REASONS` array - 10 reasons you love them
- `AUDIO_FILE_URL` - URL to your audio message
- `PHOTOS` array - URLs to your photos

### Media Files

1. **Photos:** Upload your photos to a hosting service (like Cloudinary, Imgur, or Vercel) and replace the `[PHOTO_URL_X]` placeholders with actual URLs.

2. **Audio:** Upload your audio message and replace `[AUDIO_FILE_URL]` with the actual URL.

## 🎨 Features

- ✨ Scroll-driven animations
- 💜 Purple-themed design
- 🧚 Flying avatar system
- 🎉 Confetti effects
- 💖 Floating hearts
- 📸 Swipeable photo slideshow
- 🎵 Audio player with visualizer
- 💌 Tap-to-reveal envelope
- 📝 Animated "10 reasons" list
- 📱 Mobile-first responsive design

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Manual Deployment

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Effects:** Canvas Confetti
- **Language:** TypeScript

## 📱 Mobile Optimization

The site is optimized for mobile viewing with:
- Touch-friendly interactions
- Swipe gestures for slideshow
- Responsive design
- Smooth animations at 60fps

## 🎯 Performance

- Lazy loading for images and audio
- Optimized animations
- Minimal bundle size
- Fast loading times

## 📄 License

This project is for personal use. Feel free to customize and deploy for your loved ones! 💜