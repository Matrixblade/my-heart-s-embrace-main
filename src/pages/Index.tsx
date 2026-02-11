import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";
import { Heart, Sparkles, Star } from "lucide-react";

const loveLetter = `Tum mere liye woh ehsaas ho,
jo lafzon mein bayan nahi hota...
Tum woh dhoop ho jo andheron mein bhi
dil ko roshan kar deti ho.

Tumhari hansi mein woh jadoo hai,
jo har gham ko bhula de...
Tumhari aankhon mein woh duniya hai,
jahan mein hamesha rehna chahta hoon.

Tum sirf meri mohabbat nahi,
tum meri puri kaaynat ho. ❤️`;

const reasons = [
  { icon: "✨", text: "Tumhari hansi sun ke duniya ruk jaati hai", special: false },
  { icon: "🌙", text: "Tum meri sabse khoobsurat raat ho", special: false },
  { icon: "🌹", text: "Tumhare bina har din adhoora lagta hai", special: false },
  { icon: "💫", text: "Tum meri har dua ka jawaab ho", special: false },
  { icon: "🦋", text: "Tumhari baatein sunna meri favourite aadat hai", special: false },
  { icon: "🔥", text: "Tumne mujhe pyaar ka asli matlab sikhaya", special: false },
  { icon: "❤️", text: "Sach bataun… jitna sochta hoon ki main tumse kyun pyaar karta hoon, utna hi phas jaata hoon. Shayad isliye kyunki iska koi reason hai hi nahi. I don't know why I fell in love with you… but I know I did. And it feels right.", special: true },
];

const memories = [
  { title: "Phir Ek Din", desc: "Pata nahi kaise, tumhari aadat si ho gayi. Aur tab samajh aaya — yeh dosti thodi si zyada ho chuki hai." },
  { title: "Pehla Ehsaas", desc: "Jab samjha ki tum sirf koi nahi, tum sab kuch ho." },
  { title: "Aaj Tak", desc: "Har din tumse zyada pyaar hota ja raha hai." },
];

const Index = () => {
  const [started, setStarted] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = useCallback(() => {
    setStarted(true);
    // Attempt autoplay soft piano
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />

      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto">
        <source
          src="https://cdn.pixabay.com/audio/2024/11/29/audio_d06fcfe1dc.mp3"
          type="audio/mpeg"
        />
      </audio>

      <AnimatePresence mode="wait">
        {!started ? (
          /* =================== HERO INTRO =================== */
          <motion.div
            key="hero"
            className="fixed inset-0 z-10 flex flex-col items-center justify-center px-6 bg-gradient-romantic"
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 1 } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center max-w-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                className="mb-8"
              >
                <Heart className="w-16 h-16 text-primary mx-auto animate-heart-beat" fill="currentColor" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="font-script text-4xl sm:text-5xl md:text-6xl text-primary text-glow-rose mb-6"
              >
                Hey Aradhya
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.2 }}
                className="font-body text-lg sm:text-xl text-secondary-foreground leading-relaxed mb-12 italic"
              >
                This is not just a website.
                <br />
                It's something I made <span className="text-accent text-glow-gold">only for you</span>.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleStart}
                className="btn-heart"
              >
                Open My Heart ❤️
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          /* =================== MAIN CONTENT =================== */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative z-10"
          >
            {/* ---- LOVE LETTER ---- */}
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
            >
              <Sparkles className="w-8 h-8 text-accent mb-6 animate-pulse-glow" />
              <h2 className="font-script text-3xl sm:text-4xl text-primary text-glow-rose mb-10">
                Mere Dil Ki Baat...
              </h2>
              <div className="max-w-xl text-center">
                <p className="font-body text-lg sm:text-xl leading-relaxed text-secondary-foreground whitespace-pre-line">
                  <TypewriterText text={loveLetter} speed={35} />
                </p>
              </div>
            </motion.section>

            {/* ---- REASONS I LOVE YOU ---- */}
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
            >
              <h2 className="font-script text-3xl sm:text-4xl text-accent text-glow-gold mb-16">
                Reasons I Love You
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
                {reasons.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.7 }}
                    className={`animate-float ${r.special ? "sm:col-span-2 lg:col-span-3" : ""}`}
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <div className={`bg-card border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 ${
                      r.special
                        ? "border-accent glow-gold-border bg-gradient-to-br from-card to-secondary"
                        : "border-border glow-border"
                    }`}>
                      <span className="text-3xl mb-3 block">{r.icon}</span>
                      <p className={`font-body text-secondary-foreground ${r.special ? "text-lg italic" : "text-base"}`}>{r.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ---- MEMORY TIMELINE ---- */}
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
            >
              <h2 className="font-script text-3xl sm:text-4xl text-primary text-glow-rose mb-16">
                Humari Kahani
              </h2>
              <div className="relative max-w-lg w-full">
                {/* Timeline line */}
                <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 timeline-line" />

                {memories.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.25, duration: 0.7 }}
                    className="relative pl-16 sm:pl-20 pb-12 last:pb-0"
                  >
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-6 top-1 w-4 h-4 rounded-full bg-primary glow-border" />
                    <h3 className="font-display text-xl text-accent text-glow-gold mb-2">{m.title}</h3>
                    <p className="font-body text-base text-muted-foreground">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ---- FINAL SECTION ---- */}
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
            >
              <Star className="w-10 h-10 text-accent mb-8 animate-pulse-glow" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-relaxed max-w-2xl mb-4">
                "No matter where life takes us,
              </h2>
              <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary text-glow-rose">
                you will always be my favorite place."
              </h2>

              {/* SURPRISE BUTTON */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-20"
              >
                {!showSurprise ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSurprise(true)}
                    className="text-muted-foreground text-sm font-body hover:text-primary transition-colors duration-300 border border-border rounded-full px-6 py-3"
                  >
                    ✨ A little surprise for you...
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="flex flex-col items-center gap-6"
                  >
                    <Heart className="w-20 h-20 text-primary animate-heart-beat" fill="currentColor" />
                    <p className="font-script text-3xl sm:text-4xl md:text-5xl text-primary text-glow-rose">
                      Will you be my Valentine forever?
                    </p>
                    <p className="font-body text-accent text-glow-gold text-xl mt-2">
                      — Tension na le tera hin hun tera hin rhunga, My Cupcake, Lovelightt, Sorumeito❤️✨
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
