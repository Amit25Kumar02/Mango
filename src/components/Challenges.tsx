import { motion, useInView } from 'framer-motion';

export const Challenges = () => {
  const data = [
    {
      title: "IT Infrastructure & Digital Transformation",
      desc: "Legacy systems, security vulnerabilities, and inefficient digital workflows holding businesses back.",
      lastLine: "85% of businesses struggle with outdated IT infrastructure"
    },
    {
      title: "Enterprise IT Strategy",
      desc: "Lack of strategic IT planning, cloud migration complexities, and technology integration issues.",
      lastLine: "73% of enterprises lack comprehensive IT strategy alignment"
    },
    {
      title: "IT Talent & Expertise Gap",
      desc: "Shortage of skilled IT professionals and need for specialized consulting expertise.",
      lastLine: "68% of companies face critical IT skills shortages"
    },
  ];

  return (
    <section
      id="challeges"
      className="py-10 md:mt-10 px-4 sm:px-6 lg:px-48"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        {/* <BackgroundParticle /> */}
        <h2
          className="text-3xl sm:text-3xl md:text-[44px] font-bold text-black mb-6"
          style={{ lineHeight: 1.15 }}
        >
          Solving <span className='text-gradient-primary'> IT Consulting's</span> Biggest Challenges
        </h2>

        <p className="text-xl text-black max-w-4xl mx-auto">
          IT consulting faces unique hurdles—security, scalability, and ever-changing
          tech. We break through barriers to make technology seamless for your business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data?.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="rounded-xl p-6 border border-primary/40 bg-[#21253F] flex flex-col"
          >
            <p className="text-lg font-bold md:pr-12 text-gradient-primary mb-4">
              {story.title}
            </p>

            {/* Description */}
            <p className="text-[14px] md:pr-12">
              {story.desc}
            </p>

            
            <div className="mt-auto pt-6">
              <p className="text-secondary text-sm leading-relaxed">
                {story.lastLine}
              </p>
            </div>
          </motion.div>

        ))}
      </div>
    </section>
  );
};
