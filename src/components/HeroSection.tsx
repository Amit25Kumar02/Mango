"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, User } from "lucide-react";
import heroBg from "@/assets/herovideo.mp4";
import poster from "@/assets/poster.jpg";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
    >


      <div className="absolute inset-0 z-0">

        {/*  Video Background */}
        <video
          className="w-full h-full object-cover opacity-20 pointer-events-none transition-opacity duration-1000"
          src={heroBg}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setLoaded(true)}
          style={{
            opacity: loaded ? 0.8 : 0,
          }}
        />


        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage:
              "url('/futuristic-human-and-ai-robot-hands-reaching-towar.jpg')",
          }}
        ></div>

        {/*  Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-black/20 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


        <div className="absolute left-10 top-1/4 opacity-20">
          <svg width="200" height="150">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>

            {[30, 50, 70, 90, 60, 80].map((h, i) => (
              <rect
                key={i}
                x={20 + i * 25}
                y={130 - h}
                width="15"
                height={h}
                fill="url(#chartGradient)"
                className="animate-bar-grow"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>

        <div className="absolute right-10 top-1/3 opacity-20">
          <svg width="180" height="180">
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>

            <circle
              cx="90"
              cy="90"
              r="12"
              fill="url(#networkGradient)"
              className="animate-node-pulse"
            ></circle>
            <circle
              cx="40"
              cy="40"
              r="8"
              fill="url(#networkGradient)"
              className="animate-node-pulse"
            ></circle>
            <circle
              cx="140"
              cy="40"
              r="8"
              fill="url(#networkGradient)"
              className="animate-node-pulse"
            ></circle>
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
          <div className="relative w-40 h-40">
            <svg width="160" height="160" className="animate-spin-slow">
              <circle cx="80" cy="80" r="70" stroke="#3b82f6" strokeWidth="2" fill="none" />
            </svg>

            <svg
              width="160"
              height="160"
              className="absolute inset-0 animate-spin-slow"
              style={{ animationDelay: "1s", animationDirection: "reverse" }}
            >
              <circle cx="80" cy="80" r="50" stroke="#10b981" strokeWidth="2" fill="none" />
            </svg>

            <svg
              width="160"
              height="160"
              className="absolute inset-0 animate-spin-slow"
              style={{ animationDelay: "2s" }}
            >
              <circle cx="80" cy="80" r="30" stroke="#06b6d4" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-blue-500 rounded-full animate-data-point" />
          <div className="absolute top-1/4 left-3/4 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-data-point" />
          <div className="absolute top-2/3 left-1/4 w-2.5 h-2.5 bg-green-500 rounded-full animate-data-point" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl md:max-w-3xl lg:max-w-4xl mx-auto px-4">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[27px] md:text-6xl font-bold leading-tight mt-0 md:-mt-14 text-white text-balance"
        >
          <span className="text-gradient-primary">Redefining Intelligence</span>
        </motion.h1>

        {/* Sub-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl mt-2 md:mt-8 text-white/80"
        >
          (Data + AI): <br />
          <span className="text-white">Unlocking Infinite Possibilities</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-md mdLtext-lg text-white/90 max-w-3xl mx-auto mt-2 md:mt-6"
        >
          We help businesses harness the power of AI — from strategy to deployment — delivering real results through innovation, compliance, and expertise. From building cutting-edge AI solutions to training tomorrow's AI leaders, we're redefining what's possible.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <Button
           onClick={() => navigate("questionnaire/demo")}
           variant="glass" size="sm" className="px-8 py-3 text-lg bg-white/20 hover:bg-gradient-primary text-white rounded-lg hover:scale-105 transition">
            Schedule a Demo <ArrowRight size={18} />
          </Button>

          <Button
           onClick={() => navigate("questionnaire/consultation")}
           variant="glass" size="sm" className="px-8 py-3 text-lg bg-white/20 hover:bg-gradient-primary backdrop-blur border border-white/30 text-white hover:scale-105">
            <Zap size={18} /> Free Consultation
          </Button>

          <Button
           onClick={() => navigate("questionnaire/training")}
           variant="glass" size="sm" className="px-8 py-3 text-lg bg-white/20 hover:bg-gradient-primary backdrop-blur border border-white/30 text-white hover:scale-105">
            <User size={18} /> Join Training Program
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute hidden md:block bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
