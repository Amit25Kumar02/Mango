"use client";

import { Clock, Award } from "lucide-react";
import React from "react";

interface PathItem {
  courses: number;
  title: string;
  description: string;
  duration: string;
  certificate: boolean;
}

interface LearningPathsProps {
  data: {
    title: string;
    subtitle: string;
    items: PathItem[];
  };
}

const LearningPaths: React.FC<LearningPathsProps> = ({ data }) => {
  return (
    <section className="py-20 px-4 md:px-32 bg-[#0d0d0f] text-white">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-2xl md:text-4xl text-gradient-primary font-bold text-center mb-3">
          {data.title}
        </h2>

        <p className="text-gray-400 text-center mb-12">
          {data.subtitle}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#1b1b1e] border border-[#2a2a2d] rounded-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            >
              {/* Badge */}
              <span className="text-xs px-3 py-1 rounded-full bg-yellow-700/20 text-yellow-400 border border-yellow-600/30">
                {item.courses} Courses
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gradient-primary mt-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>

              {/* Info row */}
              <div className="flex items-center gap-6 mt-6 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="text-gray-400" size={16} />
                  {item.duration}
                </div>

                {item.certificate && (
                  <div className="flex items-center gap-2">
                    <Award className="text-gray-400" size={16} />
                    Certificate
                  </div>
                )}
              </div>

              {/* Button */}
              <button className="w-full mt-6 border border-[#3a3a3d] hover:bg-[#222225] transition py-2 rounded-xl text-sm font-medium">
                View Track Details
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningPaths;
