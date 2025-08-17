import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, BarChart2, Globe, Target, Settings, LineChart, Zap, Link as LinkIcon } from 'lucide-react';

function SEO() {
  const features = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Keyword Research",
      description: "Strategic keyword targeting and analysis"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "On-Page SEO",
      description: "Technical optimization for better rankings"
    },
    {
      icon: <LinkIcon className="w-12 h-12" />,
      title: "Link Building",
      description: "Quality backlink acquisition strategy"
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "Performance Tracking",
      description: "Detailed analytics and reporting"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Local SEO",
      description: "Optimizing for local search results"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Speed Optimization",
      description: "Improving website performance"
    }
  ];

  const benefits = [
    {
      title: "Increased Visibility",
      description: "Higher rankings in search results"
    },
    {
      title: "More Traffic",
      description: "Increased organic website visitors"
    },
    {
      title: "Better ROI",
      description: "Cost-effective marketing strategy"
    },
    {
      title: "Brand Authority",
      description: "Enhanced online presence"
    }
  ];

  return (
    <div className="min-h-screen bg-primary pt-24">
      <Link 
        to="/" 
        className="fixed top-24 left-4 md:left-8 bg-accent/10 p-2 rounded-full hover:bg-accent/20 transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-accent" />
      </Link>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Search className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="heading-xl mb-6">
                Search Engine Optimization
              </h1>
              <p className="text-xl text-steel max-w-2xl mx-auto">
                Boost your online visibility and drive organic traffic to your website
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-primary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-lg mb-16">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-primary rounded-2xl border border-accent/10"
                >
                  <div className="text-accent mb-6">{feature.icon}</div>
                  <h3 className="heading-md mb-4">{feature.title}</h3>
                  <p className="text-steel">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="heading-lg mb-16">Benefits of SEO</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-8 bg-primary/50 rounded-xl border border-accent/10"
                >
                  <h3 className="text-2xl font-semibold text-secondary mb-4">{benefit.title}</h3>
                  <p className="text-steel">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-primary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="heading-lg mb-16">Our SEO Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">1</div>
                <div>
                  <h3 className="heading-md mb-4">Audit</h3>
                  <p className="text-steel">Comprehensive website and competitor analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">2</div>
                <div>
                  <h3 className="heading-md mb-4">Strategy</h3>
                  <p className="text-steel">Developing a customized SEO plan</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">3</div>
                <div>
                  <h3 className="heading-md mb-4">Implementation</h3>
                  <p className="text-steel">Executing optimization techniques</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">4</div>
                <div>
                  <h3 className="heading-md mb-4">Monitoring</h3>
                  <p className="text-steel">Tracking progress and making adjustments</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-primary/50 rounded-2xl p-8 md:p-12 text-center border border-accent/10"
          >
            <h2 className="heading-lg mb-6">Ready to Improve Your Search Rankings?</h2>
            <p className="text-steel mb-8 text-lg">Let's create an SEO strategy that drives results</p>
            <Link 
              to="/#contact" 
              className="btn-primary"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SEO;