
const successStories = [
  {
    category: 'Manufacturing',
    company: 'Global Manufacturing Corp',
    challenge: 'Legacy IT infrastructure limiting AI adoption and operational efficiency',
    solution: 'Complete IT modernization with AI-powered predictive maintenance and quality systems',
    // button: "Learn More",
    timeline: "18 months",
    results: ['45% reduction in downtime', '30% improvement in quality scores', '$12M annual savings']
  },
  {
    category: 'Healthcare',
    company: 'Regional Healthcare Network',
    challenge: 'Fragmented IT systems and patient data management inefficiencies',
    solution: 'Unified IT infrastructure with AI-driven patient scheduling and resource management',
    // button: "Learn More",
    timeline: "12 months",
    results: ['25% faster patient processing', '40% better resource utilization', '95% patient satisfaction']
  },
  {
    category: 'Finance',
    company: 'Financial Services Leader',
    challenge: 'Outdated IT architecture hindering real-time risk assessment capabilities',
    solution: 'Modern cloud infrastructure with ML-based risk modeling and fraud prevention',
    // button: "Learn More",
    timeline: "15 months",
    results: ['60% faster risk assessment', '85% fraud detection accuracy', '$8M prevented losses']
  }
];

const FlagshipModels = [
  {
    icon: 'wand',
    company: 'Custom Model Development',
    challenge: 'Bespoke ML models tailored to your specific business requirements and data characteristics.',
    results: [
      'Algorithm selection',
      'Feature engineering',
      'Model optimization'
    ]
  },
  {
    icon: 'rocket',
    company: 'MLOps & Deployment',
    challenge: 'End-to-end ML operations including model versioning, monitoring, and automated deployment pipelines.',
    results: [
      'CI/CD pipelines',
      'Model monitoring',
      'A/B testing'
    ]
  },
  {
    icon: 'camera',
    company: 'Computer Vision',
    challenge: 'Advanced image and video analysis solutions for object detection, classification, and recognition.',
    results: [
      'Image classification',
      'Object detection',
      'Video analytics'
    ]
  },
  {
    icon: 'message-circle',
    company: 'Natural Language Processing',
    challenge: 'Sophisticated text analysis, language understanding, and generation capabilities.',
    results: [
      'Text analysis',
      'Chatbots',
      'Document processing'
    ]
  },
  {
    icon: 'trending-up',
    company: 'Predictive Analytics',
    challenge: 'Forecasting and prediction models that help you anticipate trends and make data-driven decisions.',
    results: [
      'Time series forecasting',
      'Risk modeling',
      'Demand prediction'
    ]
  },
  {
    icon: 'cpu',
    company: 'Deep Learning',
    challenge: 'Neural network architectures for complex pattern recognition and decision-making tasks.',
    results: [
      'Neural networks',
      'Transfer learning',
      'Model fine-tuning'
    ]
  }
]
const Trainingprograms = [
  {
    icon: 'wand',
    company: 'AI Fundamentals',
    challenge: 'Essential AI concepts for business professionals and technical beginners.',
    results: [
      'Machine Learning basics',
      'AI strategy and implementation',
      'Hands-on project experience'
    ],
     solution: "",
    timeline: "12 weeks"
  },
  {
    icon: 'rocket',
    company: 'Advanced ML Engineering',
    challenge: 'Deep technical training for experienced developers and data scientists.',
    results: [
      'MLOps and model deployment',
      'Advanced neural networks',
      'Production system design'
    ],
    timeline: "16 weeks"
  },
  {
    icon: 'camera',
    company: 'Executive AI Leadership',
    challenge: 'Strategic AI training for C-level executives and senior managers.',
    results: [
      'AI transformation strategy',
      'ROI measurement and KPIs',
      'Change management'
    ],
    timeline: "8 weeks"
  },
  // {
  //   icon: 'message-circle',
  //   company: 'Natural Language Processing',
  //   challenge: 'Sophisticated text analysis, language understanding, and generation capabilities.',
  //   results: [
  //     'Text analysis',
  //     'Chatbots',
  //     'Document processing'
  //   ]
  // },
  // {
  //   icon: 'trending-up',
  //   company: 'Predictive Analytics',
  //   challenge: 'Forecasting and prediction models that help you anticipate trends and make data-driven decisions.',
  //   results: [
  //     'Time series forecasting',
  //     'Risk modeling',
  //     'Demand prediction'
  //   ]
  // },
  // {
  //   icon: 'cpu',
  //   company: 'Deep Learning',
  //   challenge: 'Neural network architectures for complex pattern recognition and decision-making tasks.',
  //   results: [
  //     'Neural networks',
  //     'Transfer learning',
  //     'Model fine-tuning'
  //   ]
  // }
]
const ItConsulting = [
  {
    icon: 'wand',
    company: 'Elite Talent Placement',
    challenge: 'Connect with top-tier IT professionals including software architects, DevOps engineers, and technical leads who drive innovation.',
    results: [
      "Senior-level expertise",
      "Cultural fit assessment",
      "Rapid placement process"
    ],
  },
  {
    icon: 'rocket',
    company: 'Technical Consulting',
    challenge: 'Strategic guidance on technology stack decisions, architecture design, and implementation best practices for scalable solutions.',
    results: [
      'Architecture review',
      'Technology roadmaps',
      'Performance optimization'
    ],
  },
  {
    icon: 'camera',
    company: 'Team Augmentation',
    challenge: 'Scale your development teams quickly with skilled professionals who integrate seamlessly with your existing workflows.',
    results: [
      'Flexible engagement models',
      'Seamless integration',
      'Knowledge transfer'
    ],
  },
  {
    icon: 'message-circle',
    company: 'Security & Compliance',
    challenge: 'Ensure your IT infrastructure meets industry standards with comprehensive security assessments and compliance frameworks.',
    results: [
      'Security audits',
      'Compliance frameworks',
      'Risk assessment'
    ],
  },
  {
    icon: 'trending-up',
    company: 'Digital Transformation',
    challenge: 'Guide your organization through modern technology adoption, cloud migration, and process optimization initiatives.',
    results: [
      'Cloud migration',
      'Process automation',
      'Legacy modernization'
    ],
  },
  {
    icon: 'cpu',
    company: 'Quality Assurance',
    challenge: 'Implement robust testing frameworks and quality processes that ensure reliable, high-performance software delivery.',
    results: [
      'Automated testing',
      'Quality frameworks',
      'Performance monitoring'
    ],
  }
]
const Healthcare = [
  {
    icon: 'wand',
    company: 'Predictive Patient Analytics',
    challenge: 'Advanced ML models that predict patient deterioration, readmission risks, and treatment outcomes to enable proactive care.',
    results: [
      "Early warning systems",
      "Risk stratification",
      "Outcome prediction"
    ],
  },
  {
    icon: 'rocket',
    company: 'AI-Powered Diagnostics',
    challenge: 'Computer vision and deep learning solutions for medical imaging, pathology analysis, and diagnostic decision support.',
    results: [
      'Medical imaging AI',
      'Pathology analysis',
      'Diagnostic assistance'
    ],
  },
  {
    icon: 'camera',
    company: 'HIPAA-Compliant Infrastructure',
    challenge: 'Secure, compliant AI systems built from the ground up to meet healthcare regulatory requirements and protect patient data.',
    results: [
      'End-to-end encryption',
      'Audit trails',
      'Compliance monitoring'
    ],
  },
  {
    icon: 'message-circle',
    company: 'Population Health Management',
    challenge: 'Analyze population-level health trends, identify at-risk cohorts, and optimize resource allocation for better community health.',
    results: [
      'Population analytics',
      'Risk identification',
      'Resource optimization'
    ],
  },
  {
    icon: 'trending-up',
    company: 'Clinical Decision Support',
    challenge: 'AI-powered tools that assist clinicians with evidence-based treatment recommendations and care pathway optimization.',
    results: [
      'Treatment recommendations',
      'Care pathways',
      'Evidence-based insights'
    ],
  },
  {
    icon: 'cpu',
    company: 'Quality & Safety Monitoring',
    challenge: 'Continuous monitoring systems that track quality metrics, safety indicators, and compliance with healthcare standards.',
    results: [
      'Quality metrics',
      'Safety monitoring',
      'Compliance tracking'
    ],
  }
]
const Healthcare2 = [
  {
    icon: 'wand',
    company: 'HIPAA Compliance',
    challenge: 'Full HIPAA compliance with encrypted data transmission, secure storage, and comprehensive audit trails.',

  },
  {
    icon: 'rocket',
    company: 'FDA Ready',
    challenge: 'AI systems designed to meet FDA requirements for medical device software and clinical decision support tools.',
  },
  {
    icon: 'camera',
    company: 'SOC 2 Certified',
    challenge: 'Enterprise-grade security controls and processes that meet SOC 2 Type II certification standards.',
  },

]
const Startup = [
  {
    icon: 'wand',
    company: 'MVP to Market',
    challenge: 'Rapid prototyping and development of AI-powered products that validate your concept and accelerate time to market.',
    results: [
      'Rapid prototyping',
      'Market validation',
      'Iterative development'

    ],
  },
  {
    icon: 'rocket',
    company: 'Cloud-Native Architecture',
    challenge: 'Scalable, resilient cloud infrastructure built on modern microservices architecture and containerized deployments.',
    results: [
      'Microservices design',
      'Auto-scaling',
      'Multi-cloud deployment'
    ],
  },
  {
    icon: 'camera',
    company: 'AI Product Development',
    challenge: 'End-to-end AI product development from concept to production, including ML model training and deployment pipelines.',
    results: [
      'ML model development',
      'Production pipelines',
      'A/B testing frameworks'
    ],
  },
  {
    icon: 'message-circle',
    company: 'Enterprise Scaling',
    challenge: 'Transform startup solutions into enterprise-grade platforms with enhanced security, compliance, and performance.',
    results: [
      'Enterprise security',
      'Compliance frameworks',
      'Performance optimization'
    ],
  },
  {
    icon: 'trending-up',
    company: 'Go-to-Market Strategy',
    challenge: 'Strategic guidance on product positioning, market entry, and scaling strategies for AI-powered products.',
    results: [
      'Market analysis',
      'Product positioning',
      'Growth strategies'
    ],
  },
  {
    icon: 'cpu',
    company: 'DevOps & Automation',
    challenge: 'Complete CI/CD pipelines, infrastructure as code, and automated testing frameworks for reliable deployments.',
    results: [
      'CI/CD pipelines',
      'Infrastructure as code',
      'Automated testing'
    ],
  }
]
const Startup2 = [
  {
    icon: 'rocket',
    company: 'For Startups',
    challenge: 'Move fast, break things, and scale intelligently',
    results: [
      'Rapid MVP development',
      'Cost-effective cloud solutions',
      'Agile development methodology',
      'Investor-ready demos',
      'Scalable architecture from day one'

    ],
  },
  {
    icon: 'wand',
    company: 'For Enterprises',
    challenge: 'Transform with confidence and enterprise-grade reliability',
    results: [
      'Enterprise security & compliance',
      'Legacy system integration',
      'Change management support',
      '24/7 enterprise support',
      'Multi-region deployment',
    ],
  },
]
const featuredPrograms = [
  {
    icon: 'wand',
    category: "Beginner",
    timeline: "4 weeks",
    company: 'AI Fundamentals - ($299)',
    challenge: 'Master the core concepts of artificial intelligence and machine learning',
    results: [
      'Introduction to AI and ML concepts',
      'Python programming for AI',
      'Data preprocessing techniques',
      'Basic neural networks',
      'Hands-on projects'


    ],
    button:[
      {label:"Enroll Now",link:"/questionnaire/training"}
    ]
  },
  {
    icon: 'rocket',
       category: "Intermediate",
    timeline: "8 weeks",
    company: 'Machine Learning Engineering - ($799)',
    challenge: 'Build production-ready ML systems and deploy models at scale',
    results: [
      'MLOps and model deployment',
      'Feature engineering',
      'Model monitoring and maintenance',
      'Cloud platforms (AWS, GCP, Azure)',
      'Real-world capstone project'

    ],
      button:[
      {label:"Enroll Now",link:"/questionnaire/training"}
    ]
  },
  {
    icon: 'camera',
    category: "Executive",
    timeline: "6 weeks",
    company: 'AI Leadership & Strategy - ($1,299)',
    challenge: 'Strategic AI implementation for business leaders and executives.',
    results: [
      'AI strategy development',
      'ROI measurement and KPIs',
      'Team building and talent acquisition',
      'Ethical AI and governance',
      'Case studies from Fortune 500'

    ],
       button:[
      {label:"Enroll Now",link:"/questionnaire/training"}
    ]
  },
]
const TrainingPrograms = [
  {
    icon: 'wand',
    category: "C-Suite & VPs",
    timeline: "2 days",
    company: 'AI Leadership Bootcamp',
    challenge: 'Strategic AI implementation for senior leadership teams',
    results: [
      'AI strategy development workshop',
      'ROI measurement frameworks',
      'Change management for AI adoption',
      'Competitive advantage through AI',
      'Risk assessment and mitigation',

    ],
    button:[
      {label:"Learn More" , link:"/questionnaire/training"}
    ]
  },
  {
    icon: 'rocket',
    category: "Developers & Engineers",
    timeline: "4–8 weeks",
    company: 'Technical Team Upskilling',
    challenge: 'Hands-on AI/ML training for technical teams',
    results: [
      'Machine learning fundamentals',
      'Model development and deployment',
      'MLOps and production systems',
      'AI tools and frameworks',
      'Real project implementation',

    ],
   button:[
      {label:"Learn More" , link:"/questionnaire/training"}
    ]
  },
  {
    icon: 'camera',
    category: "Product Teams",
    timeline: "3 weeks",
    company: 'AI Product Management',
    challenge: 'Building AI-powered products and features',
    results: [
      'AI product strategy and roadmapping',
      'User experience for AI products',
      'Data requirements and quality',
      'Performance metrics and KPIs',
      'Cross-functional collaboration',

    ],
      button:[
      {label:"Learn More" , link:"/questionnaire/training"}
    ]
  },
]
const OurValues = [
  {
    icon: 'wand',
    company: 'Human-Centered',
    challenge: 'AI should enhance human capabilities, not replace them. We design solutions that empower people and improve lives.',
    results: [
      'User-centered design principles',
      'Ethical and responsible AI practices',
      'Prioritization of safety and privacy',
      'Accessibility and inclusivity focus',
      'Collaboration between humans and AI',
      'Continuous feedback and iteration',
      'Transparency and explainability in AI systems'
    ],

  },
  {
    icon: 'rocket',
    company: 'Innovation First',
    challenge: "We stay at the forefront of AI technology, constantly exploring new possibilities and pushing the boundaries of what's possible.",
    results: [
      'Cutting-edge AI research and prototyping',
      'Rapid experimentation and iteration',
      'Collaborative ideation sessions',
      'Technology scouting and adoption',
      'Continuous learning and upskilling'
    ],
  },
  {
    icon: 'camera',
    company: 'Security & Compliance',
    challenge: 'Every solution we build is designed with security and regulatory compliance as foundational requirements, not afterthoughts.',
    results: [
      'Comprehensive security assessments',
      'End-to-end encryption best practices',
      'Continuous compliance monitoring',
      'Data privacy and protection standards',
      'Audit-ready documentation and processes',
      'Proactive threat detection and response'
    ],
  },
  {
    icon: 'message-circle',
    company: 'Partnership',
    challenge: "We don't just deliver solutions; we build lasting partnerships that grow and evolve with our clients' needs.",
    results: [
      'Long-term client relationships',
      'Collaborative solution development',
      'Proactive support and ongoing engagement',
      'Trust and transparency in all communications',
      'Adapting strategies as client needs evolve'
    ],
  },
]
const LabsData = [
  {
    icon: "activity",
    category: "Health Tech",
    timeline: "Coming Soon",
    company: "Food Haven",
    challenge:
      "AI-powered healthy lifestyle food delivery platform with personalized nutrition",
    results: ["Personalized Nutrition", "AI Recipe Generation", "Health Tracking"],
     button: [{label:"View Details", link:"/labs/foodhaven"}],
    expected: "Q2 2025",
    slug: "food-haven"
  },
  {
    icon: "shopping-bag",
    category: "E-commerce",
    timeline: "Coming Soon",
    company: "Mango Boutique",
    challenge:
      "Immersive VR shopping experience with AI-powered style recommendations",
    results: ["VR Shopping", "AI Style Assistant", "Virtual Try-On"],
      button: [{label:"View Details",link:"/labs/mango-boutique"}],
    expected: "Q3 2025",
    slug: "mango-boutique"
  },
  {
    icon: "car",
    category: "Transportation",
    timeline: "Coming Soon",
    company: "DriveMeSafe",
    challenge:
      "Community-driven ride-sharing platform focused on family safety",
    results: ["Safety Scoring", "Family Verification", "Real-time Tracking"],
      button: [{label:"View Details",link:"/labs/drivemesafe"}],
    expected: "Q4 2025",
    slug: "drivemesafe"
  },
  {
    icon: "book-open",
    category: "Education",
    timeline: "Beta Testing",
    company: "EduMind AI",
    challenge:
      "Personalized learning platform with adaptive AI tutoring systems",
    results: ["Adaptive Learning", "AI Tutoring", "Progress Analytics"],
      button: [{label:"View Details",link:"/labs/edumind-ai"}],
    expected: "Q1 2025",
    slug: "edumind-ai"
  },
  {
    icon: "leaf",
    category: "Sustainability",
    timeline: "In Development",
    company: "GreenTrack",
    challenge:
      "Carbon footprint tracking and sustainability optimization for businesses",
    results: ["Carbon Tracking", "Sustainability Metrics", "ESG Reporting"],
    button: [{label:"View Details",link:"/labs/greentrack"}],
    expected: "Q1 2025",
    slug: "greentrack"
  },
  {
    icon: "stethoscope",
    category: "Healthcare",
    timeline: "Coming Soon",
    company: "HealthSync",
    challenge:
      "AI-powered patient data integration and predictive health analytics",
    results: ["Data Integration", "Predictive Analytics", "HIPAA Compliance"],
     button: [{label:"View Details",link:"/labs/healthsync"}],
    expected: "Q3 2025",
    // button: "View Details"
  },
  {
    icon: "trending-up",
    category: "FinTech",
    timeline: "Stealth Mode",
    company: "AssetWise AI",
    challenge:
      "Intelligent asset management platform for optimized portfolios and risk analysis",
    results: ["Portfolio Optimization", "Risk Analytics", "Market Prediction"],
    button: [{label:"View Details",link:"/labs/assetwise-ai"}],
    expected: "Q4 2025",
    slug: "assetwise-ai"
  },
  {
    icon: "heart",
    category: "Health & Wellness",
    timeline: "Stealth Mode",
    company: "VitaCoach AI",
    challenge:
      "AI-powered personal health coach adapting to user lifestyle for better wellness",
    results: ["Habit Tracking", "Personalized Coaching", "Wellness Analytics"],
    button: [{label:"View Details",link:"/labs/vitacoach-ai"}],
    expected: "Q1 2026",
    slug: "vitacoach-ai"
  }
];


export { successStories, FlagshipModels, Trainingprograms, ItConsulting, Healthcare, Healthcare2, Startup, Startup2, featuredPrograms, TrainingPrograms, OurValues, LabsData }
