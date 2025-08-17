import React, { useState } from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Globe,
  Database,
  Smartphone,
  Gauge,
  Lock,
  Layers,
  Wand2,
  PenTool,
  Brush,
  Type,
  Video,
  Image as ImageIcon,
  Calendar,
  BarChart2,
  Target,
  MessageSquare,
  Shield,
  Server,
  Scale,
  Cpu,
  Box,
  Scissors,
  Truck,
  Recycle,
  Lightbulb,
  Eye,
  Workflow,
  Link as LinkIcon,
  Zap,
  UserCog,
  Mail,
  FileText,
  ArrowRight,
  Check,
  Camera,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

function Services() {
  const [activeService, setActiveService] = useState('web-development');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedPod, setExpandedPod] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <Code2 className="w-8 h-8" />,
      description: 'Creating powerful, scalable, and user-friendly web applications that drive business growth',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Globe className="w-6 h-6" />, title: 'Custom Web Applications', description: 'Tailored solutions built with modern frameworks and best practices' },
        { icon: <Smartphone className="w-6 h-6" />, title: 'Responsive Design', description: 'Mobile-first approach ensuring perfect display across all devices' },
        { icon: <Database className="w-6 h-6" />, title: 'Backend Development', description: 'Robust server-side solutions with scalable architecture' },
        { icon: <Code2 className="w-6 h-6" />, title: 'API Integration', description: 'Seamless integration with third-party services and APIs' },
        { icon: <Gauge className="w-6 h-6" />, title: 'Performance Optimization', description: 'Lightning-fast loading speeds and optimal user experience' },
        { icon: <Lock className="w-6 h-6" />, title: 'Security', description: 'Industry-standard security practices and data protection' }
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
      process: [
        { step: 1, title: 'Discovery & Planning', description: 'Understanding your business needs and planning the perfect solution' },
        { step: 2, title: 'Design & Development', description: 'Creating intuitive interfaces and robust backend systems' },
        { step: 3, title: 'Testing & QA', description: 'Rigorous testing to ensure quality and performance' },
        { step: 4, title: 'Deployment & Support', description: 'Smooth deployment and ongoing maintenance' }
      ]
    },
    {
      id: 'brand-design',
      title: 'Brand Design',
      icon: <Palette className="w-8 h-8" />,
      description: 'Crafting unique and memorable brand identities that resonate with your audience',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Layers className="w-6 h-6" />, title: 'Logo Design', description: 'Creating memorable and impactful brand identities' },
        { icon: <PenTool className="w-6 h-6" />, title: 'Brand Guidelines', description: 'Comprehensive style guides for consistent brand presence' },
        { icon: <Type className="w-6 h-6" />, title: 'Typography', description: 'Custom typography and font selection' },
        { icon: <Brush className="w-6 h-6" />, title: 'Visual Identity', description: 'Complete visual language for your brand' },
        { icon: <Video className="w-6 h-6" />, title: 'Motion Graphics', description: 'Engaging animations and visual storytelling' },
        { icon: <ImageIcon className="w-6 h-6" />, title: 'Brand Assets', description: 'Marketing materials and digital assets' }
      ],
      portfolio: [
        { title: 'TechStart Rebrand', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80' },
        { title: 'StyleHub Identity', image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80' },
        { title: 'InnovateX Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80' }
      ],
      process: [
        { step: 1, title: 'Research & Strategy', description: 'Understanding your brand values, target audience, and market position' },
        { step: 2, title: 'Concept Development', description: 'Creating initial concepts and exploring creative directions' },
        { step: 3, title: 'Refinement', description: 'Perfecting the chosen direction and creating brand assets' },
        { step: 4, title: 'Implementation', description: 'Delivering final assets and guidelines for brand consistency' }
      ]
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: <MonitorSmartphone className="w-8 h-8" />,
      description: 'Creating intuitive and engaging digital experiences that users love',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Users className="w-6 h-6" />, title: 'User Research', description: 'Understanding user behavior and needs' },
        { icon: <Workflow className="w-6 h-6" />, title: 'User Flow Design', description: 'Optimizing user journeys and interactions' },
        { icon: <Layers className="w-6 h-6" />, title: 'Interface Design', description: 'Creating beautiful and functional interfaces' },
        { icon: <Eye className="w-6 h-6" />, title: 'Usability Testing', description: 'Ensuring optimal user experience' },
        { icon: <Smartphone className="w-6 h-6" />, title: 'Responsive Design', description: 'Perfect display across all devices' },
        { icon: <Lightbulb className="w-6 h-6" />, title: 'Design Systems', description: 'Consistent and scalable design patterns' }
      ],
      portfolio: [
        { title: 'FinTech App Redesign', description: 'Modern banking experience', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80' },
        { title: 'E-commerce Platform', description: 'Seamless shopping journey', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80' },
        { title: 'Healthcare Dashboard', description: 'Intuitive patient management', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80' }
      ],
      process: [
        { step: 1, title: 'Discovery', description: 'Understanding user needs and business goals' },
        { step: 2, title: 'Design', description: 'Creating wireframes and visual designs' },
        { step: 3, title: 'Testing', description: 'User testing and feedback collection' },
        { step: 4, title: 'Implementation', description: 'Design handoff and development support' }
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: <Megaphone className="w-8 h-8" />,
      description: 'Driving growth through strategic digital marketing and compelling content creation',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Target className="w-6 h-6" />, title: 'Digital Strategy', description: 'Comprehensive digital marketing strategies' },
        { icon: <Camera className="w-6 h-6" />, title: 'Photography', description: 'Professional photography for your brand' },
        { icon: <Video className="w-6 h-6" />, title: 'Video Production', description: 'High-quality video content creation' },
        { icon: <Megaphone className="w-6 h-6" />, title: 'Digital Campaigns', description: 'Result-driven marketing campaigns' }
      ],
      expertise: [
        { title: 'Content Creation', items: ['Professional Photography', 'Video Production', 'Motion Graphics', 'Content Writing'] },
        { title: 'Digital Advertising', items: ['Google Ads', 'Social Media Ads', 'Display Advertising', 'Retargeting'] },
        { title: 'Analytics', items: ['Performance Tracking', 'ROI Analysis', 'Conversion Optimization', 'Regular Reporting'] }
      ],
      process: [
        { step: 1, title: 'Research & Analysis', description: 'Understanding your market and defining clear objectives' },
        { step: 2, title: 'Strategy Development', description: 'Creating a comprehensive marketing plan' },
        { step: 3, title: 'Implementation', description: 'Executing campaigns across chosen channels' },
        { step: 4, title: 'Optimization', description: 'Continuous monitoring and improvement' }
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      icon: <Share2 className="w-8 h-8" />,
      description: 'Building your brand\'s social presence with strategic content and community engagement',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Calendar className="w-6 h-6" />, title: 'Content Strategy', description: 'Strategic planning and content calendar development' },
        { icon: <Share2 className="w-6 h-6" />, title: 'Social Management', description: 'Daily management and engagement across platforms' },
        { icon: <BarChart2 className="w-6 h-6" />, title: 'Analytics & Reports', description: 'Detailed performance tracking and optimization' },
        { icon: <Users className="w-6 h-6" />, title: 'Community Building', description: 'Growing and engaging your social community' }
      ],
      platforms: [
        { name: 'Instagram', description: 'Visual storytelling' },
        { name: 'LinkedIn', description: 'Professional networking' },
        { name: 'Twitter', description: 'Real-time engagement' },
        { name: 'Facebook', description: 'Community building' }
      ],
      process: [
        { step: 1, title: 'Strategy Development', description: 'Creating a tailored social media strategy aligned with your goals' },
        { step: 2, title: 'Content Creation', description: 'Developing engaging content that resonates with your audience' },
        { step: 3, title: 'Community Management', description: 'Active engagement and community building' },
        { step: 4, title: 'Analysis & Optimization', description: 'Regular performance review and strategy refinement' }
      ]
    },
    {
      id: 'custom-crm',
      title: 'Custom CRM Solutions',
      icon: <Users className="w-8 h-8" />,
      description: 'Tailored customer relationship management systems designed for your unique business needs',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Database className="w-6 h-6" />, title: 'Contact Management', description: 'Centralized database for all your customer information' },
        { icon: <MessageSquare className="w-6 h-6" />, title: 'Communication Tools', description: 'Integrated email, chat, and notification systems' },
        { icon: <BarChart2 className="w-6 h-6" />, title: 'Sales Pipeline', description: 'Visual deal tracking and sales forecasting' },
        { icon: <BarChart2 className="w-6 h-6" />, title: 'Analytics & Reports', description: 'Comprehensive reporting and data visualization' },
        { icon: <Shield className="w-6 h-6" />, title: 'Security', description: 'Enterprise-grade data protection and privacy' },
        { icon: <UserCog className="w-6 h-6" />, title: 'Customization', description: 'Tailored workflows and automation' }
      ],
      benefits: [
        'Improved Customer Relationships',
        'Increased Sales Efficiency',
        'Better Team Collaboration',
        'Data-Driven Decision Making',
        'Automated Workflows',
        'Scalable Solution'
      ],
      process: [
        { step: 1, title: 'Requirements Analysis', description: 'Understanding your business processes and needs' },
        { step: 2, title: 'Custom Development', description: 'Building your tailored CRM solution' },
        { step: 3, title: 'Data Migration', description: 'Seamless transfer of your existing data' },
        { step: 4, title: 'Training & Support', description: 'Comprehensive training and ongoing support' }
      ]
    },
    {
      id: 'cloud-hosting',
      title: 'Cloud Hosting Solutions',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Secure, scalable, and reliable cloud hosting services for your business',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Server className="w-6 h-6" />, title: 'Dedicated Servers', description: 'High-performance servers with guaranteed resources' },
        { icon: <Shield className="w-6 h-6" />, title: 'Security', description: 'Advanced security measures and DDoS protection' },
        { icon: <Scale className="w-6 h-6" />, title: 'Auto-scaling', description: 'Dynamic resource allocation based on demand' },
        { icon: <Globe className="w-6 h-6" />, title: 'Global CDN', description: 'Fast content delivery worldwide' },
        { icon: <Lock className="w-6 h-6" />, title: 'SSL Certificates', description: 'Free SSL certificates for all domains' },
        { icon: <Cpu className="w-6 h-6" />, title: 'Resource Management', description: 'Advanced monitoring and optimization tools' }
      ],
      platforms: [
        'Amazon Web Services (AWS)',
        'Google Cloud Platform (GCP)',
        'Microsoft Azure',
        'DigitalOcean',
        'Cloudflare',
        'Custom Solutions'
      ],
      process: [
        { step: 1, title: 'Assessment', description: 'Evaluating your current infrastructure and needs' },
        { step: 2, title: 'Planning', description: 'Developing a comprehensive migration strategy' },
        { step: 3, title: 'Migration', description: 'Seamless transfer with minimal downtime' },
        { step: 4, title: 'Optimization', description: 'Fine-tuning for optimal performance' }
      ]
    },
    {
      id: 'workspace-solutions',
      title: 'Workspace Solutions',
      icon: <LayoutGrid className="w-8 h-8" />,
      description: 'Complete Google Workspace and Microsoft 365 setup and management',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Mail className="w-6 h-6" />, title: 'Email Solutions', description: 'Professional email with custom domain' },
        { icon: <Calendar className="w-6 h-6" />, title: 'Calendar Management', description: 'Shared calendars and scheduling tools' },
        { icon: <FileText className="w-6 h-6" />, title: 'Document Collaboration', description: 'Real-time document editing and sharing' },
        { icon: <Video className="w-6 h-6" />, title: 'Video Conferencing', description: 'HD video meetings and webinars' },
        { icon: <MessageSquare className="w-6 h-6" />, title: 'Team Chat', description: 'Instant messaging and team channels' },
        { icon: <Shield className="w-6 h-6" />, title: 'Security & Compliance', description: 'Enterprise-grade security features' }
      ],
      solutions: [
        { title: 'Google Workspace', features: ['Gmail', 'Google Drive', 'Google Meet', 'Google Docs'] },
        { title: 'Microsoft 365', features: ['Outlook', 'OneDrive', 'Teams', 'Office Apps'] }
      ],
      process: [
        { step: 1, title: 'Setup & Configuration', description: 'Initial workspace setup and domain configuration' },
        { step: 2, title: 'Data Migration', description: 'Seamless transfer of existing emails and files' },
        { step: 3, title: 'User Training', description: 'Comprehensive training for all team members' },
        { step: 4, title: 'Ongoing Support', description: 'Continuous technical support and maintenance' }
      ]
    },
    {
      id: 'packaging-design',
      title: 'Packaging Design',
      icon: <Package className="w-8 h-8" />,
      description: 'Creating innovative and sustainable packaging solutions that stand out on the shelf',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Box className="w-6 h-6" />, title: 'Structural Design', description: 'Innovative and functional packaging structures' },
        { icon: <PenTool className="w-6 h-6" />, title: 'Visual Design', description: 'Eye-catching graphics and branding' },
        { icon: <Palette className="w-6 h-6" />, title: 'Material Selection', description: 'Sustainable and durable materials' },
        { icon: <Scissors className="w-6 h-6" />, title: 'Prototyping', description: 'Physical mockups and testing' },
        { icon: <Truck className="w-6 h-6" />, title: 'Production Support', description: 'Manufacturing coordination' },
        { icon: <Recycle className="w-6 h-6" />, title: 'Eco-friendly Solutions', description: 'Sustainable packaging options' }
      ],
      portfolio: [
        { title: 'Premium Food Packaging', description: 'Luxury food brand packaging', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80' },
        { title: 'Cosmetics Collection', description: 'Sustainable beauty packaging', image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80' },
        { title: 'Tech Product Box', description: 'Modern electronics packaging', image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=1200&q=80' }
      ],
      process: [
        { step: 1, title: 'Research', description: 'Market analysis and requirements gathering' },
        { step: 2, title: 'Concept Development', description: 'Creating innovative design concepts' },
        { step: 3, title: 'Prototyping', description: 'Physical mockups and testing' },
        { step: 4, title: 'Production', description: 'Manufacturing coordination and quality control' }
      ]
    },
    {
      id: 'seo-services',
      title: 'SEO Services',
      icon: <Search className="w-8 h-8" />,
      description: 'Boost your online visibility and drive organic traffic to your website',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Search className="w-6 h-6" />, title: 'Keyword Research', description: 'Strategic keyword targeting and analysis' },
        { icon: <Globe className="w-6 h-6" />, title: 'On-Page SEO', description: 'Technical optimization for better rankings' },
        { icon: <LinkIcon className="w-6 h-6" />, title: 'Link Building', description: 'Quality backlink acquisition strategy' },
        { icon: <BarChart2 className="w-6 h-6" />, title: 'Performance Tracking', description: 'Detailed analytics and reporting' },
        { icon: <Target className="w-6 h-6" />, title: 'Local SEO', description: 'Optimizing for local search results' },
        { icon: <Zap className="w-6 h-6" />, title: 'Speed Optimization', description: 'Improving website performance' }
      ],
      benefits: [
        { title: 'Increased Visibility', description: 'Higher rankings in search results' },
        { title: 'More Traffic', description: 'Increased organic website visitors' },
        { title: 'Better ROI', description: 'Cost-effective marketing strategy' },
        { title: 'Brand Authority', description: 'Enhanced online presence' }
      ],
      process: [
        { step: 1, title: 'Audit', description: 'Comprehensive website and competitor analysis' },
        { step: 2, title: 'Strategy', description: 'Developing a customized SEO plan' },
        { step: 3, title: 'Implementation', description: 'Executing optimization techniques' },
        { step: 4, title: 'Monitoring', description: 'Tracking progress and making adjustments' }
      ]
    },
    {
      id: 'domain-search',
      title: 'Domain Registration',
      icon: <Globe className="w-8 h-8" />,
      description: 'Search and register the perfect domain name for your business',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      features: [
        { icon: <Users className="w-6 h-6" />, title: "User Data Collection", description: "Secure Google SSO with CSV data storage" },
        { icon: <Search className="w-6 h-6" />, title: "Domain Search", description: "Search across multiple extensions" },
        { icon: <Shield className="w-6 h-6" />, title: "Privacy Protection", description: "Free WHOIS privacy included" },
        { icon: <Zap className="w-6 h-6" />, title: "Instant Activation", description: "Domain ready to use immediately" },
        { icon: <Globe className="w-6 h-6" />, title: "Multiple Extensions", description: "Choose from .com, .net, .org, .in and more" },
        { icon: <Clock className="w-6 h-6" />, title: "24/7 Support", description: "Expert support whenever you need it" }
      ],
      benefits: [
        'Professional email addresses',
        'Enhanced brand credibility',
        'Better search engine visibility',
        'Complete ownership and control'
      ],
      process: [
        { step: 1, title: 'Search', description: 'Search for your desired domain name' },
        { step: 2, title: 'Select', description: 'Choose from available options' },
        { step: 3, title: 'Register', description: 'Complete the registration process' },
        { step: 4, title: 'Manage', description: 'Manage your domain through our dashboard' }
      ]
    }
  ];

  const serviceCategories = [
    { id: 'web-development', title: 'Web Development', icon: <Code2 className="w-5 h-5" /> },
    { id: 'brand-design', title: 'Brand Design', icon: <Palette className="w-5 h-5" /> },
    { id: 'ui-ux-design', title: 'UI/UX Design', icon: <MonitorSmartphone className="w-5 h-5" /> },
    { id: 'digital-marketing', title: 'Digital Marketing', icon: <Megaphone className="w-5 h-5" /> },
    { id: 'social-media', title: 'Social Media', icon: <Share2 className="w-5 h-5" /> },
    { id: 'custom-crm', title: 'Custom CRM', icon: <Users className="w-5 h-5" /> },
    { id: 'cloud-hosting', title: 'Cloud Hosting', icon: <Cloud className="w-5 h-5" /> },
    { id: 'workspace-solutions', title: 'Workspace Solutions', icon: <LayoutGrid className="w-5 h-5" /> },
    { id: 'packaging-design', title: 'Packaging Design', icon: <Package className="w-5 h-5" /> },
    { id: 'seo-services', title: 'SEO Services', icon: <Search className="w-5 h-5" /> },
    { id: 'domain-search', title: 'Domain Registration', icon: <Globe className="w-5 h-5" /> }
  ];

  const currentService = services.find(service => service.id === activeService);

  const handlePodClick = (serviceId: string) => {
    if (expandedPod === serviceId) {
      setExpandedPod(null);
    } else {
      setExpandedPod(serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      {/* Mobile Pods View */}
      {isMobile ? (
        <section className="py-16">
          <div className="container-custom">
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Pod Header */}
                  <div
                    onClick={() => handlePodClick(service.id)}
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-accent">{service.icon}</div>
                        <div>
                          <h3 className="text-xl font-display font-bold text-primary">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {service.description.substring(0, 60)}...
                          </p>
                        </div>
                      </div>
                      <div className="text-accent">
                        {expandedPod === service.id ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedPod === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                      >
                        <div className="p-6 space-y-6">
                          {/* Service Image */}
                          <div className="relative h-48 rounded-xl overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                          </div>

                          {/* Full Description */}
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Key Features */}
                          <div>
                            <h4 className="text-lg font-semibold text-primary mb-4">Key Features</h4>
                            <div className="grid grid-cols-1 gap-3">
                              {service.features.slice(0, 4).map((feature, i) => (
                                <div key={i} className="flex items-start space-x-3">
                                  <div className="text-accent mt-1">{feature.icon}</div>
                                  <div>
                                    <h5 className="font-medium text-primary">{feature.title}</h5>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies or Benefits */}
                          {service.technologies && (
                            <div>
                              <h4 className="text-lg font-semibold text-primary mb-4">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, i) => (
                                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {service.benefits && (
                            <div>
                              <h4 className="text-lg font-semibold text-primary mb-4">Benefits</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {service.benefits.map((benefit, i) => (
                                  <div key={i} className="flex items-center">
                                    <Check className="w-4 h-4 text-accent mr-2" />
                                    <span className="text-gray-600 text-sm">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* CTA Button */}
                          <div className="pt-4">
                            <a href="#contact" className="btn-primary">
                              Get Started
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Desktop Service Navigation */}
          <section className={`py-16 bg-gray-50 transition-all duration-300 ${
            isScrolled ? 'fixed top-0 left-0 right-0 z-50 py-4' : 'sticky top-24 z-40'
          }`}>
            <div className="container-custom">
              <div className="overflow-x-auto overflow-y-hidden">
                <div className="flex justify-start gap-4 pb-2 min-w-max px-4" style={{ width: 'max-content' }}>
                  {serviceCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveService(category.id)}
                      className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                        activeService === category.id
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
            </div>
          </section>

          {/* Desktop Service Content */}
          <div className={isScrolled ? 'mt-20' : ''}>
            <AnimatePresence mode="wait">
              {currentService && (
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Service Hero */}
                  <section className="py-24">
                    <div className="container-custom">
                      <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                          <div className="flex items-center mb-6">
                            <div className="text-accent mr-4">
                              {currentService.icon}
                            </div>
                            <h2 className="text-5xl font-display font-bold text-primary">
                              {currentService.title}
                            </h2>
                          </div>
                          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {currentService.description}
                          </p>
                          <a href="#contact" className="btn-primary">
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

                  {/* Features */}
                  <section className="py-24 bg-gray-50">
                    <div className="container-custom">
                      <h3 className="text-4xl font-display font-bold text-primary mb-16 text-center">
                        Key Features
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  {/* Additional Content Based on Service Type */}
                  {currentService.technologies && (
                    <section className="py-24">
                      <div className="container-custom">
                        <h3 className="text-4xl font-display font-bold text-primary mb-16 text-center">
                          Technologies We Use
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          {currentService.technologies.map((tech, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors"
                            >
                              <span className="text-lg font-semibold text-primary">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Process */}
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}

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
            <h2 className="text-5xl font-display font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals with our comprehensive services
            </p>
            <a href="#contact" className="btn-primary">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;