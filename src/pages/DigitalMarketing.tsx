import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Megaphone, 
  Target, 
  Camera, 
  Video,
  CheckCircle,
  ArrowRight,
  BarChart2,
  TrendingUp,
  Users,
  Globe,
  Search,
  Share2,
  Mail,
  Zap
} from 'lucide-react';

function DigitalMarketing() {
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

  const marketingCategories = [
    { id: 'overview', title: 'Overview', icon: <Megaphone className="w-5 h-5" /> },
    { id: 'services', title: 'Services', icon: <Target className="w-5 h-5" /> },
    { id: 'content-creation', title: 'Content Creation', icon: <Camera className="w-5 h-5" /> },
    { id: 'campaigns', title: 'Campaigns', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'analytics', title: 'Analytics', icon: <BarChart2 className="w-5 h-5" /> }
  ];

  const services = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Digital Strategy",
      description: "Comprehensive digital marketing strategies"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Photography",
      description: "Professional photography for your brand"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Production",
      description: "High-quality video content creation"
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Digital Campaigns",
      description: "Result-driven marketing campaigns"
    }
  ];

  const marketingServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Engine Marketing",
      description: "Google Ads and Bing Ads management for maximum ROI",
      features: ["Keyword research", "Ad copy optimization", "Landing page design", "Conversion tracking"]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns across all platforms",
      features: ["Content strategy", "Community management", "Paid social ads", "Influencer partnerships"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing",
      description: "Automated email campaigns that nurture and convert",
      features: ["Email automation", "List segmentation", "A/B testing", "Performance analytics"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Content Marketing",
      description: "Strategic content creation and distribution",
      features: ["Blog writing", "Video content", "Infographics", "Content calendar"]
    }
  ];

  const contentTypes = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Professional Photography",
      description: "High-quality product and brand photography",
      examples: ["Product photography", "Corporate headshots", "Event photography", "Lifestyle shoots"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      description: "Engaging video content for all platforms",
      examples: ["Brand videos", "Product demos", "Social media content", "Testimonials"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Visual content that captures attention",
      examples: ["Social media graphics", "Infographics", "Banner ads", "Print materials"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Content Writing",
      description: "Compelling copy that converts",
      examples: ["Blog posts", "Ad copy", "Email content", "Website copy"]
    }
  ];

  const campaignTypes = [
    {
      title: "Brand Awareness Campaigns",
      description: "Building brand recognition and reach",
      metrics: ["Impressions", "Reach", "Brand recall", "Share of voice"],
      platforms: ["Google Display", "Facebook", "Instagram", "YouTube"]
    },
    {
      title: "Lead Generation Campaigns",
      description: "Capturing qualified leads for your business",
      metrics: ["Cost per lead", "Lead quality", "Conversion rate", "ROI"],
      platforms: ["Google Ads", "LinkedIn", "Facebook", "Email"]
    },
    {
      title: "E-commerce Campaigns",
      description: "Driving sales and revenue growth",
      metrics: ["ROAS", "Cart abandonment", "AOV", "Customer LTV"],
      platforms: ["Google Shopping", "Facebook Shop", "Instagram Shop", "Amazon"]
    },
    {
      title: "Retargeting Campaigns",
      description: "Re-engaging previous website visitors",
      metrics: ["Click-through rate", "Conversion rate", "Frequency", "Cost per conversion"],
      platforms: ["Google Ads", "Facebook Pixel", "LinkedIn", "Display networks"]
    }
  ];

  const analyticsServices = [
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Performance Tracking",
      description: "Comprehensive tracking and measurement",
      features: ["Google Analytics setup", "Conversion tracking", "Custom dashboards", "Real-time monitoring"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ROI Analysis",
      description: "Measuring return on marketing investment",
      features: ["Revenue attribution", "Cost analysis", "Profit margins", "Campaign ROI"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conversion Optimization",
      description: "Improving conversion rates and performance",
      features: ["A/B testing", "Landing page optimization", "Funnel analysis", "User behavior tracking"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience Insights",
      description: "Understanding your target audience",
      features: ["Demographic analysis", "Behavior patterns", "Customer journey mapping", "Persona development"]
    }
  ];

  const marketingProcess = [
    {
      step: 1,
      title: "Research & Analysis",
      description: "Understanding your market and defining clear objectives",
      details: ["Market research", "Competitor analysis", "Target audience identification", "Goal setting"]
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Creating a comprehensive marketing plan",
      details: ["Channel selection", "Content strategy", "Budget allocation", "Timeline planning"]
    },
    {
      step: 3,
      title: "Implementation",
      description: "Executing campaigns across chosen channels",
      details: ["Campaign setup", "Content creation", "Ad deployment", "Monitoring launch"]
    },
    {
      step: 4,
      title: "Optimization",
      description: "Continuous monitoring and improvement",
      details: ["Performance analysis", "A/B testing", "Strategy refinement", "Scaling successful campaigns"]
    }
  ];

  const marketingContent = {
    overview: {
      title: 'Digital Marketing Services',
      description: 'Driving growth through strategic digital marketing and compelling content creation',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        "Data-driven marketing strategies",
        "Multi-channel campaign management",
        "Professional content creation",
        "ROI-focused approach",
        "Comprehensive analytics and reporting"
      ]
    },
    services: {
      title: 'Our Marketing Services',
      description: 'Comprehensive digital marketing solutions for business growth',
      services: marketingServices
    },
    'content-creation': {
      title: 'Content Creation Services',
      description: 'Professional content that engages and converts',
      contentTypes: contentTypes
    },
    campaigns: {
      title: 'Campaign Management',
      description: 'Strategic campaigns designed to achieve your business goals',
      campaignTypes: campaignTypes
    },
    analytics: {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing performance',
      analyticsServices: analyticsServices
    }
  };

  const currentContent = marketingContent[activeCategory as keyof typeof marketingContent];

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
            <Megaphone className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
              Digital Marketing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic digital marketing solutions that drive growth and deliver measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marketing Navigation */}
      <section className={`py-16 bg-gray-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-4' : 'sticky top-24 z-40'
      }`}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {marketingCategories.map((category) => (
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

      {/* Marketing Content */}
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
                            Why Choose Our Digital Marketing Services?
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
                              Start Your Campaign
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                          </div>
                        </div>
                        <div className="relative">
                          <img
                            src={currentContent.image}
                            alt="Digital Marketing"
                            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

                  {/* Content Creation Content */}
                  {activeCategory === 'content-creation' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {currentContent.contentTypes.map((content, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="text-accent mb-6">{content.icon}</div>
                          <h3 className="text-2xl font-semibold text-primary mb-4">{content.title}</h3>
                          <p className="text-gray-600 mb-6">{content.description}</p>
                          <ul className="space-y-2">
                            {content.examples.map((example, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 text-accent mr-3" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Campaigns Content */}
                  {activeCategory === 'campaigns' && (
                    <div className="space-y-8">
                      {currentContent.campaignTypes.map((campaign, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 p-8 rounded-2xl"
                        >
                          <h3 className="text-2xl font-semibold text-primary mb-4">{campaign.title}</h3>
                          <p className="text-gray-600 mb-6">{campaign.description}</p>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-lg font-semibold text-primary mb-4">Key Metrics</h4>
                              <ul className="space-y-2">
                                {campaign.metrics.map((metric, i) => (
                                  <li key={i} className="flex items-center text-gray-600">
                                    <BarChart2 className="w-4 h-4 text-accent mr-3" />
                                    {metric}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-primary mb-4">Platforms</h4>
                              <ul className="space-y-2">
                                {campaign.platforms.map((platform, i) => (
                                  <li key={i} className="flex items-center text-gray-600">
                                    <Globe className="w-4 h-4 text-accent mr-3" />
                                    {platform}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Analytics Content */}
                  {activeCategory === 'analytics' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {currentContent.analyticsServices.map((service, index) => (
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
                </div>
              </section>

              {/* Process Section - Show on all tabs except analytics */}
              {activeCategory !== 'analytics' && (
                <section className="py-24 bg-gray-50">
                  <div className="container-custom">
                    <h3 className="text-4xl font-display font-bold text-primary mb-16 text-center">
                      Our Marketing Process
                    </h3>
                    <div className="space-y-8">
                      {marketingProcess.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                          <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-2xl font-semibold text-primary mb-4">{step.title}</h4>
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
                  </div>
                </section>
              )}
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
              Ready to Boost Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's create a winning digital marketing strategy that drives growth and delivers results
            </p>
            <a href="#contact" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center">
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarketing;