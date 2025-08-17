import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, BarChart2, Calendar, Users } from 'lucide-react';

function SocialMedia() {
  const services = [
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Content Strategy",
      description: "Strategic planning and content calendar development"
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Social Management",
      description: "Daily management and engagement across platforms"
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "Analytics & Reports",
      description: "Detailed performance tracking and optimization"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Building",
      description: "Growing and engaging your social community"
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      description: "Visual storytelling"
    },
    {
      name: "LinkedIn",
      description: "Professional networking"
    },
    {
      name: "Twitter",
      description: "Real-time engagement"
    },
    {
      name: "Facebook",
      description: "Community building"
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
              <Share2 className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="heading-xl mb-6">
                Social Media Management
              </h1>
              <p className="text-xl text-steel max-w-2xl mx-auto">
                Building your brand's social presence with strategic content and community engagement
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-primary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-lg mb-16">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-primary rounded-2xl border border-accent/10"
                >
                  <div className="text-accent mb-6">{service.icon}</div>
                  <h3 className="heading-md mb-4">{service.title}</h3>
                  <p className="text-steel">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="heading-lg mb-16">Platforms We Manage</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-primary/50 rounded-xl border border-accent/10"
                >
                  <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                  <p className="text-steel">{platform.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-primary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="heading-lg mb-16">Our Management Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">1</div>
                <div>
                  <h3 className="heading-md mb-4">Strategy Development</h3>
                  <p className="text-steel">Creating a tailored social media strategy aligned with your goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">2</div>
                <div>
                  <h3 className="heading-md mb-4">Content Creation</h3>
                  <p className="text-steel">Developing engaging content that resonates with your audience</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">3</div>
                <div>
                  <h3 className="heading-md mb-4">Community Management</h3>
                  <p className="text-steel">Active engagement and community building</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">4</div>
                <div>
                  <h3 className="heading-md mb-4">Analysis & Optimization</h3>
                  <p className="text-steel">Regular performance review and strategy refinement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-primary/50 rounded-2xl p-8 md:p-12 text-center border border-accent/10"
          >
            <h2 className="heading-lg mb-6">Ready to Grow Your Social Presence?</h2>
            <p className="text-steel mb-8 text-lg">Let's create a winning social media strategy for your brand</p>
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

export default SocialMedia;