"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle as Tick, Wand, } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    if (!content?.section4) return null;

    const section = content.section4;

    return (
        <section className="relative container mx-auto px-4 sm:px-4 lg:px-32 py-16">

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-4">
                    {section.title}
                </h2>

                <p className="text-md text-black max-w-4xl mx-auto">
                    {section.description}
                </p>
            </motion.div>

            {/* Cards Grid */}
            <div
                className={`grid grid-cols-1 lg:grid-cols-${section.data.length > 4 ? 3 : section.data.length
                    } gap-4`}
            >
                {section.data.map((story, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="rounded-xl p-6 border border-primary/40 bg-white/70 backdrop-blur-md hover:shadow-lg transition-all duration-300"
                    >


                        {/* Category + Timeline (Hide if empty) */}
                        {(story.category || story.timeline) && (
                            <div className="flex justify-between items-center mb-4">

                                {/* Category (Only show if exists) */}
                                {story.category && (
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary">
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
                            <p className="text-black text-sm leading-relaxed">
                                {story.challenge}. {story.solution}
                            </p>

                            {/* Results */}
                            <div className="flex flex-col gap-1">
                                {story.results.map((result, i) => (
                                    <span key={i} className="text-black text-sm flex items-center gap-2">
                                        <Tick className="w-4 h-4 text-green-500" />
                                        {result}
                                    </span>
                                ))}
                            </div>

                            {/* Bottom Timeline (Show only if exists) */}
                            {story.timeline && (
                                <div className="pt-2 mt-3">
                                    <p className="text-sm font-semibold text-gray-800">
                                        <span className="font-bold">Timeline:</span> {story.timeline}
                                    </p>
                                </div>
                            )}
                            {story.button && (
                                <Button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-4 bg-gradient-primary text-white font-semibold w-full"
                                >
                                    {story.button}
                                </Button>
                            )}
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Section4Page;
