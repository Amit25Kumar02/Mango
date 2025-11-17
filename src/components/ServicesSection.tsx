"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Code,
  BrainCircuit,
  Cog,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Database,
  Shield,
} from "lucide-react";

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const services = [
    {
      icon: BrainCircuit,
      title: "AI Product Development",
      description:
        "Build AI-powered platforms and applications ready to scale globally with machine learning capabilities.",
      // features: ["Custom ML Models", "Neural Networks", "Predictive Analytics", "Natural Language Processing"],
      color: "primary",
    },
    {
      icon: Code,
      title: "Data Engineering",
      description:
        "Transform fragmented data into unified, scalable pipelines that power intelligent business decisions and AI workflows.",
      // features: ["Full-Stack Development", "Cloud Architecture", "API Integration", "Mobile Applications"],
      color: "primary",
    },
    {
      icon: Database,
      title: "AI & IT Consulting",
      description:
        "Elite IT talent placement, technical consulting, and team augmentation services. From architecture design to digital transformation, we deliver strategic technology solutions that accelerate business growth.",
      // features: ["Big Data Analytics", "Data Visualization", "Business Intelligence", "Real-time Processing"],
      color: "accent",
    },
    {
      icon: Cog,
      title: "Compliance & Security",
      description:
        "Enterprise-grade security frameworks and compliance solutions that protect your data while enabling innovation",
      // features: ["Workflow Automation", "Smart Chatbots", "Document Processing", "Quality Assurance"],
      color: "primary",
    },
    {
      icon: Shield,
      title: "AI Talent Development",
      description:
        "Comprehensive training programs that upskill your teams in AI technologies and modern development practices.",
      // features: ["Threat Detection", "Anomaly Analysis", "Security Automation", "Risk Assessment"],
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "Custom SaaS Platforms",
      description:
        "Tailored software solutions that streamline operations and provide competitive advantages in your industry.",
      // features: ["Custom Workshops", "Certification Programs", "Hands-on Projects", "Ongoing Support"],
      color: "accent",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-10 sm:py-10 md:py-10 lg:py-10 relative px-2 sm:px-4 md:px-32 lg:px-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0">
        ... your full animation block untouched ...
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 backdrop-blur-md border border-primary/30 rounded-full px-6 py-3 mb-6"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-md font-medium text-gradient-primary">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold mb-6 text-gradient-primary"
          >
            <span className="text-gradient-primary">
              From Idea to Impact – Our Services
            </span>
            <br />
            {/* for Every Business Need */}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[14px] md:text-lg text-muted-foreground max-w-4xl mx-auto"
          >
            From intelligent automation to custom AI models, we deliver
            comprehensive solutions that transform how you operate and compete
            in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.8,
              }}
              className="group flex"
            >
              <div className="card-interactive hover-gradient p-6 rounded-2xl bg-[#21253F] hover:bg-[#21253F] flex flex-col justify-between w-full h-full">
                {/* Icon */}
                {/* <div className="relative mb-3">
                  <div
                    className={`absolute inset-0 w-10 h-10 rounded-2xl bg-gradient-${service.color} animate-pulse-glow opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                </div> */}

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gradient-primary group-hover:text-gradient-primary transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[14px] md:text-md  leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  {/* <ul className="space-y-2 mb-8">
                    {service?.features?.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul> */}
                </div>

                {/* CTA Placeholder */}
                <div className="mt-auto pt-4">
                  {/* <button className="text-primary hover:underline">Learn More →</button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            variant="hero"
            size="sm"
            className="group/btn h-10 w-full md:w-80 justify-betweent"
            onClick={() => window.open("/about/contact")}
          >
            Start Your AI Transformation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
