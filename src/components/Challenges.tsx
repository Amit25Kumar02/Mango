"use client";

import { motion } from "framer-motion";
import React from "react";

export const Challenges = () => {
  const data = [
    {
      title: "IT Infrastructure & Digital Transformation",
      desc: "Legacy systems, security vulnerabilities, and inefficient digital workflows holding businesses back.",
      lastLine: "85% of businesses struggle with outdated IT infrastructure",
    },
    {
      title: "Enterprise IT Strategy",
      desc: "Lack of strategic IT planning, cloud migration complexities, and technology integration issues.",
      lastLine: "73% of enterprises lack comprehensive IT strategy alignment",
    },
    {
      title: "IT Talent & Expertise Gap",
      desc: "Shortage of skilled IT professionals and need for specialized consulting expertise.",
      lastLine: "68% of companies face critical IT skills shortages",
    },
  ];

  // refs for title + description block separately
  const titleRefs = React.useRef<HTMLParagraphElement[]>([]);
  const descRefs = React.useRef<HTMLParagraphElement[]>([]);

  const [maxTitleHeight, setMaxTitleHeight] = React.useState(0);
  const [maxDescHeight, setMaxDescHeight] = React.useState(0);

  const calculateHeights = () => {
    const titles = titleRefs.current.map((el) => el?.offsetHeight || 0);
    const descs = descRefs.current.map((el) => el?.offsetHeight || 0);

    setMaxTitleHeight(Math.max(...titles));
    setMaxDescHeight(Math.max(...descs));
  };

  React.useEffect(() => {
    setTimeout(calculateHeights, 50);
  }, []);

  React.useEffect(() => {
    const onResize = () => setTimeout(calculateHeights, 100);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="challeges" className="py-12 px-4 sm:px-6 lg:px-48">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-[44px] font-bold text-black mb-6">
          Solving <span className="text-gradient-primary">IT Consulting's</span> Biggest Challenges
        </h2>

        <p className="text-xl text-black/80 max-w-4xl mx-auto">
          IT consulting faces unique hurdles—security, scalability, and ever-changing
          tech. We break through barriers to make technology seamless for your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="rounded-xl p-6 border border-primary/40 bg-[#21253F] flex flex-col h-full"
          >
            {/* TITLE equal height */}
            <p
              ref={(el) => el && (titleRefs.current[index] = el)}
              style={{ minHeight: `${maxTitleHeight}px` }}
              className="text-lg font-bold text-gradient-primary leading-snug mb-3"
            >
              {story.title}
            </p>

            {/* DESCRIPTION equal height */}
            <p
              ref={(el) => el && (descRefs.current[index] = el)}
              style={{ minHeight: `${maxDescHeight}px` }}
              className="text-[14px] leading-relaxed text-white/55"
            >
              {story.desc}
            </p>

            {/* LAST LINE at bottom */}
            <div className=" pt-2">
              <p className="text-secondary/55 text-sm leading-relaxed">
                {story.lastLine}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
