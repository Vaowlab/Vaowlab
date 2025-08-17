import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cloud, Shield, Zap, Server, Globe, Lock, Scale, Cpu } from 'lucide-react';

function CloudHosting() {
  const features = [
    {
      icon: <Server className="w-12 h-12" />,
      title: "Dedicated Servers",
      description: "High-performance servers with guaranteed resources"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security",
      description: "Advanced security measures and DDoS protection"
    },
    {
      icon: <Scale className="w-12 h-12" />,
      title: "Auto-scaling",
      description: "Dynamic resource allocation based on demand"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global CDN",
      description: "Fast content delivery worldwide"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "SSL Certificates",
      description: "Free SSL certificates for all domains"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Resource Management",
      description: "Advanced monitoring and optimization tools"
    }
  ];

  const platforms = [
    "Amazon Web Services (AWS)",
    "Google Cloud Platform (GCP)",
    "Microsoft Azure",
    "DigitalOcean",
    "Cloudflare",
    "Custom Solutions"
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
              <Cloud className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="heading-xl mb-6">
                Cloud Hosting Solutions
              </h1>
              <p className="text-xl text-steel max-w-2xl mx-auto">
                Secure, scalable, and reliable cloud hosting services for your business
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
            <h2 className="heading-lg mb-16">Our Features</h2>
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

      {/* Platforms Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="heading-lg mb-16">Platforms We Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="p-6 bg-primary/50 rounded-xl text-center border border-accent/10"
                >
                  <span className="text-lg font-semibold text-secondary">{platform}</span>
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
            <h2 className="heading-lg mb-16">Migration Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">1</div>
                <div>
                  <h3 className="heading-md mb-4">Assessment</h3>
                  <p className="text-steel">Evaluating your current infrastructure and needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">2</div>
                <div>
                  <h3 className="heading-md mb-4">Planning</h3>
                  <p className="text-steel">Developing a comprehensive migration strategy</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">3</div>
                <div>
                  <h3 className="heading-md mb-4">Migration</h3>
                  <p className="text-steel">Seamless transfer with minimal downtime</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">4</div>
                <div>
                  <h3 className="heading-md mb-4">Optimization</h3>
                  <p className="text-steel">Fine-tuning for optimal performance</p>
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
            <h2 className="heading-lg mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-steel mb-8 text-lg">Let's find the perfect hosting solution for your business</p>
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

export default CloudHosting;