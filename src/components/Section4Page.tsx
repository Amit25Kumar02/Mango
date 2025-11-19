"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle as Tick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Section4Item {
    icon?: React.ElementType;
    company: string;
    category?: string;
    challenge: string;
    solution: string;
    timeline?: string;
    results: string[];
    button?: { label: string; link?: string }[];
}

interface Section4Content {
    title: string;
    description: string;
    data: Section4Item[];
}

interface Props {
    content: {
        section4?: Section4Content;
    };
}

const Section4Page: React.FC<Props> = ({ content }) => {
    const navigate = useNavigate();
    if (!content?.section4) return null;

    const section = content.section4;

    return (
        <section className="relative container mx-auto px-4 sm:px-4 lg:px-44 py-16">

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl md:px-32 font-bold text-gradient-primary mb-4">
                    {section.title}
                </h2>

                <p className="text-xl text-black max-w-3xl mx-auto">
                    {section.description}
                </p>
            </motion.div>

            {/* Cards Grid */}
            <div
                className={`grid grid-cols-1 lg:grid-cols-${section.data.length > 4 ? 3 : section.data.length
                    } gap-6`}
            >
                {section.data.map((story, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="rounded-xl p-6 border border-primary/40 bg-[#21253F] hover:bg-[#21253F] backdrop-blur-md 
                     hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                        {/* TOP CONTENT */}
                        <div>
                            {/* Category */}
                            {(story.category || story.timeline) && (
                                <div className="flex justify-between items-center mb-4">
                                    {story.category && (
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full border border-gradient-primary bg-gradient-primary/20 text-gradient-primary">
                                            {story.category}
                                        </span>
                                    )}
                                </div>
                            )}

                            {/* Company */}
                            <p className="text-xl font-bold text-gradient-primary mb-4">
                                {story.company}
                            </p>

                            {/* Challenge + Solution */}
                            <div className="space-y-4">
                                <p className="text-white text-sm leading-relaxed">
                                    {story.challenge}. {story.solution}
                                </p>

                                {/* Results */}
                                <div className="flex flex-col gap-1">
                                    {story.results.map((result, i) => (
                                        <span key={i} className="text-white text-sm flex items-center gap-2">
                                            <Tick className="w-4 h-4 text-green-500" />
                                            {result}
                                        </span>
                                    ))}
                                </div>

                                {/* Timeline */}
                                {story.timeline && (
                                    <p className="text-sm font-semibold text-white mt-3">
                                        <span className="font-bold">Timeline:</span> {story.timeline}
                                    </p>
                                )}
                            </div>
                        </div>


                        {story.button && (
                            <div className="mt-6">

                                {(
                                    Array.isArray(story.button)
                                        ? story.button
                                        : typeof story.button === "string"
                                            ? [{ label: story.button }]
                                            : [story.button]
                                ).map((btn, i) => (
                                    <Button
                                        key={i}
                                        className="bg-gradient-primary text-white font-semibold w-full"
                                        onClick={() => {
                                            if (btn.link) {
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                                navigate(btn.link);
                                                }
                                        }}
                                    >
                                        {btn.label || btn}
                                    </Button>
                                ))}
                            </div>
                        )}

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Section4Page;
