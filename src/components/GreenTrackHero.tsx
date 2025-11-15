"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";

interface HeroTag {
  label: string;
  color: string;
}

interface HeroStats {
  percentage: number;
  expectedLaunch: string;
  pilotPartners: string;
  teamSize: string;
}

interface GreenTrackHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    tags: HeroTag[];
    stats: HeroStats;
  };
}

const GreenTrackHero: React.FC<GreenTrackHeroProps> = ({ data }) => {
  return (
    <section className="py-20 bg-[#0b0d12] text-white -mb-32">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          {/* Back Link */}
          <a href="/" className="text-green-300 hover:underline text-sm mb-6 flex items-center gap-2  -mt-10">
            <ArrowLeft size={16} /> Back to Labs
          </a>

          {/* Tags */}
          <div className="flex gap-3 mb-4">
            {data.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-sm rounded-full border ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-2 md:px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-semibold">
              Request Early Access
            </button>

            <button className="px-4 md:px-6 py-3 bg-[#14161b] border border-[#2a2d33] hover:bg-[#1b1d23] rounded-xl font-semibold text-green-300">
              View Roadmap
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – STATS CARD */}
        <div className="rounded-3xl p-10 bg-gradient-to-br from-[#13321e] via-[#2a2920] to-[#2d1d0f] shadow-xl">

          {/* % */}
          <h2 className="text-4xl font-bold text-green-400 text-center mb-3">
            {data.stats.percentage}%
          </h2>

          <p className="text-gray-300 text-center mb-10">
            Development Complete
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-y-8 text-sm">

            <div className="text-gray-300">Expected Launch</div>
            <div className="text-white font-semibold text-right">
              {data.stats.expectedLaunch}
            </div>

            <div className="text-gray-300">Pilot Partners</div>
            <div className="text-white font-semibold text-right">
              {data.stats.pilotPartners}
            </div>

            <div className="text-gray-300">Family Size</div>
            <div className="text-white font-semibold text-right">
              {data.stats.teamSize}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenTrackHero;
