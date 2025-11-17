"use client";

import React from "react";

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  active?: boolean;
}

interface WorkflowProps {
  title: string;
  steps: WorkflowStep[];
}

const HealthcareWorkflow: React.FC<WorkflowProps> = ({ title, steps }) => {
  return (
    <section className="py-20 px-4 md:px-32 bg-[#0d0f12] text-white">
      <div className="container mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center text-gradient-primary mb-14">
          {title}
        </h2>

       
        <div
          className="
            relative 
            max-w-full lg:max-w-6xl mx-auto
            flex flex-col 
            sm:flex-col 
            md:flex-row md:items-center md:justify-between
          "
        >

         
          <div className="
            hidden md:block
            absolute left-24 right-[-180px] top-[30px] 
            h-[2.5px] bg-[#24b7d1] 
            -translate-y-1/2 
          " />

    
          {steps.map((step, idx) => {
            const isActive = step.active;
            const isGray = step.number >= 4;

            const borderColor = isActive
              ? "border-[#f6b341] text-[#f6b341]"
              : isGray
              ? "border-gray-500 text-gray-500"
              : "border-[#24b7d1] text-[#24b7d1]";

            return (
              <div
                key={idx}
                className="
                  relative 
                  flex flex-col items-center text-center
                  w-full sm:w-full md:w-[180px] 
                  mb-10 md:mb-0
                "
              >
            
                <div
                  className={`
                    w-[60px] h-[60px] 
                    rounded-full bg-[#0d0f12] 
                    border-2 flex items-center justify-center 
                    text-xl font-semibold z-0
                    ${borderColor}
                  `}
                >
                  {step.number}
                </div>

              
                <h4 className="mt-4 text-lg font-semibold text-gradient-primary">{step.title}</h4>

        
                <p className="text-gray-400 text-[13px] mt-1 leading-relaxed max-w-[420px] z-[0]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HealthcareWorkflow;
