import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, Box, Scissors, PenTool, Palette, Truck, ShoppingBag, Recycle } from 'lucide-react';

function Packaging() {
  const features = [
    {
      icon: <Box className="w-12 h-12" />,
      title: "Structural Design",
      description: "Innovative and functional packaging structures"
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Visual Design",
      description: "Eye-catching graphics and branding"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Material Selection",
      description: "Sustainable and durable materials"
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Prototyping",
      description: "Physical mockups and testing"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Production Support",
      description: "Manufacturing coordination"
    },
    {
      icon: <Recycle className="w-12 h-12" />,
      title: "Eco-friendly Solutions",
      description: "Sustainable packaging options"
    }
  ];

  const portfolio = [
    {
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
      title: "Premium Food Packaging",
      description: "Luxury food brand packaging"
    },
    {
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80",
      title: "Cosmetics Collection",
      description: "Sustainable beauty packaging"
    },
    {
      image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=1200&q=80",
      title: "Tech Product Box",
      description: "Modern electronics packaging"
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
              <Package className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="heading-xl mb-6">
                Packaging Design
              </h1>
              <p className="text-xl text-steel max-w-2xl mx-auto">
                Creating innovative and sustainable packaging solutions that stand out on the shelf
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

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="heading-lg mb-16">Featured Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {portfolio.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-2xl font-semibold text-secondary mb-2">{item.title}</h3>
                      <p className="text-steel">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
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
            <h2 className="heading-lg mb-16">Our Design Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">1</div>
                <div>
                  <h3 className="heading-md mb-4">Research</h3>
                  <p className="text-steel">Market analysis and requirements gathering</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">2</div>
                <div>
                  <h3 className="heading-md mb-4">Concept Development</h3>
                  <p className="text-steel">Creating innovative design concepts</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">3</div>
                <div>
                  <h3 className="heading-md mb-4">Prototyping</h3>
                  <p className="text-steel">Physical mockups and testing</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">4</div>
                <div>
                  <h3 className="heading-md mb-4">Production</h3>
                  <p className="text-steel">Manufacturing coordination and quality control</p>
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
            <h2 className="heading-lg mb-6">Ready to Create Stunning Packaging?</h2>
            <p className="text-steel mb-8 text-lg">Let's design packaging that makes your product stand out</p>
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

export default Packaging;