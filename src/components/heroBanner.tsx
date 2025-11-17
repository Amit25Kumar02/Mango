"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroBanner = ({ content }: any) => {
  const hasRightColumn = content.bannerImage || content.developmentProgress;

  return (
    <section className="container mx-auto px-4 sm:px-4 lg:px-32 py-12 z-50">
      <div
        className={`grid grid-cols-1 ${hasRightColumn ? "lg:grid-cols-2" : "lg:grid-cols-1"
          } gap-10 items-center`}
      >
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Title */}
          <h1
            className="text-2xl sm:text-2xl md:text-4xl font-bold text-gradient-primary mb-6 leading-tight"
          >
            {content.title}
          </h1>

          {/* Description */}
          <p className="text-[14px] sm:text-[14px] md:text-lg text-black leading-relaxed ">
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
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </Button>
              ))}
            </div>
          )}

          {/* Companies */}
          {content?.companies?.length > 0 && (
            <div className="text-sm text-black mb-10 mt-8 flex flex-col items-center">
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
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        {content.bannerImage && (
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
        )}

        {/* DEVELOPMENT PROGRESS (FULLY RESPONSIVE) */}
        {content.developmentProgress && (
          <div className="mx-auto w-full max-w-xl rounded-xl bg-gradient-to-br from-[#263a4d] to-[#29193d] p-6 shadow-lg border border-primary/20">
            {/* Top Row */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium">Project Progress</span>
              <span className="text-cyan-300 font-semibold">
                {content.developmentProgress.percentage}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 rounded-lg bg-white/10 mb-4 overflow-hidden">
              <div
                className="h-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-700"
                style={{
                  width: `${content.developmentProgress.percentage}%`,
                }}
              />
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 text-xs sm:text-sm text-gray-200 gap-32">

              {/* Expected Launch — always shown */}
              <div>
                <span className="block opacity-60">Expected Launch</span>
                <span className="font-semibold text-white">
                  {content.developmentProgress.expectedLaunch}
                </span>
              </div>

              {/* Show ONLY ONE: teamSize → OR compliance → OR VR Platforms */}
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
    </section>
  );
};

export default HeroBanner;
