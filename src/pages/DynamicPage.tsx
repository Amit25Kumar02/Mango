import { useRef } from 'react'
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { FooterLinks } from '@/components/FooterLinks';
import { useParams } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import aiandit from '@/assets/ai-it.jpg';
import startup from '@/assets/startup.jpg';
import { Lightbulb, Target, Server, Monitor, Users, Cloud, Database, AlertTriangle, Shield, Network, ArrowRight, Send, TrendingUp, Award, Clock, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackgroundParticle from "@/components/backgroundWrapper"
// inport Section5Img from "@/assets/ai-talent.jpg"
import BrandMarquee from '@/components/BrandMarquee';
import { successStories, FlagshipModels, Trainingprograms, ItConsulting, Healthcare, Healthcare2, Startup, Startup2, featuredPrograms, TrainingPrograms, OurValues } from "../components/constants"
import { Tick, Progres } from '@/components/ui/tick';
import graph from "@/assets/graph.jpg"
import security from "@/assets/security.jpg"
import talent from "@/assets/talent.jpg"
import discussion from "@/assets/discussion.jpg"
import healthcare from "@/assets/healthcare.jpg"
import heathcarefooter from "@/assets/heathcare-footer.jpg"
import startupFooter from "@/assets/startup-footer.jpg"
import delivery from "@/assets/food.jpeg"
import shopping from "@/assets/shopping.jpeg"
import taxi from "@/assets/taxi.jpg"
import edtech from "@/assets/edumind.jpeg"
import gogreen from "@/assets/gogreen.jpg"
import aman from "@/assets/aman.jpeg"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from '@/components/ui/select';
import { useForm, ValidationError } from '@formspree/react';
import { toast } from '@/components/ui/use-toast';
// import { data } from '../components/constants/data';
import SecondBanner from '@/components/SecondBanner';
import Careers from "@/components/Careers"
import ThirdBanner from '@/components/ThirdBanner';
import HeroBanner from '@/components/heroBanner';
// import CaseStudyCarousel from '@/components/CaseStudyCarousel';
import Footer from '@/components/Footer';
import aiProfessionalsImg from "@/assets/ai-professionals-presenting-at-tech-conference-wit.jpg";
import SafetyMarketImpact from '@/components/SafetyMarketImpact';
import DevelopmentNetwork from '@/components/DevelopmentNetwork';
import MarketOpportunity from '@/components/MarketOpportunity';
import PlatformCapabilities from '@/components/PlatformCapabilities';
import BetaTestingResults from '@/components/BetaTestingResults';
import BetaPhase from '@/components/BetaPhase';
import HealthcareWorkflow from '@/components/HealthcareWorkflow';
import PlatformFeatures from '@/components/PlatformFeatures';
import GreenTrackHero from '@/components/GreenTrackHero';
import LearningPaths from '@/components/LearningPaths';
import TrustedOrganizations from '@/components/TrustedOrganizations';
import AnalyticsHero from '@/components/AnalyticsHero';
import Section4Page from '@/components/Section4Page';
import SecuritySection from '@/components/security';
import ImageSection from '@/components/ImageSection';
import ProgressSection from '@/components/ProgressSection';
import LeadershipSection from '@/components/LeadershipSection';
import CareersSection from '@/components/CareersSection';
import ContactSectionAbout from '@/components/ContactSectionAbout';
import ProcessSection from '@/components/ProcessSection';


const DynamicPage = () => {
  const { category, item } = useParams();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Define content based on the route parameters
  const getPageContent = () => {
    const routeKey = `${category}/${item}`;

    const contentMap: Record<string, any> = {
      // Solutions
      "solutions/ai-product-development": {
        tag: "AI & IT Consulting",
        title: "Where strategic AI vision meets IT excellence",
        highlight: ["strategic", "AI", "vision", "IT", "excellence"],
        subtitle: "Guiding digital transformation with expert insight.",
        // bannerImage: aiandit,
        description:
          "We are a collective of world-class strategists and IT experts bound together by our deep tech knowledge, infrastructure expertise, and passion for guiding organizations through comprehensive AI and IT transformation.",
        buttons: [
          "Schedule Strategy & IT Assessment",
          "Download AI & IT Readiness Guide",
        ],
        companies: [
          "Fortune 500",
          "Tech Startups",
          "Government",
          "Healthcare",
          "Finance",
          "IT Services",
        ],
        features: [
          "Custom AI Platform Development",
          "Machine Learning Model Integration",
          "Scalable Cloud Architecture",
          "Real-time Data Processing",
          "API Development & Integration",
        ],

        section2: {
          title: "Our Strategic AI & IT Approach",
          description:
            "Our comprehensive consulting services span AI strategy and IT infrastructure optimization at every stage of your digital transformation journey.",
          framework: {
            title: "AI & IT Development",
            items: [
              { title: "Assess", percentage: 100, color: "bg-green-500" },
              { title: "Plan", percentage: 75, color: "bg-red-500" },
              { title: "Execute", percentage: 45, color: "bg-purple-500" },
              { title: "Optimize", percentage: 20, color: "bg-yellow-500" },
            ],
            stats: {
              timeline: {
                value: "18",
                label: "Months Avg Timeline",
                color: "text-cyan-400",
              },
              roi: {
                value: "340%",
                label: "ROI Achievement",
                color: "text-green-400",
              },
            },
          },
          items: [
            {
              number: 1,
              title: "Strategic AI & IT Assessment",
              description:
                "Comprehensive evaluation of your organization's AI readiness and IT infrastructure, identifying opportunities for optimization and potential challenges across all business and technical functions.",
            },
            {
              number: 2,
              title: "End-to-End Implementation Guidance",
              description:
                "Hands-on support throughout AI and IT infrastructure execution, ensuring successful adoption, seamless integration, and continuous optimization of all technology initiatives.",
            },
            {
              number: 3,
              title: "Implementation",
              description:
                "Rapid deployment of analytics solutions with minimal disruption to your existing operations.",
            },
            {
              number: 4,
              title: "Optimization",
              description:
                "Continuous monitoring, refinement, and enhancement to ensure maximum value from your analytics investment.",
            },
          ],
        },

        section3: {
          title: "Our Core Capabilities",
          description:
            "Delivering next-generation AI and IT consulting solutions designed for scale, security, and sustainability.",
          items: [
            {
              icon: Lightbulb,
              title: "AI Strategy Development",
              description:
                "Comprehensive AI roadmaps and strategic planning for digital transformation.",
              color: "bg-orange-500",
            },
            {
              icon: Server,
              title: "IT Infrastructure Consulting",
              description:
                "Modern infrastructure design and optimization for scalable operations.",
              color: "bg-teal-500",
            },
            {
              icon: Monitor,
              title: "Digital Transformation",
              description:
                "End-to-end digital transformation services for modern businesses.",
              color: "bg-purple-500",
            },
            {
              icon: Users,
              title: "Executive & IT Training",
              description:
                "Professional development and training programs for teams.",
              color: "bg-orange-500",
            },
            {
              icon: Cloud,
              title: "Cloud & DevOps Strategy",
              description:
                "Cloud migration and DevOps implementation strategies.",
              color: "bg-orange-500",
            },
            {
              icon: Database,
              title: "Data Infrastructure Design",
              description:
                "Robust data architecture and infrastructure solutions.",
              color: "bg-teal-500",
            },
            {
              icon: Shield,
              title: "Security & Compliance",
              description:
                "Comprehensive security and regulatory compliance solutions.",
              color: "bg-orange-500",
            },
            {
              icon: Network,
              title: "Network & Integration",
              description:
                "Network optimization and system integration services.",
              color: "bg-teal-500",
            },
          ],
        },

        section4: {
          title: "Transformation Success Stories",
          description:
            "Real results from organizations that partnered with us for their AI and IT transformation journey.",
          data: successStories,
        },
      },
      "solutions/data-analytics-and-insights": {
        AnalyticsHero: {
          tag: "Data Analytics & Insights",
          title: "Transform raw data into actionable intelligence",
          highlight: ["raw", "data", "intelligence"],
          subtitle:
            "Transform fragmented data into clean, unified pipelines for seamless AI integration.",
          bannerImage: graph,
          description:
            "Unlock the hidden potential in your data with our advanced analytics platform. From complex data processing to intuitive visualizations, we turn information into competitive advantage.",
          buttons: ["Start Your Analytics Journey", "View Case Studies"],
          stats: [
            { value: "500%", label: "Faster Insights" },
            { value: "99.9%", label: "Data Accuracy" },
            { value: "24/7", label: "Real-time Monitoring" },
          ],

          // ⬇️ FIX: moved chartData inside AnalyticsHero
          chartData: {
            title: "Analytics Dashboard",
            subTitle: "Revenue Growth",
            growth: "+247%",
            data: [
              { value: 80 },
              { value: 120 },
              { value: 150 },
              { value: 100 },
              { value: 170 },
              { value: 160 },
              { value: 180 },
              { value: 155 },
            ],
            metrics: [
              {
                icon: "TrendingUp",
                label: "Conversion",
                value: "12.4%",
                color: "text-green-400",
              },
              {
                icon: "Users",
                label: "Active Users",
                value: "24.8K",
                color: "text-green-400",
              },
            ],
          },
        },

        features: [
          "Data Pipeline Architecture",
          "ETL/ELT Process Design",
          "Data Quality Assurance",
          "Real-time Analytics",
          "Business Intelligence Dashboards",
        ],
        technologies: {
          title: "Powered by Leading Technologies",
          description:
            "We leverage the most advanced analytics tools and platforms to deliver exceptional results",
          items: [
            "Python & R",
            "Apache Spark",
            "Tableau",
            "Power BI",
            "Snowflake",
            "AWS Analytics",
            "Google Cloud",
            "Azure Synapse",
            "TensorFlow",
            "PyTorch",
            "Databricks",
            "Elasticsearch",
          ],
        },
        footerMain: {
          title: "Ready to unlock your data's potential?",
          subtitle: "Let's discuss how our analytics solutions can transform your business intelligence and drive growth."
        },
        analyticsData: {
          title: "Our Analytics Process",
          subtitle: "A systematic approach to transforming your data into strategic advantage",
          steps: [
            {
              number: "01",
              title: "Data Discovery",
              description: "We analyze your current data landscape, identify sources, and assess data quality and accessibility.",
            },
            {
              number: "02",
              title: "Architecture Design",
              description: "Custom analytics architecture tailored to your business needs, scalability requirements, and technical constraints.",
            },
            {
              number: "03",
              title: "Implementation",
              description: "Rapid deployment of analytics solutions with minimal disruption to your existing operations.",
            },
            {
              number: "04",
              title: "Optimization",
              description: "Continuous monitoring, refinement, and enhancement to ensure maximum value from your analytics investment.",
            },
          ],
        },
        // section2: {
        //   title: "Our Analytics Process",
        //   description:
        //     "A systematic approach to transforming your data into strategic advantage",
        //   items: [
        //     {
        //       number: 1,
        //       title: "Data Discovery",
        //       description:
        //         "We analyze your current data landscape, identify sources, and assess data quality and accessibility.",
        //     },
        //     {
        //       number: 2,
        //       title: "Architecture Design",
        //       description:
        //         "Custom analytics architecture tailored to your business needs, scalability requirements, and technical constraints.",
        //     },
        //     {
        //       number: 3,
        //       title: "Implementation",
        //       description:
        //         "Rapid deployment of analytics solutions with minimal disruption to your existing operations.",
        //     },
        //     {
        //       number: 4,
        //       title: "Optimization",
        //       description:
        //         "Continuous monitoring, refinement, and enhancement to ensure maximum value from your analytics investment.",
        //     },
        //   ],
        //   framework: {
        //     title: "AI & IT Transformation Framework",
        //     items: [
        //       { title: "Assess", percentage: 100, color: "bg-green-500" },
        //       { title: "Plan", percentage: 75, color: "bg-red-500" },
        //       { title: "Execute", percentage: 45, color: "bg-purple-500" },
        //       { title: "Optimize", percentage: 20, color: "bg-yellow-500" },
        //     ],
        //     stats: {
        //       timeline: { value: "18", label: "Months Avg Timeline", color: "text-cyan-400", },
        //       roi: { value: "340%", label: "ROI Achievement", color: "text-green-400", },
        //     },
        //   },
        // },
      },

      'solutions/machine-learning-solutions': {
        title: 'The fastest and most powerful platform for building ML products',
        subtitle: 'Custom ML models, computer vision, NLP, and predictive analytics for your business.',
        // bannerImage: startup,
        description: 'Leverage the power of machine learning to solve complex business challenges. Our ML solutions span computer vision, natural language processing, and predictive analytics.',
        features: [
          'Computer Vision Systems',
          'Natural Language Processing',
          'Predictive Analytics Models',
          'Recommendation Engines',
          'Anomaly Detection Systems'
        ],
        companies: [
          "Microsoft",
          "Google",
          "Amazon",
          "Tesla",
          "OpenAI",
          "Anthropic"
        ],
        technologies: {
          title: "Built on Industry-Leading Technologies",
          description: "We leverage the most advanced ML frameworks and cloud platforms to deliver exceptional performance",
          items: [
            'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras',
            'OpenCV', 'NLTK', 'spaCy', 'Hugging Face',
            'AWS SageMaker', 'Google AI Platform', 'Azure ML', 'MLflow'
          ]
        },
        buttons: [
          "Start Building ML Solutions",
          "View ML Pricing"
        ],
        section2: {
          title: "Our Strategic AI & IT Approach",
          framework: {
            title: "AI & IT Approach",
            items: [{
              title: "Time to Market.",
              percentage: "90",
              text: "90% faster",
              color: 'bg-green-500'
            },
            {
              title: "Model Accuracy",
              percentage: "100",
              text: "500% faster",
              color: 'bg-red-500'
            },
            {
              title: "Infrastructure Costs",
              percentage: "75",
              text: "75% reduction",
              color: 'bg-purple-500'
            },
            {
              title: "Model Training",
              percentage: "100",
              text: "10X faster",
              color: 'bg-yellow-500'
            }
            ],
            stats: {
              timeline: {
                value: "18",
                label: "Months Avg Timeline",
                color: "text-cyan-400"
              },
              roi: {
                value: "340%",
                label: "ROI Achievement",
                color: "text-green-400"
              }
            }
          },
          description: "Our comprehensive consulting services span AI strategy and IT infrastructure optimization at every stage of your digital transformation journey.",
          items: [
            {
              number: 1,
              title: "Data Discovery",
              description: "We analyze your current data landscape, identify sources, and assess data quality and accessibility."

            },
            {
              number: 2,
              title: "Architecture Design",
              description: "Custom analytics architecture tailored to your business needs, scalability requirements, and technical constraints."

            },
            {
              number: 3,
              title: "Implementation",
              description: "Rapid deployment of analytics solutions with minimal disruption to your existing operations."

            },
            {
              number: 4,
              title: "Optimization",
              description: "Continuous monitoring, refinement, and enhancement to ensure maximum value from your analytics investment."

            }
          ],
        },
        section3: {
          title: "Our Analytics Capabilities",
          description: "Comprehensive data solutions that transform how you understand and leverage your business intelligence",
          items: [
            { icon: Lightbulb, title: 'AI Strategy Development', description: 'Comprehensive AI roadmaps and strategic planning for digital transformation', color: 'bg-orange-500' },
            { icon: Server, title: 'IT Infrastructure Consulting', description: 'Modern infrastructure design and optimization for scalable operations', color: 'bg-teal-500' },
            { icon: Monitor, title: 'Digital Transformation', description: 'End-to-end digital transformation services for modern businesses', color: 'bg-purple-500' },
            { icon: Users, title: 'Executive & IT Training', description: 'Professional development and training programs for teams', color: 'bg-orange-500' },
            { icon: Cloud, title: 'Cloud & DevOps Strategy', description: 'Cloud migration and DevOps implementation strategies', color: 'bg-orange-500' },
            { icon: Database, title: 'Data Infrastructure Design', description: 'Robust data architecture and infrastructure solutions', color: 'bg-teal-500' },
            { icon: Shield, title: 'Security & Compliance', description: 'Comprehensive security and regulatory compliance solutions', color: 'bg-orange-500' },
            { icon: Network, title: 'Network & Integration', description: 'Network optimization and system integration services', color: 'bg-teal-500' }
          ]
        },
        section4: {
          title: "Complete ML Models",
          description: "Our custom ML models for a variety of real-world tasks with cutting-edge performance and reliability.",
          data: FlagshipModels
        },
        footerMain: {
          title: "Ready to build world-class ML products?",
          subtitle: "Join leading companies using MangoAnalytics to accelerate their machine learning initiatives."
        },
      },
      'solutions/compliance-and-security': {
        title: 'Seamless Compliance and Security at Every Step',
        // bannerImage: security,
        subtitle: 'HIPAA, FDA, and EMA-ready AI systems from day one.',
        description: "Unlock AI's transformative power with solutions that are secure, compliant, and fully audit-ready—ensuring regulatory confidence from day one. Our approach seamlessly integrates security best practices, governance frameworks, and documentation for regulatory audits so you can innovate with peace of mind.",
        features: [
          'HIPAA Compliance',
          'FDA Validation',
          'EMA Requirements',
          'Data Security Protocols',
          'Audit Trail Management'
        ],
        buttons: [
          "Start Compliant Build",
          "View Compliance Framework",
        ],
        companies: [
          "HealthTech",
          "FinServ",
          "Pharma",
          "MedDevice",
          "Insurance"
        ],
        security: {
          title: 'Security Framework',
          description: 'Enterprise-grade security built into every layer of our AI systems.',
          pillars: [
            {
              icon: Lock,
              title: 'Zero Trust Architecture',
              description: 'Every request is verified, encrypted, and logged with continuous authentication and authorization.'
            },
            {
              icon: Database,
              title: 'Data Sovereignty',
              description: 'Complete control over data location, processing, and retention with regional compliance options.'
            },
            {
              icon: AlertTriangle,
              title: 'Threat Detection',
              description: 'AI-powered security monitoring with real-time threat detection and automated response systems.'
            }
          ],
          standards: [
            'SOC 2 Type II',
            'ISO 27001',
            'GDPR Compliant',
            'CCPA Compliant',
            'FedRAMP Ready'
          ]
        },
        section4: {
          title: "Regulatory Standards",
          description: "Our AI systems are built to meet the highest regulatory standards across industries.",
          data: [
            {
              icon: Lightbulb, company: 'HIPAA', challenge: 'Healthcare AI systems with full HIPAA compliance for protected health information.', color: 'bg-orange-500', results: ["Data encryption at rest and in transit",
                "Access controls and audit logs",
                "Business associate agreements"]
            },
            {
              icon: Server, company: 'FDA', challenge: 'Medical device AI with FDA 510(k) and De Novo pathway compliance.', color: 'bg-teal-500', results: ["Clinical validation protocols",
                "Quality management systems",
                "Post-market surveillance"]
            },
            {
              icon: Monitor, company: 'EMA', challenge: 'European Medicines Agency compliance for pharmaceutical AI applications', color: 'bg-purple-500', results: ["GDPR data protection",
                "Clinical trial regulations",
                "Pharmacovigilance systems"]
            },
          ]
        }
      },
      'solutions/ai-talent-development': {
        title: 'Where AI expertise meets human potential.',
        // bannerImage: talent,
        subtitle: 'Train, certify, and place AI professionals and corporate teams.',
        description: 'We are a collective of world-class AI professionals united by our deep tech knowledge, our human-centric mindset and a passion for developing the next generation of AI talent.',
        features: [
          'AI Training Programs',
          'Professional Certification',
          'Talent Placement Services',
          'Corporate Upskilling',
          'Mentorship Programs'
        ],
        buttons: [
          "Explore Programs",
          "Join our Community"
        ],
        companies: [
          "TechCorp",
          "DataFlow",
          "AIVenture",
          "CloudTech",
          "InnovateLab"
        ],
        section2: {
          title: "Development Programs",
          framework: {
            title: "AI Talent Development",
            items: [{
              title: "Assess",
              percentage: 100,
              color: 'bg-green-500'
            },
            {
              title: "Plan",
              percentage: 75,
              color: 'bg-red-500'
            },
            {
              title: "Execute",
              percentage: 45,
              color: 'bg-purple-500'
            },
            {
              title: "Optimize",
              percentage: 20,
              color: 'bg-yellow-500'
            }
            ],
            stats: {
              timeline: {
                value: "18",
                label: "Months Avg Timeline",
                color: "text-cyan-400"
              },
              roi: {
                value: "340%",
                label: "ROI Achievement",
                color: "text-green-400"
              }
            }
          },
          description: "Our collection of talent development services spans various needs at every stage of the AI transformation process. Explore how we help professionals and organizations grow.",
          items: [
            {
              number: 1,
              title: "Individual AI Training",
              description: "Our best-in-the-world experienced AI mentors, building conversational AI strategy, implementation and monetization using ChatGPT, Claude, and other leading AI solutions that drive massive value creation."

            },
            {
              number: 2,
              title: "Corporate Team Training",
              description: "We help you ensure quality from business strategy to IT operations and end-user value delivery. We offer the quickest consultancy on all things AI, from Azure to AWS, from technical architecture to business strategy."

            },
            {
              number: 3,
              title: "AI Certification Programs",
              description: "As your next-generation AI partner, we stand out by our ability to deliver projects with impact. You can expect top-quality projects from a team of experienced AI professionals and an enthusiastic approach to AI projects."

            },
            {
              number: 4,
              title: "AI Talent Placement",
              description: "We help you unlock the tremendous potential of data, AI and analytics ensuring that your organization is fit for the digital future. Our one-stop-shop covers detection, mitigation, testing and prevention, all from technical experts."

            }
          ],
        },
        section4: {
          title: "Flagship Training Programs",
          description: "Comprehensive AI training programs designed for professionals at every level.",
          data: Trainingprograms
        },
        section5: {
          title: "Success Stories",
          description:
            "Our graduates are leading AI transformations at top companies worldwide.",
          image: aiProfessionalsImg,
          items: [
            {
              icon: "TrendingUp",
              title: "95% Job Placement Rate",
              description:
                "Our graduates secure AI roles within 6 months of program completion.",
            },
            {
              icon: "Award",
              title: "Industry Recognition",
              description:
                "Certified by leading AI organizations and recognized by Fortune 500 companies.",
            },
            {
              icon: "Users",
              title: "Global Community",
              description:
                "Join 10,000+ AI professionals in our global network and mentorship program.",
            },
          ],
        },


      },

      // Industries
      'industries/it-consulting-business': {
        title: 'Where elite tech talent meets strategic innovation.',        // bannerImage: talent,
        subtitle: 'Elite IT talent placement, technical consulting, and team augmentation services.',
        description: 'Elite IT talent placement, technical consulting, and team augmentation services that transform your technology capabilities and accelerate business growth.',
        companies: [
          "Microsoft",
          "AWS",
          "Google Cloud",
          "Salesforce",
          "Oracle"
        ],
        features: [
          'Elite Talent Placement',
          'Technical Consulting',
          'Team Augmentation',
          'Project Management',
          'Technology Strategy'
        ],
        buttons: [
          "Start Your Project",
          "View Case Studies",
        ],
        section4: {
          title: "Our IT consulting services span every stage of your transformation",
          description: "Explore how we help IT organizations scale, innovate, and deliver exceptional results.",
          data: ItConsulting
        },
        imageSection: {
          bannerImage: discussion,
          title: "Ready to transform your IT capabilities?",
          description: "Join the ranks of leading organizations who trust MangoAnalytics to deliver exceptional IT consulting services and elite talent placement.",
          features: [
            "Access to top 1% of IT talent",
            "Proven track record across industries",
            "Flexible engagement models",
            "24/7 support and maintenance",
            "On-demand subject matter experts",
            "End-to-end project delivery management",
            "Agile and DevOps consulting",
            "Security & compliance assurance"
          ],
        }
      },
      'industries/medical-and-healthcare': {
        title: 'AI Meets Compassion',
        // bannerImage: healthcare,
        subtitle: 'Elite IT talent placement, technical consulting, and team augmentation services for the healthcare sector.',
        description: 'Predictive patient analytics, advanced diagnostics, AI-powered medical imaging, automated patient triage, remote monitoring, workflow optimization, and healthcare AI solutions that improve patient outcomes while ensuring regulatory compliance across the care continuum.',
        companies: [
          "Mayo Clinic",
          "Johns Hopkins",
          "Kaiser Permanente",
          "Cleveland Clinic",
          "Mass General"
        ],
        features: [
          'Elite Talent Placement',
          'Technical Consulting',
          'Team Augmentation',
          'Project Management',
          'Technology Strategy'
        ],
        buttons: [
          "Transform Patient Care",
          "View healthcare Cases",
        ],
        section4: {
          title: "AI solutions that improve patient outcomes",
          description: "Explore how we help medical facilities and healthcare organizations deliver better care through intelligent technology.",
          data: Healthcare
        },
        section42: {
          title: "Built for healthcare compliance from day one",
          description: "Our healthcare AI solutions meet the strictest regulatory requirements and industry standards.",
          data: Healthcare2
        },
        imageSection: {
          bannerImage: heathcarefooter,
          title: "Ready to revolutionize patient care?",
          description: "Join leading healthcare organizations who trust MangoAnalytics to deliver AI-powered solutions that improve patient outcomes and operational efficiency.",
          features: [
            "HIPAA-compliant from day one",
            "Proven ROI in patient outcomes",
            "24/7 clinical support team",
            "Seamless EHR integration",
            "Rapid deployment of AI-enabled diagnostics",
            "Automated administrative workflow solutions",
            "Personalized patient engagement tools",
            "End-to-end data security & compliance oversight",
            "Integrated telehealth capabilities",
            "AI-driven predictive health analytics"
          ]
        }
      },

      'industries/startups-and-enterprises': {
        // bannerImage: startup,
        title: 'From Vision to Scale',
        subtitle: 'Scalable AI products & cloud-native platforms for businesses of all sizes.',
        description: 'Scalable AI products and cloud-native platforms that grow with your business, from startup MVP to enterprise-grade solutions. We accelerate your path from idea to market with rapid prototyping, robust architecture, and seamless enterprise integration. Whether you’re launching your first product or modernizing legacy systems, our solutions ensure you’re ready for hyper-growth, leveraging best-in-class AI technologies and cloud platforms for resilience, innovation, and speed-to-market.',
        features: [
          'Scalable AI Products',
          'Cloud-Native Platforms',
          'Rapid Prototyping',
          'Enterprise Integration',
          'Growth-Focused Solutions'
        ],
        imageSection: {
          bannerImage: startupFooter,
          title: "Ready to scale your AI vision?",
          description: "Join innovative startups and forward-thinking enterprises who trust MangoAnalytics to build scalable AI products and cloud-native platforms.",
          features: [
            "Proven track record from MVP to IPO",
            "Cloud-native architecture expertise",
            "Flexible engagement models",
            "End-to-end product development",
            "Rapid prototyping & iterative delivery",
            "Enterprise-grade security & compliance",
            "Seamless integration with existing systems",
            "Cutting-edge AI and data science expertise"
          ]
        },
        companies: [
          "Stripe",
          "Airbnb",
          "Uber",
          "Netflix",
          "Spotify"
        ],
        buttons: [
          "Scale your Vision",
          "View Success Stories",
        ],
        section4: {
          title: "End-to-end IT consulting for your transformation",
          description: "Explore how we help IT organizations scale, innovate, and deliver exceptional results.",
          data: Startup
        },
        section42: {
          title: "Tailored solutions for every stage of growth",
          description: "Whether you're a startup looking to disrupt or an enterprise seeking transformation, we have the right approach.",
          data: Startup2
        },
      },

      // Labs
      'labs/food-haven': {
        // bannerImage: delivery,
        title: 'Food Haven',
        domain: "Heal Tech",
        subtitle: 'AI-powered healthy lifestyle food delivery platform with personalized nutrition.',
        description: 'AI-powered healthy lifestyle food delivery platform with personalized nutrition recommendations and smart meal planning.',
        features: [
          'Personalized Nutrition AI',
          'Healthy Meal Recommendations',
          'Seamless Delivery Integration',
          'Lifestyle Tracking',
          'Nutrition Analytics'
        ],
        buttons: [
          "Join Waitlist",
          "View Demo",
        ],
        developmentProgress: {
          percentage: 52,
          expectedLaunch: "Q3 2025",
          teamSize: "8"
        },
        footerMain: {
          title: "Be Part of the Food Revolution",
          subtitle: "Join our early access program and help shape the future of personalized nutrition."
        },
        progress: {
          title: "Development Timeline",
          items: [
            {
              title: "Research & Planning",
              percentage: 100,
              status: "complete",
              color: 'bg-pink-500'
            },
            {
              title: "AI Model Development",
              percentage: 70,
              status: "pending",
              color: 'bg-yellow-500'
            },
            {
              title: "AI Model Development",
              percentage: 10,
              status: "pending",
              color: 'bg-purple-500'
            },
            {
              title: "AI Model Development",
              percentage: 20,
              status: "pending",
              color: 'bg-green-500'
            },
            {
              title: "Platform Development",
              percentage: 30,
              status: "pending",
              color: 'bg-gray-500'
            },
            {
              title: "Market Launch",
              percentage: 0,
              status: "pending",
              color: 'bg-yellow-500'
            }
          ]
        },

        section3: {
          title: "Key Features",
          description: "",
          items: [
            { icon: Lightbulb, title: 'Personalized Nutrition', description: 'AI-driven meal recommendations based on health goals, dietary restrictions, and preferences', color: 'bg-orange-500' },
            { icon: Server, title: 'Smart Recipe Generation', description: 'Generate custom recipes using available ingredients and nutritional requirements', color: 'bg-teal-500' },
            { icon: Monitor, title: 'Health Tracking Integration', description: 'Seamless integration with fitness trackers and health monitoring devices', color: 'bg-purple-500' },
          ]
        },
        section2: {
          title: "Technical Architecture",
          description: "A systematic approach to latest Technical Architecture",
          items: [
            {
              number: 1,
              title: "AI & Machine Learning",
              description: "Advanced recommendation algorithms using collaborative filtering and deep learning models for personalized nutrition planning."

            },
            {
              number: 2,
              title: "Data Integration",
              description: "Real-time integration with health tracking devices, nutritional databases, and user preference learning systems."

            },
            {
              number: 3,
              title: "Scalable Platform",
              description: "Cloud-native architecture designed to handle millions of users with real-time meal recommendations and delivery coordination."

            },
          ],
          framework: {
            title: "Market Impact",
            items: [{
              title: "Food Delivery Market",
              percentage: 73,
              color: 'bg-green-500'
            },
            {
              title: "Health-Conscious Consumers",
              percentage: 73,
              color: 'bg-red-500'
            },
            {
              title: "Potential Users",
              percentage: "2.1B",
              color: 'bg-yellow-500'
            },
            {
              title: "Potential Users",
              percentage: 45,
              color: 'bg-purple-500'
            }
            ]
          },
        },
        status: 'Coming Soon',
      },
      'labs/mango-boutique': {
        // bannerImage: shopping,
        domain: "E-commerce",
        title: 'Mango Boutique',
        subtitle: 'Immersive VR shopping experience with AI-powered style recommendations.',
        description: 'Immersive VR shopping experience with AI-powered style recommendations that revolutionizes online retail through virtual reality and personalized fashion intelligence.',
        features: [
          'Immersive VR Shopping',
          'AI Style Recommendations',
          'Virtual Try-On Technology',
          'Personalized Curation',
          'Social Shopping Features'
        ],
        buttons: [
          "Join Early Access",
          "Experience Demo",
        ],
        developmentProgress: {
          percentage: 32,
          expectedLaunch: "Q3 2025",
          vrplatforms: "Meta,Apple"
        },
        footerMain: {
          title: "Step Into the Future of Shopping",
          subtitle: "Be among the first to experience revolutionary VR shopping with Mango Boutique."
        },
        section2: {
          title: "Revolutionary Features",
          description: "A systematic approach to latest Technical Architecture",
          items: [
            {
              number: 1,
              title: "Immersive VR Shopping",
              description: "Step into virtual showrooms with photorealistic 3D environments and haptic feedback"

            },
            {
              number: 2,
              title: "AI Style Assistant",
              description: "Personalized fashion recommendations powered by computer vision and style analysis."

            },
            {
              number: 3,
              title: "Virtual Try-On",
              description: "Advanced AR technology for realistic clothing and accessory fitting experiences"

            },
            {
              number: 4,
              title: "Social Shopping",
              description: "Shop with friends in shared virtual spaces with real-time collaboration"

            },
          ],
          framework: {
            title: "Market Opportunity",
            items: [{
              title: "VR Market Size",
              percentage: "$31.12B",
              color: 'bg-green-500'
            },
            {
              title: "Annual Growth",
              percentage: 15.3,
              color: 'bg-red-500'
            },
            {
              title: "Want VR Shopping",
              percentage: "71",
              color: 'bg-yellow-500'
            },
            {
              title: "Return Reduction",
              percentage: 40,
              color: 'bg-purple-500'
            }
            ]
          },
        },
        marketOpportunity: {
          title: "Market Opportunity",
          subtitle: "The future of retail is virtual and personalized.",
          // image: "/assets/market-opportunity.jpg", 

          items: [
            {
              title: "VR Market Size",
              percentage: "$31.12B",
              subText: "By 2030"
            },
            {
              title: "Annual Growth",
              percentage: "15.3%",
              subText: "CAGR 2023–2030"
            },
            {
              title: "Want VR Shopping",
              percentage: "71%",
              subText: "Gen Z Consumers"
            },
            {
              title: "Return Reduction",
              percentage: "40%",
              subText: "With Virtual Try-On"
            }
          ]
        },
        status: 'Coming Soon',
        progress: {
          title: "Development Roadmap",
          items: [
            {
              title: "Market Research",
              percentage: 100,
              status: "complete",
              color: 'bg-pink-500'
            },
            {
              title: "VR Technology Stack",
              percentage: 45,
              status: "pending",
              color: 'bg-yellow-500'
            },
            {
              title: "AI Recommendation Engine",
              percentage: 40,
              status: "pending",
              color: 'bg-purple-500'
            },
            {
              title: "3D Asset Pipeline",
              percentage: 15,
              status: "pending",
              color: 'bg-green-500'
            },
            {
              title: "Beta Platform",
              percentage: 0,
              status: "pending",
              color: 'bg-gray-500'
            },
            {
              title: "Market Launch",
              percentage: 0,
              status: "pending",
              color: 'bg-gray-500'
            },
          ]
        },
      },
      'labs/drivemesafe': {
        title: 'DriveMeSafe',
        // bannerImage: taxi,
        domain: "Transportation",
        subtitle: 'Community-driven ride-sharing platform prioritizing family safety, real-time protection, and trusted connections.',
        description: 'Community-driven ride-sharing platform focused on family safety with comprehensive verification, real-time monitoring, and neighborhood trust networks..',
        features: [
          'Family Safety Focus',
          'Verified Driver Network',
          'Real-time Safety Monitoring',
          'Community Ratings',
          'Emergency Response System'
        ],
        buttons: [
          "Safety Network",
          "Learn About Safety",
        ],
        developmentProgress: {
          percentage: 28,
          expectedLaunch: "Q4 2025",
          teamSize: "9"
        },
        section2: {
          title: "Safety-First Features",
          description: "A systematic approach to latest Technical Architecture",
          items: [
            {
              number: 1,
              title: "Safety Scoring System",
              description: "Comprehensive driver safety ratings based on driving history, community feedback, and real-time monitoring"

            },
            {
              number: 2,
              title: "Family Verification",
              description: "Multi-layer identity verification and background checks specifically designed for family safety"

            },
            {
              number: 3,
              title: "Real-time Tracking",
              description: "Live GPS tracking with emergency alerts and automatic check-ins for peace of mind"

            },
            {
              number: 4,
              title: "Community Trust Network",
              description: "Neighborhood-based driver communities with local reputation systems and referrals"

            },
          ],
          framework: {
            title: "Safety Market Impact",
            items: [
              {
                title: "Ride-sharing Market",
                percentage: "$117B",
                color: 'bg-green-500'
              },
              {
                title: "Parents Concerned",
                percentage: "89",
                color: 'bg-red-500'
              },
              {
                title: "Want Family Features",
                percentage: "67",
                color: 'bg-yellow-500'
              },
              {
                title: "Safety Tech Market",
                percentage: "$2.3B",
                color: 'bg-purple-500'
              }
            ]
          },
        },
        progress: {
          title: "Development Milestones",
          items: [
            {
              title: "Safety Framework Design",
              percentage: 100,
              status: "complete",
              color: 'bg-pink-500'
            },
            {
              title: "Community Platform",
              percentage: 25,
              status: "pending",
              color: 'bg-yellow-500'
            },
            {
              title: "Safety Scoring Algorithm",
              percentage: 15,
              status: "pending",
              color: 'bg-purple-500'
            },
            {
              title: "Mobile App Development",
              percentage: 10,
              status: "pending",
              color: 'bg-green-500'
            },
            {
              title: "Pilot Testing Program",
              percentage: 0,
              status: "pending",
              color: 'bg-gray-500'
            },
            {
              title: "Public Launch",
              percentage: 0,
              status: "pending",
              color: 'bg-gray-500'
            }
          ]
        },
        developmentNetwork: {
          title: "Development Network (PERT)",
          image: "../assets/f9576501-79a4-4e8c-b1d0-45a742a06b1f.png", // first uploaded image
          items: [
            {
              duration: "8w",
              title: "Safety Research",
              status: "completed",
              dependsOn: null
            },
            {
              duration: "6w",
              title: "Platform Architecture",
              status: "in-progress",
              dependsOn: "Safety Research"
            },
            {
              duration: "10w",
              title: "Safety Algorithm",
              status: "in-progress",
              dependsOn: "Platform Architecture"
            },
            {
              duration: "8w",
              title: "Mobile App UI",
              status: "in-progress",
              dependsOn: "Platform Architecture"
            },
            {
              duration: "12w",
              title: "Community Features",
              status: "upcoming",
              dependsOn: "Safety Algorithm, Mobile App UI"
            },
            {
              duration: "6w",
              title: "Testing & Launch",
              status: "upcoming",
              dependsOn: "Community Features"
            }
          ]
        },
        safetyMarketImpact: {
          title: "Safety Market Impact",
          subtitle: "Addressing the critical need for family-safe transportation",
          // image: "../assets/cfbe0e49-56da-40ba-ba1e-00e36bd81158.png",
          items: [
            {
              title: "Ride-sharing Market",
              percentage: "$117B",
              subText: "Global 2024",
              color: "text-orange-500"
            },
            {
              title: "Parents Concerned",
              percentage: "89%",
              subText: "About Safety",
              color: "text-orange-500"
            },
            {
              title: "Want Family Features",
              percentage: "67%",
              subText: "In Ride-sharing",
              color: "text-orange-500"
            },
            {
              title: "Safety Tech Market",
              percentage: "$2.3B",
              subText: "Annual Growth",
              color: "text-orange-500"
            }
          ]
        },
        footerMain: {
          title: "Join the Safety Revolution",
          subtitle: "Be part of building the safest ride-sharing platform for families and communities."
        },
        status: 'Coming Soon'
      },
      'labs/edumind-ai': {
        betaPhase: {
          title: "Beta Phase",
          subtitle: "Currently Testing",
          items: [
            {
              value: "1,247",
              label: "Active Beta Users",
              subText: "+23%"
            },
            {
              value: "89%",
              label: "Learning Efficiency",
              subText: "+34%"
            },
            {
              value: "4.8/5",
              label: "User Satisfaction",
              subText: "+0.3"
            },
            {
              value: "92%",
              label: "Knowledge Retention",
              subText: "+28%"
            }
          ]
        },

        // section2: {
        //   title: "Platform Capabilities",
        //   description: "Accelerate learning outcomes with adaptive AI and state-of-the-art educational technology.",
        //   items: [
        //     {
        //       number: 1,
        //       title: "Adaptive AI Tutoring",
        //       description: "Personalized learning paths that adapt in real-time based on student performance and learning style"

        //     },
        //     {
        //       number: 2,
        //       title: "Interactive Content",
        //       description: "Dynamic educational content generation with multimedia explanations and practice exercises"

        //     },
        //     {
        //       number: 3,
        //       title: "Progress Analytics",
        //       description: "Comprehensive learning analytics for students, parents, and educators with actionable insights"

        //     },
        //     {
        //       number: 4,
        //       title: "Collaborative Learning",
        //       description: "AI-facilitated group projects and peer learning opportunities with smart matching"

        //     },
        //   ],
        //   framework: {
        //     title: "Beta Testing Results",
        //     items: [
        //       {
        //         title: "Learning Efficiency",
        //         percentage: "86",
        //         color: 'bg-green-500'
        //       },
        //       {
        //         title: "Knowledge Retention",
        //         percentage: "92",
        //         color: 'bg-red-500'
        //       },
        //       {
        //         title: "User Satisfaction",
        //         percentage: "70",
        //         color: 'bg-yellow-500'
        //       },
        //       {
        //         title: "Time Reduction",
        //         percentage: 67,
        //         color: 'bg-purple-500'
        //       }
        //     ]
        //   },
        // },
        progress: {
          title: "Development Progress",
          items: [
            {
              title: "Core AI Engine",
              percentage: 100,
              status: "complete",
              color: 'bg-pink-500'
            },
            {
              title: "Learning Platform",
              percentage: 95,
              status: "pending",
              color: 'bg-yellow-500'
            },
            {
              title: "Beta Testing Program",
              percentage: 85,
              status: "pending",
              color: 'bg-purple-500'
            },
            {
              title: "Content Expansion",
              percentage: 60,
              status: "pending",
              color: 'bg-green-500'
            },
            {
              title: "Public Launch",
              percentage: 0,
              status: "pending",
              color: 'bg-gray-500'
            },
          ]
        },
        platformCapabilities: {
          title: "Platform Capabilities",
          items: [
            {
              icon: "brain",
              title: "Adaptive AI Tutoring",
              description:
                "Personalized learning paths that adapt in real-time based on student performance and learning style",
              status: "Live in Beta"
            },
            {
              icon: "book",
              title: "Interactive Content",
              description:
                "Dynamic educational content generation with multimedia explanations and practice exercises",
              status: "Live in Beta"
            },
            {
              icon: "chart",
              title: "Progress Analytics",
              description:
                "Comprehensive learning analytics for students, parents, and educators with actionable insights",
              status: "Live in Beta"
            },
            {
              icon: "users",
              title: "Collaborative Learning",
              description:
                "AI-facilitated group projects and peer learning opportunities with smart matching",
              status: "Coming Soon"
            }
          ]
        },
        marketOpportunity : {
          title: "Beta Testing Results",
          subtitle: "Real results from our closed beta program with students and educators",
          items: [
            {
              percentage: "89%",
              title: "Learning Efficiency",
              subText: "+34% improvement"
            },
            {
              percentage: "92%",
              title: "Knowledge Retention",
              subText: "+28% vs traditional"
            },
            {
              percentage: "4.8",
              title: "User Satisfaction",
              subText: "Out of 5.0"
            },
            {
              percentage: "67%",
              title: "Time Reduction",
              subText: "Faster learning"
            }
          ]
        },

        footerMain: {
          title: "Join the Education Revolution",
          subtitle: "Be among the first to experience the future of personalized learning with EduMind AI."
        },
        domain: "Education",
        status: 'Beta Testing',

      },
      'labs/greentrack': {
        GreenTrackHero: {
          title: 'GreenTrack',
          subtitle: 'Sustainability',
          description:
            'Carbon footprint tracking and sustainability optimization platform for businesses committed to environmental responsibility and ESG compliance.',

          tags: [
            { label: "In Development", color: "bg-yellow-800/30 text-yellow-400 border-yellow-700/30" },
            { label: "Sustainability", color: "bg-blue-900/30 text-blue-300 border-blue-700/30" }
          ],
          stats: {
            percentage: 73,
            expectedLaunch: "Q2 2025",
            pilotPartners: "12 Companies",
            teamSize: "6 Members"
          },
        },
        // section2: {
        //   title: "Platform Features",
        //   description: "Accelerate learning outcomes with adaptive AI and state-of-the-art educational technology.",
        //   items: [
        //     {
        //       number: 1,
        //       title: "Carbon Footprint Tracking",
        //       description: "Comprehensive carbon emission monitoring across all business operations with real-time data collection"

        //     },
        //     {
        //       number: 2,
        //       title: "Sustainability Analytics",
        //       description: "Advanced analytics and predictive modeling for sustainability performance optimization"

        //     },
        //     {
        //       number: 3,
        //       title: "Compliance Reporting",
        //       description: "Automated ESG reporting for regulatory compliance and stakeholder transparency"

        //     },
        //     {
        //       number: 4,
        //       title: "Supply Chain Insights",
        //       description: "End-to-end supply chain sustainability tracking and vendor impact assessment."

        //     },
        //   ],
        //   framework: {
        //     title: "Market Opportunity",
        //     items: [
        //       {
        //         title: "ESG Software Market",
        //         percentage: "$16.3B",
        //         color: 'bg-green-500'
        //       },
        //       {
        //         title: "Annual Growth Rate",
        //         percentage: "23.1",
        //         color: 'bg-red-500'
        //       },
        //       {
        //         title: "Companies Need ESG",
        //         percentage: "87",
        //         color: 'bg-yellow-500'
        //       },
        //       {
        //         title: "Sustainable Investments",
        //         percentage: '$30T',
        //         color: 'bg-purple-500'
        //       }
        //     ]
        //   },
        // },
        progress: {
          title: "Development Timeline",
          items: [
            {
              title: "Market Research",
              percentage: 100,
              status: "complete",
              color: 'bg-pink-500'
            },
            {
              title: "Core Platform",
              percentage: 75,
              status: "pending",
              color: 'bg-yellow-500'
            },
            {
              title: "Dashboard & Analytics",
              percentage: 75,
              status: "pending",
              color: 'bg-purple-500'
            },
            {
              title: "Enterprise Integration",
              percentage: 40,
              status: "pending",
              color: 'bg-green-500'
            },
            {
              title: "Pilot Program",
              percentage: 0,
              status: "pending",
              color: 'bg-gray-500'
            },
            {
              title: "Market Launch",
              percentage: 0,
              status: "pending",
              color: 'bg-gray-500'
            },
          ]
        },
        safetyMarketImpact: {
          title: "Market Opportunity",
          subtitle: "The sustainability software market is experiencing unprecedented growth",
          // image: "../assets/cfbe0e49-56da-40ba-ba1e-00e36bd81158.png", 
          items: [
            {
              title: "ESG Software Market",
              percentage: "$16.3B",
              subText: "By 2027",
              color: "text-green-500"
            },
            {
              title: "Annual Growth Rate",
              percentage: "23.1%",
              subText: "CAGR 2022-2027",
              color: "text-green-500"
            },
            {
              title: "Companies Need ESG",
              percentage: "87%",
              subText: "Fortune 500",
              color: "text-green-500"
            },
            {
              title: "Sustainable Investments",
              percentage: "$30T",
              subText: "Global Assets",
              color: "text-green-500"
            }
          ]
        },
        platformFeatures: {
          title: "Platform Features",
          items: [
            {
              icon: "leaf",
              title: "Carbon Footprint Tracking",
              description:
                "Comprehensive carbon emission monitoring across all business operations with real-time data collection",
              badge: "Up to 40% reduction in emissions",
              badgeColor: "bg-green-700/20 text-green-400"
            },
            {
              icon: "chart",
              title: "Sustainability Analytics",
              description:
                "Advanced analytics and predictive modeling for sustainability performance optimization",
              badge: "25% improvement in ESG scores"
            },
            {
              icon: "shield",
              title: "Compliance Reporting",
              description:
                "Automated ESG reporting for regulatory compliance and stakeholder transparency",
              badge: "90% faster report generation"
            },
            {
              icon: "globe",
              title: "Supply Chain Insights",
              description:
                "End-to-end supply chain sustainability tracking and vendor impact assessment",
              badge: "60% better supply chain visibility"
            }
          ]
        },
        footerMain: {
          title: "Lead the Sustainability Revolution",
          subtitle: "Join our pilot program and be among the first to experience next-generation sustainability tracking.."
        },
      },

      'labs/healthsync': {
        // bannerImage: healthcare,
        domain: "Healthcare",
        title: 'HealthSync',
        subtitle: 'AI-powered patient data integration and predictive health analytics.',
        description: 'AI-powered patient data integration and predictive health analytics platform that transforms healthcare delivery through intelligent data unification and proactive care insights.',
        features: [
          'Patient Data Integration',
          'Predictive Health Analytics',
          'Health Trend Analysis',
          'Risk Assessment',
          'Care Coordination'
        ],
        buttons: [
          "Request Healthcare Demo",
          "HIPAA Compliance",
        ],
        developmentProgress: {
          percentage: 45,
          expectedLaunch: "Q3 2025",
          compliance: "HIPAA Ready"
        },
        footerMain: {
          title: "Transform Healthcare Delivery",
          subtitle: "Partner with us to revolutionize patient care through intelligent data integration and predictive analytics."
        },
        healthcareWorkflow: {
          title: "Healthcare Data Workflow",
          steps: [
            {
              number: 1,
              title: "Data Collection",
              description: "Aggregate patient data from multiple sources"
            },
            {
              number: 2,
              title: "AI Processing",
              description: "Apply machine learning models for analysis"
            },
            {
              number: 3,
              title: "Risk Assessment",
              description: "Generate predictive health insights",
              active: true // highlighted
            },
            {
              number: 4,
              title: "Clinical Review",
              description: "Healthcare provider validation and action"
            },
            {
              number: 5,
              title: "Patient Care",
              description: "Personalized treatment recommendations"
            }
          ]
        },
        section2: {
          title: "Healthcare Capabilities",
          description: "Unlock unified healthcare data insights and enable proactive care with HealthSync's secure, AI-powered integration and analytics platform.",
          items: [
            {
              number: 1,
              title: "Patient Data Integration",
              description: "Seamless integration of EHR, lab results, imaging, and wearable device data into unified profiles"

            },
            {
              number: 2,
              title: "Predictive Health Analytics",
              description: "AI-powered risk assessment and early warning systems for chronic disease prevention"

            },
            {
              number: 3,
              title: "HIPAA-Compliant Security",
              description: "Enterprise-grade security with end-to-end encryption and audit trails for healthcare data"

            },
            {
              number: 4,
              title: "Real-time Monitoring",
              description: "Continuous patient monitoring with automated alerts for critical health changes"

            },
          ],
          framework: {
            title: "Healthcare Technology Market",
            items: [
              {
                title: "Healthcare IT Market",
                percentage: "$659.8B",
                color: 'bg-green-500'
              },
              {
                title: "Annual Growth Rate",
                percentage: "13.4",
                color: 'bg-red-500'
              },
              {
                title: "Hospitals Need AI",
                percentage: "85",
                color: 'bg-yellow-500'
              },
              {
                title: "Cost Reduction",
                percentage: '30',
                color: 'bg-purple-500'
              }
            ]
          },
        },
        progress: {
          title: "Development Progress",
          items: [
            {
              title: "HIPAA Compliance Framework",
              percentage: 100,
              status: "complete",
              color: 'bg-pink-500'
            },
            {
              title: "Data Integration Engine",
              percentage: 65,
              status: "pending",
              color: 'bg-yellow-500'
            },
            {
              title: "Predictive Analytics AI",
              percentage: 45,
              status: "pending",
              color: 'bg-purple-500'
            },
            {
              title: "Healthcare Dashboard",
              percentage: 20,
              status: "pending",
              color: 'bg-green-500'
            },
            {
              title: "Clinical Validation",
              percentage: 0,
              status: "pending",
              color: 'bg-gray-500'
            },
            {
              title: "Healthcare Deployment",
              percentage: 0,
              status: "pending",
              color: 'bg-gray-500'
            }
          ]
        },
        status: 'Coming Soon'
      },
      'training/programs-overview': {
        domain: "Training Programs",
        title: 'Individual and corporate AI courses',
        subtitle: 'AI-powered patient data integration and predictive health analytics.',
        description: 'Transform your career or organization with comprehensive AI training programs designed by industry experts. From fundamentals to advanced implementation, our curriculum covers hands-on projects, real-world case studies, and the latest advancements in machine learning, data science, and AI strategy. Whether you\'re seeking to upskill individually or empower your corporate teams, our programs ensure mastery of cutting-edge tools, practical deployment, and industry-relevant best practices. Engage with expert instructors and join a growing network of AI professionals to accelerate your growth and success.',
        features: [
          'Patient Data Integration',
          'Predictive Health Analytics',
          'Health Trend Analysis',
          'Risk Assessment',
          'Care Coordination'
        ],
        BrandMarquee: [
          { title: "5,000+", subtitle: "Students Trained", },
          { title: "95%", subtitle: "Completion Rate", },
          { title: "200+", subtitle: "Corporate Clients", },
          { title: "4.9/5", subtitle: "Average Rating", },
          { title: "50+", subtitle: "Certified Instructors", },
          { title: "80+", subtitle: "Live Workshops", },
          { title: "100%", subtitle: "Online Access", },
          { title: "Global", subtitle: "Participants from 30+ Countries", },
        ],
        buttons: [
          "Browse All Programs",
          "Download Curriculum"
        ],
        section4: {
          title: "Featured Programs",
          description: "Comprehensive courses designed to take you from beginner to expert in AI and machine learning",
          data: featuredPrograms
        },
        learningPaths: {
          title: "Learning Paths",
          subtitle: "Structured career tracks that combine multiple courses for comprehensive skill development",
          items: [
            {
              courses: 5,
              title: "Data Scientist Track",
              description: "Complete pathway from beginner to professional data scientist",
              duration: "6 months",
              certificate: true,
            },
            {
              courses: 4,
              title: "ML Engineer Track",
              description: "Focus on production ML systems and deployment",
              duration: "4 months",
              certificate: true,
            },
            {
              courses: 3,
              title: "AI Product Manager Track",
              description: "Bridge technical AI knowledge with product strategy",
              duration: "3 months",
              certificate: true,
            },
          ],
        },
        footerMain: {
          title: "Ready to start your AI journey?",
          subtitle: "Join thousands of professionals who have transformed their careers with our comprehensive AI training programs."
        },

      },
      'training/corporate-training': {
        domain: "Corporate Training",
        title: 'Upskilling enterprise teams',
        subtitle: 'AI-powered patient data integration and predictive health analytics.',
        description: 'Transform your organization with comprehensive AI training programs designed for enterprise teams. From leadership strategy to hands-on technical implementation, our curriculum covers upskilling for technical teams, executive leadership, and business units. Engage with practical workshops, real-world case studies, and role-based certifications aligned to your company’s needs. Partner with us to ensure measurable ROI, boost AI adoption, and empower your teams with the latest tools and frameworks in machine learning, data science, and AI-powered business transformation.',
        features: [
          'Patient Data Integration',
          'Predictive Health Analytics',
          'Health Trend Analysis',
          'Risk Assessment',
          'Care Coordination'
        ],
        buttons: [
          "Schedule Consultation",
          "Download Brochure"
        ],
        section3: {
          title: "Why Choose Our Corporate Training",
          description: "We understand the unique challenges of enterprise AI adoption and provide solutions that deliver real business value",
          items: [
            { icon: Lightbulb, title: 'Custom Curriculum', description: 'Tailored training programs designed specifically for your industry and business objectives', color: 'bg-orange-500' },
            { icon: Server, title: 'Expert Instructors', description: 'Learn from industry veterans with real-world experience in AI implementation', color: 'bg-teal-500' },
            { icon: Users, title: 'Measurable ROI', description: 'Track progress with detailed analytics and measure the impact on your business outcomes', color: 'bg-orange-500' },
          ]
        },
        BrandMarquee: [
          { title: "10,000+", subtitle: "Fortune 500 Tech", },
          { title: "25,000+", subtitle: "Global Healthcare", },
          { title: "5,000+", subtitle: "Financial Services", },
          { title: "15,000+", subtitle: "Manufacturing Corp", },
          { title: "85%", subtitle: "Improved AI confidence", },
          { title: "3x", subtitle: "Project Delivery", },
          { title: "60%", subtitle: "Reduced consulting costs", },
          { title: "92%", subtitle: "Completion Rate", },
        ],
        section4: {
          title: "Training Programs",
          description: "Comprehensive programs designed for different roles and skill levels within your organization",
          data: TrainingPrograms
        },
        organizations: [
          {
            value: "10,000+",
            title: "Fortune 500 Tech",
            subtitle: "Technology",
          },
          {
            value: "25,000+",
            title: "Global Healthcare",
            subtitle: "Healthcare",
          },
          {
            value: "5,000+",
            title: "Financial Services",
            subtitle: "Finance",
          },
          {
            value: "15,000+",
            title: "Manufacturing Corp",
            subtitle: "Manufacturing",
          },
        ],

        metrics: [
          {
            value: "85%",
            text: "of teams report improved AI confidence",
          },
          {
            value: "3x",
            text: "faster AI project delivery",
          },
          {
            value: "60%",
            text: "reduction in external consulting costs",
          },
          {
            value: "92%",
            text: "completion rate across all programs",
          },
        ],
        footerMain: {
          title: "Ready to transform your team?",
          subtitle: "Let's discuss how our corporate training programs can accelerate your organization's AI journey."
        },

      },
      'training/waitlist-signup': {
        domain: "Corporate Training",
        title: 'Get early access to our programs',
        subtitle: 'AI-powered patient data integration and predictive health analytics.',
        description: 'Join our exclusive waitlist to be the first to know about new AI training programs, get priority enrollment, and unlock special early bird pricing',
        features: [
          'Patient Data Integration',
          'Predictive Health Analytics',
          'Health Trend Analysis',
          'Risk Assessment',
          'Care Coordination'
        ],

        section3: {
          title: "Waitlist Benefits",
          description: "We understand the unique challenges of enterprise AI adoption and provide solutions that deliver real business value",
          items: [
            { icon: Lightbulb, title: 'Early Access', description: 'Be the first to access new courses and programs before public launch', color: 'bg-orange-500' },
            { icon: Server, title: 'Exclusive Discounts', description: 'Save up to 30% on course fees with early bird pricing', color: 'bg-teal-500' },
            { icon: Monitor, title: 'Priority Support', description: 'Get dedicated support and mentorship from our expert instructors', color: 'bg-purple-500' },
            { icon: Users, title: 'Bonus Content', description: 'Access exclusive workshops, webinars, and industry insights', color: 'bg-orange-500' },
          ]
        },
        formSection: {
          title: "Join 2,500+ professionals already on the waitlist?",
          subtitle: "Get notified when new programs launch and secure your spot with exclusive benefits"
        },

      },

      // About Us
      'about/our-story': {
        title: 'Our Story',
        subtitle: 'Learn about our journey, mission, and vision for the future of AI and technology.',
        description: 'Where strategic vision meets AI innovation. We are a collective of world-class passionate technologists bound together by our deep tech knowledge, business acumen, and a passion for using technology and digital solutions to drive business transformation.',
        features: [
          'Company History',
          'Mission & Vision',
          'Core Values',
          'Leadership Philosophy',
          'Future Roadmap'
        ],
        // journey: {},
        section4: {
          title: "Our Core Values",
          description: "The principles that guide everything we do, from client relationships to innovation.",
          data: OurValues
        },
        section3: {
          title: "Our Core Values",
          description: "",
          items: [
            { icon: Lightbulb, title: 'Our Mission', description: 'To empower businesses with cutting-edge AI solutions that drive real results. We bridge the gap between complex AI technology and practical business applications, ensuring our clients can harness the full potential of artificial intelligence while maintaining compliance and security standards.', color: 'bg-orange-500' },
            { icon: Users, title: 'Our Vision', description: 'To be the leading AI transformation partner for enterprises worldwide, creating a future where AI enhances human potential and drives sustainable business growth. We envision a world where every organization can leverage AI to solve their most complex challenges.', color: 'bg-teal-500' },
          ]
        },
        footerMain: {
          title: "Ready to Transform Your Business?",
          subtitle: "Join the growing number of enterprises that trust MangoAnalytics to deliver AI solutions that drive real results."
        },
        buttons: [
          "Learn about our mission",
          "Meet our team",
        ],
      },
      'about/leadership-team': {
        title: 'Leadership Team',
        subtitle: 'Meet the experts and leaders driving innovation at MangoAnalytics.',
        description: 'Meet the visionary leaders driving AI innovation and transformation. Our team combines deep technical expertise with strategic business acumen to deliver exceptional results for our clients. Every member is dedicated to pushing the boundaries of what’s possible with artificial intelligence, fostering a culture of curiosity, ambitious problem-solving, and ethical leadership.',
        leadership: {
          highlight: "Our leadership team represents decades of combined experience in artificial intelligence, enterprise software, life sciences, and consulting.",
          members: [
            {
              name: 'Dr. Asha Patel',
              role: 'Chief Executive Officer',
              bio: 'Dr. Patel is a serial AI entrepreneur with 20+ years in health technology and digital transformation. She leads our vision for responsible, world-class AI innovation.',
              image: '/images/team/asha_patel.jpg',
              linkedin: 'https://www.linkedin.com/in/ashapatel/'
            },
            {
              name: 'Vikram Desai',
              role: 'Chief Technology Officer',
              bio: 'Vikram brings deep expertise in machine learning, cloud infrastructure, and enterprise SaaS, guiding our technical strategy and R&D initiatives.',
              image: '/images/team/vikram_desai.jpg',
              linkedin: 'https://www.linkedin.com/in/vikramdesai/'
            },
            {
              name: 'Elena Martinez',
              role: 'Chief Operating Officer',
              bio: 'Elena specializes in scaling high-performing teams and delivers operational excellence, ensuring we meet our growth and client success goals.',
              image: '/images/team/elena_martinez.jpg',
              linkedin: 'https://www.linkedin.com/in/elenamartinez/'
            },
            {
              name: 'Dr. Tom Reynolds',
              role: 'VP of AI & Life Sciences',
              bio: 'Tom leverages expertise in bioinformatics and AI to drive innovations that impact patient outcomes and compliance in regulated industries.',
              image: '/images/team/tom_reynolds.jpg',
              linkedin: 'https://www.linkedin.com/in/tomreynolds/'
            }
          ]
        },
        footerMain: {
          title: "Join Our Mission",
          subtitle: "We're always looking for exceptional talent to join our team. Help us build the future of AI-powered business transformation."
        },
      },
      'about/careers': {
        title: 'Join Our Mission',
        subtitle: 'Join our team and be part of the next generation of AI solutions.',
        description: 'We’re always looking for exceptional talent who want to help build the future of AI-powered business transformation.',
        features: [
          'Open Positions',
          'Company Culture',
          'Benefits & Perks',
          'Career Development',
          'Application Process'
        ],
        section3: {
          title: "Why Mango Analytics ?",
          description: "We're not just building AI solutions - we're shaping the future of how businesses leverage artificial intelligence to solve their most complex challenges.",
          items: [
            { icon: Lightbulb, title: 'Meaningful Impact', description: 'Work on AI solutions that improve healthcare outcomes, accelerate drug discovery, and transform entire industries.', color: 'bg-orange-500' },
            { icon: Server, title: 'Cutting-Edge Tech', description: 'Work with the latest AI technologies, from large language models to computer vision and predictive analytics platforms.', color: 'bg-teal-500' },
            { icon: Monitor, title: 'World-Class Team', description: 'Collaborate with AI experts, former Google researchers, and industry veterans from top pharmaceutical companies.', color: 'bg-purple-500' },
            { icon: Users, title: 'Growth & Learning', description: 'Continuous learning opportunities, conference attendance, and mentorship from industry leaders and AI pioneers.', color: 'bg-orange-500' },
          ],
        },
        footerMain: {
          title: "Ready to Join Our Team?",
          subtitle: "Don't see a perfect fit? We're always interested in hearing from exceptional talent. Send us your resume and let's start a conversation."
        },
        buttons: [
          "See open roles",
          "Learn more about us"
        ],
        careers: {}
      },
      'about/contact': {
        contact: {},
        title: 'Contact Us',
        subtitle: 'Connect with MangoAnalytics for inquiries, partnerships, or support.',
        description: 'Have a question or want to collaborate? Reach out to MangoAnalytics — our team is ready to assist you with anything from partnership opportunities to technical support.',
        features: [
          'Open Positions',
          'Company Culture',
          'Benefits & Perks',
          'Career Development',
          'Application Process'
        ],
        footerMain: {
          title: "Ready to transform your business with AI?",
          subtitle: "Join hundreds of organizations already leveraging the power of Human + AI collaboration."
        },
      }
    };


    return contentMap[routeKey] || {
      title: 'Page Not Found',
      subtitle: 'The requested page could not be found.',
      description: 'Please check the URL or return to the homepage.',
      features: [],
      technologies: []
    };
  };
  const pageKey = "solutions/data-analytics-and-insights";
  const content = HeroBanner[pageKey] || getPageContent();

  const [state, handleSubmit] = useForm("mblpeebv");
  if (state.succeeded) {
    toast({
      title: 'Message sent successfully! We will get back to you soon.',
    });
  }

  // Services data for the grid
  // const services = [
  //   { icon: Lightbulb, title: 'AI Strategy Development', description: 'Comprehensive AI roadmaps and strategic planning for digital transformation', color: 'bg-orange-500' },
  //   { icon: Server, title: 'IT Infrastructure Consulting', description: 'Modern infrastructure design and optimization for scalable operations', color: 'bg-teal-500' },
  //   { icon: Monitor, title: 'Digital Transformation', description: 'End-to-end digital transformation services for modern businesses', color: 'bg-purple-500' },
  //   { icon: Users, title: 'Executive & IT Training', description: 'Professional development and training programs for teams', color: 'bg-orange-500' },
  //   { icon: Cloud, title: 'Cloud & DevOps Strategy', description: 'Cloud migration and DevOps implementation strategies', color: 'bg-orange-500' },
  //   { icon: Database, title: 'Data Infrastructure Design', description: 'Robust data architecture and infrastructure solutions', color: 'bg-teal-500' },
  //   { icon: Shield, title: 'Security & Compliance', description: 'Comprehensive security and regulatory compliance solutions', color: 'bg-orange-500' },
  //   { icon: Network, title: 'Network & Integration', description: 'Network optimization and system integration services', color: 'bg-teal-500' }
  // ];

  // Success stories data

  return (
    <div className="min-h-screen bg-background">
      {/* <ParticleBackground /> */}
      <Navigation itemColor={"#333"} />

      <main className="pt-20">

        {/* <BackgroundParticle /> */}
        {/* Beta Phase Section */}
        {content.betaPhase && <BetaPhase data={content.betaPhase} />}

        {/* GreenTrack Hero Section */}
        {content.GreenTrackHero && <GreenTrackHero data={content.GreenTrackHero} />}

        {content.AnalyticsHero && <AnalyticsHero content={content.AnalyticsHero} />}

        {/* {content.} */}

        {/* Hero Section */}
        <HeroBanner content={content} />

        {/* Healthcare Workflow Section */}
        {content.healthcareWorkflow && <HealthcareWorkflow title={content.healthcareWorkflow.title} steps={content.healthcareWorkflow.steps} />}

        {/* Development Progress Section */}
        {content.progress && <ProgressSection content={{ progress: content.progress }} />}

        {content.analyticsData && (<ProcessSection data={content.analyticsData} />)}
        {/* Strategic Approach Section */}
        {content.section2 && <SecondBanner data={content.section2} />}

        {/* Development Network Section */}
        {content.developmentNetwork && <DevelopmentNetwork data={content.developmentNetwork} />}


        {/* Platform Capabilities Section */}
        {content.platformCapabilities && <PlatformCapabilities data={content.platformCapabilities} />}

        {/* Platform Features Section */}
        {content.platformFeatures && <PlatformFeatures data={content.platformFeatures} />}

        {/* Safety & Market Impact Section */}
        {content.safetyMarketImpact && <SafetyMarketImpact data={content.safetyMarketImpact} />}

        {/* Market Opportunity Section */}
        {content.marketOpportunity && <MarketOpportunity data={content.marketOpportunity} />}

        {/* Brand Marquee Section */}
        {content.BrandMarquee && <BrandMarquee data={content.BrandMarquee} />}

        {/* Services Grid Section */}
        {content.section3 && <ThirdBanner data={content.section3} />}

        {content.formSection && <section className="relative container mx-auto px-4 sm:px-4 lg:px-8 py-16 z-9999">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* <BackgroundParticle /> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6" style={{ lineHeight: 1.15 }}>{content.formSection.title}</h2>
            <p className="text-xl text-black max-w-4xl mx-auto">
              {content.formSection.subtitle}
            </p>
            <div className='flex items-center justify-center m-10 relative gap-4 z-999999'>
              <form className="space-y-6  border border-primary/30 rounded-[1rem] p-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2 text-left">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className=" border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2 text-left">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2 text-left">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className=" border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2 text-left">
                    Company
                  </label>
                  <Input
                    placeholder="Your Company Name"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div className='text-black'>
                  <label className="block text-sm font-medium text-black mb-2 text-left">
                    Current Role
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Developer" >Option 1</SelectItem>
                      <SelectItem value="Data Scientist">Option 2</SelectItem>
                      <SelectItem value="Product Manager">Option 2</SelectItem>
                    </SelectContent>
                  </Select>

                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2 text-left">
                    How can we help you?
                  </label>
                  <Textarea
                    placeholder="Tell us about your project and how AI can help your business..."
                    rows={5}
                    className=" border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  Join Waitlist
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
              {/* Upcoming Programs Section */}
              <div className="bg-white rounded-2xl mt-5 mb-5 py-8 px-4 md:px-4 w-[50%]">
                <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-8">Upcoming Programs</h2>
                <div className="flex flex-col gap-7">
                  {/* Program 1 */}
                  <div className="rounded-xl border border-gray-200 bg-white px-6 py-6 relative flex flex-col gap-2 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gradient-primary text-xs text-white px-3 py-1 rounded-full font-semibold">Advanced</span>
                      <span className="text-sm text-amber-600 font-semibold">Q2 2024</span>
                    </div>
                    <p className="text-lg font-bold text-gradient-primary mb-[2px]">Advanced Computer Vision</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Deep dive into image recognition, object detection, and neural networks</p>
                  </div>
                  {/* Program 2 */}
                  <div className="rounded-xl border border-gray-200 bg-white px-6 py-6 relative flex flex-col gap-2 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gradient-primary text-xs text-white px-3 py-1 rounded-full font-semibold">Executive</span>
                      <span className="text-sm text-amber-600 font-semibold">Q2 2024</span>
                    </div>
                    <p className="text-lg font-bold text-gradient-primary mb-[2px]">AI Ethics & Governance</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Navigate the ethical implications and governance of AI in business</p>
                  </div>
                  {/* Program 3 */}
                  <div className="rounded-xl border border-gray-200 bg-white px-6 py-6 relative flex flex-col gap-2 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gradient-primary text-xs text-white px-3 py-1 rounded-full font-semibold">Intermediate</span>
                      <span className="text-sm text-amber-600 font-semibold">Q3 2024</span>
                    </div>
                    <p className="text-lg font-bold text-gradient-primary mb-[2px]">Generative AI Applications</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Build applications with GPT, DALL-E, and other generative models</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>}

        {/* Success Stories Section */}
        {content.section4 && <Section4Page content={{ section4: content.section4 }} />}


        {/* Featured Programs Section */}
        {content.learningPaths && <LearningPaths data={content.learningPaths} />}

        {/* Trusted Organizations Section */}
        {content.organizations && content.metrics && (
          <TrustedOrganizations
            organizations={content.organizations}
            metrics={content.metrics}
          />
        )}

        {content.section5 && (
          <section className="bg-[#0b0d17] text-white py-20">
            <div className="container mx-auto px-4 md:px-8 lg:px-8 flex flex-col md:flex-row items-center gap-12">
              {/* Left Side: Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
                  {content.section5.title}
                </h2>
                <p className="text-lg text-gray-300 max-w-lg">
                  {content.section5.description}
                </p>

                <div className="space-y-6">
                  {content.section5.items.map((item, index) => {
                    const Icon =
                      item.icon === "TrendingUp"
                        ? TrendingUp
                        : item.icon === "Award"
                          ? Award
                          : Users;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 flex-shrink-0">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gradient-primary">
                            {item.title}
                          </h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Side: Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <img
                  src={content.section5.image}
                  alt="AI Success Story"
                  className="rounded-2xl shadow-lg w-full md:w-[90%] lg:w-[85%] mx-auto"
                />
              </motion.div>
            </div>
          </section>
        )}

        {/* <SuccessStoriesSection/> */}
        {content.section42 && <section className="relative container mx-auto px-4 sm:px-4 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* <BackgroundParticle /> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6" style={{ lineHeight: 1.15 }}>{content.section42.title}</h2>
            <p className="text-lg text-black max-w-4xl mx-auto">
              {content.section42.description}
            </p>
          </motion.div>

          <div className={`grid grid-cols-1 lg:grid-cols-${content.section42.data.length > 4 ? 3 : content.section42.data.length} gap-8`}>

            {content?.section42?.data?.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="rounded-xl p-6 border border-primary/40"
              >

                <p className="text-xl font-bold text-gradient-primary mb-4">{story.company}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-black text-sm leading-relaxed">{story.challenge}. {story.solution}</p>
                  </div>

                  <div className='flex flex-col'>
                    {story?.results?.map((d) => <span className='text-black text-sm flex'><Tick />{d}</span>)}
                  </div>
                  {story?.button && <Button variant='hero' className='text-white w-[100%]'>{story?.button}</Button>}
                </div>
              </motion.div>
            ))}
          </div>
        </section>}

        {/* Leadership Team Section */}
        {content.leadership && (<LeadershipSection content={{ leadership: content.leadership }} />)}


        {/* Our Journey Timeline Section */}
        {content.journey && <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 rounded-3xl mb-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2" style={{ lineHeight: 1.15 }}>Our Journey</h2>
            <p className="text-md md:text-lg text-black/80 max-w-2xl mx-auto">
              From vision to reality – the story of MangoAnalytics
            </p>
          </div>
          <div className="flex flex-col gap-14 max-w-3xl mx-auto">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              {/* Timeline dot */}
              <div className="flex flex-col items-center mr-4">
                <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-lg block mt-2 border-2 border-white"></span>
                <div className="w-px h-24 bg-gradient-to-b from-yellow-200/80 to-orange-300/30"></div>
              </div>
              <div>
                <span className="text-xs uppercase text-yellow-600 font-semibold tracking-wider">2024 – Present</span>
                <h3 className="font-bold text-[1.15rem] md:text-lg mt-1 mb-1 text-gradient-primary">Foundation & Growth</h3>
                <p className="text-black/80 text-sm md:text-base max-w-xl">
                  Founded by Aman Karki with a vision to democratize AI for businesses. Launched with a focus on pharmaceutical and healthcare AI solutions, building our first enterprise partnerships.
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start gap-4">
              {/* Timeline dot */}
              <div className="flex flex-col items-center mr-4">
                <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-lg block mt-2 border-2 border-white"></span>
                <div className="w-px h-24 bg-gradient-to-b from-yellow-200/80 to-orange-300/30"></div>
              </div>
              <div>
                <span className="text-xs uppercase text-yellow-600 font-semibold tracking-wider">2024 – Q2</span>
                <h3 className="font-bold text-[1.15rem] md:text-lg mt-1 mb-1 text-gradient-primary">Service Expansion</h3>
                <p className="text-black/80 text-sm md:text-base max-w-xl">
                  Expanded our offerings to include comprehensive AI &amp; IT consulting, talent development programs, and compliance-first AI solutions for regulated industries.
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start gap-4">
              {/* Timeline dot */}
              <div className="flex flex-col items-center mr-4">
                <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-lg block mt-2 border-2 border-white"></span>
                {/* No tail for last item */}
              </div>
              <div>
                <span className="text-xs uppercase text-yellow-600 font-semibold tracking-wider">2024 – Q4</span>
                <h3 className="font-bold text-[1.15rem] md:text-lg mt-1 mb-1 text-gradient-primary">Innovation Labs</h3>
                <p className="text-black/80 text-sm md:text-base max-w-xl">
                  Launched MangoAnalytics Labs to develop cutting-edge AI products including Food Haven, Amrita’s Boutique, and DriveMeSafe – solutions designed to make communities healthier, safer, and smarter.
                </p>
              </div>
            </div>
          </div>
        </section>}

        {content.imageSection && <ImageSection content={{ imageSection: content.imageSection }} />}


        {/* Security Framework Section (Compliance & Security only) */}
        {content.security && <SecuritySection content={{ security: content.security }} />}


        {/* Technologies Section */}
        {content?.technologies && (
          <section className="container mx-auto px-4 sm:px-4 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6" style={{ lineHeight: 1.15 }}>{content.technologies.title}</h2>
              <p className="text-lg text-black max-w-4xl mx-auto">
                We leverage the most advanced analytics tools and platforms to deliver exceptional results
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
            >
              {content.technologies.items.map((tech: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="bg-gradient-primary rounded-lg px-6 py-4 border border-primary/20 hover:border-primary/40 transition-colors duration-300 text-center"
                >
                  <span className="text-white font-medium text-sm">{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}
      </main>

      {content.careers && <CareersSection content={{ careers: content.careers }} />}

      {content.contact && <ContactSectionAbout content={{ contact: content.contact }} />}

      {content?.footerMain && <section className="relative container mx-auto px-4 sm:px-4 lg:px-8 py-12">
        {/* <BackgroundParticle /> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6" style={{ lineHeight: 1.15 }}>{content.footerMain.title}</h2>
          <p className="text-lg text-black max-w-4xl mx-auto">
            {content.footerMain.subtitle}
          </p>
          <div className='flex gap-2 md:gap-5 justify-center mt-5'>
            <Button variant="hero" onClick={() => window.open('https://calendly.com/mangoanalytics-ai/30min', '_blank')}>Request Demo</Button>
            <Button variant='cyber' onClick={() => window.open('/about/contact', '_blank')} className='border border-primary/30 text-black'>Partner with us</Button>
          </div>
        </motion.div>

      </section>}
      <FooterLinks />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DynamicPage;
