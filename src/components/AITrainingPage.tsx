"use client";

import React from "react";
import {
  BrainCircuit,
  GraduationCap,
  Award,
  Sparkles
} from "lucide-react";

interface TrainingProps {
  data: {
    benefits?: {
      title?: string;
      list?: string[];
      ctaSubtitle?: string;
    };
    form?: {
      title?: string;
      fields?: any[];
      submitButton?: string;
    };
  };
}

const iconMap: Record<string, JSX.Element> = {
  "Comprehensive curriculum": (
    <BrainCircuit size={20} className="text-yellow-400" />
  ),
  "Expert instructors": (
    <GraduationCap size={20} className="text-yellow-400" />
  ),
  "Industry certification": <Award size={20} className="text-yellow-400" />,
  "Career advancement": <Sparkles size={20} className="text-yellow-400" />
};

const TrainingProgram: React.FC<TrainingProps> = ({ data }) => {
  if (!data) return null;

  const benefits = data.benefits;
  const form = data.form;

  return (
    <section className="w-full bg-gradient-to-br from-[#0c0d17] via-[#0f101c] to-[#141627] px-4 md:px-16 lg:px-16 py-20 text-white">

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 max-w-5xl mx-auto">

        {/* LEFT BENEFITS */}
        <div>
          <h3 className="text-xl font-semibold">{benefits?.title}</h3>

          <div className="space-y-5 mt-6">
            {benefits?.list?.map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-yellow-500/10 border border-yellow-600/20 rounded-full">
                  {iconMap[text] || <Sparkles size={20} className="text-yellow-400" />}
                </div>
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl backdrop-blur-xl">

          <h3 className="text-2xl font-semibold">{form?.title}</h3>
          <p className="text-gray-400 text-sm mb-8">{benefits?.ctaSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {form?.fields?.map((field, idx) => (
              <div key={idx} className={field.type === "textarea" ? "md:col-span-2" : ""}>

                {/* LABEL */}
                <label className="text-sm text-gray-300">{field.label} {field.required ? "*" : ""}</label>

                {/* INPUT */}
                {["text", "email"].includes(field.type) && (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 shadow-inner focus:ring-2 focus:ring-blue-400 transition"
                  />
                )}

                {/* SELECT */}
                {field.type === "select" && (
                  <div className="relative mt-2">
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 shadow-inner appearance-none focus:ring-2 focus:ring-blue-400 transition"
                    >
                      <option className="bg-[#1f1f2e] text-gray-300">{field.placeholder || "Select"}</option>
                      {field.options?.map((opt: string, i: number) => (
                        <option
                          key={i}
                          value={opt}
                          className="bg-[#1f1f2e] text-white"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>

                    {/* DROPDOWN ARROW */}
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                      ▼
                    </div>
                  </div>
                )}

                {/* CHECKBOX GROUP */}
                {field.type === "checkbox-group" && (
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-3 text-sm text-gray-300">
                    {field.options?.map((opt: string, i: number) => (
                      <label key={i} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-blue-500 h-4 w-4" />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}

                {/* TEXTAREA */}
                {field.type === "textarea" && (
                  <textarea
                    placeholder={field.placeholder}
                    className="w-full mt-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl h-32 resize-none text-white placeholder-gray-400 shadow-inner focus:ring-2 focus:ring-blue-400 transition"
                  />
                )}

              </div>
            ))}
          </div>

          {/* SUBMIT */}
          <button
            onClick={() => window.open("https://calendly.com/mangoanalytics-ai/30min", "_blank")}
            className="w-full mt-8 py-3 rounded-xl bg-gradient-primary text-white font-semibold shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            {form?.submitButton}
            <span>➜</span>
          </button>


        </div>
      </div>
    </section>
  );
};

export default TrainingProgram;
