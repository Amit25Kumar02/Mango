import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BrandMarquee } from '@/components/BrandMarquee';
import { FooterLinks } from '@/components/FooterLinks';
import { ContactSection } from '@/components/ContactSection';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Challenges } from '@/components/Challenges';
import CaseStudyCarousel from '@/components/CaseStudyCarousel';
import AITalentProgramSection from '@/components/AITalentProgramSection';

const Index = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef);
  return (
    <div className="min-h-screen bg-background">
      {/* <ParticleBackground /> */}
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <h2 className="text-2xl md:text-4xl font-bold text-gradient-primary  text-center mb-20" style={{ lineHeight: 1.15 }}>Our Technical Expertise</h2>
         
        <BrandMarquee />
        <Challenges />
        <CaseStudyCarousel/>
        <AITalentProgramSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterLinks />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 backdrop-blur-md" style={{
        background: '#21253F'
      }
      }>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground">
            © 2025 Mango Analytics. All rights reserved. Powered by next-generation AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
