import React from "react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  data: {
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ data }) => {
  return (
    <section className="relative py-20 px-4 md:px-16 lg:px-32 bg-[#0c0c14] text-white">
      <div className="container mx-auto px-6 text-center">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-3">
          {data.title}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg mb-14">
          {data.subtitle}
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {data.steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1a1623] border border-[#2d2633] rounded-2xl h-fit py-10 px-8 text-left shadow-lg hover:shadow-xl transition relative"
            >
              {/* Step Number */}
              <div className="text-4xl md:text-5xl font-extrabold text-teal-300 mb-4">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-lg md:text-lg text-gradient-primary font-semibold mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
