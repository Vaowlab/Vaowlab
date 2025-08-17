import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera,
  Video,
  Image as ImageIcon,
  Lightbulb,
  Palette,
  Sparkles,
  ArrowRight,
  Edit3,
  Film,
  Aperture,
  Play,
  Layers,
  Zap
} from 'lucide-react';

function CreativeStudio() {
  const [activeCategory, setActiveCategory] = useState('photography');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const creativeCategories = [
    { id: 'photography', title: 'Photography', icon: <Camera className="w-5 h-5" /> },
    { id: 'videography', title: 'Videography', icon: <Video className="w-5 h-5" /> },
    { id: 'post-production', title: 'Post Production', icon: <Edit3 className="w-5 h-5" /> },
    { id: 'creative-direction', title: 'Creative Direction', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'portfolio', title: 'Portfolio', icon: <Layers className="w-5 h-5" /> }
  ];

  const creativeServices = {
    photography: {
      title: 'Photography Services',
      description: 'Professional photography services for products, architecture, and corporate events',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
      features: [
        {
          icon: <Aperture className="w-6 h-6" />,
          title: "Product Photography",
          description: "High-quality product shots for e-commerce and marketing"
        },
        {
          icon: <Camera className="w-6 h-6" />,
          title: "Corporate Photography",
          description: "Professional headshots and corporate event coverage"
        },
        {
          icon: <ImageIcon className="w-6 h-6" />,
          title: "Architectural Photography",
          description: "Stunning architectural and interior photography"
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Brand Photography",
          description: "Lifestyle and brand photography for marketing campaigns"
        }
      ],
      specialties: [
        "Commercial Photography",
        "Event Photography",
        "Portrait Photography",
        "Real Estate Photography",
        "Food Photography",
        "Fashion Photography"
      ],
      process: [
        { step: 1, title: 'Consultation', description: 'Understanding your vision and requirements' },
        { step: 2, title: 'Planning', description: 'Location scouting and shoot preparation' },
        { step: 3, title: 'Shooting', description: 'Professional photography session' },
        { step: 4, title: 'Delivery', description: 'Edited photos delivered in high resolution' }
      ]
    },
    videography: {
      title: 'Videography Services',
      description: 'High-quality video production for commercials, corporate videos, and social media',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      features: [
        {
          icon: <Film className="w-6 h-6" />,
          title: "Commercial Videos",
          description: "Engaging commercials and promotional videos"
        },
        {
          icon: <Play className="w-6 h-6" />,
          title: "Corporate Videos",
          description: "Professional corporate presentations and training videos"
        },
        {
          icon: <Video className="w-6 h-6" />,
          title: "Social Media Content",
          description: "Short-form content optimized for social platforms"
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Event Videography",
          description: "Complete event coverage and highlight reels"
        }
      ],
      specialties: [
        "Brand Films",
        "Product Videos",
        "Documentary Style",
        "Animation & Motion Graphics",
        "Live Streaming",
        "Drone Videography"
      ],
      process: [
        { step: 1, title: 'Pre-Production', description: 'Script development and storyboarding' },
        { step: 2, title: 'Production', description: 'Professional video shooting with high-end equipment' },
        { step: 3, title: 'Post-Production', description: 'Editing, color grading, and sound design' },
        { step: 4, title: 'Delivery', description: 'Final video in multiple formats for different platforms' }
      ]
    },
    'post-production': {
      title: 'Post Production',
      description: 'Expert photo and video editing, color grading, and visual effects',
      image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80',
      features: [
        {
          icon: <Edit3 className="w-6 h-6" />,
          title: "Photo Editing",
          description: "Professional photo retouching and enhancement"
        },
        {
          icon: <Film className="w-6 h-6" />,
          title: "Video Editing",
          description: "Complete video editing and post-production services"
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Color Grading",
          description: "Professional color correction and grading"
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Visual Effects",
          description: "Advanced VFX and motion graphics"
        }
      ],
      specialties: [
        "Adobe Creative Suite",
        "DaVinci Resolve",
        "After Effects",
        "Photoshop Mastery",
        "3D Rendering",
        "Audio Post-Production"
      ],
      process: [
        { step: 1, title: 'Asset Review', description: 'Analyzing raw footage and photos' },
        { step: 2, title: 'Editing', description: 'Professional editing and enhancement' },
        { step: 3, title: 'Review', description: 'Client feedback and revisions' },
        { step: 4, title: 'Final Delivery', description: 'Polished final assets in required formats' }
      ]
    },
    'creative-direction': {
      title: 'Creative Direction',
      description: 'Strategic creative planning and art direction for your projects',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      features: [
        {
          icon: <Lightbulb className="w-6 h-6" />,
          title: "Concept Development",
          description: "Creative ideation and concept development"
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Art Direction",
          description: "Visual storytelling and artistic guidance"
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Brand Strategy",
          description: "Creative strategy aligned with brand goals"
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Campaign Planning",
          description: "End-to-end creative campaign development"
        }
      ],
      specialties: [
        "Creative Strategy",
        "Visual Storytelling",
        "Brand Positioning",
        "Campaign Development",
        "Team Leadership",
        "Client Collaboration"
      ],
      process: [
        { step: 1, title: 'Discovery', description: 'Understanding brand goals and target audience' },
        { step: 2, title: 'Strategy', description: 'Developing creative strategy and direction' },
        { step: 3, title: 'Execution', description: 'Guiding creative execution across all touchpoints' },
        { step: 4, title: 'Optimization', description: 'Continuous refinement and improvement' }
      ]
    },
    portfolio: {
      title: 'Featured Portfolio',
      description: 'Showcasing our latest creative work and successful projects',
      items: [
        {
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
          category: "Photography",
          title: "Product Showcase",
          description: "High-end product photography for luxury brand"
        },
        {
          image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
          category: "Videography",
          title: "Brand Film",
          description: "Cinematic brand film for tech startup"
        },
        {
          image: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&w=800&q=80",
          category: "Photography",
          title: "Architectural Series",
          description: "Modern architecture photography collection"
        },
        {
          image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80",
          category: "Post Production",
          title: "Visual Effects",
          description: "Advanced VFX for commercial campaign"
        },
        {
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
          category: "Creative Direction",
          title: "Campaign Strategy",
          description: "Complete creative direction for fashion brand"
        },
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          category: "Photography",
          title: "Corporate Portraits",
          description: "Executive portrait series for Fortune 500 company"
        }
      ]
    }
  };

  const currentService = creativeServices[activeCategory as keyof typeof creativeServices];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Creative Navigation */}
      <section className={`py-16 bg-gray-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-4' : 'sticky top-24 z-40'
      }`}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {creativeCategories.map((category) => (
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

      {/* Creative Content */}
      <div className={isScrolled ? 'mt-20' : ''}>
        <AnimatePresence mode="wait">
          {currentService && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Service Hero */}
              {activeCategory !== 'portfolio' && (
                <section className="py-24">
                  <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                      <div>
                        <h2 className="text-5xl font-display font-bold text-primary mb-6">
                          {currentService.title}
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                          {currentService.description}
                        </p>
                        <a href="#contact" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center">
                          Get Started
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                      </div>
                      <div className="relative">
                        <img
                          src={currentService.image}
                          alt={currentService.title}
                          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Portfolio Grid */}
              {activeCategory === 'portfolio' && (
                <section className="py-24">
                  <div className="container-custom">
                    <div className="text-center mb-16">
                      <h2 className="text-5xl font-display font-bold text-primary mb-6">
                        Featured Portfolio
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Showcasing our latest creative work and successful projects
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {currentService.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
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
              )}

              {/* Features */}
              {activeCategory !== 'portfolio' && currentService.features && (
                <section className="py-24 bg-gray-50">
                  <div className="container-custom">
                    <h3 className="text-4xl font-display font-bold text-primary mb-16 text-center">
                      Our Expertise
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {currentService.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          <div className="text-accent mb-6">
                            {feature.icon}
                          </div>
                          <h4 className="text-xl font-semibold text-primary mb-4">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600">
                            {feature.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Specialties */}
              {activeCategory !== 'portfolio' && currentService.specialties && (
                <section className="py-24">
                  <div className="container-custom">
                    <h3 className="text-4xl font-display font-bold text-primary mb-16 text-center">
                      Specialties
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {currentService.specialties.map((specialty, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-lg font-semibold text-primary">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Process */}
              {activeCategory !== 'portfolio' && currentService.process && (
                <section className="py-24 bg-gray-50">
                  <div className="container-custom">
                    <h3 className="text-4xl font-display font-bold text-primary mb-16 text-center">
                      Our Process
                    </h3>
                    <div className="space-y-8">
                      {currentService.process.map((step, index) => (
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
            <Sparkles className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-5xl font-display font-bold text-white mb-8">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's bring your creative vision to life with our expert team and state-of-the-art equipment.
            </p>
            <a href="#contact" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CreativeStudio;