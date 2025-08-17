import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Palette,
  Share2,
  Megaphone,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Quote,
  Building2,
  Hammer,
  Home,
  Wand2,
  Sparkles,
  MonitorSmartphone,
  Users,
  Cloud,
  LayoutGrid,
  Search,
  Check,
  X,
  ChevronLeft,
  Star,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const carouselImages = [
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1920&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Creating powerful, scalable web applications that drive business growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
      link: "/services/web-development",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      title: "Brand Design",
      description: "Crafting unique and memorable brand identities that resonate",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80",
      features: ["Logo Design", "Brand Identity", "Visual Guidelines", "Marketing Materials"],
      link: "/services/brand-design",
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions that deliver results",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
      features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics"],
      link: "/services/digital-marketing",
      icon: <Megaphone className="w-8 h-8" />
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
      features: ["User Research", "Interface Design", "Prototyping", "Usability Testing"],
      link: "/services/ui-ux-design",
      icon: <MonitorSmartphone className="w-8 h-8" />
    },
    {
      title: "Custom CRM",
      description: "Tailored customer relationship management solutions",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      features: ["Contact Management", "Sales Pipeline", "Analytics", "Automation"],
      link: "/services/crm",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Cloud Hosting",
      description: "Secure and scalable cloud infrastructure solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      features: ["Cloud Migration", "Server Management", "Security", "Scalability"],
      link: "/services/hosting",
      icon: <Cloud className="w-8 h-8" />
    }
  ];

  const servicesPerSlide = 3;
  const totalServiceSlides = Math.ceil(services.length / servicesPerSlide);

  const nextServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev + 1) % totalServiceSlides);
  };

  const prevServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev - 1 + totalServiceSlides) % totalServiceSlides);
  };

  const getCurrentServices = () => {
    const startIndex = currentServiceSlide * servicesPerSlide;
    return services.slice(startIndex, startIndex + servicesPerSlide);
  };

  const portfolio = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      title: "TechStart Platform",
      category: "Web Development",
      description: "A comprehensive SaaS platform built with React and Node.js"
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      title: "InnovateX Branding",
      category: "Brand Design",
      description: "Complete brand identity for a tech startup"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      title: "StyleHub Campaign",
      category: "Digital Marketing",
      description: "Multi-channel marketing campaign that increased ROI by 300%"
    }
  ];

  const testimonials = [
    {
      quote: "VaowLab transformed our online presence completely. Their team's creativity and technical expertise are unmatched.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      quote: "Working with VaowLab was a game-changer for our brand. They delivered beyond our expectations.",
      author: "Rahul Mehta",
      role: "Marketing Director",
      company: "InnovateX",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      quote: "The team's attention to detail and creative solutions helped us stand out in a crowded market.",
      author: "Priya Sharma",
      role: "Founder",
      company: "StyleHub",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Industry Awards" },
    { number: "24/7", label: "Support" }
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 w-full pl-8 md:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Create
              <span className="block text-accent">Digital Excellence</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your premier creative agency in Bangalore for web development, brand design, and digital marketing solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a href="#contact" className="group bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 flex items-center">
                Let's Build Your Brand
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#work" className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center">
                <Play className="mr-2 w-5 h-5" />
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
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
      <section id="services" className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
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
                className="group"
              >
                <Link to={service.link} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                      <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-display font-bold text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
              Selected Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest projects and creative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-8 left-8 right-8">
                      <span className="text-accent text-sm font-semibold mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
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
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6">
              Client Feedback
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
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
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-accent text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Ready to transform your digital presence? Let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-accent/20 p-3 rounded-full mr-4 group-hover:bg-accent/30 transition-colors">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-white text-lg">+91 8318379651</span>
                </div>
                <div className="flex items-center group">
                  <div className="bg-accent/20 p-3 rounded-full mr-4 group-hover:bg-accent/30 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-white text-lg">info@vaowlab.com</span>
                </div>
                <div className="flex items-center group">
                  <div className="bg-accent/20 p-3 rounded-full mr-4 group-hover:bg-accent/30 transition-colors">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-white text-lg">Yelahanka, Bangalore, India</span>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-300"
                    disabled={formStatus === 'submitting'}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-300"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-300"
                  disabled={formStatus === 'submitting'}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-300"
                  disabled={formStatus === 'submitting'}
                ></textarea>
                
                <button
                  type="submit"
                  className={`w-full bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;