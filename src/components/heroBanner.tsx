"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HeroBanner = ({ content }: any) => {

  const applyExtraPadding =
    !content.bannerImage && !content.developmentProgress;

  const hasRightColumn =
    content.bannerImage ||
    content.title === "Upskilling enterprise teams" ||
    content.developmentProgress;

  return (
    <section className="container mx-auto px-4 sm:px-4 md:px-16 lg:px-32 py-12 z-10">
      <div
        className={`grid grid-cols-1 ${hasRightColumn ? "lg:grid-cols-2" : "lg:grid-cols-1"
          } gap-10 items-center`}
      >
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col items-center text-center ${applyExtraPadding ? "md:px-4" : ""
            }`}
        >
          {/* Domain Tag */}
          {content.domain && (
            <div className={`flex flex-wrap justify-center gap-6 mb-6 ${applyExtraPadding ? "md:px-8" : ""}`}>
              {content.domain.split(",").map((tag: string, i: number) => {
                const colors = [
                  "text-green-500 border-green-500",   
                  "text-yellow-500 border-yellow-500", 
                ];

                return (
                  <span
                    key={i}
                    className={`rounded-2xl px-2  border ${colors[i] || "text-primary border-primary"}`}
                  >
                    {tag.trim()}
                  </span>
                );
              })}
            </div>
          )}


          {/* Title */}
          <h1
            className={`text-2xl sm:text-4xl md:text-5xl font-bold text-gradient-primary mb-6 leading-tight ${applyExtraPadding ? "md:px-2" : "text-start"
              }`}
          >
            {content.title}
          </h1>

          {/* Description */}
          <p
            className={`text-[14px] sm:text-[14px] md:text-lg text-black leading-relaxed ${applyExtraPadding ? "md:px-4" : "text-start"
              }`}
          >
            {content.description}
          </p>

          {/* Buttons */}
          {content?.buttons?.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-8 justify-center w-full">
              {content.buttons.map((item: string, index: number) => (
                <Button
                  key={index}
                  variant={index === 0 ? "hero" : "cyber"}
                  className={`flex items-center justify-center ${index === 0 ? "text-white" : "text-black"
                    } w-full sm:w-auto`}
                >
                  {item}
                </Button>
              ))}
            </div>
          )}
        </motion.div>

        {/* RIGHT COLUMN — SPECIAL TRAINING CARD */}
        {content.title === "Upskilling enterprise teams" ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#121214] border border-[#2c2c2f] rounded-2xl p-8 shadow-xl max-w-lg w-full mx-auto"
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-yellow-400">
              Enterprise-Ready Training
            </h3>

            <ul className="space-y-4">
              {[
                "Custom curriculum development",
                "On-site and remote delivery",
                "Progress tracking and analytics",
                "Ongoing support and mentorship",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle size={18} className="text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          /* DEFAULT RIGHT IMAGE CODE */
          content.bannerImage && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="rounded-2xl overflow-hidden w-full">
                <img
                  src={content.bannerImage}
                  alt={content.title}
                  className="w-full h-[260px] sm:h-[350px] md:h-[450px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          )
        )}

        {/* DEVELOPMENT PROGRESS */}
        {content.developmentProgress && (
          <div className="mx-auto w-full max-w-xl rounded-xl bg-gradient-to-br from-[#263a4d] to-[#29193d] p-6 shadow-lg border border-primary/20">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium">Project Progress</span>
              <span className="text-cyan-300 font-semibold">
                {content.developmentProgress.percentage}%
              </span>
            </div>

            <div className="w-full h-3 rounded-lg bg-white/10 mb-4 overflow-hidden">
              <div
                className="h-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-700"
                style={{
                  width: `${content.developmentProgress.percentage}%`,
                }}
              />
            </div>

            <div className="grid grid-cols-2 text-xs sm:text-sm text-gray-200 gap-32">
              <div>
                <span className="block opacity-60">Expected Launch</span>
                <span className="font-semibold text-white">
                  {content.developmentProgress.expectedLaunch}
                </span>
              </div>

              {content.developmentProgress.teamSize ? (
                <div>
                  <span className="block opacity-60">Family Size</span>
                  <span className="font-semibold text-white">
                    {content.developmentProgress.teamSize} Members
                  </span>
                </div>
              ) : content.developmentProgress.compliance ? (
                <div>
                  <span className="block opacity-60">Compliance</span>
                  <span className="font-semibold text-white">
                    {content.developmentProgress.compliance}
                  </span>
                </div>
              ) : (
                <div>
                  <span className="block opacity-60">VR Platforms</span>
                  <span className="font-semibold text-white">
                    {content.developmentProgress.vrplatforms}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* COMPANIES LIST */}
      {content?.companies?.length > 0 && (
        <div className="text-sm text-black mb-10 mt-16 flex flex-col items-center">
          <p className="mb-3 text-primary tracking-wide font-medium">
            TRUSTED BY EXECUTIVES AT
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {content.companies.map((d: string, i: number) => (
              <span
                key={i}
                className="border border-primary/40 rounded-full px-3 py-2 text-sm sm:text-sm"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroBanner;
