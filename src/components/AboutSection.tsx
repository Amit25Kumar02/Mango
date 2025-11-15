"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Target, Rocket, Shield } from "lucide-react";
import CountingNumber from "./ui/countingNumber";
import heroBg from "@/assets/code14.mp4";

// const CountingNumber = ({ target, suffix = "", duration = 1200, isInView }: {
//   target: number;
//   suffix?: string;
//   duration?: number;
//   isInView: boolean;
// }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isInView) return;

//     let start = 0;
//     let raf = 0 as number | undefined as unknown as number;
//     let startTs: number | null = null;

//     const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

//     const step = (ts: number) => {
//       if (startTs === null) startTs = ts;
//       const elapsed = ts - startTs;
//       const progress = Math.min(elapsed / duration, 1);
//       const eased = easeOutCubic(progress);
//       const current = Math.floor(start + (target - start) * eased);
//       setCount(current);
//       if (progress < 1) {
//         raf = requestAnimationFrame(step);
//       } else {
//         setCount(target);
//       }
//     };

//     raf = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(raf);
//   }, [target, duration, isInView]);

//   return <>{count}{suffix}</>;
// };

export const AboutSection = () => {
  // Refs for animation triggers
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  // Features list
  const features = [
    { icon: Brain, title: "Domain Expertise", description: "Elite IT talent consulting and placement across LifeScience and enterprise sectors" },
    { icon: Target, title: "Integrated Offering", description: "AI product development + talent development under one roof" },
    { icon: Rocket, title: "Compliance-First", description: "Built with Industry based regulations and guidelines like HIPAA, FDA, EMA standards" },
    { icon: Shield, title: "Speed & Scale", description: "Enterprise-grade solutions delivered fast" }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20"
    >
      {/* <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src={heroBg}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 from-background/20 via-background/40 to-background/80" />
      </div> */}

      {/* <div className="absolute inset-0">
        ... (ALL YOUR MOTION SHAPES KEPT HERE EXACTLY)
        (Not removing any line, leaving untouched)
      </div> */}

      {/* Subtle animated dots background */}
      <div className="absolute inset-0 bg-animated-dots opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >

            {/* <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary"
            >
              Transforming Businesses with{" "}
              <span className="text-gradient-primary">Intelligent Solutions</span>
            </motion.h2> */}


            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 backdrop-blur-md border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-md font-medium text-gradient-primary">
                About Mango Analytics
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 leading-snug"
            >
              Empowering AI, Enterprises & Professionals with AI Excellence
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-black mb-10 leading-relaxed"
            >
              We partner with startups and enterprises to solve their toughest challenges...
            </motion.p>

            {/* STATS */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >

              {/* Stat 1 */}
              <div className="hover-gradient text-center p-4 rounded-lg backdrop-blur-md border border-primary/20">
                <div className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-1">
                  <CountingNumber target={500} suffix="+" isInView={statsInView} />
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  Projects Completed
                </div>
              </div>

              {/* Stat 2 */}
              <div className="hover-gradient text-center p-4 rounded-lg backdrop-blur-md border border-primary/20">
                <div className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-1">
                  <CountingNumber target={98} suffix="%" isInView={statsInView} />
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>

            </motion.div>
          </motion.div>

          {/* RIGHT FEATURE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                className="card-interactive hover-gradient p-4 sm:p-6 rounded-xl flex items-center gap-4"
              >
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gradient-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-black text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="relative flex items-center justify-center h-14 w-14 sm:h-20 sm:w-20 rounded-lg bg-gradient-primary">
                  <div className="absolute inset-0 rounded-lg bg-gradient-primary animate-pulse-glow opacity-30" />
                  <feature.icon className="h-7 w-7 sm:h-10 sm:w-10 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
