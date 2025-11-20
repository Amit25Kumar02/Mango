"use client";

import { Clock, Award } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate =useNavigate();
  return (
    <section className="py-20 px-4 md:px-16 lg:px-40 bg-[#0d0d0f] text-white">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-gradient-primary font-bold text-center mb-3">
          {data.title}
        </h2>
        <p className="text-gray-400 text-center mb-12">{data.subtitle}</p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {data.items.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#1b1b1e] border border-[#2a2a2d] 
                rounded-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.3)]
                flex flex-col h-full
              "
            >
              {/* CONTENT */}
              <div className="flex flex-col flex-grow items-start">

                {/* Badge */}
                <span className="text-sm px-3 py-1 rounded-full bg-yellow-700/20 text-yellow-400 border border-yellow-600/30">
                  {item.courses} Courses
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gradient-primary mt-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg mt-2 leading-relaxed h-full ">
                  {item.description}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-2 mt-6 text-gray-300 text-base ">
                  <Clock size={16} className="text-gray-400" />
                  {item.duration}
                </div>

                {/* Certificate */}
                {item.certificate && (
                  <div className="flex items-center gap-2 text-gray-300 text-base mt-3 ">
                    <Award size={16} className="text-gray-400" />
                    Certificate
                  </div>
                )}
              </div>

              {/* BUTTON ALWAYS BOTTOM */}
              <button
               onClick={() => navigate("/questionnaire/training")}
                className="
                  w-full mt-6 bg-gradient-primary border border-[#3a3a3d]
                  transition py-3 rounded-xl text-sm font-medium
                "
              >
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
