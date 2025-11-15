import React from "react";
import { Clock } from "lucide-react";

interface DevelopmentItem {
  title: string;
  duration: string;
  status: "completed" | "in-progress" | "upcoming";
  dependsOn?: string | null;
}

interface DevelopmentNetworkProps {
  data: {
    title: string;
    items: DevelopmentItem[];
  };
}

const getStatusStyle = (status: string): string => {
  switch (status) {
    case "completed":
      return "bg-green-500/15 text-green-400 border border-green-500/40";
    case "in-progress":
      return "bg-orange-500/15 text-orange-400 border border-orange-500/40";
    case "upcoming":
      return "bg-gray-600/20 text-gray-400 border border-gray-400/30";
    default:
      return "bg-gray-700/30 text-gray-400 border border-gray-500/20";
  }
};

const DevelopmentNetwork: React.FC<DevelopmentNetworkProps> = ({ data }) => {
  return (
    <section className="relative py-20 bg-[#0f0f0f] text-white text-center z-0">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          {data.title}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl bg-[#1a1a1a]/70 border ${
                item.status === "completed"
                  ? "border-green-800"
                  : item.status === "in-progress"
                  ? "border-orange-800"
                  : "border-gray-700"
              } p-6 text-left shadow-[0_0_25px_rgba(255,115,0,0.05)] hover:shadow-[0_0_25px_rgba(255,115,0,0.1)] transition`}
            >
              {/* Duration + Status */}
              <div className="flex justify-between items-center mb-3">
                <span
                  className={`text-sm font-medium flex items-center gap-2 ${
                    item.status === "completed"
                      ? "text-green-400"
                      : item.status === "in-progress"
                      ? "text-orange-400"
                      : "text-gray-400"
                  }`}
                >
                  <Clock
                    size={16}
                    strokeWidth={2}
                    className={
                      item.status === "completed"
                        ? "text-green-400"
                        : item.status === "in-progress"
                        ? "text-orange-400"
                        : "text-gray-400"
                    }
                  />
                  {item.duration}
                </span>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide ${getStatusStyle(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Dependencies */}
              {item.dependsOn && (
                <p className="text-sm text-gray-400">
                  Depends on:{" "}
                  <span className="text-gray-300">{item.dependsOn}</span>
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DevelopmentNetwork;
