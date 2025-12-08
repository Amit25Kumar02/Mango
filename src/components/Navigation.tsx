import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import logo from "@/assets/hero-logo.png";
// import whitelogo from "@/assets/white-hero.png"; // not used now

// Labs logos
import Food from "@/assets/foodhaven.png";
import mango from "@/assets/mango.jpeg";
import drive from "@/assets/drivemeSafe.jpeg";
import edu from "@/assets/edumindai.jpeg";
import green from "@/assets/greentrack.jpeg";
import health from "@/assets/healthsync.jpeg";

export const Navigation = ({ itemColor = "#fff" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isLabsOpen, setIsLabsOpen] = useState(false);
  const [isAcademyOpen, setIsAcademyOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [showLeadership, setShowLeadership] = useState(true);

  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);

  // Helper function to generate route paths
  const getRoutePath = (category: string, item: string) => {
    const slug = item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    return `/${category}/${slug}`;
  };

  // Handle navigation to dynamic routes
  const handleItemClick = (category: string, item: string) => {
    const path = getRoutePath(category, item);
    navigate(path);
    // Close all dropdowns
    setIsSolutionsOpen(false);
    setIsIndustriesOpen(false);
    setIsLabsOpen(false);
    setIsAboutUsOpen(false);
    setIsAcademyOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsSolutionsOpen(false);
        setIsIndustriesOpen(false);
        setIsLabsOpen(false);
        setIsAcademyOpen(false);
        setIsAboutUsOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: 'Solutions', href: '#solutions', hasDropdown: true },
    { label: 'Industries', href: '#industries', hasDropdown: true },
    { label: 'Labs', href: '#labs', hasDropdown: true },
    { label: 'Academy', href: '#Academy', hasDropdown: true },
    { label: 'About Us', href: '#about', hasDropdown: true },
  ];

  const solutionsItems = [
    {
      title: 'AI Product Development',
      description: 'Build AI-powered platforms and applications ready to scale globally.'
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Transform fragmented data into clean, unified pipelines for seamless AI integration.'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models, computer vision, NLP, and predictive analytics for your business.'
    },
    {
      title: 'Compliance & Security',
      description: 'HIPAA, FDA, and EMA-ready AI systems from day one.'
    },
    {
      title: 'AI Talent Development',
      description: 'Train, certify, and place AI professionals and corporate teams.'
    }
  ];

  const industriesItems = [
    {
      title: 'IT Consulting Business',
      description: 'Elite IT talent placement, technical consulting, and team augmentation services'
    },
    {
      title: 'Pharmaceutical & Health Care',
      description: 'Predictive patient analytics, diagnostics'
    },
    {
      title: 'Startups & Enterprises',
      description: 'Scalable AI products & cloud-native platforms'
    }
  ];

  // ✅ Labs: logo + name + coming soon (and still keeps meta info)
  const labsItems = [
    {
      title: 'Foodhaven',
      category: 'Health Tech',
      description: 'AI-powered healthy lifestyle food delivery platform with personalized nutrition',
      status: 'Coming Soon',
      statusColor: 'border-green-500',
      statusTextColor: 'text-green-700',
      logo: Food,
    },
    {
      title: 'Mango Boutique',
      category: 'E-commerce',
      description: 'Immersive VR shopping experience with AI-powered style recommendations',
      status: 'Coming Soon',
      statusColor: 'border-green-500',
      statusTextColor: 'text-green-700',
      logo: mango,
    },
    {
      title: 'DriveMeSafe',
      category: 'Transportation',
      description: 'Community-driven ride-sharing platform focused on family safety',
      status: 'Coming Soon',
      statusColor: 'border-green-500',
      statusTextColor: 'text-green-700',
      logo: drive,
    },
    {
      title: 'EduMind AI',
      category: 'Education',
      description: 'Personalized learning platform with adaptive AI tutoring systems',
      status: 'Beta Testing',
      statusColor: 'border-blue-500',
      statusTextColor: 'text-blue-700',
      logo: edu,
    },
    {
      title: 'GreenTrack',
      category: 'Sustainability',
      description: 'Carbon footprint tracking and sustainability optimization for businesses',
      status: 'In Development',
      statusColor: 'border-orange-500',
      statusTextColor: 'text-orange-700',
      logo: green,
    },
    {
      title: 'HealthSync',
      category: 'Healthcare',
      description: 'AI-powered patient data integration and predictive health analytics',
      status: 'Coming Soon',
      statusColor: 'border-green-500',
      statusTextColor: 'text-green-700',
      logo: health,
    }
  ];

  const AcademyItems = [
    {
      title: 'Programs Overview',
      description: 'Individual and corporate AI courses'
    },
    {
      title: 'Waitlist Signup',
      description: 'Get early access to our programs'
    },
    {
      title: 'Corporate training',
      description: 'Upskilling enterprise teams'
    },
  ];

  const aboutUsItems = [
    {
      title: 'Our Story',
      description: 'Learn about our journey, mission, and vision for the future of AI and technology.'
    },
    {
      title: 'Careers',
      description: 'Join our team and be part of the next generation of AI solutions.'
    },
    {
      title: 'Contact',
      description: 'Join our team and be part of the next generation of AI solutions.'
    }
  ];

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300
        ${isScrolled
          ? "backdrop-blur-md border-b border-primary/20 bg-white/70"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img
              src={logo}
              className="filter drop-shadow-[0_0_6px_rgba(255,255,255,0.75)]"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ marginTop: "10px" }}
              height={144}
              width={144}
              alt="logo"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onClick={() => {
                      if (item.label === 'Solutions') {
                        setIsSolutionsOpen(!isSolutionsOpen);
                        setIsIndustriesOpen(false);
                        setIsLabsOpen(false);
                        setIsAboutUsOpen(false);
                        setIsAcademyOpen(false);
                      } else if (item.label === 'Industries') {
                        setIsIndustriesOpen(!isIndustriesOpen);
                        setIsSolutionsOpen(false);
                        setIsLabsOpen(false);
                        setIsAboutUsOpen(false);
                        setIsAcademyOpen(false);
                      } else if (item.label === 'Labs') {
                        setIsLabsOpen(!isLabsOpen);
                        setIsSolutionsOpen(false);
                        setIsIndustriesOpen(false);
                        setIsAboutUsOpen(false);
                        setIsAcademyOpen(false);
                      } else if (item.label === "Academy") {
                        setIsAcademyOpen(!isAcademyOpen);
                        setIsSolutionsOpen(false);
                        setIsIndustriesOpen(false);
                        setIsLabsOpen(false);
                        setIsAboutUsOpen(false);
                      } else if (item.label === 'About Us') {
                        setIsAboutUsOpen(!isAboutUsOpen);
                        setIsSolutionsOpen(false);
                        setIsIndustriesOpen(false);
                        setIsLabsOpen(false);
                        setIsAcademyOpen(false);
                      }
                    }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-foreground text-lg md:text-lg lg:text-xl hover:text-primary transition-colors duration-300 relative group"
                      style={{
                        color: isScrolled ? '#333' : itemColor,
                      }}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                    </motion.span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${(item.label === 'Solutions' && isSolutionsOpen) ||
                        (item.label === 'Industries' && isIndustriesOpen) ||
                        (item.label === 'Labs' && isLabsOpen) ||
                        (item.label === 'Academy' && isAcademyOpen) ||
                        (item.label === 'About Us' && isAboutUsOpen)
                        ? 'rotate-180'
                        : ''
                        }`}
                      style={{ color: isScrolled ? '#333' : itemColor }}
                    />
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    whileHover={{ scale: 1.1 }}
                    className="text-foreground hover:text-primary transition-colors duration-300 relative group"
                    style={{
                      color: isScrolled ? '#333' : itemColor,
                    }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                )}
              </div>
            ))}
            <Button
              variant="hero"
              size="sm"
              onClick={() => window.open("/about/contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="hero"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-transparent focus:bg-transparent active:bg-transparent"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Solutions Dropdown */}
        {isSolutionsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-[40%] bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl z-[1000] bg-white w-[30%] overflow-y-auto max-h-[500px]"
            onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
          >
            <div className="mx-auto px-2 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                {solutionsItems.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer p-4 rounded-lg transition-colors duration-300 border border-primary/30 hover:bg-slate-100/95 "
                    onClick={() => handleItemClick('solutions', solution.title)}
                  >
                    <h3 className="text-white font-semibold text-lg mb-2 text-gradient-primary transition-colors duration-300">
                      {solution.title}
                    </h3>

                    <p className="text-black text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Industries Dropdown */}
        {isIndustriesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-[30%] bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl z-[1000] bg-white w-[30%]"
            onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
          >
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 gap-3">
                {industriesItems.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer p-4 rounded-lg transition-colors duration-300 border border-primary/30 hover:bg-slate-100/95"
                    onClick={() => handleItemClick('industries', industry.title)}
                  >
                    <h3 className="text-white font-semibold text-lg mb-2 text-gradient-primary transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-black text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Labs Dropdown – logo + name + "coming soon" style like your sketch */}
        {isLabsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-[20%] bg-white/95 backdrop-blur-md rounded-xl shadow-2xl z-[1000] w-[420px] max-w-[95vw] overflow-y-auto max-h-[500px] p-4"
            onClick={() => setIsLabsOpen(!isLabsOpen)}
          >
            {/* Heading (can remove if you don't want it) */}
            <div className="mb-4 text-center">
              <h2 className="text-xl font-bold text-gradient-primary">
                MangoAnalytics Labs
              </h2>
              <p className="text-sm text-black/70 mt-1">
                Innovations in progress — shaping the future, one breakthrough at a time.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {labsItems.map((lab, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-3 items-start border border-primary/30 rounded-xl p-3 cursor-pointer hover:bg-gray-50 transition"
                  onClick={() => handleItemClick('labs', lab.title)}
                >
                  {/* Logo */}
                  <div className="w-24 h-20 rounded-md  overflow-hidden flex-shrink-0">
                    <img
                      src={lab.logo}
                      alt={lab.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-grow min-w-0">
                    {/* Title + Status */}
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-black font-semibold text-md truncate">
                        {lab.title}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${lab.statusColor || "border-purple-600"
                          } ${lab.statusTextColor || "text-purple-700"}`}
                      >
                        {lab.status || "Coming Soon"}
                      </span>
                    </div>

                    {/* Category */}
                    <span className="text-sm text-black/80">
                      {lab.category}
                    </span>

                    {/* Description */}
                    <p className="text-[14px] text-gray-500 leading-tight ">
                      {lab.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>


            {/* Optional buttons – keep/remove as you like */}
            <div className="flex gap-2 justify-between mt-4">
              <Button
                onClick={() => window.open("/training/waitlist-signup", "_self")}
                className="bg-gradient-primary py-2 px-4"
              >
                Join Beta Waitlist
              </Button>

              <Button
                onClick={() => window.open("/labs/labs", "_self")}
                className="text-black bg-white border hover:bg-gradient-primary py-2 px-4"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        )}

        {/* Training / Academy Dropdown */}
        {isAcademyOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-[20%] bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl z-[1000] bg-white w-[30%]"
            onClick={() => setIsAcademyOpen(!isAcademyOpen)}
          >
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 gap-3">
                {AcademyItems.map((trainingItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer p-4 rounded-lg transition-colors duration-300 border border-primary/30 hover:bg-slate-100/95"
                    onClick={() => handleItemClick('training', trainingItem.title)}
                  >
                    <h3 className="text-gradient-primary font-semibold text-lg mb-2 transition-colors duration-300">
                      {trainingItem.title}
                    </h3>
                    <p className="text-black text-sm leading-relaxed">
                      {trainingItem.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* About Us Dropdown */}
        {isAboutUsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-[10%] bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl z-[1000] bg-white w-[30%] overflow-y-auto max-h-[500px]"
            onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
          >
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 gap-3">
                {aboutUsItems
                  .filter(item => showLeadership || item.title !== "Leadership Team")
                  .map((aboutItem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer p-4 rounded-lg transition-colors duration-300 border border-primary/30 hover:bg-slate-100/95"
                      onClick={(e) => {
                        e.stopPropagation();

                        // Toggle Leadership on double click
                        if (aboutItem.title === "Our Story" && e.detail === 2) {
                          setShowLeadership(!showLeadership);
                          return;
                        }

                        handleItemClick('about-us', aboutItem.title);
                      }}
                    >
                      <h3 className="text-gradient-primary font-semibold text-lg mb-2 transition-colors duration-300">
                        {aboutItem.title}
                      </h3>
                      <p className="text-black text-sm leading-relaxed">
                        {aboutItem.description}
                      </p>
                    </motion.div>
                  ))}

              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md border-t border-primary/20 bg-white/90 rounded-b-lg mt-2 mb-4 overflow-y-auto max-h-[500px]"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    type="button"
                    className="w-full text-left block text-black hover:text-primary transition-colors duration-300 py-2 font-medium"
                  >
                    {item.label}
                  </button>

                  {item.hasDropdown && (
                    item.label === 'Labs' ? (
                      // Mobile Labs: logo + name + status
                      <div className="ml-2 mt-2 grid grid-cols-1 gap-3">
                        {labsItems.map((lab, index) => (
                          <div
                            key={index}
                            onClick={() => handleItemClick("labs", lab.title)}
                            className="p-3 bg-slate-100 rounded-lg flex-1 gap-4 items-center justify-between cursor-pointer"
                          >
                            <div className="flex-1 w-full items-center gap-4">
                              <div className="md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                                <img
                                  src={lab.logo}
                                  alt={lab.title}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div>
                                <p className="text-black text-center text-md mb-2 font-semibold">
                                  {lab.title}
                                </p>
                                <p className="text-gray-500 text-center mb-2 text-xs">
                                  {lab.category}
                                </p>
                              </div>
                            </div>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${lab.statusColor || "border-purple-600"
                              } ${lab.statusTextColor || "text-purple-700"}`}>
                              {lab.status || "Coming Soon"}
                            </span>
                          </div>
                        ))}
                        <div className="flex gap-2 justify-between mt-4">
                          <Button
                            onClick={() => window.open("/training/waitlist-signup", "_self")}
                            className="bg-gradient-primary py-2 px-4"
                          >
                            Join Beta Waitlist
                          </Button>

                          <Button
                            onClick={() => window.open("/labs/labs", "_self")}
                            className="text-black bg-white border hover:bg-gradient-primary py-2 px-4"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    ) : (
                      /* Other dropdowns keep text cards */
                      <div className="ml-4 mt-2 space-y-2">
                        {(item.label === 'Solutions'
                          ? solutionsItems
                          : item.label === 'Industries'
                            ? industriesItems
                            : item.label === 'Academy'
                              ? AcademyItems
                              : aboutUsItems
                        ).map((dropdownItem: any, index) => (
                          <div
                            key={index}
                            className="p-3 bg-slate-700/30 rounded-lg cursor-pointer hover:bg-slate-600/30 transition-colors duration-300"
                            onClick={() => {
                              const category = item.label.toLowerCase().replace(/\s+/g, '-');
                              handleItemClick(category, dropdownItem.title);
                            }}
                          >
                            <h4 className="text-gradient-primary font-medium text-sm mb-1">
                              {dropdownItem.title}
                            </h4>
                            {dropdownItem.category && (
                              <p className="text-purple-400 text-xs mb-1">{dropdownItem.category}</p>
                            )}
                            <p className="text-black text-xs">
                              {dropdownItem.description}
                            </p>
                            {dropdownItem.status && (
                              <span className={`inline-block px-2 py-1 rounded-full text-xs text-white mt-2 ${dropdownItem.statusColor}`}>
                                {dropdownItem.status}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              ))}
              <Button
                className="w-full bg-gradient-primary text-white"
                size="lg"
                onClick={() => window.open('https://calendly.com/mangoanalytics-ai/30min', '_blank')}
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
