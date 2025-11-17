"use client";

import React from "react";
import { motion } from "framer-motion";

interface SecurityPillar {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface SecurityContent {
  title: string;
  description: string;
  pillars: SecurityPillar[];
  standards: string[];
}

interface Props {
  content: {
    security?: SecurityContent;
  };
}

const SecuritySection: React.FC<Props> = ({ content }) => {
  if (!content?.security) return null;

  const security = content.security;

  return (
    <section className="relative w-full px-4 sm:px-4 lg:px-8 py-16">
      {/* Title + Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2
          className="text-4xl sm:text-4xl md:text-5xl font-bold text-gradient-primary mb-4"
          style={{ lineHeight: 1.2 }}
        >
          {security.title}
        </h2>

        <p className="text-lg sm:text-lg text-black max-w-3xl mx-auto leading-relaxed">
          {security.description}
        </p>
      </motion.div>

      {/* 2 Column Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

        {/* ---------------- Left Pillars ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {security.pillars?.map((p, index) => (
            <div
              key={index}
              className="flex items-start gap-4 sm:gap-5"
            >
              {/* Icon Box */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-600/20 flex items-center justify-center text-yellow-500 flex-shrink-0">
                {p.icon && <p.icon className="w-5 h-5 sm:w-6 sm:h-6" />}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gradient-primary mb-1">
                  {p.title}
                </h3>
                <p className="text-black/80 text-sm sm:text-base leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ---------------- Right Standards Checklist ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/30 p-5 sm:p-6 bg-white/70 backdrop-blur-md"
        >
          <div className="space-y-3 sm:space-y-4">
            {security.standards?.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-primary/20 px-4 py-3 sm:py-4 bg-white shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-black font-medium text-sm sm:text-base">
                  {s}
                </span>
                <span className="text-green-500 text-xl">✔</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SecuritySection;
