import React from "react";

interface SafetyMarketItem {
  title: string;
  percentage: string | number;
  subText: string;
   color?: string;
}

interface SafetyMarketImpactProps {
  data: {
    title: string;
    subtitle: string;
    items: SafetyMarketItem[];
  };
}

const SafetyMarketImpact: React.FC<SafetyMarketImpactProps> = ({ data }) => {
  return (
    <section className="relative py-20 px-4 md:px-16 bg-gradient-to-b from-[#080606] via-[#080606] to-[#000000] text-center text-white">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
          {data.title}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg mb-12">
          {data.subtitle}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#070606]/60 border border-[#070606] rounded-xl py-8 px-6 text-center shadow-[0_0_30px_rgba(255,115,0,0.08)] hover:shadow-[0_0_35px_rgba(255,115,0,0.15)] transition"
            >
              <div className={`text-4xl md:text-5xl font-extrabold mb-2 ${item.color ?? "text-orange-500"}`}>
                {item.percentage}
              </div>

              <div className={`font-medium mb-1`}>
                {item.title}
              </div>

              <div className={`text-sm ${item.color ?? "text-orange-500"}`}>
                {item.subText}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SafetyMarketImpact;
