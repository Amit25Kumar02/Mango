"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle as Tick } from "lucide-react";
import { Clock as Progres } from "lucide-react";

interface ProgressItem {
    title: string;
    percentage: number;
    color: string;
}

interface ProgressContent {
    title: string;
    description?: string;
    items: ProgressItem[];
}

interface Props {
    content: {
        progress?: ProgressContent;
    };
}

const ProgressSection: React.FC<Props> = ({ content }) => {
    if (!content.progress) return null;

    const progress = content.progress;

    return (
        <section className="relative container mx-auto px-4 sm:px-4 lg:px-32 py-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                {/* Title */}
                <h2
                    className="text-2xl sm:text-2xl md:text-4xl font-bold text-gradient-primary mb-6"
                    style={{ lineHeight: 1.15 }}
                >
                    {progress.title}
                </h2>

                {/* Description */}
                <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto mb-10 leading-relaxed">
                    {progress.description ??
                        "Our comprehensive consulting services span AI strategy and IT infrastructure optimization at every stage of your digital transformation journey."
                    }
                </p>

                {/* Progress Items */}
                <div className="space-y-6 w-full max-w-full text-left">
                    {progress.items.map((item, index) => (
                        <div
                            key={index}
                            className="border border-black/20 p-5 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm"
                        >
                            <div className="flex justify-between items-center mb-2">
                                {/* Title + Icon */}
                                <span className="text-black font-medium inline-flex items-center gap-2">
                                    {item.percentage === 100 ? (
                                        <Tick className="text-green-600 w-5 h-5" />
                                    ) : (
                                        <Progres className="text-blue-600 w-5 h-5 animate-spin-slow" />
                                    )}
                                    {item.title}
                                </span>

                                {/* Percentage */}
                                <span className="text-black text-sm sm:text-base whitespace-nowrap">
                                    {item.percentage}% complete
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-stone-300 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-700 ${item.color}`}
                                    style={{ width: `${item.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ProgressSection;
