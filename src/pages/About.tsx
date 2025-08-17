import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award,
  Heart,
  Sparkles,
  Globe,
  Clock,
  Building2,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

function About() {
  const [activeCategory, setActiveCategory] = useState('our-story');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutCategories = [
    { id: 'our-story', title: 'Our Story', icon: <Building2 className="w-5 h-5" /> },
    { id: 'our-values', title: 'Our Values', icon: <Heart className="w-5 h-5" /> },
    { id: 'our-team', title: 'Our Team', icon: <Users className="w-5 h-5" /> },
    { id: 'achievements', title: 'Achievements', icon: <Award className="w-5 h-5" /> },
    { id: 'culture', title: 'Culture', icon: <Sparkles className="w-5 h-5" /> }
  ];

  const stats = [
    {
      number: "150+",
      label: "Projects Completed"
    },
    {
      number: "50+",
      label: "Happy Clients"
    },
    {
      number: "10+",
      label: "Industry Awards"
    },
    {
      number: "24/7",
      label: "Support"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We're passionate about creating exceptional digital experiences that drive results"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, paying attention to the smallest details"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace new technologies and innovative solutions to solve complex challenges"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in working closely with our clients to achieve their goals"
    }
  ];

  const team = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
      name: "Rahul Mehta",
      role: "Founder & CEO",
      quote: "Building digital excellence through innovation and creativity"
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80",
      name: "Priya Sharma",
      role: "Creative Director",
      quote: "Crafting memorable brand experiences that resonate"
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
      name: "Arun Kumar",
      role: "Technical Lead",
      quote: "Pushing the boundaries of what's possible in web development"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Best Digital Agency 2024",
      description: "Recognized for outstanding digital innovation",
      year: "2024"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Top Web Development Company",
      description: "Listed among top development companies in Bangalore",
      year: "2023"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Client Satisfaction Award",
      description: "98% client satisfaction rate across all projects",
      year: "2023"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Recognition",
      description: "Featured in global design and development showcases",
      year: "2022"
    }
  ];

  const cultureHighlights = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new technologies",
      features: ["Regular innovation sessions", "Latest technology adoption", "Creative freedom"]
    },
    {
      title: "Work-Life Balance",
      description: "Maintaining healthy balance for optimal productivity",
      features: ["Flexible working hours", "Remote work options", "Wellness programs"]
    },
    {
      title: "Continuous Learning",
      description: "Investing in our team's growth and development",
      features: ["Training programs", "Conference attendance", "Skill development"]
    },
    {
      title: "Team Collaboration",
      description: "Building strong relationships and effective teamwork",
      features: ["Team building activities", "Open communication", "Collaborative projects"]
    }
  ];

  const aboutContent = {
    'our-story': {
      title: 'Our Story',
      description: 'The journey of VaowLab from vision to reality',
      content: {
        story: {
          title: "From Vision to Reality",
          description: "Founded in 2020, VaowLab emerged from a vision to bridge the gap between technical excellence and creative innovation. We saw a need for a different kind of digital agency—one that could deliver both cutting-edge technology and stunning design.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
          highlights: [
            "Founded with a vision for digital excellence",
            "Bridging technology and creative innovation",
            "Serving clients across India and beyond",
            "Growing team of passionate professionals"
          ]
        },
        mission: {
          title: "Our Mission",
          description: "To empower businesses with exceptional digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.",
          vision: "To be the leading creative technology partner for ambitious brands ready to make their mark in the digital world."
        }
      }
    },
    'our-values': {
      title: 'Our Values',
      description: 'The principles that guide everything we do',
      values: values
    },
    'our-team': {
      title: 'Meet Our Team',
      description: 'The talented individuals behind VaowLab',
      team: team,
      teamCulture: {
        title: "Our Team Culture",
        description: "We foster a culture of creativity, collaboration, and continuous learning. Our team thrives in an environment where innovation is encouraged and excellence is celebrated.",
        benefits: [
          "Collaborative work environment",
          "Professional development opportunities",
          "Creative freedom and autonomy",
          "Competitive compensation",
          "Health and wellness benefits",
          "Flexible working arrangements"
        ]
      }
    },
    'achievements': {
      title: 'Our Achievements',
      description: 'Recognition and milestones that define our journey',
      achievements: achievements,
      milestones: [
        { year: "2020", event: "VaowLab founded in Bangalore" },
        { year: "2021", event: "Completed 50+ successful projects" },
        { year: "2022", event: "Expanded team to 15+ professionals" },
        { year: "2023", event: "Achieved 98% client satisfaction rate" },
        { year: "2024", event: "Recognized as Best Digital Agency" }
      ]
    },
    'culture': {
      title: 'Our Culture',
      description: 'Creating an environment where creativity and innovation thrive',
      highlights: cultureHighlights,
      workEnvironment: {
        title: "Work Environment",
        description: "At VaowLab, we believe that the best results come from a happy team. That's why we invest in our people, providing opportunities for growth and maintaining a healthy work-life balance.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
      }
    }
  };

  const currentContent = aboutContent[activeCategory as keyof typeof aboutContent];

  const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Building2 className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
              About VaowLab
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Crafting digital excellence through innovation, creativity, and unwavering commitment to our clients' success
            </p>
          </motion.div>
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

      {/* About Navigation */}
      <section className={`py-16 bg-gray-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-4' : 'sticky top-24 z-40'
      }`}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {aboutCategories.map((category) => (
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

      {/* About Content */}
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

                  {/* Our Story Content */}
                  {activeCategory === 'our-story' && (
                    <div className="space-y-16">
                      <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeInSection>
                          <div>
                            <h3 className="text-3xl font-display font-bold text-primary mb-6">
                              {currentContent.content.story.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                              {currentContent.content.story.description}
                            </p>
                            <ul className="space-y-3">
                              {currentContent.content.story.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </FadeInSection>
                        
                        <FadeInSection>
                          <div className="relative">
                            <img
                              src={currentContent.content.story.image}
                              alt="Our Story"
                              className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-2xl">
                              <Globe className="w-12 h-12 text-primary mb-4" />
                              <p className="text-2xl font-display font-bold text-primary">
                                5+ Years of Excellence
                              </p>
                            </div>
                          </div>
                        </FadeInSection>
                      </div>

                      <div className="grid md:grid-cols-2 gap-12">
                        <FadeInSection>
                          <div className="bg-gray-50 p-8 rounded-2xl">
                            <h4 className="text-2xl font-display font-bold text-primary mb-4">Our Mission</h4>
                            <p className="text-gray-600 leading-relaxed">
                              {currentContent.content.mission.description}
                            </p>
                          </div>
                        </FadeInSection>
                        <FadeInSection>
                          <div className="bg-gray-50 p-8 rounded-2xl">
                            <h4 className="text-2xl font-display font-bold text-primary mb-4">Our Vision</h4>
                            <p className="text-gray-600 leading-relaxed">
                              {currentContent.content.mission.vision}
                            </p>
                          </div>
                        </FadeInSection>
                      </div>
                    </div>
                  )}

                  {/* Our Values Content */}
                  {activeCategory === 'our-values' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {currentContent.values.map((value, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="text-accent mb-6">{value.icon}</div>
                          <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                          <p className="text-gray-600">{value.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Our Team Content */}
                  {activeCategory === 'our-team' && (
                    <div className="space-y-16">
                      <div className="grid md:grid-cols-3 gap-8">
                        {currentContent.team.map((member, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                          >
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-64 object-cover"
                            />
                            <div className="p-8">
                              <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                              <p className="text-accent mb-4">{member.role}</p>
                              <p className="text-gray-600 italic">"{member.quote}"</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeInSection>
                          <div>
                            <h3 className="text-3xl font-display font-bold text-primary mb-6">
                              {currentContent.teamCulture.title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                              {currentContent.teamCulture.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                              {currentContent.teamCulture.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                  <span className="text-gray-600 text-sm">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </FadeInSection>
                        <FadeInSection>
                          <div className="bg-gray-50 p-8 rounded-2xl">
                            <Users className="w-12 h-12 text-accent mb-6" />
                            <h4 className="text-2xl font-display font-bold text-primary mb-4">Join Our Team</h4>
                            <p className="text-gray-600 mb-6">
                              We're always looking for talented individuals who share our passion for digital excellence.
                            </p>
                            <a href="#contact" className="bg-accent text-primary px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors inline-flex items-center">
                              View Opportunities
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                          </div>
                        </FadeInSection>
                      </div>
                    </div>
                  )}

                  {/* Achievements Content */}
                  {activeCategory === 'achievements' && (
                    <div className="space-y-16">
                      <div className="grid md:grid-cols-2 gap-8">
                        {currentContent.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="text-accent">{achievement.icon}</div>
                              <div>
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-xl font-semibold text-primary">{achievement.title}</h3>
                                  <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                                    {achievement.year}
                                  </span>
                                </div>
                                <p className="text-gray-600">{achievement.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div>
                        <h3 className="text-3xl font-display font-bold text-primary mb-12 text-center">Our Journey</h3>
                        <div className="space-y-6">
                          {currentContent.milestones.map((milestone, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="flex items-center space-x-6 bg-gray-50 p-6 rounded-xl"
                            >
                              <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center font-display font-bold">
                                {milestone.year}
                              </div>
                              <p className="text-lg text-gray-600">{milestone.event}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Culture Content */}
                  {activeCategory === 'culture' && (
                    <div className="space-y-16">
                      <div className="grid md:grid-cols-2 gap-8">
                        {currentContent.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                          >
                            <h3 className="text-2xl font-semibold text-primary mb-4">{highlight.title}</h3>
                            <p className="text-gray-600 mb-6">{highlight.description}</p>
                            <ul className="space-y-2">
                              {highlight.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>

                      <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeInSection>
                          <div className="relative">
                            <img
                              src={currentContent.workEnvironment.image}
                              alt="Work Environment"
                              className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -top-8 -right-8 bg-accent p-8 rounded-2xl">
                              <Sparkles className="w-12 h-12 text-primary mb-4" />
                              <p className="text-2xl font-display font-bold text-primary">
                                Creative Culture
                              </p>
                            </div>
                          </div>
                        </FadeInSection>

                        <FadeInSection>
                          <div>
                            <h3 className="text-3xl font-display font-bold text-primary mb-6">
                              {currentContent.workEnvironment.title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                              {currentContent.workEnvironment.description}
                            </p>
                          </div>
                        </FadeInSection>
                      </div>
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
          <FadeInSection>
            <div className="text-center">
              <Award className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-5xl font-display font-bold text-white mb-8">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Let's create something amazing together. Our team is ready to help you achieve your digital goals.
              </p>
              <a href="#contact" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

export default About;