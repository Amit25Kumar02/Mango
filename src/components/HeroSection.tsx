import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, User, Zap } from 'lucide-react';
// import heroBg from '@/assets/hero-bg.jpg';
import heroBg from '@/assets/herovideo.mp4';
import CountingNumber from './ui/countingNumber';
import TypingText from './ui/TypingText';
import poster from "@/assets/poster.jpg"


export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const texts = [
    { main: "Connecting the Dots - Building the Future", second: "AI Innovation" },
    // {main: "Technology Meets Nature", second: "AI"},
    // {main: "Empowering Traditions with Innovation", second:"AI transformation"},
    // {main: "Breaking Barriers, Reaching New Heights"},
    // {main: "Scaling Heights, Building Dreams"}
  ];

  const [displayedText, setDisplayedText] = useState("Redefining Intelligence");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [loaded, setLoaded] = useState(false)

  // useEffect(() => {
  //   if (textIndex < texts.length) {
  //     const currentText = texts[textIndex].main;
  //     if (charIndex < currentText.length) {
  //       const timer = setTimeout(() => {
  //         setDisplayedText((prev) => prev + currentText[charIndex]);
  //         setCharIndex((prev) => prev + 1);
  //       }, 50); // Adjust typing speed here
  //       return () => clearTimeout(timer);
  //     } else {
  //       const timer = setTimeout(() => {
  //         setTextIndex((prev) => (prev + 1) % texts.length); // Loop back to the start
  //         setCharIndex(0);
  //         setDisplayedText(""); // Clear text for next one
  //       }, 500); // Pause before showing the next text
  //       return () => clearTimeout(timer);
  //     }
  //   }
  // }, [textIndex, charIndex, texts]);
  return (
    <>
      <section
        ref={ref}
        id="home"
        className="relative h-screen flex justify-center overflow-hidden pt-20"
      >
        {/* Background Video */}
        {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      > */}
        <div className="absolute inset-0 z-0 ">
          <video
            className="w-full h-full object-cover opacity-20 pointer-events-none transition-opacity duration-1000"
            src={heroBg}
            autoPlay
            muted
            preload="metadata"
            poster={poster}
            onLoadedData={() => setLoaded(true)}
            style={{
              opacity: loaded ? 0.8 : 0,
              transition: "opacity 0.2s ease-in-out",
            }}
            loop
            playsInline
            aria-hidden="true"
          />

          <div className="absolute inset-0 pointer-events-none bg-black/20 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        {/* </div> */}

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-surface/20 backdrop-blur-md border border-primary/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-gradient-primary">
              Next-Generation AI Solutions
            </span>
          </motion.div> */}

            {/* Main Heading */}
            {/* <motion.h1 
                      className="text-5xl md:text-7xl font-bold mb-6 text-glow text-black"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 1.2,
                        type: "spring",
                        stiffness: 100 
                      }}
                    >
                       {displayedText}
                    </motion.h1> */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100, duration: 0.8 }}
              className="text-2xl md:text-6xl font-bold text-balance mb-2 md:mb-6 leading-tight transform-3d"
            >
              <span className="text-gradient-primary inline-block transform hover:scale-105 transition-all duration-500 pb-2 hover-lift">
                {/* Transform your Business */}
                {displayedText}
              </span>
              <br />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-2 md:mb-4 text-balance"
            >
              <span className="text-foreground">
                {/* Transform your Business */}
                (Data + AI):
              </span>
              <br />
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-2 md:mb-4 text-balance"
            >
              <span className="text-foreground">
                {/* Transform your Business */}
                Unlocking Infinite Possibilities
              </span>
              <br />
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-md md:text-lg text-white mb-2 md:mb-8 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up"
            >
              We help businesses harness the power of AI — from strategy to deployment — delivering real results through innovation, compliance, and expertise. From building cutting-edge AI solutions to training tomorrow's AI leaders, we're redefining what's possible.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button variant="glass" size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:bg-gradient-primary h-10 rounded-md has-[>svg]:px-4 text-white hover:scale-105 animate-glow transition-all duration-300 border-glow px-8 py-3 text-lg font-semibold animate-fade-in-up" onClick={() => window.open('https://calendly.com/mangoanalytics-ai/30min', '_blank')}>
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:bg-gradient-primary h-10 rounded-md has-[>svg]:px-4 text-white hover:scale-105 animate-glow transition-all duration-300 border-glow px-8 py-3 text-lg font-semibold animate-fade-in-up" onClick={() => window.open('https://calendly.com/mangoanalytics-ai/30min', '_blank')}>
                <Zap className="mr-2 h-5 w-5" />
                Free Consultation
              </Button>
              <Button variant="glass" size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:bg-gradient-primary h-10 rounded-md has-[>svg]:px-4 text-white hover:scale-105 animate-glow transition-all duration-300 border-glow px-8 py-3 text-lg font-semibold animate-fade-in-up" onClick={() => window.open("/about/contact")}>
                <User className="mr-2 h-5 w-5" />
                Join Training Program
              </Button>
            </motion.div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute hidden md:block bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-lg bg-black/20 backdrop-blur-md shadow-[0_0_20px_rgba(200,200,200,0.4)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFD447"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </motion.div>



      </section>
    </>
  );
};