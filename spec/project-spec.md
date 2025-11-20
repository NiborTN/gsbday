# 🎂 Gina Birthday Experience — SPEC DOCUMENT

_A Spec-Driven Requirement for a Personalised Next.js Birthday Webpage_

---

## 1. Overview

Build an interactive, animated, personalised birthday webpage for **Gina**, designed to be romantic, cute, playful, funny, and emotional.

The site will be:

- Built with **Next.js 14 (App Router)**
- Styled using **Tailwind CSS** and a **purple-themed palette**
- Animated with **Framer Motion**
- Scroll-driven with interactive components
- Hosted for free on **Vercel**
- Mobile-first and made for phone viewing

The developer (Amazon Q) will implement placeholders for text and images that the user will fill in manually.

---

## 2. User Personas

### **Primary: Gina**

- Will view on her phone.
- Scrolls, taps, and interacts naturally.
- Experiences a series of emotional tones: cute → funny → romantic → heartfelt → surprise.

### **Secondary: The Creator**

- Will insert personal messages afterwards.
- Will upload personal photos/audio later.
- Will deploy the final build.

---

## 3. Page Structure (Scroll-Based Sections)

### **Section 1 — Intro**

- Purple gradient background with soft sparkles.
- Animated headline: `Happy Birthday, Gina 💜`.
- A flying **avatar** enters the screen.
- Scroll indicator shows continuation.

### **Section 2 — Cute Message**

- `[CUTE SHORT MESSAGE PLACEHOLDER]`
- Fade-in on scroll.
- Avatar waves or hovers.

### **Section 3 — Playful / Funny Section**

- `[PLAYFUL/FUNNY MESSAGE PLACEHOLDER]`
- Interactive elements (e.g., clickable emojis).
- Avatar performs a playful animation.

### **Section 4 — Romantic Section**

- `[ROMANTIC MESSAGE PLACEHOLDER]`
- Soft floating hearts.
- Avatar glides across.

### **Section 5 — Emotional Section**

- `[EMOTIONAL MESSAGE PLACEHOLDER]`
- Slower, warmer tone.
- Avatar sits on a glowing heart.

### **Section 6 — Tap-to-Reveal**

- Envelope animation.
- Reveal content: `[SPECIAL REVEAL MESSAGE PLACEHOLDER]`
- Confetti burst.

### **Section 7 — Photo Slideshow**

- Swipeable or auto-sliding.
- Insertions: `[PHOTO_1_URL]` etc.
- Avatar moves between slideshow positions.

### **Section 8 — “Reasons I Love You”**

- Ten-item animated list:
  - `[REASON_1]`
  - ...
  - `[REASON_10]`
- One-by-one scroll-triggered reveal.
- Avatar checks off each item.

### **Section 9 — Audio Message**

- Embedded audio player.
- Placeholder: `[AUDIO_FILE_URL]`
- Avatar animates to “listen”.

### **Section 10 — Final Surprise**

- Button: “Tap for your birthday surprise”.
- Modal reveals `[SURPRISE_MESSAGE_PLACEHOLDER]`.
- Confetti and sparkles.
- Avatar does a final flight animation.

### **Section 11 — Ending**

- Final line placeholder.
- Soft sparkles and hearts.
- Avatar waves goodbye and exits frame.

---

## 4. Feature Requirements

- 🎉 Confetti & sparkles
- 💖 Floating hearts
- 🔘 Tap-to-Reveal envelope
- 📸 Slideshow carousel
- 🎶 Audio player
- ⭐ Animated “Reasons I Love You” list
- 🧚 Flying avatar system
  - Movements triggered by scroll events
  - Flight-path animations
  - Avatars glide, hover, bounce, wave
- 💜 Purple theme across all components
- ✨ Clickable hearts that burst on tap
- 📦 Framer Motion scroll-controlled animations

---

## 5. Technical Requirements

### Framework

- Next.js 14 (App Router)

### Styling

- Tailwind CSS
- Custom purple color palette:
  - `#A96CFF` soft purple
  - `#7A2BE2` deep purple
  - `#C89CFF` lavender
  - `#FFD6FF` soft pink
  - `#F5E1FF` warm white
  - `#D4B8FF` pastel violet
  - Accent: `#F6E27F` soft gold

### Animations

- Framer Motion
- Optional GSAP for avatar flight paths

### Components (must be modular)

- `Avatar.tsx`
- `ScrollRevealSection.tsx`
- `Slideshow.tsx`
- `HeartFloaters.tsx`
- `ConfettiTrigger.tsx`
- `EnvelopeReveal.tsx`
- `AudioPlayer.tsx`
- `ReasonsList.tsx`
- `FinalSurprise.tsx`

### Deployment

- Must be deployable to Vercel with zero configuration.

---

## 6. Content Placeholders

The developer must create placeholder variables for:

- `[CUTE_SHORT_MESSAGE]`
- `[FUNNY_MESSAGE]`
- `[ROMANTIC_MESSAGE]`
- `[EMOTIONAL_MESSAGE]`
- `[SPECIAL_REVEAL_MESSAGE]`
- `[SURPRISE_MESSAGE]`
- `[REASON_1]` to `[REASON_10]`
- `[AUDIO_FILE_URL]`
- `[PHOTO_URL_1]` etc.

---

## 7. Performance Requirements

- Must load in under 2 seconds on mobile.
- Smooth avatar animation at 60 FPS.
- Lazy-load heavy assets (images, audio).
- Fully responsive for mobile screens.

---

## 8. Accessibility

- Ensure readable contrast with purple theme.
- Audio player must have accessible controls.
- Tap targets must meet touch standards.

---

## 9. Deliverables

- Full Next.js project structured under `/app` directory.
- Modular components.
- All placeholders clearly documented.
- Build must run locally via `npm run dev`.
- Deployable to Vercel instantly.

---
