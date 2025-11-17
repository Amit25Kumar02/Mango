"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import aman from "@/assets/aman.jpeg";

interface LeadershipProps {
  content: {
    leadership?: boolean;
  };
}

const LeadershipSection: React.FC<LeadershipProps> = ({ content }) => {
  // Back-end level hide
  if (!content.leadership) return null;

  // Local toggle for show/hide
  const [showLeadership, setShowLeadership] = useState(true);

  return (
    <>

      <div className="container mx-auto px-6 py-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showLeadership}
            onChange={() => setShowLeadership(!showLeadership)}
            className="w-4 h-4"
          />
          <span className="text-sm font-medium">
            Show / Hide Leadership Section
          </span>
        </label>
      </div>

      {/* Only render if toggle is ON */}
      {showLeadership && (
        <>

          <section className="relative container mx-auto sm:px-6 lg:px-8 ">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10 text-center"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col md:flex-row items-start gap-10 md:gap-20 max-w-4xl mx-auto p-8 rounded-3xl bg-white border border-primary/90 shadow-lg"
            >
              {/* PROFILE SIDEBAR */}
              <aside className="flex-shrink-0 mx-auto md:mx-0 text-center md:text-left">
                <div className="inline-block relative mb-6">
                  <img
                    src={aman}
                    alt="Aman Karki"
                    className="rounded-xl w-44 h-44 object-cover border-4 border-gradient-to-tr from-yellow-300 to-primary shadow-lg"
                  />
                  <span className="absolute right-2 bottom-2 block w-4 h-4 rounded-full bg-green-400 border-2 border-white"></span>
                </div>
                <div>
                  <h3 className="text-gradient-primary text-2xl font-bold mb-1">
                    Aman Karki
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Founder &amp; CEO <br />
                    Entrepreneur &amp; Investor
                  </p>
                  <div className="flex flex-col items-center md:items-start space-y-1">
                    <span className="text-zinc-400 text-xs">@aman-karki-ma</span>
                    <span className="text-zinc-400 text-xs">Mango Analytics</span>
                  </div>
                  <div className="mt-4 mb-2 flex items-center justify-center md:justify-start gap-2">
                    <a
                      href="https://www.linkedin.com/in/aman-karki-ma/"
                      className="inline-block text-gradient-primary underline-offset-2 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </aside>

              {/* PROFILE BODY CONTENT (your existing code remains unchanged) */}
              <div className="flex-1 w-full">
                <div className="space-y-7">
                  <div>
                    <h4 className="font-bold text-lg text-gradient-primary bg-clip-text text-transparent mb-2">
                      Experience
                    </h4>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gradient-primary text-md mb-1">
                        Founder &amp; CEO, MangoAnalytics
                      </h5>
                      <p className="text-muted-foreground mb-2 text-md">
                        Leading strategy, AI platform development, and digital
                        transformation initiatives. Building a purpose-driven
                        team to deliver innovation with tangible business value
                        across pharma, healthcare, and other industries.
                      </p>
                      <div className="bg-gradient-to-tr from-yellow-300 to-[#358C97] rounded-lg p-4 mb-2">
                        <div className="text-xs font-semibold text-white mb-1">
                          Key Achievements
                        </div>
                        <ul className="list-disc text-primary-foreground ml-5 text-sm space-y-1">
                          <li>
                            Architected enterprise-grade AI analytics platforms
                            adopted by Fortune 500 companies
                          </li>
                          <li>
                            Bridged business &amp; technical teams to deliver
                            compliant, impactful AI solutions
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gradient-primary text-md mb-1">
                        Senior Director, Clinical Data Science &amp; Biometrics
                      </h5>
                      <span className="text-xs text-muted-foreground block mb-1">
                        Scorpion Therapeutics
                      </span>
                      <p className="text-muted-foreground mb-2 text-md">
                        Led analytics teams supporting large-scale clinical
                        studies and real-world data programs.
                      </p>
                      <div className="bg-gradient-to-tr from-yellow-300 to-[#358C97] rounded-lg p-4 mb-2">
                        <div className="text-xs font-semibold text-white mb-1">
                          Key Achievements
                        </div>
                        <ul className="list-disc text-primary-foreground ml-5 text-sm space-y-1">
                          <li>Oversaw data handling for 1M+ patient records</li>
                          <li>
                            Delivered analytics for pivotal clinical research
                          </li>
                          <li>Championed data-driven culture</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gradient-primary text-md mb-1">
                        Product Manager, Analytics & Research
                      </h5>
                      <span className="text-xs text-muted-foreground block mb-1">
                        Travelers
                      </span>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gradient-primary text-md mb-1">
                        Programming Lead, Data Science & Analytics
                      </h5>
                      <span className="text-xs text-muted-foreground block mb-1">
                        Axion Pharmaceuticals
                      </span>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gradient-primary text-md mb-1">
                        Head of Data Science and Engineering
                      </h5>
                      <span className="text-xs text-muted-foreground block mb-1">
                        Clinical Ink
                      </span>
                    </div>
                  </div>

                  {/* EDUCATION SECTION (unchanged) */}
                  <div>
                    <h4 className="font-bold text-lg text-gradient-primary mb-2">
                      Education
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <div className="font-medium text-gradient-primary">
                          NYU Stern School of Business
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Executive MSBAI, Business Analytics & AI
                        </div>
                      </div>

                      <div>
                        <div className="font-medium text-gradient-primary">
                          University of Arizona
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Health Outcomes & PharmacoEconomic Research
                        </div>
                      </div>

                      <div>
                        <div className="font-medium text-gradient-primary">
                          London School of Economics (LSE)
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Advanced Business Analytics
                        </div>
                      </div>

                      <div>
                        <div className="font-medium text-gradient-primary">
                          University of New Haven
                        </div>
                        <div className="text-xs text-muted-foreground">
                          MS Computer Science
                        </div>
                      </div>

                      <div>
                        <div className="font-medium text-gradient-primary">
                          NJIT
                        </div>
                        <div className="text-xs text-muted-foreground">
                          MS Environment Engineering
                        </div>
                      </div>

                      <div>
                        <div className="font-medium text-gradient-primary">
                          IIT Roorkee
                        </div>
                        <div className="text-xs text-muted-foreground">
                          BE Chemical Engineering
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="relative mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#21253F] mt-20">
            <div className="text-center mb-8">
              <h2
                className="text-5xl md:text-5xl font-bold text-gradient-primary mt-5"
                style={{ lineHeight: 1.15 }}
              >
                Our Growing Team
              </h2>
              <p className="text-md md:text-xl text-foreground max-w-2xl mx-auto mt-4">
                We're building a world-class team of AI experts and specialists.
              </p>
            </div>

            {/* --- Your full team hierarchy code stays EXACTLY the same --- */}
            <div className="flex flex-col items-center mt-20 text-center">
              <div className="border border-primary/90 rounded-xl p-4 w-56 shadow-lg bg-white">
                <p className="text-sm text-gray-500">CEO / Founder</p>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-8 relative">
                <div className="absolute top-[-20px] left-0 right-0 mx-auto w-[80%] h-[2px] bg-gray-300"></div>

                <div className="flex flex-col items-center">
                  <div className="border border-primary/90 rounded-xl p-4 w-56 shadow bg-white">
                    <p className="text-sm text-gray-500">
                      Chief Operating Officer (COO)
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col items-center">
                    <div className="border border-primary/90 rounded-xl p-3 w-52 shadow bg-white">
                      <p className="text-xs text-gray-500">
                        Director of Operation / HR
                      </p>
                    </div>
                    <div className="mt-4 border border-primary/90 rounded-xl p-3 w-44 shadow bg-white">
                      <p className="text-xs text-gray-500">Analyst</p>
                    </div>
                  </div>
                </div>

                {/* TECH DIRECTOR */}
                <div className="flex flex-col items-center">
                  <div className="border border-primary/90 rounded-xl p-4 w-56 shadow bg-white">
                    <p className="text-sm text-gray-500">
                      Director of Technology
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col items-center">
                    <div className="border border-primary/90 rounded-xl p-3 w-52 shadow bg-white ">
                      <p className="text-xs text-gray-500">Project Manager</p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="border border-primary/90 rounded-xl p-2 w-32 text-xs shadow bg-white text-gray-500">
                        Software Engineers
                      </div>
                      <div className="border border-primary/90 rounded-xl p-2 w-32 text-xs shadow bg-white text-gray-500">
                        QA Analysts
                      </div>
                      <div className="border border-primary/90 rounded-xl p-2 w-32 text-xs shadow bg-white col-span-2 mx-auto text-gray-500">
                        Solution Architect
                      </div>
                    </div>
                  </div>
                </div>

                {/* BUSINESS DEVELOPMENT */}
                <div className="flex flex-col items-center">
                  <div className="border border-primary/90 rounded-xl p-4 w-56 shadow bg-white">
                    <p className="text-sm text-gray-500">
                      Director of Business Development
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col items-center">
                    <div className="border border-primary/90 rounded-xl p-3 w-52 shadow bg-white">
                      <p className="font-medium text-sm text-gray-500">
                        Client Relations Manager
                      </p>
                    </div>
                    <div className="mt-4 border border-primary/90 rounded-xl p-3 w-52 shadow bg-white">
                      <p className="font-semibold text-xs mb-1 text-gray-500">
                        Marketing Recruiter Associates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default LeadershipSection;
