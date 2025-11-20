# 🎨 Customization Guide

## 📝 Step-by-Step Content Replacement

### 1. Personal Messages

Open `app/lib/content.ts` and replace these placeholders:

```typescript
// Replace with your actual messages
CUTE_SHORT_MESSAGE: "You make every day brighter with your smile! 🌟"
FUNNY_MESSAGE: "Remember when you tried to cook and almost burned down the kitchen? Still love you! 😂"
ROMANTIC_MESSAGE: "Every moment with you feels like a fairytale come true 💕"
EMOTIONAL_MESSAGE: "You've changed my life in the most beautiful way possible..."
SPECIAL_REVEAL_MESSAGE: "I can't imagine my world without you in it 💜"
SURPRISE_MESSAGE: "Happy Birthday to the most amazing person I know! Here's to another year of adventures together! 🎉"
FINAL_MESSAGE: "Thank you for being you. I love you more than words can say 💜"
```

### 2. Ten Reasons List

Replace the REASONS array with your personal reasons:

```typescript
REASONS: [
  "Your laugh is contagious and brightens my day",
  "You always know how to make me feel better",
  "Your kindness towards everyone you meet",
  "The way you dance when you think no one is watching",
  "Your terrible jokes that somehow make me laugh",
  "How you always remember the little things",
  "Your passion for the things you love",
  "The way you make ordinary moments special",
  "Your beautiful heart and generous spirit",
  "Simply because you're perfectly imperfect, and perfect for me"
]
```

### 3. Media Files

#### Photos
1. Upload 5 photos to a hosting service:
   - **Cloudinary** (recommended): Free tier, easy to use
   - **Imgur**: Simple image hosting
   - **Vercel**: If deploying there, use their image optimization

2. Replace photo URLs:
```typescript
PHOTOS: [
  "https://your-image-host.com/photo1.jpg",
  "https://your-image-host.com/photo2.jpg", 
  "https://your-image-host.com/photo3.jpg",
  "https://your-image-host.com/photo4.jpg",
  "https://your-image-host.com/photo5.jpg"
]
```

#### Audio Message
1. Record a personal audio message (MP3 format recommended)
2. Upload to a hosting service
3. Replace the URL:
```typescript
AUDIO_FILE_URL: "https://your-audio-host.com/message.mp3"
```

## 🎨 Visual Customization

### Colors
The purple theme is defined in `tailwind.config.js`. You can customize colors:

```javascript
colors: {
  purple: {
    soft: '#A96CFF',     // Main purple
    deep: '#7A2BE2',     // Dark purple  
    lavender: '#C89CFF', // Light purple
    pink: '#FFD6FF',     // Pink accent
    warm: '#F5E1FF',     // Very light purple
    pastel: '#D4B8FF',   // Pastel purple
  },
  gold: {
    soft: '#F6E27F',     // Gold accent
  },
}
```

### Animations
Modify animation speeds in components by changing `duration` values in Framer Motion configs.

## 🚀 Deployment Steps

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (zero configuration needed!)

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure as a static site

### Option 3: Your Own Server
1. Build: `npm run build`
2. Start: `npm start`
3. Access on port 3000

## 📱 Testing

Before deploying:
1. Test on mobile device
2. Check all animations work smoothly
3. Verify audio plays correctly
4. Ensure all images load
5. Test the slideshow swipe functionality

## 🎯 Pro Tips

1. **Image Optimization**: Use WebP format for faster loading
2. **Audio Quality**: Keep audio files under 5MB for faster loading
3. **Personal Touch**: Add inside jokes and shared memories
4. **Timing**: Deploy just before the birthday for maximum surprise impact!

## 🆘 Troubleshooting

### Images not loading?
- Check if URLs are publicly accessible
- Ensure HTTPS URLs (not HTTP)
- Verify image formats (JPG, PNG, WebP supported)

### Audio not playing?
- Check browser compatibility (MP3 widely supported)
- Ensure audio URL is publicly accessible
- Test on different devices

### Animations laggy?
- Reduce number of floating hearts/sparkles
- Test on target device (mobile)
- Consider reducing animation complexity

## 💡 Ideas for Enhancement

- Add more photos to the slideshow
- Record multiple audio messages for different sections
- Include video messages (requires additional setup)
- Add location-based memories with maps
- Create a countdown timer for the birthday

Happy customizing! 💜