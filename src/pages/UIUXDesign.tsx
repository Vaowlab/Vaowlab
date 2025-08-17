import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MonitorSmartphone, 
  Layers, 
  Eye, 
  Smartphone, 
  Laptop, 
  Users, 
  Lightbulb, 
  Workflow,
  CheckCircle,
  ArrowRight,
  Figma,
  Palette,
  Target,
  Zap
} from 'lucide-react';

function UIUXDesign() {
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

  const uiuxCategories = [
    { id: 'overview', title: 'Overview', icon: <MonitorSmartphone className="w-5 h-5" /> },
    { id: 'services', title: 'Services', icon: <Layers className="w-5 h-5" /> },
    { id: 'portfolio', title: 'Portfolio', icon: <Eye className="w-5 h-5" /> },
    { id: 'process', title: 'Process', icon: <Workflow className="w-5 h-5" /> },
    { id: 'tools', title: 'Tools & Methods', icon: <Figma className="w-5 h-5" /> }
  ];

  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "User Research",
      description: "Understanding user behavior and needs"
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "User Flow Design",
      description: "Optimizing user journeys and interactions"
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Interface Design",
      description: "Creating beautiful and functional interfaces"
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Usability Testing",
      description: "Ensuring optimal user experience"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Responsive Design",
      description: "Perfect display across all devices"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Design Systems",
      description: "Consistent and scalable design patterns"
    }
  ];

  const serviceTypes = [
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Web Application Design",
      description: "User-centered design for web applications",
      features: ["Responsive layouts", "Interactive prototypes", "User testing", "Design systems"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Design",
      description: "Native and cross-platform mobile experiences",
      features: ["iOS & Android design", "Touch interactions", "Mobile patterns", "App store optimization"]
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Dashboard Design",
      description: "Data visualization and admin interfaces",
      features: ["Data visualization", "Complex workflows", "Admin panels", "Analytics dashboards"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "E-commerce Design",
      description: "Conversion-focused online store design",
      features: ["Product catalogs", "Checkout optimization", "Shopping cart design", "Payment flows"]
    }
  ];

  const portfolio = [
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
      title: "FinTech App Redesign",
      category: "Mobile App",
      description: "Modern banking experience with intuitive navigation",
      metrics: ["40% increase in user engagement", "25% reduction in support tickets"]
    },
    {
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      title: "E-commerce Platform",
      category: "Web Application",
      description: "Seamless shopping journey with optimized checkout",
      metrics: ["60% increase in conversion rate", "35% reduction in cart abandonment"]
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      title: "Healthcare Dashboard",
      category: "Dashboard",
      description: "Intuitive patient management system for healthcare providers",
      metrics: ["50% faster task completion", "90% user satisfaction rate"]
    }
  ];

  const designProcess = [
    {
      step: 1,
      title: "Discovery",
      description: "Understanding user needs and business goals",
      details: ["User interviews", "Stakeholder meetings", "Competitive analysis", "Requirements gathering"]
    },
    {
      step: 2,
      title: "Research & Analysis",
      description: "Deep dive into user behavior and market insights",
      details: ["User personas", "Journey mapping", "Pain point analysis", "Opportunity identification"]
    },
    {
      step: 3,
      title: "Design & Prototype",
      description: "Creating wireframes and interactive prototypes",
      details: ["Information architecture", "Wireframing", "Visual design", "Interactive prototypes"]
    },
    {
      step: 4,
      title: "Test & Iterate",
      description: "Validating designs through user testing and feedback",
      details: ["Usability testing", "A/B testing", "Feedback analysis", "Design refinement"]
    }
  ];

  const designTools = {
    design: [
      { name: "Figma", description: "Collaborative design and prototyping" },
      { name: "Adobe XD", description: "UI/UX design and prototyping" },
      { name: "Sketch", description: "Vector-based design tool" },
      { name: "Framer", description: "Advanced prototyping and animation" }
    ],
    research: [
      { name: "Miro", description: "Collaborative whiteboarding" },
      { name: "Maze", description: "User testing and analytics" },
      { name: "Hotjar", description: "User behavior analytics" },
      { name: "UserTesting", description: "Remote user research" }
    ],
    prototyping: [
      { name: "Principle", description: "Timeline-based animation" },
      { name: "ProtoPie", description: "Sensor-enabled prototyping" },
      { name: "InVision", description: "Digital product design platform" },
      { name: "Marvel", description: "Simple design and prototyping" }
    ]
  };

  const uiuxContent = {
    overview: {
      title: 'UI/UX Design Services',
      description: 'Creating intuitive and engaging digital experiences that users love',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        "User-centered design approach",
        "Data-driven design decisions",
        "Responsive and accessible design",
        "Conversion optimization focus",
        "Comprehensive user testing"
      ]
    },
    services: {
      title: 'Our UI/UX Design Services',
      description: 'Comprehensive design solutions for digital products',
      services: serviceTypes
    },
    portfolio: {
      title: 'Design Portfolio',
      description: 'Showcasing our latest UI/UX design work and successful projects',
      projects: portfolio
    },
    process: {
      title: 'Our Design Process',
      description: 'A user-centered approach to creating exceptional digital experiences',
      steps: designProcess
    },
    tools: {
      title: 'Tools & Methods',
      description: 'Professional tools and methodologies we use for design excellence',
      toolCategories: designTools
    }
  };

  const currentContent = uiuxContent[activeCategory as keyof typeof uiuxContent];

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
            <MonitorSmartphone className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
              UI/UX Design
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Designing digital experiences that delight users and drive business results
            </p>
          </motion.div>
        </div>
      </section>

      {/* UI/UX Navigation */}
      <section className={`py-16 bg-gray-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-4' : 'sticky top-24 z-40'
      }`}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {uiuxCategories.map((category) => (
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

      {/* UI/UX Content */}
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
                            User-Centered Design Excellence
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
                              Start Your Design Project
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                          </div>
                        </div>
                        <div className="relative">
                          <img
                            src={currentContent.image}
                            alt="UI/UX Design"
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
                              className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
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
                                <div className="space-y-1">
                                  {project.metrics.map((metric, i) => (
                                    <p key={i} className="text-accent text-xs font-medium">
                                      {metric}
                                    </p>
                                  ))}
                                </div>
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

                  {/* Tools Content */}
                  {activeCategory === 'tools' && (
                    <div className="space-y-12">
                      {Object.entries(currentContent.toolCategories).map(([category, tools], categoryIndex) => (
                        <div key={category}>
                          <h3 className="text-3xl font-display font-bold text-primary mb-8 capitalize text-center">
                            {category} Tools
                          </h3>
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {tools.map((tool, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (categoryIndex * 4 + index) * 0.1 }}
                                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                              >
                                <h4 className="text-lg font-semibold text-primary mb-2">{tool.name}</h4>
                                <p className="text-gray-600 text-sm">{tool.description}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
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
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's create an intuitive and engaging interface that your users will love
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

export default UIUXDesign;