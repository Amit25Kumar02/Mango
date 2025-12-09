import { Linkedin, Twitter, Github, Facebook, X, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FooterLinks = () => {
  return (
    <section className="relative py-16 md:py-20 border-t border-primary/20 backdrop-blur-md" style={{
      background: '#21253F'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="text-2xl font-extrabold tracking-tight">
                <span className="text-gradient-cyber">Mango</span>{' '}
                <span className="text-gradient-primary">Analytics</span>
              </div>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-6">
              Leading AI transformation and career advancement through cutting-edge
              technology and expert guidance.
            </p>
            <div className="flex items-center gap-4 text-foreground/80">
              <a href="https://www.linkedin.com/company/mango-analytics-ai/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BfHblrj0TSw2c16mBPFMgKQ%3D%3D& " aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61562263534607" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@MangoAnalytics-d5a" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/mangoanalytics5/" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg text-gradient-primary font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3 text-foreground ">
              
              <li>
                <Link to="/solutions/ai-product-development"><a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                  AI Product Development
                </a></Link>
              </li>
              <li>
              <Link to="/solutions/data-analytics-and-insights"><a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                  Data Analytics & Insights
                </a></Link>
              </li>
              <li>
              <Link to="/solutions/machine-learning-solutions"><a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                  Machine Learning Solutions
                </a></Link>
              </li>
              <li>
              <Link to="/solutions/compliance-and-security"><a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                  Compliance & Security
                </a></Link>
              </li>
              <li>
              <Link to="/solutions/ai-talent-development"> <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                  AI Talent Development
                </a></Link>
              </li>
            </ul>
          </div>

          {/* Bootcamps */}
          <div>
            <h4 className="text-lg text-gradient-primary font-semibold mb-4">Industries</h4>
            <ul className="space-y-3 text-foreground ">
              <li>
                <Link to="/industries/it-consulting-business">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                    IT Consulting Business
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/industries/pharmaceutical-and-health-care">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                    Pharmaceutical & Health Care
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/industries/startups-and-enterprises">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                    Startups & Enterprises
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-gradient-primary font-semibold mb-4">Academy</h4>
            <ul className="space-y-3 text-foreground ">
              <li>
                <Link to="/academy/programs-overview">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                    Programs Overview
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/academy/waitlist-signup">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                    Waitlist Signup
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/academy/corporate-training">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">
                    Corporate training
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-lg text-gradient-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-foreground ">
              <li>
                <Link to="/about-us/our-story">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">Our Story</a>
                </Link>
              </li>
              {/* <li>
                <Link to="/about/leadership-team">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">Leadership Team</a>
                </Link>
              </li> */}
              <li>
                <Link to="/about-us/careers">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">Careers</a>
                </Link>
              </li>
              <li>
                <Link to="/about-us/contact">
                  <a className="hover:text-foreground transition-colors" rel="noopener noreferrer">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterLinks;


