import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, MessageSquare, BarChart2, Settings, Database, Shield, LineChart, UserCog } from 'lucide-react';

function CustomCRM() {
  const features = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "Contact Management",
      description: "Centralized database for all your customer information"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Communication Tools",
      description: "Integrated email, chat, and notification systems"
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "Sales Pipeline",
      description: "Visual deal tracking and sales forecasting"
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Analytics & Reports",
      description: "Comprehensive reporting and data visualization"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security",
      description: "Enterprise-grade data protection and privacy"
    },
    {
      icon: <UserCog className="w-12 h-12" />,
      title: "Customization",
      description: "Tailored workflows and automation"
    }
  ];

  const benefits = [
    "Improved Customer Relationships",
    "Increased Sales Efficiency",
    "Better Team Collaboration",
    "Data-Driven Decision Making",
    "Automated Workflows",
    "Scalable Solution"
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
              <Users className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="heading-xl mb-6">
                Custom CRM Solutions
              </h1>
              <p className="text-xl text-steel max-w-2xl mx-auto">
                Tailored customer relationship management systems designed for your unique business needs
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
            <h2 className="heading-lg mb-16">Key Features</h2>
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
            <h2 className="heading-lg mb-16">Benefits</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-primary/50 rounded-xl text-center border border-accent/10"
                >
                  <span className="text-lg font-semibold text-secondary">{benefit}</span>
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
            <h2 className="heading-lg mb-16">Implementation Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">1</div>
                <div>
                  <h3 className="heading-md mb-4">Requirements Analysis</h3>
                  <p className="text-steel">Understanding your business processes and needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">2</div>
                <div>
                  <h3 className="heading-md mb-4">Custom Development</h3>
                  <p className="text-steel">Building your tailored CRM solution</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">3</div>
                <div>
                  <h3 className="heading-md mb-4">Data Migration</h3>
                  <p className="text-steel">Seamless transfer of your existing data</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">4</div>
                <div>
                  <h3 className="heading-md mb-4">Training & Support</h3>
                  <p className="text-steel">Comprehensive training and ongoing support</p>
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
            <h2 className="heading-lg mb-6">Ready to Transform Your Customer Relations?</h2>
            <p className="text-steel mb-8 text-lg">Let's build a CRM system that perfectly fits your business needs</p>
            <Link 
              to="/#contact" 
              className="btn-primary"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CustomCRM;