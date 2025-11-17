import React from "react";

interface BetaPhaseItem {
  value: string | number;
  label: string;
  subText: string;
}

interface BetaPhaseProps {
  data: {
    title: string;
    subtitle: string;
    items: BetaPhaseItem[];
  };
}

const BetaPhase: React.FC<BetaPhaseProps> = ({ data }) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#0b0d12] text-white -mb-32">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE — TEXT CONTENT */}
        <div className="flex flex-col justify-center">
          <a href="/" className="text-green-300 hover:underline text-sm mb-6 -mt-10">
            ← Back to Labs
          </a>

          <div className="flex gap-3 mb-4">
            <span className="px-2 py-1 text-sm rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/30">
              Beta Testing
            </span>

            <span className="px-2 py-1 text-sm rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/30">
              Education
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            EduMind AI
          </h1>

          <p className="text-gray-300 text-md leading-relaxed mb-8 max-w-xl">
            Personalized learning platform with adaptive AI tutoring systems that revolutionize education
            through intelligent, data-driven instruction.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="px-2 md:px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold">
              Join Beta Program
            </button>

            <button className="px-2 md:px-6 py-2 bg-[#14161b] border border-[#2a2d33] hover:bg-[#1b1d23] rounded-xl font-semibold text-blue-300">
              Try Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — BETA METRICS BOX */}
        <div className="rounded-3xl p-10 bg-gradient-to-br from-[#132548] via-[#1c2554] to-[#28163c] shadow-xl">
          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-300 text-center mb-2">
            {data.title}
          </h2>

          <p className="text-gray-300 text-center mb-10">
            {data.subtitle}
          </p>

          {/* 4 METRICS */}
          <div className="grid grid-cols-2 gap-y-4 text-center">

            {data.items.map((item, index) => (
              <div key={index}>
                <div className="text-2xl font-extrabold text-white mb-1">
                  {item.value}
                </div>

                <div className="text-gray-300 text-sm mb-1">
                  {item.label}
                </div>

                <div className="text-green-400 text-sm font-medium">
                  {item.subText}
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default BetaPhase;
