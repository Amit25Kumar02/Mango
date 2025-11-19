"use client";

import { motion } from "framer-motion";

const ThirdBanner = ({ data }) => {
  return (
    <section className="relative container mx-auto px-4 sm:px-4 md:px-16 lg:px-44 py-16">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-gradient-primary mb-6"
          style={{ lineHeight: 1.15 }}
        >
          {data.title}
        </h2>

        <p className="text-lg md:px-16 lg:px-32 text-black max-w-4xl mx-auto">
          {data.description}
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`grid grid-cols-1 md:grid-cols-${
          data.items.length == 6 ? "3" : data.items.length >= 4 ? "3" : data.items.length
        } lg:grid-cols-${
          data.items.length == 6 ? "4" : data.items.length >= 4 ? "4" : data.items.length
        } gap-6`}
      >
        {data.items.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="
              rounded-xl p-6 border border-primary/30 hover:border-primary/80
              transition-colors duration-300 group cursor-pointer bg-[#21253F]
              hover:bg-[#21253F] 
              flex flex-col items-center text-center h-full
            "
          >

            {/* ICON ROW - perfectly aligned for all cards */}
            <div className="flex flex-col items-center justify-center min-h-[64px] mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <service.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* TITLE — same height for alignment */}
            <h3 className="text-lg font-bold text-gradient-primary mb-3 min-h-[48px]">
              {service.title}
            </h3>

            {/* DESCRIPTION — same height for alignment */}
            <p className="text-white text-sm leading-relaxed mb-4 min-h-[80px]">
              {service.description}
            </p>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ThirdBanner;
