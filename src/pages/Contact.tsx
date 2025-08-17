import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Check,
  X,
  ArrowRight,
  MessageCircle,
  Globe,
  Users,
  Building2,
  Calendar,
  FileText,
  Headphones,
  Star
} from 'lucide-react';

function Contact() {
  const [activeCategory, setActiveCategory] = useState('contact-form');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactCategories = [
    { id: 'contact-form', title: 'Contact Form', icon: <Send className="w-5 h-5" /> },
    { id: 'contact-info', title: 'Contact Info', icon: <Phone className="w-5 h-5" /> },
    { id: 'services-inquiry', title: 'Services', icon: <Building2 className="w-5 h-5" /> },
    { id: 'support', title: 'Support', icon: <Headphones className="w-5 h-5" /> },
    { id: 'faq', title: 'FAQ', icon: <FileText className="w-5 h-5" /> }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 8318379651",
      link: "tel:+918318379651"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@vaowlab.com",
      link: "mailto:info@vaowlab.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Yelahanka, Bangalore, India",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  const services = [
    "Web Development",
    "Brand Design", 
    "Digital Marketing",
    "UI/UX Design",
    "Custom CRM",
    "Cloud Hosting",
    "Workspace Solutions",
    "SEO Services"
  ];

  const contactContent = {
    'contact-form': {
      title: 'Get In Touch',
      description: 'Ready to transform your digital presence? Let\'s discuss how we can help you achieve your goals.',
      features: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "Dedicated Team",
          description: "Work with our experienced professionals"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Global Standards",
          description: "International best practices and quality"
        },
        {
          icon: <Send className="w-6 h-6" />,
          title: "Quick Response",
          description: "24-hour response time guaranteed"
        },
        {
          icon: <Star className="w-6 h-6" />,
          title: "Premium Support",
          description: "Ongoing support and maintenance"
        }
      ]
    },
    'contact-info': {
      title: 'Contact Information',
      description: 'Multiple ways to reach us for your convenience',
      locations: [
        {
          title: "Head Office",
          address: "Yelahanka, Bangalore, India",
          phone: "+91 8318379651",
          email: "info@vaowlab.com",
          hours: "Mon - Fri: 9:00 AM - 6:00 PM"
        }
      ],
      socialMedia: [
        { platform: "LinkedIn", handle: "@vaowlab" },
        { platform: "Instagram", handle: "@vaowlab" },
        { platform: "Twitter", handle: "@vaowlab" },
        { platform: "Facebook", handle: "VaowLab" }
      ]
    },
    'services-inquiry': {
      title: 'Service Inquiries',
      description: 'Interested in our services? Let us know what you need',
      serviceCategories: [
        {
          title: "Development Services",
          services: ["Web Development", "Custom CRM", "Cloud Hosting", "Workspace Solutions"]
        },
        {
          title: "Design Services", 
          services: ["Brand Design", "UI/UX Design", "Packaging Design"]
        },
        {
          title: "Marketing Services",
          services: ["Digital Marketing", "Social Media", "SEO Services"]
        }
      ],
      process: [
        { step: 1, title: "Initial Consultation", description: "Free consultation to understand your needs" },
        { step: 2, title: "Proposal & Quote", description: "Detailed proposal with timeline and pricing" },
        { step: 3, title: "Project Kickoff", description: "Start your project with our expert team" },
        { step: 4, title: "Delivery & Support", description: "Project delivery with ongoing support" }
      ]
    },
    'support': {
      title: 'Customer Support',
      description: 'We\'re here to help with any questions or issues',
      supportTypes: [
        {
          icon: <Phone className="w-8 h-8" />,
          title: "Phone Support",
          description: "Direct phone support during business hours",
          availability: "Mon - Fri: 9:00 AM - 6:00 PM"
        },
        {
          icon: <Mail className="w-8 h-8" />,
          title: "Email Support", 
          description: "24/7 email support with quick response",
          availability: "24/7 - Response within 24 hours"
        },
        {
          icon: <MessageCircle className="w-8 h-8" />,
          title: "Live Chat",
          description: "Instant chat support for urgent queries",
          availability: "Mon - Fri: 9:00 AM - 6:00 PM"
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: "Scheduled Call",
          description: "Book a consultation call at your convenience",
          availability: "Available by appointment"
        }
      ]
    },
    'faq': {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about our services',
      faqs: [
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks. We provide detailed timelines during the proposal phase."
        },
        {
          question: "Do you provide ongoing support?",
          answer: "Yes, we offer comprehensive maintenance and support packages to keep your digital assets running smoothly. This includes updates, security monitoring, and technical support."
        },
        {
          question: "What's included in your web development service?",
          answer: "Our web development includes design, development, testing, deployment, and basic SEO optimization. We also provide training and documentation for content management."
        },
        {
          question: "Can you work with our existing brand guidelines?",
          answer: "Absolutely! We can work within your existing brand guidelines or help you develop new ones. Our team is experienced in maintaining brand consistency across all digital touchpoints."
        },
        {
          question: "What are your payment terms?",
          answer: "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments to suit your cash flow needs."
        },
        {
          question: "Do you offer hosting services?",
          answer: "Yes, we provide secure and scalable cloud hosting solutions. We can handle everything from domain setup to server management, ensuring your website runs smoothly 24/7."
        }
      ]
    }
  };

  const currentContent = contactContent[activeCategory as keyof typeof contactContent];

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
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      {/*<section className="py-24 bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <MessageCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's create something amazing together. We're here to help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Contact Navigation */}
      <section className={`py-16 bg-gray-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-4' : 'sticky top-24 z-40'
      }`}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {contactCategories.map((category) => (
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

      {/* Contact Content */}
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

                  {/* Contact Form Content */}
                  {activeCategory === 'contact-form' && (
                    <div className="grid lg:grid-cols-2 gap-16">
                      <div>
                        <h3 className="text-3xl font-display font-bold text-primary mb-8">Why Choose VaowLab?</h3>
                        <div className="space-y-6">
                          {currentContent.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="flex items-start space-x-4"
                            >
                              <div className="text-accent mt-1">{feature.icon}</div>
                              <div>
                                <h4 className="text-xl font-semibold text-primary mb-2">{feature.title}</h4>
                                <p className="text-gray-600">{feature.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-12">
                          <h4 className="text-xl font-semibold text-primary mb-6">Our Services</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {services.map((service, index) => (
                              <div key={index} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                                <span className="text-gray-600 text-sm">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-8 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                placeholder="Your full name"
                                disabled={formStatus === 'submitting'}
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                placeholder="your@email.com"
                                disabled={formStatus === 'submitting'}
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                placeholder="+91 98765 43210"
                                disabled={formStatus === 'submitting'}
                              />
                            </div>
                            <div>
                              <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                                Service Interested In
                              </label>
                              <select
                                id="service"
                                name="service"
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                disabled={formStatus === 'submitting'}
                              >
                                <option value="">Select a service</option>
                                {services.map((service, index) => (
                                  <option key={index} value={service}>{service}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-primary mb-2">
                              Project Budget
                            </label>
                            <select
                              id="budget"
                              name="budget"
                              className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                              disabled={formStatus === 'submitting'}
                            >
                              <option value="">Select budget range</option>
                              <option value="under-50k">Under ₹50,000</option>
                              <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                              <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                              <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                              <option value="above-5l">Above ₹5,00,000</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                              Project Details *
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={5}
                              required
                              className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                              placeholder="Tell us about your project, goals, and any specific requirements..."
                              disabled={formStatus === 'submitting'}
                            ></textarea>
                          </div>

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
                                Send Message
                                <ArrowRight className="ml-2 w-5 h-5" />
                              </span>
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  )}

                  {/* Contact Info Content */}
                  {activeCategory === 'contact-info' && (
                    <div className="space-y-16">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
                          >
                            <div className="text-accent mb-4 flex justify-center">
                              {info.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                            {info.link !== "#" ? (
                              <a 
                                href={info.link}
                                className="text-gray-600 hover:text-accent transition-colors"
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-gray-600">{info.details}</p>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-12">
                        <div>
                          <h3 className="text-3xl font-display font-bold text-primary mb-8">Office Location</h3>
                          {currentContent.locations.map((location, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                              <h4 className="text-xl font-semibold text-primary mb-4">{location.title}</h4>
                              <div className="space-y-3 text-gray-600">
                                <p className="flex items-center">
                                  <MapPin className="w-5 h-5 mr-3 text-accent" />
                                  {location.address}
                                </p>
                                <p className="flex items-center">
                                  <Phone className="w-5 h-5 mr-3 text-accent" />
                                  {location.phone}
                                </p>
                                <p className="flex items-center">
                                  <Mail className="w-5 h-5 mr-3 text-accent" />
                                  {location.email}
                                </p>
                                <p className="flex items-center">
                                  <Clock className="w-5 h-5 mr-3 text-accent" />
                                  {location.hours}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h3 className="text-3xl font-display font-bold text-primary mb-8">Follow Us</h3>
                          <div className="space-y-4">
                            {currentContent.socialMedia.map((social, index) => (
                              <div key={index} className="bg-gray-50 p-6 rounded-xl flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-primary">{social.platform}</h4>
                                  <p className="text-gray-600">{social.handle}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-accent" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Services Inquiry Content */}
                  {activeCategory === 'services-inquiry' && (
                    <div className="space-y-16">
                      <div className="grid md:grid-cols-3 gap-8">
                        {currentContent.serviceCategories.map((category, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl"
                          >
                            <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>
                            <ul className="space-y-3">
                              {category.services.map((service, i) => (
                                <li key={i} className="flex items-center text-gray-600">
                                  <Check className="w-4 h-4 text-accent mr-3" />
                                  {service}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>

                      <div>
                        <h3 className="text-3xl font-display font-bold text-primary mb-12 text-center">Our Process</h3>
                        <div className="space-y-8">
                          {currentContent.process.map((step, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="flex items-start space-x-6"
                            >
                              <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">
                                {step.step}
                              </div>
                              <div>
                                <h4 className="text-2xl font-semibold text-primary mb-4">{step.title}</h4>
                                <p className="text-gray-600 text-lg">{step.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Support Content */}
                  {activeCategory === 'support' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      {currentContent.supportTypes.map((support, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="text-accent mb-6">{support.icon}</div>
                          <h3 className="text-2xl font-semibold text-primary mb-4">{support.title}</h3>
                          <p className="text-gray-600 mb-4">{support.description}</p>
                          <p className="text-sm text-accent font-medium">{support.availability}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* FAQ Content */}
                  {activeCategory === 'faq' && (
                    <div className="max-w-4xl mx-auto space-y-6">
                      {currentContent.faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 p-8 rounded-2xl"
                        >
                          <h3 className="text-xl font-semibold text-primary mb-4">{faq.question}</h3>
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            <Star className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-5xl font-display font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who have transformed their digital presence with VaowLab.
            </p>
            <a 
              href="https://wa.me/918318379651" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center"
            >
              Chat on WhatsApp
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;