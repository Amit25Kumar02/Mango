"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [state, handleSubmit] = useForm("mblpeebv");

  if (state.succeeded) {
    toast({
      title: "Message sent successfully! We will get back to you soon.",
    });
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "info@mangoanalytics.ai",
      color: "primary",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our experts",
      value: "(203) 530-5828",
      color: "primary",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      value: "220 E. Main Street, Branford, CT-06405, USA",
      color: "primary",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20"
    >
      {/* Background Elements (kept commented out in your original) */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
      </div>

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
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="text-md font-medium text-gradient-primary">
              Contact Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient-primary"
            style={{ lineHeight: 1.15 }}
          >
            Ready to Transform ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Let's discuss how our AI solutions can revolutionize your operations.
            Get in touch with our experts today.
          </motion.p>

          {/* The exact mailto link the user asked for */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 text-sm text-primary"
          >
            Or email us directly:&nbsp;
            <a
              href="mailto:someone@example.com"
              className="underline hover:text-cyan-400"
            >
              someone@example.com
            </a>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-interactive p-6 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Send className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-gradient-primary font-bold text-foreground">
                  Send us a message
                </h3>
                <p className="text-muted-foreground">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>

            {/* Fixed form: className moved into the form tag and name attributes added */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2 mt-2">
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    placeholder="John"
                    className="border-primary/20 focus:border-primary text-black"
                  />
                  <ValidationError
                    prefix="First Name"
                    field="firstName"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2 mt-2">
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    placeholder="Doe"
                    className="border-primary/20 focus:border-primary text-black"
                  />
                  <ValidationError
                    prefix="Last Name"
                    field="lastName"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2 mt-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="border-primary/20 focus:border-primary text-black"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2 mt-2">
                  Company
                </label>
                <Input
                  name="company"
                  placeholder="Your Company Name"
                  className="border-primary/20 focus:border-primary text-black"
                />
                <ValidationError
                  prefix="Company"
                  field="company"
                  errors={state.errors}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2 mt-2">
                  How can we help you?
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project and how AI can help your business..."
                  rows={5}
                  className="border-primary/20 focus:border-primary resize-none text-black"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full group mt-5"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="card-interactive hover-gradient p-4 rounded-xl"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-${info.color} flex items-center justify-center`}
                    >
                      <info.icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg text-gradient-primary font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {info.description}
                      </p>

                      {/* Render email as mailto link (keeps original info.value also clickable) */}
                      {index === 0 ? (
                        <p className="text-primary font-medium">
                          <a href={`mailto:${info.value}`} className="underline">
                            {info.value}
                          </a>
                        </p>
                      ) : (
                        <p className="text-primary font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Schedule Call CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="card-interactive hover-gradient p-6 rounded-2xl text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-gradient-primary font-bold text-foreground mb-4">
                Schedule a Strategy Call
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Book a free 30-minute consultation with our AI experts to
                discuss your specific needs and explore potential solutions.
              </p>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() =>
                  window.open(
                    "https://calendly.com/mangoanalytics-ai/30min",
                    "_blank"
                  )
                }
              >
                Book Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
