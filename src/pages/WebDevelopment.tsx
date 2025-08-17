import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Database, 
  Smartphone, 
  Gauge, 
  Lock,
  Server,
  Layers,
  Zap,
  CheckCircle,
  ArrowRight,
  Monitor,
  Cpu,
  Shield
} from 'lucide-react';

function WebDevelopment() {
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

  const webDevCategories = [
    { id: 'overview', title: 'Overview', icon: <Code2 className="w-5 h-5" /> },
    { id: 'services', title: 'Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'technologies', title: 'Technologies', icon: <Cpu className="w-5 h-5" /> },
    { id: 'process', title: 'Process', icon: <Layers className="w-5 h-5" /> },
    { id: 'portfolio', title: 'Portfolio', icon: <Monitor className="w-5 h-5" /> }
  ];

  const features = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Custom Web Applications",
      description: "Tailored solutions built with modern frameworks and best practices"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture"
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs"
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds and optimal user experience"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Security",
      description: "Industry-standard security practices and data protection"
    }
  ];

  const technologies = {
    frontend: [
      { name: "React", description: "Modern UI library for interactive interfaces" },
      { name: "Next.js", description: "Full-stack React framework" },
      { name: "TypeScript", description: "Type-safe JavaScript development" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" }
    ],
    backend: [
      { name: "Node.js", description: "JavaScript runtime for server-side development" },
      { name: "Express.js", description: "Fast web framework for Node.js" },
      { name: "Python", description: "Versatile programming language" },
      { name: "PHP", description: "Server-side scripting language" }
    ],
    database: [
      { name: "PostgreSQL", description: "Advanced relational database" },
      { name: "MongoDB", description: "NoSQL document database" },
      { name: "MySQL", description: "Popular relational database" },
      { name: "Redis", description: "In-memory data structure store" }
    ],
    cloud: [
      { name: "AWS", description: "Amazon Web Services cloud platform" },
      { name: "Docker", description: "Containerization platform" },
      { name: "Vercel", description: "Frontend deployment platform" },
      { name: "Netlify", description: "Modern web development platform" }
    ]
  };

  const serviceTypes = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Development",
      description: "Complete online store solutions with payment integration",
      features: ["Shopping cart functionality", "Payment gateway integration", "Inventory management", "Order tracking"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Web Applications",
      description: "Custom web applications for business automation",
      features: ["User authentication", "Database integration", "Real-time features", "Admin dashboards"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Progressive Web Apps",
      description: "App-like experiences that work across all devices",
      features: ["Offline functionality", "Push notifications", "App-like interface", "Fast loading"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Solutions",
      description: "Scalable solutions for large organizations",
      features: ["High security", "Scalable architecture", "Integration capabilities", "24/7 support"]
    }
  ];

  const portfolio = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      title: "TechStart Platform",
      category: "SaaS Application",
      description: "A comprehensive SaaS platform built with React and Node.js",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      title: "E-commerce Store",
      category: "Online Store",
      description: "Modern e-commerce platform with advanced features",
      technologies: ["Next.js", "Stripe", "MongoDB", "Vercel"]
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      title: "Corporate Website",
      category: "Business Website",
      description: "Professional corporate website with CMS integration",
      technologies: ["React", "Headless CMS", "Tailwind", "Netlify"]
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Understanding your business needs and planning the perfect solution",
      details: ["Requirements gathering", "Technical analysis", "Project timeline", "Resource allocation"]
    },
    {
      step: 2,
      title: "Design & Development",
      description: "Creating intuitive interfaces and robust backend systems",
      details: ["UI/UX design", "Frontend development", "Backend development", "Database design"]
    },
    {
      step: 3,
      title: "Testing & QA",
      description: "Rigorous testing to ensure quality and performance",
      details: ["Unit testing", "Integration testing", "Performance testing", "Security testing"]
    },
    {
      step: 4,
      title: "Deployment & Support",
      description: "Smooth deployment and ongoing maintenance",
      details: ["Production deployment", "Performance monitoring", "Bug fixes", "Feature updates"]
    }
  ];

  const webDevContent = {
    overview: {
      title: 'Web Development Services',
      description: 'Creating powerful, scalable, and user-friendly web applications that drive business growth',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        "Modern web technologies and frameworks",
        "Responsive and mobile-first design",
        "Scalable and secure architecture",
        "SEO-optimized and performance-focused",
        "Ongoing support and maintenance"
      ]
    },
    services: {
      title: 'Our Web Development Services',
      description: 'Comprehensive web development solutions for every business need',
      services: serviceTypes
    },
    technologies: {
      title: 'Technologies We Use',
      description: 'Cutting-edge technologies for modern web development',
      techStack: technologies
    },
    process: {
      title: 'Our Development Process',
      description: 'A proven methodology that ensures successful project delivery',
      steps: developmentProcess
    },
    portfolio: {
      title: 'Featured Projects',
      description: 'Showcasing our latest web development work',
      projects: portfolio
    }
  };

  const currentContent = webDevContent[activeCategory as keyof typeof webDevContent];

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
            <Code2 className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
              Web Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building modern, scalable, and high-performance web applications that drive business success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Web Dev Navigation */}
      <section className={`py-16 bg-gray-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-4' : 'sticky top-24 z-40'
      }`}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {webDevCategories.map((category) => (
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

      {/* Web Dev Content */}
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
                            Why Choose Our Web Development Services?
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
                              Start Your Project
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                          </div>
                        </div>
                        <div className="relative">
                          <img
                            src={currentContent.image}
                            alt="Web Development"
                            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                          >
                            <div className="text-accent mb-6">{feature.icon}</div>
                            <h4 className="text-xl font-semibold text-primary mb-4">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Services Content */}
                  {activeCategory === 'services' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {currentContent.services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="text-accent mb-6">{service.icon}</div>
                          <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                          <p className="text-gray-600 mb-6">{service.description}</p>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 text-accent mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Content */}
                  {activeCategory === 'technologies' && (
                    <div className="space-y-12">
                      {Object.entries(currentContent.techStack).map(([category, techs], categoryIndex) => (
                        <div key={category}>
                          <h3 className="text-3xl font-display font-bold text-primary mb-8 capitalize text-center">
                            {category} Technologies
                          </h3>
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {techs.map((tech, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (categoryIndex * 4 + index) * 0.1 }}
                                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                              >
                                <h4 className="text-lg font-semibold text-primary mb-2">{tech.name}</h4>
                                <p className="text-gray-600 text-sm">{tech.description}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
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
                              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-accent text-sm font-semibold mb-2 block">
                                  {project.category}
                                </span>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">
                                  {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                  {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
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
            <Zap className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-5xl font-display font-bold text-white mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals with our comprehensive web development services
            </p>
            <a href="#contact" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;