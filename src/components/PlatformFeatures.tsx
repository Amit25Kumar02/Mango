"use client";

import React from "react";
import {
  Leaf,
  BarChart3,
  ShieldCheck,
  Globe
} from "lucide-react";

// Map icon names to Lucide icons
const iconMap: Record<string, JSX.Element> = {
  leaf: <Leaf size={28} className="text-green-400" />,
  chart: <BarChart3 size={28} className="text-green-400" />,
  shield: <ShieldCheck size={28} className="text-green-400" />,
  globe: <Globe size={28} className="text-green-400" />,
};

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  badge: string;
  badgeColor?: string; // optional custom color
}

interface PlatformFeaturesProps {
  data: {
    title: string;
    items: FeatureItem[];
  };
}

const PlatformFeatures: React.FC<PlatformFeaturesProps> = ({ data }) => {
  return (
    <section className="py-24 px-4 md:px-32 bg-[#0e0e11] text-white">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gradient-primary mb-16">
          {data.title}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#151618] border border-[#151618] rounded-3xl p-10 ]"
            >
              {/* Icon */}
              <div className="mb-6">{iconMap[item.icon]}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gradient-primary mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Badge */}
              <span
                className={`px-4 py-1 text-sm rounded-full font-medium ${
                  item.badgeColor ?? "bg-green-700/20 text-green-400"
                }`}
              >
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
