import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Layers, 
  Wand2, 
  PenTool, 
  Brush, 
  Type, 
  Video, 
  Image,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Eye,
  Target
} from 'lucide-react';

function BrandDesign() {
  const [activeCategory, setActiveCategory] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brandCategories = [
    { id: 'overview', title: 'Overview', icon: <Palette className="w-5 h-5" /> },
    { id: 'services', title: 'Services', icon: <Brush className="w-5 h-5" /> },
    { id: 'portfolio', title: 'Portfolio', icon: <Eye className="w-5 h-5" /> },
    { id: 'process', title: 'Process', icon: <Layers className="w-5 h-5" /> },
    { id: 'packages', title: 'Packages', icon: <Target className="w-5 h-5" /> }
  ];

  const services = [
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Logo Design",
      description: "Creating memorable and impactful brand identities"
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Brand Guidelines",
      description: "Comprehensive style guides for consistent brand presence"
    },
    {
      icon: <Type className="w-12 h-12" />,
      title: "Typography",
      description: "Custom typography and font selection"
    },
    {
      icon: <Brush className="w-12 h-12" />,
      title: "Visual Identity",
      description: "Complete visual language for your brand"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Motion Graphics",
      description: "Engaging animations and visual storytelling"
    },
    {
      icon: <Image className="w-12 h-12" />,
      title: "Brand Assets",
      description: "Marketing materials and digital assets"
    }
  ];

  const portfolio = [
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      title: "TechStart Rebrand",
      category: "Technology",
      description: "Complete brand transformation for a growing tech startup"
    },
    {
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80",
      title: "StyleHub Identity",
      category: "Fashion",
      description: "Modern brand identity for fashion e-commerce platform"
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      title: "InnovateX Design",
      category: "Consulting",
      description: "Professional brand design for business consulting firm"
    }
  ];

  const designProcess = [
    {
      step: 1,
      title: "Research & Strategy",
      description: "Understanding your brand values, target audience, and market position",
      details: ["Brand audit", "Competitor analysis", "Target audience research", "Brand positioning"]
    },
    {
      step: 2,
      title: "Concept Development",
      description: "Creating initial concepts and exploring creative directions",
      details: ["Mood boards", "Concept sketches", "Color exploration", "Typography research"]
    },
    {
      step: 3,
      title: "Refinement",
      description: "Perfecting the chosen direction and creating brand assets",
      details: ["Logo refinement", "Color palette", "Typography system", "Brand applications"]
    },
    {
      step: 4,
      title: "Implementation",
      description: "Delivering final assets and guidelines for brand consistency",
      details: ["Brand guidelines", "Asset delivery", "Implementation support", "Brand training"]
    }
  ];

  const brandPackages = [
    {
      name: "Starter",
      price: "₹25,000",
      description: "Perfect for new businesses and startups",
      features: [
        "Logo design (3 concepts)",
        "Basic brand guidelines",
        "Business card design",
        "Letterhead design",
        "2 revisions included",
        "Final files in all formats"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹50,000",
      description: "Comprehensive branding for growing businesses",
      features: [
        "Logo design (5 concepts)",
        "Complete brand guidelines",
        "Business stationery suite",
        "Social media templates",
        "Brand presentation",
        "3 revisions included",
        "Brand consultation session"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹1,00,000",
      description: "Complete brand transformation for established companies",
      features: [
        "Comprehensive brand strategy",
        "Logo design (unlimited concepts)",
        "Complete visual identity system",
        "Brand guidelines manual",
        "Marketing collateral design",
        "Website design mockups",
        "Unlimited revisions",
        "Ongoing brand support"
      ],
      popular: false
    }
  ];

  const brandContent = {
    overview: {
      title: 'Brand Design Services',
      description: 'Crafting unique and memorable brand identities that resonate with your audience',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        "Strategic brand positioning and messaging",
        "Memorable logo and visual identity design",
        "Comprehensive brand guidelines",
        "Consistent brand application across all touchpoints",
        "Ongoing brand support and consultation"
      ]
    },
    services: {
      title: 'Our Brand Design Services',
      description: 'Complete brand design solutions from concept to implementation',
      services: services
    },
    portfolio: {
      title: 'Brand Design Portfolio',
      description: 'Showcasing our latest brand design work and successful transformations',
      projects: portfolio
    },
    process: {
      title: 'Our Design Process',
      description: 'A strategic approach to creating powerful brand identities',
      steps: designProcess
    },
    packages: {
      title: 'Brand Design Packages',
      description: 'Choose the perfect package for your brand design needs',
      packages: brandPackages
    }
  };

  const currentContent = brandContent[activeCategory as keyof typeof brandContent];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Palette className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
              Brand Design
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating powerful brand identities that tell your story and connect with your audience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Navigation */}
      <section className={`py-16 bg-gray-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-4' : 'sticky top-24 z-40'
      }`}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {brandCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-primary shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Content */}
      <div className={isScrolled ? 'mt-20' : ''}>
        <AnimatePresence mode="wait">
          {currentContent && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Content Hero */}
              <section className="py-24">
                <div className="container-custom">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl font-display font-bold text-primary mb-6">
                      {currentContent.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      {currentContent.description}
                    </p>
                  </div>

                  {/* Overview Content */}
                  {activeCategory === 'overview' && (
                    <div className="space-y-16">
                      <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                          <h3 className="text-3xl font-display font-bold text-primary mb-8">
                            Why Brand Design Matters
                          </h3>
                          <ul className="space-y-4">
                            {currentContent.highlights.map((highlight, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center text-gray-600"
                              >
                                <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                          <div className="mt-8">
                            <a href="#contact" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center">
                              Start Your Brand Journey
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                          </div>
                        </div>
                        <div className="relative">
                          <img
                            src={currentContent.image}
                            alt="Brand Design"
                            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                          >
                            <div className="text-accent mb-6">{service.icon}</div>
                            <h4 className="text-xl font-semibold text-primary mb-4">{service.title}</h4>
                            <p className="text-gray-600">{service.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Services Content */}
                  {activeCategory === 'services' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {currentContent.services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="text-accent mb-6">{service.icon}</div>
                          <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Portfolio Content */}
                  {activeCategory === 'portfolio' && (
                    <div className="grid md:grid-cols-3 gap-8">
                      {currentContent.projects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group cursor-pointer"
                        >
                          <div className="relative overflow-hidden rounded-2xl">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-accent text-sm font-semibold mb-2 block">
                                  {project.category}
                                </span>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">
                                  {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                  {project.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Process Content */}
                  {activeCategory === 'process' && (
                    <div className="space-y-8">
                      {currentContent.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 p-8 rounded-2xl"
                        >
                          <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-semibold text-primary mb-4">{step.title}</h3>
                              <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {step.details.map((detail, i) => (
                                  <div key={i} className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                    <span className="text-gray-600 text-sm">{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Packages Content */}
                  {activeCategory === 'packages' && (
                    <div className="grid md:grid-cols-3 gap-8">
                      {currentContent.packages.map((pkg, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`relative bg-white p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 ${
                            pkg.popular ? 'border-accent shadow-lg' : 'border-gray-200'
                          }`}
                        >
                          {pkg.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <span className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                Most Popular
                              </span>
                            </div>
                          )}
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-display font-bold text-primary mb-2">{pkg.name}</h3>
                            <div className="text-4xl font-display font-bold text-accent mb-2">{pkg.price}</div>
                            <p className="text-gray-600">{pkg.description}</p>
                          </div>
                          <ul className="space-y-3 mb-8">
                            {pkg.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 text-accent mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                            pkg.popular 
                              ? 'bg-accent text-primary hover:bg-accent/90' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}>
                            Choose Package
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Sparkles className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-5xl font-display font-bold text-white mb-8">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's create a unique and memorable brand identity that sets you apart from the competition
            </p>
            <a href="#contact" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BrandDesign;