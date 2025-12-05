"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle as Tick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Section4Item {
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
    content: { section4?: Section4Content };
}

const Section4Page: React.FC<Props> = ({ content }) => {
    const navigate = useNavigate();

    const descRefs = React.useRef<HTMLParagraphElement[]>([]);
    const companyRefs = React.useRef<HTMLParagraphElement[]>([]);

    const [maxDescHeight, setMaxDescHeight] = React.useState(0);
    const [maxCompanyHeight, setMaxCompanyHeight] = React.useState(0);

    const calculateHeights = () => {
        const descHeights = descRefs.current.map((el) => el?.offsetHeight || 0);
        setMaxDescHeight(Math.max(...descHeights));

        const companyHeights = companyRefs.current.map((el) => el?.offsetHeight || 0);
        setMaxCompanyHeight(Math.max(...companyHeights));
    };

    React.useEffect(() => {
        setTimeout(() => calculateHeights(), 50);
    }, [content]);

    React.useEffect(() => {
        const handleResize = () => setTimeout(() => calculateHeights(), 100);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!content?.section4) return null;

    const section = content.section4;

    return (
        <section className="relative container mx-auto px-4 sm:px-4 lg:px-44 pb-14">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-3">
                    {section.title}
                </h2>

                <p className="text-lg text-black max-w-3xl mx-auto">
                    {section.description}
                </p>
            </motion.div>

            {/* GRID */}
            <div
                className={`grid grid-cols-1 lg:grid-cols-${section.data.length > 4 ? 3 : section.data.length
                    } gap-6`}
            >
                {section.data.map((story, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.12 }}
                        className="rounded-xl pt-4 pb-6 px-5 border border-primary/40 bg-[#21253F]
                       shadow-lg transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="flex-1 flex flex-col">

                            {/* CATEGORY — only shows if exists, no extra margin */}
                            {story.category ? (
                                <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-gradient-primary/20 text-gradient-primary mb-2">
                                    {story.category}
                                </span>
                            ) : (
                                <span className="h-[0px]"></span>  // prevents layout shift
                            )}



                            <p
                                ref={(el) => el && (companyRefs.current[index] = el)}
                                style={{
                                    minHeight: maxCompanyHeight ? `${maxCompanyHeight}px` : "auto",
                                }}
                                className="text-xl font-bold text-gradient-primary mb-2  flex items-center"
                            >
                                {story.company}
                            </p>


                            {/* DESCRIPTION — dynamic height */}
                            <div className="flex-1 mb-3">
                                <p
                                    ref={(el) => el && (descRefs.current[index] = el)}
                                    style={{
                                        height: maxDescHeight ? `${maxDescHeight}px` : "auto",
                                    }}
                                    className="text-white/55 text-sm leading-relaxed overflow-hidden"
                                >
                                    {story.challenge}. {story.solution}
                                </p>
                            </div>

                            {/* RESULTS */}
                            <div className="flex flex-col h-full gap-2">
                                {story.results.map((result, i) => (
                                    <span key={i} className="text-white/55 text-sm flex gap-2">
                                        <Tick className="w-4 h-4 text-green-500 mt-0.5" />
                                        {result}
                                    </span>
                                ))}
                            </div>

                            {/* TIMELINE */}
                            {story.timeline && (
                                <p className="text-sm font-semibold text-white/80 mt-1">
                                    <span className="font-bold">Timeline:</span> {story.timeline}
                                </p>
                            )}
                        </div>

                        {/* BUTTON */}
                        {story.button && (
                            <div className="mt-6">
                                {(Array.isArray(story.button) ? story.button : [story.button]).map(
                                    (btn, i) => (
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
                                    )
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Section4Page;
