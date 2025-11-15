import React from "react";

interface BetaResultItem {
  value: string | number;
  title: string;
  subText: string;
}

interface BetaTestingResultsProps {
  data: {
    title: string;
    subtitle: string;
    items: BetaResultItem[];
  };
}

const BetaTestingResults: React.FC<BetaTestingResultsProps> = ({ data }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0e1a] via-[#0f1222] to-[#120c1f] text-white text-center">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {data.title}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-16">
          {data.subtitle}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#111523]/60 border border-[#1f2333] rounded-2xl py-12 px-6 shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_30px_rgba(0,0,0,0.35)] transition"
            >
              <div className="text-4xl font-extrabold text-blue-400 mb-3">
                {item.value}
              </div>

              <div className="text-gray-200 font-medium mb-2">
                {item.title}
              </div>

              <div className="text-sm text-green-400">
                {item.subText}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BetaTestingResults;
