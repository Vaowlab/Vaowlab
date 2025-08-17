import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, LayoutGrid, Mail, Calendar, FileText, Users, Video, Shield, MessageSquare } from 'lucide-react';

function WorkspaceSolutions() {
  const features = [
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Email Solutions",
      description: "Professional email with custom domain"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Calendar Management",
      description: "Shared calendars and scheduling tools"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Document Collaboration",
      description: "Real-time document editing and sharing"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Conferencing",
      description: "HD video meetings and webinars"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Team Chat",
      description: "Instant messaging and team channels"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security features"
    }
  ];

  const solutions = [
    {
      title: "Google Workspace",
      features: ["Gmail", "Google Drive", "Google Meet", "Google Docs"]
    },
    {
      title: "Microsoft 365",
      features: ["Outlook", "OneDrive", "Teams", "Office Apps"]
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
              <LayoutGrid className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="heading-xl mb-6">
                Workspace Solutions
              </h1>
              <p className="text-xl text-steel max-w-2xl mx-auto">
                Complete Google Workspace and Microsoft 365 setup and management
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

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="heading-lg mb-16">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-8 bg-primary/50 rounded-xl border border-accent/10"
                >
                  <h3 className="text-2xl font-semibold text-secondary mb-6">{solution.title}</h3>
                  <ul className="space-y-4">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-steel">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                  <h3 className="heading-md mb-4">Setup & Configuration</h3>
                  <p className="text-steel">Initial workspace setup and domain configuration</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">2</div>
                <div>
                  <h3 className="heading-md mb-4">Data Migration</h3>
                  <p className="text-steel">Seamless transfer of existing emails and files</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">3</div>
                <div>
                  <h3 className="heading-md mb-4">User Training</h3>
                  <p className="text-steel">Comprehensive training for all team members</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">4</div>
                <div>
                  <h3 className="heading-md mb-4">Ongoing Support</h3>
                  <p className="text-steel">Continuous technical support and maintenance</p>
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
            <h2 className="heading-lg mb-6">Ready to Modernize Your Workspace?</h2>
            <p className="text-steel mb-8 text-lg">Let's set up the perfect productivity suite for your team</p>
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

export default WorkspaceSolutions;