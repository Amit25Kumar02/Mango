"use client";

import { motion } from "framer-motion";
import { CheckCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CorporateHeroContent {
  domain: string;
  title: string;
  subtitle?: string;
  description: string;
  buttons: string[];
}

export default function CorporateTrainingHero({
  content,
}: {
  content: CorporateHeroContent;
}) {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#0a0a0c] -mb-28 py-20 px-6 md:px-8 lg:px-60 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* TOP BADGE */}
          <div className="inline-flex bg-[#1a1a1e] border border-gradient-primary text-gradient-primary text-xs font-semibold px-4 py-1 rounded-full">
            {content.domain}
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Upskilling</span>{" "}
            <span className="text-gradient-primary">enterprise teams</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            {content.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            {content.buttons?.map((btn: any, idx) => (
              <Button
                onClick={() => {
                  if (btn.link) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(btn.link);
                  }
                }}
                key={idx}
                variant={idx === 0 ? "hero" : "cyber"}
                className={`px-6 py-3 ${idx === 0 ? "text-white" : "text-white"
                  }`}
              >
                {btn.label || btn}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#141416] border border-[#2d2d32] rounded-3xl p-10 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Building2 size={22} className="text-primary" />
            <h3 className="text-xl font-semibold text-gradient-primary">Enterprise-Ready Training</h3>
          </div>

          <ul className="space-y-5">
            {[
              "Custom curriculum development",
              "On-site and remote delivery",
              "Progress tracking and analytics",
              "Ongoing support and mentorship",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle size={20} className="text-primary " />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
