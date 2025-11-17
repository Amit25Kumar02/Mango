"use client";

import React from "react";

interface OrgItem {
  value: string;
  title: string;
  subtitle: string;
}

interface MetricItem {
  value: string;
  text: string;
}

interface TrustedOrganizationsProps {
  organizations: OrgItem[];
  metrics: MetricItem[];
}

const TrustedOrganizations: React.FC<TrustedOrganizationsProps> = ({
  organizations,
  metrics,
}) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#0e0e11] text-white text-center">
      <div className="container mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl text-gradient-primary font-bold mb-4">
          Trusted by Leading Organizations
        </h2>

        <p className="text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
          We've helped organizations of all sizes successfully implement AI training programs
        </p>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {organizations.map((item, index) => (
            <div
              key={index}
              className="bg-[#111215] border border-[#26272b] rounded-2xl p-10 shadow-lg"
            >
              <div className="text-5xl font-extrabold text-yellow-400 mb-2">
                {item.value}
              </div>
              <div className="text-xl font-semibold">{item.title}</div>
              <div className="text-gray-400 text-lg mt-1">{item.subtitle}</div>
            </div>
          ))}
        </div>

        {/* BOTTOM METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-5xl font-extrabold text-yellow-400 mb-2">
                {metric.value}
              </div>
              <p className="text-gray-300 max-w-xs mx-auto leading-relaxed">
                {metric.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedOrganizations;
