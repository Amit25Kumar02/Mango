"use client";

import { ArrowRight, BarChart3, Activity, TrendingUp, Users, Brain } from "lucide-react";
import { motion } from "framer-motion";

// Recharts
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

// Dynamic icon map
const Icons: any = {
  TrendingUp,
  Users,
  Activity,
  BarChart3,
};

const AnalyticsHero = ({ content }: any) => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#0c0f1a] text-white py-16 md:py-20 px-4 sm:px-4 md:px-32 -mb-32">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Tag */}
          <span className="px-4 py-1 text-sm rounded-full bg-[#1b2538] text-cyan-300 border border-cyan-400/20 inline-block">
            {content.tag}
          </span>

          {/* Heading + Highlight */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-6">
            {content.title.split(" ").map((word: string, i: number) => (
              <span
                key={i}
                className={`${content.highlight.includes(word.replace(/[^a-zA-Z]/g, ""))
                    ? "text-cyan-400"
                    : ""
                  }`}
              >
                {word + " "}
              </span>
            ))}
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            {content.buttons?.map((btn: any, index: number) => (
              <button
                key={index}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (btn.link) navigate(btn.link);
                }}
                className={`px-2 py-2 rounded-xl font-semibold transition flex items-center justify-center gap-2 w-full sm:w-auto ${index === 0
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                    : "bg-[#141a28] hover:bg-[#1c2335] border border-cyan-500/30 text-cyan-300"
                  }`}
              >
                {btn.label || btn} <ArrowRight size={18} />
              </button>
            ))}

          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-4 md:gap-6 mt-14">
            {content.stats.map((stat: any, i: number) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-extrabold text-cyan-400">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ANALYTICS CARD */}
        <div className="relative w-full">

          {/* Floating Icon */}
          <div className="absolute -top-4 right-2 sm:-top-6 sm:-right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg z-20">
            <BarChart3 size={28} color="white" />
          </div>

          {/* Card */}
          <div className="w-full bg-[#131c2e] p-6 sm:p-8 rounded-3xl border border-cyan-500/10 shadow-lg relative">

            <h3 className="text-xl font-bold mb-4">{content.chartData.title}</h3>

            {/* Chart Section */}
            <div className="bg-[#0f1626] p-5 sm:p-6 rounded-xl">
              <div className="flex justify-between text-sm text-gray-300 mb-4">
                <span>{content.chartData.subTitle}</span>
                <span className="text-green-400">{content.chartData.growth}</span>
              </div>

              <div className="w-full h-48 sm:h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={content.chartData.data}>
                    <XAxis dataKey="month" stroke="#8792a1" />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      fill="url(#colorCyan)"
                      radius={[6, 6, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="colorCyan" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2ad4ff" />
                        <stop offset="100%" stopColor="#0088cc" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
              {content.chartData.metrics.map((m: any, i: number) => {
                const IconComponent = Icons[m.icon];

                return (
                  <div
                    key={i}
                    className="bg-[#0e1522] p-4 sm:p-5 rounded-xl border border-cyan-500/10"
                  >
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                      {IconComponent && (
                        <IconComponent
                          size={18}
                          className={m.color || "text-green-400"}
                        />
                      )}
                      {m.label}
                    </div>

                    <p className="text-green-400 text-md sm:text-md font-bold">
                      {m.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Floating Pink Icon */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 sm:-bottom-6 left-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-pink-500 flex items-center justify-center shadow-lg"
            >
              <Brain size={26} color="white" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsHero;
