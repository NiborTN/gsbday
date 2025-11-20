"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import SmartAvatar from "./components/SmartAvatar";
import ScrollRevealSection from "./components/ScrollRevealSection";
import HeartFloaters from "./components/HeartFloaters";
import Slideshow from "./components/Slideshow";
import AudioPlayer from "./components/AudioPlayer";
import FinalSurprise from "./components/FinalSurprise";
import ScrollIndicator from "./components/ScrollIndicator";
import ClickableHeart from "./components/ClickableHeart";
import { CONTENT } from "./lib/content";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax layers
  const bgLayer1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Distant stars
  const bgLayer2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]); // Mid-ground sparkles
  const bgLayer3 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]); // Foreground elements

  const smoothBg1 = useSpring(bgLayer1, { stiffness: 50, damping: 20 });
  const smoothBg2 = useSpring(bgLayer2, { stiffness: 60, damping: 20 });
  const smoothBg3 = useSpring(bgLayer3, { stiffness: 70, damping: 20 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Adjust threshold to trigger section changes slightly earlier
      const section = Math.floor(
        (scrollPosition + windowHeight * 0.4) / windowHeight
      );
      setCurrentSection(section);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-[#0f172a] px-4 sm:px-6"
    >
      {/* --- ENCHANTED FOREST BACKGROUND --- */}

      {/* Animated WebM Background - Erratic Position Jumps with Zoom */}
      <motion.div
        className="fixed z-0 pointer-events-none overflow-visible"
        style={{
          left: "50%",
          top: "50%",
          width: "180vw",
          height: "150vh",
          translateX: "-50%",
          translateY: "-50%",
          x: useTransform(
            scrollYProgress,
            [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
            ["0%", "-55%", "30%", "-75%", "25%", "-65%", "35%", "-55%"]
          ),
          y: useTransform(
            scrollYProgress,
            [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
            ["0%", "-14%", "8%", "-16%", "6%", "-12%", "12%", "-4%"]
          ),
          scale: useTransform(
            scrollYProgress,
            [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
            [0.9, 1.0, 0.9, 1.05, 0.95, 1.0, 0.95, 0.9]
          ),
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "350vw",
            height: "150vh",
            minWidth: "100vw",
            minHeight: "100vh",
            maxWidth: "none",
            maxHeight: "none",
            opacity: 0.7,
            objectFit: "fill",
          }}
        >
          <source src="/gsbday/background.webm" type="video/webm" />
        </video>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a]/50 via-transparent to-[#0a0e1a]/50"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0, 0.25, 0.5, 0.75, 1],
              [0.4, 0.2, 0.5, 0.3, 0.6]
            ),
          }}
        />
      </motion.div>

      {/* Animated Orbs & Fireflies Layer */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y: smoothBg2 }}
      >
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-emerald-500/10 rounded-full blur-[40px] md:blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-[60px] md:blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 md:w-80 md:h-80 bg-fuchsia-500/10 rounded-full blur-[50px] md:blur-[90px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        />

        {/* Fireflies */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`firefly-${i}`}
            className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-yellow-200 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 30, -30, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* --- SINGLETON AVATAR --- */}
      <SmartAvatar currentSection={currentSection} />

      {/* --- CONTENT SECTIONS --- */}

      {/* Section 0: Intro */}
      <ScrollRevealSection className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center relative"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-emerald-100 mb-4 md:mb-8 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] px-4"
            animate={{
              textShadow: [
                "0 0 15px rgba(16,185,129,0.5)",
                "0 0 30px rgba(16,185,129,0.8)",
                "0 0 15px rgba(16,185,129,0.5)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Happy Birthday!
          </motion.h1>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent mb-4 md:mb-8 drop-shadow-2xl px-4"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Gina
          </motion.h1>

          <motion.div
            className="text-emerald-200/80 text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-medium tracking-wide md:tracking-widest uppercase px-4"
            animate={{ y: [0, -5, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Birthday Wishes Just for You
          </motion.div>

          <div className="flex justify-center space-x-6">
            <ClickableHeart size={40} />
            <ClickableHeart size={32} />
            <ClickableHeart size={40} />
          </div>
        </motion.div>

        {currentSection === 0 && <ScrollIndicator />}
      </ScrollRevealSection>

      {/* Section 1: Cute Message */}
      <ScrollRevealSection className="z-10">
        <div className="text-center max-w-2xl mx-auto perspective-1000 px-4">
          <motion.div
            initial={{ rotateX: 20, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-200 mb-6 md:mb-10 drop-shadow-lg font-serif">
              Birthday Wishes
            </h2>
            <div className="bg-emerald-950/40 backdrop-blur-md rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-[0_0_40px_rgba(16,185,129,0.1)] border border-emerald-500/30 relative overflow-hidden group hover:border-emerald-400/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-lg sm:text-xl md:text-2xl text-emerald-50 leading-relaxed font-light relative z-10">
                {CONTENT.CUTE_SHORT_MESSAGE}
              </p>
            </div>
          </motion.div>
        </div>
      </ScrollRevealSection>

      {/* Section 2: Playful */}
      <ScrollRevealSection className="z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-200 mb-6 md:mb-10 font-serif"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            Birthday Prayer
          </motion.h2>
          <motion.div
            className="bg-purple-950/40 backdrop-blur-md rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.1)] border border-purple-500/30"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-purple-50 leading-relaxed mb-6 md:mb-8">
              {CONTENT.FUNNY_MESSAGE}
            </p>
          </motion.div>
        </div>
      </ScrollRevealSection>

      {/* Section 3: Emotional */}
      <ScrollRevealSection className="z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold text-purple-200 mb-10 font-serif">
            Heartfelt Birthday Wishes
          </h2>
          <div className="bg-indigo-950/40 backdrop-blur-md rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-2xl border border-indigo-400/30 relative overflow-hidden">
            <motion.div
              className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <p className="text-lg sm:text-xl md:text-2xl text-indigo-50 leading-relaxed mb-6 md:mb-8 relative z-10">
              {CONTENT.EMOTIONAL_MESSAGE}
            </p>
            <motion.div
              className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] relative z-10"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(139,92,246,0.5)",
                  "0 0 40px rgba(139,92,246,0.8)",
                  "0 0 20px rgba(139,92,246,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-3xl">💜</span>
            </motion.div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Section 4: Slideshow */}
      <ScrollRevealSection className="z-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-purple-200 mb-10 font-serif">
            24/25 Fav pic
          </h2>
          <Slideshow photos={CONTENT.PHOTOS} />
        </div>
      </ScrollRevealSection>

      {/* Section 5: Audio */}
      <ScrollRevealSection className="z-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-purple-200 mb-10 font-serif">
            Birthday Message for You
          </h2>
          <AudioPlayer audioUrl={CONTENT.AUDIO_FILE_URL} />
        </div>
      </ScrollRevealSection>

      {/* Section 6: Surprise */}
      <ScrollRevealSection className="z-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-purple-200 mb-10 font-serif">
            Birthday Surprise Ahead
          </h2>
          <FinalSurprise
            surpriseMessage={`${CONTENT.SURPRISE_MESSAGE}\n\n${CONTENT.SUMMONING_CARD}`}
          />
        </div>
      </ScrollRevealSection>

      {/* Section 7: Ending */}
      <ScrollRevealSection className="z-10">
        <HeartFloaters count={30} />
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-6xl font-bold text-purple-200 mb-10 font-serif">
            Until Next Time, Birthday Star
          </h2>

          <motion.div
            className="text-7xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💜✨🎂✨💜
          </motion.div>
        </div>
      </ScrollRevealSection>
    </main>
  );
}
