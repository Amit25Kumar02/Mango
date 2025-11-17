"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CareersProps {
    content: {
        careers?: boolean;
    };
}

const CareersSection: React.FC<CareersProps> = ({ content }) => {
    if (!content?.careers) return null;

    return (
        <>
            <section className="relative w-full bg-[#21253F] pt-4 pb-10 mb-0">
                <div className="container mx-auto px-4 sm:px-4 lg:px-32">
                    <div className="text-center mb-7">
                        {/* Stats */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-yellow-500">6</span>
                                <span className="text-sm text-foreground mt-1">Open Positions</span>
                            </div>
                            <div className="h-7 border-l border-zinc-200 hidden md:block"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-yellow-500">100%</span>
                                <span className="text-sm text-foreground mt-1">Remote Friendly</span>
                            </div>
                            <div className="h-7 border-l border-zinc-200 hidden md:block"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-yellow-500">20+</span>
                                <span className="text-sm text-foreground mt-1">Team Countries</span>
                            </div>
                            <div className="h-7 border-l border-zinc-200 hidden md:block"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-yellow-500">4.9</span>
                                <span className="text-sm text-foreground mt-1">Candidate Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative container mx-auto px-4 sm:px-4 lg:px-32 py-16 rounded-3xl mb-10">
                <div className="text-center mb-12">
                    <h2
                        className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2"
                        style={{ lineHeight: 1.15 }}
                    >
                        Our Hiring Process
                    </h2>

                    <p className="text-md md:text-lg text-black/80 max-w-2xl mx-auto">
                        We've designed our process to be thorough yet respectful of your time
                    </p>
                </div>

                <div className="flex flex-col gap-14 max-w-3xl mx-auto">

                    {/* TIMELINE ITEM (Reusable Component) */}
                    {[
                        {
                            title: "Application Review",
                            desc: "We review your application and portfolio within 3–5 business days. We'll reach out if there's a potential fit.",
                        },
                        {
                            title: "Initial Interview",
                            desc: "30-minute conversation with our hiring team to discuss your background, interests, and learn more about the role.",
                        },
                        {
                            title: "Technical Assessment",
                            desc: "Role-specific technical interview or take-home project focusing on real-world problems.",
                        },
                        {
                            title: "Final Interview",
                            desc: "Meet team members and leadership to discuss culture fit, goals, and answer questions.",
                        },
                    ].map((step, i) => (
                        <div key={i} className="flex items-start gap-4">
                            {/* Timeline DOT + Line Except Last */}
                            <div className="flex flex-col items-center mr-4">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-lg block mt-2 border-2 border-white"></span>

                                {i !== 3 && (
                                    <div className="w-px h-24 bg-gradient-to-b from-yellow-200/80 to-orange-300/30"></div>
                                )}
                            </div>

                            <div>
                                <h3 className="font-bold text-[1.15rem] md:text-lg mt-1 mb-1 text-gradient-primary">
                                    {step.title}
                                </h3>
                                <p className="text-black/80 text-sm md:text-base max-w-xl">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* OPEN POSITIONS HEADER */}

            <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">
                        Open Positions
                    </h2>
                    <p className="text-base md:text-lg text-black/70 max-w-xl mx-auto">
                        Join our award-winning team and help build the next generation of AI solutions.
                    </p>
                </div>
            </section>


            <section className="relative container mx-auto px-4 sm:px-4 lg:px-32 py-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-background border border-primary/20 rounded-xl p-6 relative shadow hover:shadow-lg transition-shadow duration-200 m-4"
                >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-semibold text-gradient-primary">
                                Senior AI Engineer
                            </h3>
                            <span className="inline-block bg-gradient-primary px-2 py-0.5 rounded-md text-white text-xs font-medium ml-2">
                                Full-Time
                            </span>
                        </div>

                        <Button
                            variant="cyber"
                            className="text-primary text-sm rounded-lg px-4 py-2 mt-2 md:mt-0"
                        >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mb-2 text-xs text-black/50 font-medium">
                        <span>Location: Remote</span>·
                        <span>Team: AI</span>·
                        <span>Experience: 5+ Years</span>
                    </div>

                    {/* Description */}
                    <p className="text-black/80 mb-2 text-sm">
                        Build and iterate advanced AI/ML products at scale — LLMs, gen-AI,
                        ML pipelines, and clinical workflows.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-4 text-xs text-black mt-3">
                        {["Python", "TensorFlow", "PyTorch", "LLMs"].map((t) => (
                            <span
                                key={t}
                                className="border border-primary/30 rounded-full px-2 py-1"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* ------- Machine Learning Engineer ------- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-background border border-primary/20 rounded-xl p-6 relative shadow hover:shadow-lg transition-shadow duration-200 m-4"
                >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                        <div className="flex items-center gap-2">
                            <h3 className="text-xl font-semibold text-gradient-primary">
                                Machine Learning Engineer
                            </h3>
                            <span className="inline-block bg-gradient-primary px-2 py-0.5 rounded-md text-white text-xs font-medium ml-2">
                                Data Science
                            </span>
                        </div>

                        <Button
                            variant="cyber"
                            className="text-primary text-sm rounded-lg px-4 py-2 mt-2 md:mt-0"
                        >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mb-2 text-xs text-black/50 font-medium">
                        <span>Location: Remote</span>·
                        <span>Team: AI</span>·
                        <span>Experience: 5+ Years</span>
                    </div>

                    {/* Description */}
                    <p className="text-black/80 mb-2 text-sm">
                        Develop and deploy ML models for clinical analytics & regulatory-safe data systems.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-4 text-xs text-black mt-3">
                        {["Python", "Kubernetes", "HIPAA", "SQL"].map((t) => (
                            <span
                                key={t}
                                className="border border-primary/30 rounded-full px-2 py-1"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default CareersSection;
