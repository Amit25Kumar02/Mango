"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Activity, Clock, ChevronLeft, ChevronRight } from "lucide-react";

import enterpriseIT from "../assets/enterprise-it-infrastructure.jpg";
import financialDigital from "../assets/financial-services-digital.jpg";
import startupGrowth from "../assets/startup-technology-growth.jpg";

const caseStudies = [
    {
        title: "Enterprise IT Infrastructure Transformation",
        description:
            "Modernized legacy systems and migrated to cloud infrastructure, reducing operational costs by 45% and improving system performance by 60% for a Fortune 500 company.",
        image: enterpriseIT,
        stats: [
            { icon: DollarSign, value: "45%", label: "Cost Reduction" },
            { icon: Activity, value: "60%", label: "Performance Boost" },
            { icon: Clock, value: "85%", label: "Downtime Reduction" },
        ],
    },
    {
        title: "Digital Transformation for Financial Services",
        description:
            "Implemented AI-powered analytics and automated workflows, increasing processing efficiency by 70% and reducing manual errors by 90% across all departments.",
        image: financialDigital,
        stats: [
            { icon: Activity, value: "70%", label: "Efficiency Increase" },
            { icon: Clock, value: "3x faster", label: "Processing Speed" },
            { icon: DollarSign, value: "90%", label: "Error Reduction" },
        ],
    },
    {
        title: "Startup Technology Acceleration",
        description:
            "Built scalable cloud architecture and DevOps pipeline, enabling rapid deployment cycles and supporting 10x user growth within 6 months of launch.",
        image: startupGrowth,
        stats: [
            { icon: Clock, value: "10x faster", label: "Deployment Speed" },
            { icon: Activity, value: "1000%", label: "User Growth" },
            { icon: DollarSign, value: "$2.2M", label: "Infrastructure Savings" },
        ],
    },
];

export default function CaseStudyCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % caseStudies.length);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));

    const currentCase = caseStudies[current];

    return (
        <section className="py-10 md:mt-10 bg-gradient-to-b from-[#0B0D24] to-[#121633] text-white px-6 md:px-8 relative overflow-hidden">
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-4xl md:text-5xl font-bold mb-10 -mt-10 md:mt-0 "
            >
                Proven Results That{" "}
                <span className="text-gradient-primary">Speak for Themselves</span>
            </motion.h2>

            {/* Carousel Container */}
            <div className="relative max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#1A1E3F]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg"
                    >
                        {/* Image Section */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={currentCase.image}
                                alt={currentCase.title}
                                className="w-full h-auto md:h-[450px] object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Text & Stats Section */}
                        <div className="flex flex-col h-full justify-start">
                            <h3 className="text-lg md:text-2xl font-semibold mb-4 leading-snug">
                                {currentCase.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-md mb-8 leading-relaxed">
                                {currentCase.description}
                            </p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                {currentCase.stats.map((stat, i) => (
                                    <div key={i} className="space-y-2">
                                        <stat.icon className="w-6 h-6 mx-auto text-cyan-400" />
                                        <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
                                        <p className="text-sm text-gray-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Navigation Section */}
                <div className="relative flex justify-center items-center mt-10">
                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 lg:-left-10 p-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex space-x-2">
                        {caseStudies.map((_, i) => (
                            <span
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all ${current === i ? "bg-cyan-400" : "bg-gray-500/40"
                                    }`}
                            ></span>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 lg:-right-10 p-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-8">
                    <a
                        href="#contact"
                        className="text-white hover:underline font-semibold transition-colors"
                    >
                        Contact Us for a Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
