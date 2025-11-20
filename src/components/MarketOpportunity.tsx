import React from "react";

interface MarketItem {
  title: string;
  percentage: string | number;
  subText: string;
}

interface MarketOpportunityProps {
  data: {
    title: string;
    subtitle: string;
    items: MarketItem[];
  };
}

const MarketOpportunity: React.FC<MarketOpportunityProps> = ({ data }) => {
  return (
    <section className="relative py-20 px-4 md:px-16 bg-gradient-to-b from-[#120b17] via-[#1b0f24] to-[#120b17] text-center text-white">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
          {data.title}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg mb-12">
          {data.subtitle}
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#22152c]/60 border border-[#3a2448] rounded-2xl py-10 px-6 text-center shadow-[0_0_30px_rgba(162,89,255,0.08)] hover:shadow-[0_0_35px_rgba(162,89,255,0.15)] transition"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-gradient-primary mb-2">
                {item.percentage}
              </div>

              <div className="text-gray-200 font-medium mb-1">
                {item.title}
              </div>

              <div className="text-sm text-gradient-primary">
                {item.subText}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MarketOpportunity;
