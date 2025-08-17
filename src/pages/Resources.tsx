import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Lightbulb, 
  Download, 
  TrendingUp, 
  ArrowRight,
  Newspaper,
  Bookmark,
  Rocket,
  Target,
  Clock,
  Tag,
  Calendar,
  Users,
  BarChart2,
  Award,
  Check,
  ExternalLink
} from 'lucide-react';

function Resources() {
  const [activeCategory, setActiveCategory] = useState('guides');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resourceCategories = [
    { id: 'guides', title: 'Guides', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'case-studies', title: 'Case Studies', icon: <BarChart2 className="w-5 h-5" /> },
    { id: 'articles', title: 'Articles', icon: <FileText className="w-5 h-5" /> },
    { id: 'downloads', title: 'Downloads', icon: <Download className="w-5 h-5" /> },
    { id: 'newsletter', title: 'Newsletter', icon: <Newspaper className="w-5 h-5" /> }
  ];

  const resources = {
    guides: {
      title: 'Featured Guides',
      description: 'Comprehensive guides to help you succeed in the digital world',
      items: [
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: "Digital Marketing Guide 2025",
          description: "Comprehensive guide to modern digital marketing strategies",
          category: "Marketing",
          readTime: "15 min read",
          slug: "digital-marketing-guide-2025",
          features: [
            "AI-Driven Marketing Automation",
            "Voice Search Optimization", 
            "Augmented Reality Advertising",
            "Privacy-First Marketing"
          ]
        },
        {
          icon: <Target className="w-8 h-8" />,
          title: "SEO Best Practices",
          description: "Latest SEO techniques and optimization strategies",
          category: "SEO",
          readTime: "12 min read",
          slug: "seo-best-practices",
          features: [
            "Technical SEO Optimization",
            "Content Strategy",
            "Link Building Techniques",
            "Performance Tracking"
          ]
        },
        {
          icon: <Rocket className="w-8 h-8" />,
          title: "Website Launch Checklist",
          description: "Essential steps for a successful website launch",
          category: "Web Development",
          readTime: "10 min read",
          slug: "website-launch-checklist",
          features: [
            "Pre-Launch Preparation",
            "Technical Requirements",
            "Content Review",
            "Post-Launch Tasks"
          ]
        }
      ]
    },
    'case-studies': {
      title: 'Case Studies',
      description: 'Real-world examples of successful projects and their results',
      items: [
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          title: "E-commerce Platform Redesign",
          description: "How we increased conversions by 150%",
          category: "UX Design",
          slug: "ecommerce-platform-redesign",
          results: [
            "150% increase in conversion rate",
            "45% reduction in cart abandonment",
            "60% increase in average order value"
          ],
          challenge: "An e-commerce platform struggling with low conversion rates and high cart abandonment.",
          solution: "Complete UX redesign focusing on streamlined checkout and improved product discovery."
        },
        {
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
          title: "B2B Marketing Campaign",
          description: "Generating 2x more qualified leads",
          category: "Marketing",
          slug: "b2b-marketing-campaign",
          results: [
            "2x increase in qualified leads",
            "35% higher engagement rate",
            "40% reduction in cost per acquisition"
          ],
          challenge: "B2B software company seeking to increase qualified leads and market presence.",
          solution: "Integrated marketing campaign combining content marketing, social media, and targeted advertising."
        },
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          title: "Brand Identity Evolution",
          description: "Transforming a legacy brand for digital age",
          category: "Branding",
          slug: "brand-identity-evolution",
          results: [
            "45% increase in brand recognition",
            "30% improvement in customer perception",
            "25% growth in social media following"
          ],
          challenge: "Traditional company needing to modernize their brand for digital platforms.",
          solution: "Complete brand refresh maintaining core values while embracing modern design principles."
        }
      ]
    },
    articles: {
      title: 'Latest Articles',
      description: 'Stay updated with the latest trends and insights',
      items: [
        {
          title: "The Future of Web Design",
          description: "Exploring upcoming trends and technologies",
          date: "Mar 15, 2025",
          readTime: "8 min read",
          slug: "future-of-web-design",
          author: "VaowLab Team",
          tags: ["Web Design", "Trends", "Technology"]
        },
        {
          title: "Maximizing ROI in Digital Marketing",
          description: "Strategies for better marketing returns",
          date: "Mar 12, 2025",
          readTime: "10 min read",
          slug: "maximizing-roi-digital-marketing",
          author: "VaowLab Team",
          tags: ["Marketing", "ROI", "Strategy"]
        },
        {
          title: "Building Scalable Web Applications",
          description: "Best practices for scalable architecture",
          date: "Mar 10, 2025",
          readTime: "12 min read",
          slug: "building-scalable-web-applications",
          author: "VaowLab Team",
          tags: ["Development", "Architecture", "Scalability"]
        }
      ]
    },
    downloads: {
      title: 'Free Resources',
      description: 'Download our free tools and templates to boost your business',
      items: [
        {
          title: "Social Media Calendar Template",
          description: "Plan your content strategy effectively",
          format: "Excel",
          size: "2.4 MB",
          fileUrl: "/downloads/social-media-calendar-template.xlsx",
          features: [
            "Monthly planning templates",
            "Content categorization",
            "Performance tracking",
            "Team collaboration tools"
          ]
        },
        {
          title: "Website Project Planner",
          description: "Comprehensive website planning toolkit",
          format: "PDF",
          size: "1.8 MB",
          fileUrl: "/downloads/website-project-planner.pdf",
          features: [
            "Project timeline templates",
            "Requirements checklist",
            "Budget planning tools",
            "Team communication guides"
          ]
        },
        {
          title: "Brand Guidelines Template",
          description: "Create consistent brand documentation",
          format: "PDF",
          size: "3.2 MB",
          fileUrl: "/downloads/brand-guidelines-template.pdf",
          features: [
            "Logo usage guidelines",
            "Color palette templates",
            "Typography standards",
            "Brand voice documentation"
          ]
        }
      ]
    },
    newsletter: {
      title: 'Stay Updated',
      description: 'Subscribe to our newsletter for the latest industry insights',
      benefits: [
        "Weekly industry insights and trends",
        "Exclusive tips and strategies",
        "Early access to new resources",
        "Case study deep-dives",
        "Tool recommendations",
        "No spam, unsubscribe anytime"
      ]
    }
  };

  const currentResource = resources[activeCategory as keyof typeof resources];

  const handleDownload = (fileUrl: string) => {
    alert('Download started for: ' + fileUrl);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
     {/* <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent/20">
         {/* <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
              Resources
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of guides, case studies, and tools to help you succeed in the digital world
            </p>
          </motion.div>
        </div>
      </section>*/}

      {/* Resource Navigation */}
      <section className={`py-16 bg-gray-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-4' : 'sticky top-0 z-40'
      }`}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {resourceCategories.map((category) => (
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

      {/* Resource Content */}
      <div className={isScrolled ? 'mt-20' : ''}>
        <AnimatePresence mode="wait">
          {currentResource && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Resource Hero */}
              <section className="py-24">
                <div className="container-custom">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl font-display font-bold text-primary mb-6">
                      {currentResource.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      {currentResource.description}
                    </p>
                  </div>

                  {/* Guides Content */}
                  {activeCategory === 'guides' && (
                    <div className="grid md:grid-cols-3 gap-8">
                      {currentResource.items.map((guide: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                          <div className="p-8">
                            <div className="text-accent mb-6">{guide.icon}</div>
                            <div className="flex items-center space-x-4 mb-4">
                              <span className="text-sm text-accent">{guide.category}</span>
                              <span className="text-sm text-gray-500">{guide.readTime}</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-primary mb-4">
                              {guide.title}
                            </h3>
                            <p className="text-gray-600 mb-6">{guide.description}</p>
                            <ul className="space-y-2 mb-6">
                              {guide.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-center text-gray-600">
                                  <Check className="w-4 h-4 text-accent mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Link 
                              to={`/resources/guides/${guide.slug}`} 
                              className="text-accent hover:text-accent/80 transition-colors inline-flex items-center font-medium"
                            >
                              Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Case Studies Content */}
                  {activeCategory === 'case-studies' && (
                    <div className="grid md:grid-cols-3 gap-8">
                      {currentResource.items.map((study: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                          <Link to={`/resources/case-studies/${study.slug}`}>
                            <div className="relative h-64 overflow-hidden">
                              <img
                                src={study.image}
                                alt={study.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                              <div className="absolute top-6 left-6">
                                <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                                  {study.category}
                                </span>
                              </div>
                            </div>
                            <div className="p-8">
                              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                                {study.title}
                              </h3>
                              <p className="text-gray-600 mb-6">{study.description}</p>
                              <div className="space-y-2">
                                {study.results.slice(0, 2).map((result: string, i: number) => (
                                  <div key={i} className="flex items-center text-gray-600">
                                    <BarChart2 className="w-4 h-4 text-accent mr-2" />
                                    {result}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Articles Content */}
                  {activeCategory === 'articles' && (
                    <div className="space-y-8">
                      {currentResource.items.map((article: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-4 mb-4">
                                <span className="text-sm text-accent">{article.date}</span>
                                <span className="text-sm text-gray-500">{article.readTime}</span>
                                <span className="text-sm text-gray-500">by {article.author}</span>
                              </div>
                              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                                {article.title}
                              </h3>
                              <p className="text-gray-600 mb-4">{article.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag: string, i: number) => (
                                  <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <Link 
                              to={`/resources/articles/${article.slug}`}
                              className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors ml-6"
                            >
                              <ArrowRight className="w-6 h-6 text-accent" />
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Downloads Content */}
                  {activeCategory === 'downloads' && (
                    <div className="grid md:grid-cols-3 gap-8">
                      {currentResource.items.map((download: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          <Download className="w-12 h-12 text-accent mb-6" />
                          <h3 className="text-2xl font-display font-bold text-primary mb-4">
                            {download.title}
                          </h3>
                          <p className="text-gray-600 mb-6">{download.description}</p>
                          <ul className="space-y-2 mb-6">
                            {download.features.map((feature: string, i: number) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <Check className="w-4 h-4 text-accent mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-500">{download.format} • {download.size}</span>
                          </div>
                          <button 
                            onClick={() => handleDownload(download.fileUrl)}
                            className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center justify-center"
                          >
                            <Download className="w-5 h-5 mr-2" />
                            Download Now
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Newsletter Content */}
                  {activeCategory === 'newsletter' && (
                    <div className="max-w-4xl mx-auto">
                      <div className="bg-white p-12 rounded-2xl shadow-lg">
                        <div className="text-center mb-12">
                          <Newspaper className="w-16 h-16 text-accent mx-auto mb-6" />
                          <h3 className="text-3xl font-display font-bold text-primary mb-6">
                            Join Our Newsletter
                          </h3>
                          <p className="text-xl text-gray-600">
                            Get the latest insights, tips, and resources delivered to your inbox
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                          <div>
                            <h4 className="text-xl font-semibold text-primary mb-6">What you'll get:</h4>
                            <ul className="space-y-4">
                              {currentResource.benefits.map((benefit: string, index: number) => (
                                <li key={index} className="flex items-center text-gray-600">
                                  <Check className="w-5 h-5 text-accent mr-3" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gray-50 p-8 rounded-xl">
                            <form className="space-y-6">
                              <div>
                                <input
                                  type="text"
                                  placeholder="Your Name"
                                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                />
                              </div>
                              <div>
                                <input
                                  type="email"
                                  placeholder="Your Email"
                                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                />
                              </div>
                              <div>
                                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
                                  <option value="">Select your interest</option>
                                  <option value="web-development">Web Development</option>
                                  <option value="digital-marketing">Digital Marketing</option>
                                  <option value="brand-design">Brand Design</option>
                                  <option value="all">All Topics</option>
                                </select>
                              </div>
                              <button
                                type="submit"
                                className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center justify-center"
                              >
                                Subscribe Now
                                <ArrowRight className="w-5 h-5 ml-2" />
                              </button>
                            </form>
                          </div>
                        </div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Award className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-5xl font-display font-bold text-white mb-8">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to help you achieve your digital goals.
            </p>
            <Link to="/contact" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors inline-flex items-center">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Resources;