import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Share2, 
  Megaphone, 
  MonitorSmartphone,
  Users,
  Cloud,
  LayoutGrid,
  Package,
  Search,
  Camera,
  Video,
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  Star,
  Award,
  Zap,
  X
} from 'lucide-react';

function AdsLanding() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "E-commerce Solutions", "Custom Web Apps", "API Integration"],
      price: "Starting from ₹25,000"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Design",
      description: "Complete brand identity design that makes your business memorable",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Visual Identity"],
      price: "Starting from ₹15,000"
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers",
      features: ["User Research", "Interface Design", "Prototyping", "Usability Testing"],
      price: "Starting from ₹20,000"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive real business results",
      features: ["Google Ads", "Social Media Marketing", "SEO", "Content Marketing"],
      price: "Starting from ₹10,000/month"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Professional social media presence that engages your audience",
      features: ["Content Creation", "Community Management", "Analytics", "Paid Advertising"],
      price: "Starting from ₹8,000/month"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Custom CRM",
      description: "Tailored customer management systems for your business needs",
      features: ["Contact Management", "Sales Pipeline", "Automation", "Analytics"],
      price: "Starting from ₹35,000"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Hosting",
      description: "Secure and scalable hosting solutions for your applications",
      features: ["99.9% Uptime", "SSL Certificates", "Daily Backups", "24/7 Support"],
      price: "Starting from ₹2,000/month"
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: "Workspace Solutions",
      description: "Complete Google Workspace and Microsoft 365 setup and management",
      features: ["Email Setup", "File Sharing", "Video Conferencing", "Team Collaboration"],
      price: "Starting from ₹5,000"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Packaging Design",
      description: "Eye-catching packaging that makes your products stand out",
      features: ["Structural Design", "Visual Design", "Prototyping", "Production Support"],
      price: "Starting from ₹12,000"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Services",
      description: "Boost your online visibility and drive organic traffic",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Performance Tracking"],
      price: "Starting from ₹8,000/month"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional photography for products, events, and corporate needs",
      features: ["Product Photography", "Corporate Events", "Brand Photography", "Post-Processing"],
      price: "Starting from ₹5,000/shoot"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      description: "High-quality video content for marketing and brand storytelling",
      features: ["Commercial Videos", "Social Media Content", "Corporate Videos", "Animation"],
      price: "Starting from ₹15,000/video"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      rating: 5,
      text: "VaowLab transformed our online presence completely. Our website traffic increased by 300% within 3 months!"
    },
    {
      name: "Priya Sharma",
      company: "StyleHub Fashion",
      rating: 5,
      text: "The brand design they created for us is absolutely stunning. We've received so many compliments from customers!"
    },
    {
      name: "Amit Patel",
      company: "GrowthCorp",
      rating: 5,
      text: "Their digital marketing strategies helped us generate 5x more leads. Highly recommend their services!"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const form = e.currentTarget;
      const response = await fetch('https://formspree.io/f/mdkewagd', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('submitted');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                #1 Digital Agency in Bangalore
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Transform Your Business with 
                <span className="text-accent block">Digital Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From stunning websites to powerful marketing campaigns - we provide complete digital solutions that drive real business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#services" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center justify-center">
                  View Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center">
                  Get Free Quote
                </a>
              </div>
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+91 8318379651</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@vaowlab.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="text-center mb-6">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Why Choose VaowLab?</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-accent mr-3" />
                    5+ Years of Experience
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-accent mr-3" />
                    150+ Successful Projects
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-accent mr-3" />
                    98% Client Satisfaction Rate
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-accent mr-3" />
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-accent mr-3" />
                    Money-Back Guarantee
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed online - from design to development, marketing to management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-accent mb-6">{service.icon}</div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <p className="text-2xl font-display font-bold text-accent mb-4">
                    {service.price}
                  </p>
                  <a href="#contact" className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center justify-center">
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-accent">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Get a free consultation and quote for your project. We'll help you choose the right services for your business goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-accent/20 p-3 rounded-full mr-4 group-hover:bg-accent/30 transition-colors">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Call Us</p>
                    <p className="text-gray-300">+91 8318379651</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="bg-accent/20 p-3 rounded-full mr-4 group-hover:bg-accent/30 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-gray-300">info@vaowlab.com</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="bg-accent/20 p-3 rounded-full mr-4 group-hover:bg-accent/30 transition-colors">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Visit Us</p>
                    <p className="text-gray-300">Yelahanka, Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Special Offer!</h3>
                <p className="text-gray-300 mb-4">Get 20% off on your first project when you contact us this month!</p>
                <div className="flex items-center text-accent">
                  <Zap className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Limited Time Offer</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6">Get Your Free Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-300"
                    disabled={formStatus === 'submitting'}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-300"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-300"
                    disabled={formStatus === 'submitting'}
                  />
                  <select
                    name="service"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white"
                    disabled={formStatus === 'submitting'}
                  >
                    <option value="" className="text-gray-900">Select Service</option>
                    <option value="web-development" className="text-gray-900">Web Development</option>
                    <option value="brand-design" className="text-gray-900">Brand Design</option>
                    <option value="ui-ux-design" className="text-gray-900">UI/UX Design</option>
                    <option value="digital-marketing" className="text-gray-900">Digital Marketing</option>
                    <option value="social-media" className="text-gray-900">Social Media Management</option>
                    <option value="custom-crm" className="text-gray-900">Custom CRM</option>
                    <option value="cloud-hosting" className="text-gray-900">Cloud Hosting</option>
                    <option value="workspace" className="text-gray-900">Workspace Solutions</option>
                    <option value="packaging" className="text-gray-900">Packaging Design</option>
                    <option value="seo" className="text-gray-900">SEO Services</option>
                    <option value="photography" className="text-gray-900">Photography</option>
                    <option value="video-production" className="text-gray-900">Video Production</option>
                  </select>
                </div>

                <select
                  name="budget"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white"
                  disabled={formStatus === 'submitting'}
                >
                  <option value="" className="text-gray-900">Select Budget Range</option>
                  <option value="under-25k" className="text-gray-900">Under ₹25,000</option>
                  <option value="25k-50k" className="text-gray-900">₹25,000 - ₹50,000</option>
                  <option value="50k-1l" className="text-gray-900">₹50,000 - ₹1,00,000</option>
                  <option value="1l-3l" className="text-gray-900">₹1,00,000 - ₹3,00,000</option>
                  <option value="above-3l" className="text-gray-900">Above ₹3,00,000</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your project requirements *"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-300"
                  disabled={formStatus === 'submitting'}
                ></textarea>

                <button
                  type="submit"
                  className={`w-full bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center ${
                    formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent/90'
                  }`}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center">
                      Sending...
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="ml-2"
                      >
                        ⚬
                      </motion.span>
                    </span>
                  ) : formStatus === 'submitted' ? (
                    <span className="flex items-center">
                      Message Sent!
                      <Check className="ml-2 w-5 h-5" />
                    </span>
                  ) : formStatus === 'error' ? (
                    <span className="flex items-center">
                      Error Sending Message
                      <X className="ml-2 w-5 h-5" />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Get Free Quote Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </button>
              </form>

              <p className="text-gray-300 text-sm mt-4 text-center">
                We'll respond within 24 hours with a detailed quote
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Don't Wait - Your Competition Won't!
            </h2>
            <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
              Join 150+ successful businesses who chose VaowLab for their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918318379651" className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +91 8318379651
              </a>
              <a href="https://wa.me/918318379651" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AdsLanding;