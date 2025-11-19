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
      className="py-10 md:mt-10 px-4 sm:px-6 lg:px-40 relative overflow-hidden"
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
        <div className="grid  gap-8 lg:gap-8 items-center">

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
              className="text-2xl md:text-3xl font-bold mb-6 text-gradient-primary"
            >
              Transforming Businesses with{" "}
              <span className="text-gradient-primary">Intelligent Solutions</span>
            </motion.h2> */}


            {/* Top Badge */}
            <div className="w-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="backdrop-blur-md border border-primary/30 rounded-full px-4 py-2 mb-6"
              >
                <span className="text-md font-medium text-gradient-primary">
                  About Mango Analytics
                </span>
              </motion.div>
            </div>


            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl md:px-16 font-bold text-balance text-center mb-6 text-black"
            >
              Empowering AI, Enterprises & Professionals with
              <span className="text-gradient-primary"> AI Excellence</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-4xl mx-auto text-center text-pretty leading-relaxed mb-4"
            >
              We partner with startups, and enterprises to solve their toughest challenges: from accelerating Market research to building enterprise-scale AI solutions, while nurturing the next generation of AI professionals.
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
                <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-gradient-primary mb-1">
                  <CountingNumber target={500} suffix="+" isInView={statsInView} />
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  Projects Completed
                </div>
              </div>

              {/* Stat 2 */}
              <div className="hover-gradient text-center p-4 rounded-lg backdrop-blur-md border border-primary/20">
                <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-gradient-primary mb-1">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon; 

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 80 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.15 }}
                  className="p-6 rounded-xl bg-[#21253F] hover:bg-[#293061] transition-all duration-300 flex flex-col items-center text-center gap-4"
                >
                  {/* ICON */}
                  <div className="relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-lg bg-gradient-primary shadow-md">
                    <div className="absolute inset-0 rounded-lg bg-gradient-primary animate-pulse-glow opacity-30" />
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gradient-primary mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-white text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>


        </div>
      </div>
    </section>
  );
};
