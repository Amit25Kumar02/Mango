import React from "react";
import {
  BrainCircuit,
  BookOpen,
  BarChart3,
  Users
} from "lucide-react";

interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
  status: "Live in Beta" | "Coming Soon";
}

interface PlatformCapabilitiesProps {
  data: {
    title: string;
    items: CapabilityItem[];
  };
}

const iconMap: Record<string, JSX.Element> = {
  brain: <BrainCircuit size={32} className="text-blue-400" />,
  book: <BookOpen size={32} className="text-blue-400" />,
  chart: <BarChart3 size={32} className="text-blue-400" />,
  users: <Users size={32} className="text-blue-400" />,
};

const PlatformCapabilities: React.FC<PlatformCapabilitiesProps> = ({ data }) => {
  return (
    <section className="py-24 bg-[#0e0e11] text-white px-4 md:px-8">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          {data.title}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1b1f] border border-[#2e2f36] rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(0,0,0,0.6)] transition"
            >
              {/* ICON + STATUS IN SAME LINE */}
              <div className="flex justify-between items-center mb-4">
                <div>{iconMap[item.icon]}</div>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    item.status === "Live in Beta"
                      ? "bg-green-600/10 text-green-400 border border-green-600/30"
                      : "bg-yellow-600/10 text-yellow-400 border border-yellow-600/30"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformCapabilities;
