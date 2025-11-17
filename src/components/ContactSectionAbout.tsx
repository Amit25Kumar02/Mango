"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  content: {
    contact?: boolean;
  };
}

const ContactSectionAbout: React.FC<ContactProps> = ({ content }) => {
  if (!content?.contact) return null;

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Message sent successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <>

      <section className="relative w-full py-24 px-4 md:px-8 bg-[#192890] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-16">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2 max-w-lg mb-10 lg:mb-0">
            <div className="mb-3 inline-block bg-gradient-to-r from-[#C1FE50] to-[#CDDC39]/60 px-3 py-1 rounded-full text-[10px] font-semibold text-[#333] tracking-widest">
              NEW
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
              Let's start <span className="text-gradient-primary">planning</span><br /> your AI <span className="text-gradient-primary">transformation</span>
            </h2>

            <p className="text-lg text-white/70 mb-7">
              Ready to experience faster outcomes? Whether you're exploring AI opportunities or need guidance for a specific project — we're here to help.
            </p>

            {/* BENEFITS LIST */}
            <ul className="space-y-3">
              {["Free Consultation", "Response within 24 hours", "1:1 with Solution Manager"].map(
                (label, i) => (
                  <li className="flex items-center text-white/90 text-base" key={i}>
                    <span className="mr-3 text-green-500 bg-lime-400/10 rounded-full p-1">
                      <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5">
                        <path
                          d="M6.5 11.294l-3.147-3.147a.5.5 0 01.708-.708L7 10.293l4.94-4.94a.5.5 0 01.707.707l-5.293 5.293a.5.5 0 01-.707 0z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {label}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:w-[480px] w-full max-w-md bg-[#22253A]/95 px-6 py-6 shadow-2xl shadow-black/30 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-2">Start Your Journey</h3>
            <p className="text-sm text-white/50 mb-5">
              Fill out the enquiry and our team will reach out to you.
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex gap-3">
                {/* NAME */}
                <div className="flex-1">
                  <label className="block mb-1 text-white/80 text-sm font-medium" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jane Doe"
                    required
                    className="w-full rounded-lg px-4 py-3 bg-[#202137] text-white placeholder:text-white/40 border border-white/10 focus:ring-2 focus:ring-lime-400 outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div className="flex-1">
                  <label className="block mb-1 text-white/80 text-sm font-medium" htmlFor="email">
                    Your Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="jane@company.com"
                    required
                    className="w-full rounded-lg px-4 py-3 bg-[#202137] text-white placeholder:text-white/40 border border-white/10 focus:ring-2 focus:ring-lime-400 outline-none"
                  />
                </div>
              </div>

              {/* COMPANY */}
              <div>
                <label className="block mb-1 text-white/80 text-sm font-medium" htmlFor="company">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Acme Corp"
                  className="w-full rounded-lg px-4 py-3 bg-[#202137] text-white placeholder:text-white/40 border border-white/10 focus:ring-2 focus:ring-lime-400 outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-1 text-white/80 text-sm font-medium" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Describe your goals..."
                  className="w-full rounded-lg px-4 py-3 bg-[#202137] text-white placeholder:text-white/40 border border-white/10 focus:ring-2 focus:ring-lime-400 outline-none resize-none"
                />
              </div>

              {/* SELECT OPTION */}
              <div>
                <label className="block mb-1 text-white/80 text-sm font-medium" htmlFor="interest">
                  Interested in
                </label>
                <select
                  id="interest"
                  className="w-full rounded-lg px-4 py-3 bg-[#202137] text-white border border-white/10 focus:ring-2 focus:ring-lime-400 outline-none"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option>AI Solution & Strategy</option>
                  <option>AI Talent / CTO-as-a-Service</option>
                  <option>Consulting / Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <Button variant="hero" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message →"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-4 lg:px-32">
          <h2 className="text-2xl md:text-4xl font-bold text-gradient-primary text-center mb-2">
            Our Locations
          </h2>
          <p className="text-xl text-black text-center mb-12">
            Global presence with local expertise across major innovation hubs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* LOCATION CARD REUSABLE */}
            {[
              {
                country: "USA",
                addr: "220 E. Main Street, Branford, CT-06405, USA",
                phone: "203-208-3916",
                email: "info@mangoanalytics.ai",
              },
              {
                country: "India",
                addr: "Noida, Maharashtra",
                phone: "+91-7999386645",
                email: "info@mangoanalytics.ai",
              },
              {
                country: "Nepal",
                addr: "Kathmandu, Nepal",
                phone: "+977-9840003778",
                email: "info@mangoanalytics.ai",
              },
            ].map((loc, i) => (
              <div
                key={i}
                className="bg-[#F7FAFE] rounded-2xl shadow-md border border-black/10 p-8 flex flex-col hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-xl text-black mb-2">{loc.country}</h3>

                <div className="mt-3 mb-4 text-black/90 text-sm space-y-1">
                  <div className="flex items-center">
                    <svg width="18" height="18" className="mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13 21.314l-4.657-4.657A8 8 0 1 1 17.657 16.657z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                    {loc.addr}
                  </div>
                  <div className="flex items-center">
                    <svg width="18" height="18" className="mr-2 text-black/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.14.81.39 1.59.75 2.3a2 2 0 0 1-.45 2.11l-1.27 1.28a16 16 0 0 0 6.06 6.06l1.28-1.27a2 2 0 0 1 2.11-.45c.71.36 1.49.61 2.3.75a2 2 0 0 1 1.72 2z" />
                    </svg>
                    {loc.phone}
                  </div>
                  <div className="flex items-center break-all">
                    <svg width="18" height="18" className="mr-2 text-black/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16v16H4z" />
                      <path d="M22 6.5l-9.5 7.5L3 6.5" />
                    </svg>
                    {loc.email}
                  </div>
                </div>

                <a
                  href={`mailto:${loc.email}`}
                  className="mt-auto text-center px-5 py-2 text-[15px] font-semibold rounded-lg border border-green-400 text-green-700 hover:bg-green-50 transition"
                >
                  Get In Touch
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSectionAbout;
