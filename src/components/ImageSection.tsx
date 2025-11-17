"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle as Tick } from "lucide-react";

interface ImageSectionProps {
  content: {
    imageSection?: {
      bannerImage: string;
      title: string;
      description: string;
      features: string[];
    };
  };
}

const ImageSection: React.FC<ImageSectionProps> = ({ content }) => {
  if (!content.imageSection) return null;

  const section = content.imageSection;

  return (
    <section className="relative w-full py-16 px-4 sm:px-4 md:px-32">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

   
        <img
          src={section.bannerImage}
          alt={section.title}
          className="w-full h-auto rounded-xl shadow-md object-cover max-h-[550px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-start "
        >
        
          <h2
            className="text-2xl lg:text-3xl md:text-3xl font-bold text-gradient-primary mb-5"
            style={{ lineHeight: 1.15 }}
          >
            {section.title}
          </h2>

        
          <p className="text-md lg:text-md text-black max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-6 leading-relaxed">
            {section.description}
          </p>

      
          <div className="mt-2 text-md flex flex-col gap-3 mx-auto lg:mx-0">

            {section.features?.map((feature, i) => (
              <span
                key={i}
                className="text-black flex text-left items-center gap-2"
              >
                <Tick className="w-5 h-5 text-green-600" />
                {feature}
              </span>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ImageSection;
