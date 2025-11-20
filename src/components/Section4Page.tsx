"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle as Tick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Section4Item {
  icon?: React.ElementType;
  company: string;
  category?: string;
  challenge: string;
  solution: string;
  timeline?: string;
  results: string[];
  button?: { label: string; link?: string }[];
}

interface Section4Content {
  title: string;
  description: string;
  data: Section4Item[];
}

interface Props {
  content: {
    section4?: Section4Content;
  };
}

const Section4Page: React.FC<Props> = ({ content }) => {
  const navigate = useNavigate();
  if (!content?.section4) return null;

  const section = content.section4;

  // 📌 Dynamic tallest height
  const descRefs = React.useRef<HTMLParagraphElement[]>([]);
  const [maxHeight, setMaxHeight] = React.useState<number>(0);

  const calculateHeights = () => {
    const heights = descRefs.current.map((el) => el?.offsetHeight || 0);
    setMaxHeight(Math.max(...heights));
  };

  // 🔥 Calculate when content loads
  React.useEffect(() => {
    calculateHeights();
  }, [content]);

  // 🔥 Recalculate on window resize (VERY IMPORTANT for responsive)
  React.useEffect(() => {
    const handleResize = () => {
      setTimeout(() => calculateHeights(), 100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative container mx-auto px-4 sm:px-4 lg:px-44 py-16">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl md:px-32 font-bold text-gradient-primary mb-4">
          {section.title}
        </h2>
        <p className="text-xl text-black max-w-3xl mx-auto">
          {section.description}
        </p>
      </motion.div>

      {/* GRID */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-${
          section.data.length > 4 ? 3 : section.data.length
        } gap-6`}
      >
        {section.data.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl p-6 border border-primary/40 bg-[#21253F] 
              hover:bg-[#21253F] shadow-lg transition-all duration-300 
              flex flex-col h-full"
          >
            <div className="flex-1 flex flex-col">

              {/* Category */}
              {story.category && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-gradient-primary/20 text-gradient-primary mb-3">
                  {story.category}
                </span>
              )}

              {/* Company */}
              <p className="text-xl font-bold text-gradient-primary mb-3 min-h-[60px] flex items-center">
                {story.company}
              </p>

              {/* Challenge + Solution */}
              <div className="flex-1 mb-3">
                <p
                  ref={(el) => {
                    if (el) descRefs.current[index] = el;
                  }}
                  style={{
                    height: maxHeight ? `${maxHeight}px` : "auto",
                    transition: "height 0.2s ease",
                  }}
                  className="text-white text-sm leading-relaxed overflow-hidden"
                  
                >
                  {story.challenge}. {story.solution}
                </p>
              </div>

              {/* Results */}
              <div className="flex flex-col h-full gap-2 mb-3">
                {story.results.map((result, i) => (
                  <span key={i} className="text-white text-sm flex  gap-2">
                    <Tick className="w-4 h-4 text-green-500 mt-0.5" />
                    {result}
                  </span>
                ))}
              </div>

              {/* Timeline */}
              {story.timeline && (
                <p className="text-sm font-semibold text-white mt-2">
                  <span className="font-bold">Timeline:</span> {story.timeline}
                </p>
              )}
            </div>

            {/* Button */}
            {story.button && (
              <div className="mt-6">
                {(Array.isArray(story.button) ? story.button : [story.button]).map(
                  (btn, i) => (
                    <Button
                      key={i}
                      className="bg-gradient-primary text-white font-semibold w-full"
                      onClick={() => {
                        if (btn.link) {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          navigate(btn.link);
                        }
                      }}
                    >
                      {btn.label}
                    </Button>
                  )
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section4Page;
