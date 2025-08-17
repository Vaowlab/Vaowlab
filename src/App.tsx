import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  Code2,
  Palette,
  Share2,
  Megaphone,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  MonitorSmartphone,
  Package,
  Search,
  Users,
  Cloud,
  LayoutGrid
} from 'lucide-react';

// Import pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import WebDevelopment from './pages/WebDevelopment';
import BrandDesign from './pages/BrandDesign';
import SocialMedia from './pages/SocialMedia';
import DigitalMarketing from './pages/DigitalMarketing';
import CreativeStudio from './pages/CreativeStudio';
import CustomCRM from './pages/CustomCRM';
import CloudHosting from './pages/CloudHosting';
import WorkspaceSolutions from './pages/WorkspaceSolutions';
import UIUXDesign from './pages/UIUXDesign';
import Packaging from './pages/Packaging';
import SEO from './pages/SEO';
import Services from './pages/Services';
import Resources from './pages/Resources';
import ResourceGuide from './pages/ResourceGuide';
import CaseStudy from './pages/CaseStudy';
import Article from './pages/Article';
import AdsLanding from './pages/AdsLanding';
import DomainSearch from './pages/DomainSearch';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Web Development",
      description: "Building responsive and scalable websites",
      link: "/services/web-development"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Brand Design",
      description: "Crafting unique identities that resonate",
      link: "/services/brand-design"
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5" />,
      title: "UI/UX Design",
      description: "Designing user-friendly experiences",
      link: "/services/ui-ux-design"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Custom CRM",
      description: "Tailored customer relationship management",
      link: "/services/crm"
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud Hosting",
      description: "Secure and scalable hosting solutions",
      link: "/services/hosting"
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "Workspace Solutions",
      description: "Google & Microsoft workspace setup",
      link: "/services/workspace"
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Packaging",
      description: "Designing packaging that stands out",
      link: "/services/packaging"
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Social Media",
      description: "Strategic social media management",
      link: "/services/social-media"
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "SEO",
      description: "Boosting online visibility",
      link: "/services/seo"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation */}
      <nav className={`fixed w-full transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-xl py-4 shadow-lg shadow-black/10' : 'bg-primary/70 backdrop-blur-lg py-6'} ${
        window.location.pathname === '/services' && scrolled ? 'z-30' : 'z-50'
      } border-b border-white/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:pointer-events-none`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-display font-bold text-secondary">
              VaowLab
            </Link>
            <div className="hidden md:flex space-x-8 items-center relative">
              <Link to="/about" className="text-sm uppercase tracking-wider text-steel hover:text-secondary transition-colors">
                About
              </Link>
              
              <Link to="/services" className="text-sm uppercase tracking-wider text-steel hover:text-secondary transition-colors">
                Services
              </Link>

              <Link to="/creative-studio" className="text-sm uppercase tracking-wider text-steel hover:text-secondary transition-colors">
                Creative Studio
              </Link>
              <Link to="/resources" className="text-sm uppercase tracking-wider text-steel hover:text-secondary transition-colors">
                Resources
              </Link>
              <Link to="/contact" className="text-sm uppercase tracking-wider text-steel hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
            <button
              className="md:hidden text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-primary z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link to="/about" className="text-xl uppercase tracking-wider text-secondary" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/services" className="text-xl uppercase tracking-wider text-secondary" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/creative-studio" className="text-xl uppercase tracking-wider text-secondary" onClick={() => setIsMenuOpen(false)}>Creative Studio</Link>
              <Link to="/resources" className="text-xl uppercase tracking-wider text-secondary" onClick={() => setIsMenuOpen(false)}>Resources</Link>
              <Link to="/contact" className="text-xl uppercase tracking-wider text-secondary" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/brand-design" element={<BrandDesign />} />
        <Route path="/services/social-media" element={<SocialMedia />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/crm" element={<CustomCRM />} />
        <Route path="/services/hosting" element={<CloudHosting />} />
        <Route path="/services/workspace" element={<WorkspaceSolutions />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/packaging" element={<Packaging />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/creative-studio" element={<CreativeStudio />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/guides/:slug" element={<ResourceGuide />} />
        <Route path="/resources/case-studies/:slug" element={<CaseStudy />} />
        <Route path="/resources/articles/:slug" element={<Article />} />
        <Route path="/ads-landing" element={<AdsLanding />} />
        <Route path="/domain-search" element={<DomainSearch />} />
      </Routes>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918318379651"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}

export default App;