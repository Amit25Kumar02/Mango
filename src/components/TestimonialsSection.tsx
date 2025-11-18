import { inView, motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useRef } from 'react';
import CountingNumber from './ui/countingNumber';

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Nugraha',
    role: 'Founder of Mangocoding',
    avatar: 'https://i.pravatar.cc/80?img=5',
    quote:
      "As a growing AI startup, we needed scalable solutions fast. MangoAnalytics delivered a robust ML pipeline that handles 10M+ data points daily. Their mentorship in AI best practices was invaluable for our team's growth.",
  },
  {
    name: 'Alex Jounky',
    role: 'Founder of Robs',
    avatar: 'https://i.pravatar.cc/80?img=12',
    quote:
      "MangoAnalytics' customer behavior prediction models increased our conversion rates by 35% and reduced inventory waste by 28%. The real-time dashboard they built gives us insights we never had before",
  },
  {
    name: 'Chelsia Alexy',
    role: 'Founder of Frank',
    avatar: 'https://i.pravatar.cc/80?img=32',
    quote:
      'The fraud detection system MangoAnalytics developed reduced our false positives by 60% while catching 99.2% of actual fraud attempts. Their deep understanding of both AI and financial regulations made the difference.',
  },
  {
    name: 'Samsul Afroy',
    role: 'Full Stack Developer',
    avatar: 'https://i.pravatar.cc/80?img=15',
    quote:
      "MangoAnalytics' customer behavior prediction models increased our conversion rates by 35% and reduced inventory waste by 28%. The real-time dashboard they built gives us insights we never had before.",
  },
  {
    name: 'Purwa Adi Twingkiwingki',
    role: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/80?img=25',
    quote:
      "MangoAnalytics transformed our data infrastructure completely. Their AI-powered solutions helped us reduce processing time by 75% and increase accuracy by 40%. The team's expertise in both technical implementation and business strategy is unmatched.",
  },
  {
    name: 'Rizwan Gusnajmi',
    role: 'Web Developer',
    avatar: 'https://i.pravatar.cc/80?img=10',
    quote:
      "Working with MangoAnalytics was a game-changer for our drug discovery process. Their custom AI models helped us identify promising compounds 3x faster than traditional methods. The ROI was evident within the first quarter.",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-14 md:mt-10 px-4 sm:px-4 md:px-8 lg:px-32 overflow-hidden"
    >
      {/* Quotes background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 w-[480px] h-[480px] rounded-[36px] border-2 border-primary/50" />
        <div className="absolute -right-32 -top-8 w-[560px] h-[560px] rounded-[36px] border-2 border-primary/40" />
        <div className="absolute right-10 bottom-0 w-[420px] h-[420px] rounded-[36px] border-2 border-secondary/30" />
        <div className="absolute -left-350 bottom-0 w-[420px] h-[420px] rounded-[36px] border-2 border-secondary/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center space-x-2 backdrop-blur-md border border-primary/30 rounded-full px-4 py-2 mb-4 text-sm">
            <span className="text-lg font-medium text-gradient-primary">
              What Our Clients Have to Say About Us
            </span>
          </span>

          <h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black"
            style={{ lineHeight: 1.15 }}
          >
            Trusted By
            <span className='text-gradient-primary'> Modern Teams </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl p-4 backdrop-blur-md border border-primary/40 shadow-[0_8px_40px_hsl(var(--foreground)/0.05)] transition-all duration-300 hover:shadow-glow-primary hover:border-primary/40 bg-[#21253F] hover:bg-[#21253F]"
            >
              <div className="absolute inset-0"></div>

              <div
                className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden
              >
                <div
                  className="absolute inset-0 rounded-[28px] blur-2xl"
                  style={{
                    // your commented code preserved:
                    // background: 'radial-gradient(120px 120px at 85% 20%, hsl(var(--primary)/0.35), transparent 60%), radial-gradient(160px 160px at 15% 80%, hsl(var(--accent)/0.25), transparent 60%)'
                    // background: "var(--gradient-primary)",
                    // filter: 'blur(40px)',
                    // color: 'white',
                  }}
                />
              </div>

              {/* top quotes */}
              <Quote className="absolute right-6 top-6 h-16 w-16 text-primary/70 hover:shadow-glow-primary hidden" />

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div
                    className="font-semibold text-xl text-gradient-primary"
                    style={
                      {
                        // color: '#19288F'
                      }
                    }
                  >
                    {t.name}
                  </div>
                  <div className="text-sm text-white">{t.role}</div>
                </div>
              </div>

              <p className="text-lg text-white leading-relaxed">
                {t.quote}
              </p>

              {/* bottom quotes */}
              {/* <Quote className="absolute left-6 bottom-6 h-16 w-16 rotate-180 text-foreground/10" /> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto border border-primary/30 rounded-2xl p-8 backdrop-blur-md shadow-[0_8px_40px_hsl(var(--foreground)/0.05)]"
      >
        {[
          { value: "500", label: "Projects Delivered", suffix: "+" },
          { value: "98", label: "Client Satisfaction", suffix: "%" },
          { value: "50", label: "Enterprise Clients", suffix: "+" },
          { value: "24/7", label: "AI-Powered Support" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">
              {stat.label !== "AI-Powered Support" ? (
                <CountingNumber
                  target={Number(stat.value)}
                  suffix={stat.suffix}
                  isInView={isInView}
                  duration={3000}
                />
              ) : (
                stat.value
              )}
            </div>
            <div className="text-black text-base">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
