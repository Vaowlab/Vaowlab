import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, Tag } from 'lucide-react';

function ResourceGuide() {
  const { slug } = useParams();

  const guides = {
    'digital-marketing-guide-2025': {
      title: "Digital Marketing Guide 2025",
      category: "Marketing",
      readTime: "15 min read",
      content: `
        <h2>Introduction to Digital Marketing in 2025</h2>
        <p>The digital marketing landscape continues to evolve at a rapid pace. This comprehensive guide explores the latest trends, strategies, and best practices for successful digital marketing in 2025.</p>

        <h2>Key Trends</h2>
        <ul>
          <li>AI-Driven Marketing Automation</li>
          <li>Voice Search Optimization</li>
          <li>Augmented Reality Advertising</li>
          <li>Privacy-First Marketing</li>
        </ul>

        <h2>Strategy Development</h2>
        <p>Learn how to create and implement effective digital marketing strategies that drive results in today's competitive landscape.</p>

        <h2>Implementation Guide</h2>
        <p>Step-by-step instructions for implementing various digital marketing tactics and measuring their success.</p>
      `
    },
    'seo-best-practices': {
      title: "SEO Best Practices",
      category: "SEO",
      readTime: "12 min read",
      content: `
        <h2>Modern SEO Techniques</h2>
        <p>Discover the latest SEO strategies that help websites rank higher in search engine results pages.</p>

        <h2>Technical SEO</h2>
        <ul>
          <li>Site Structure Optimization</li>
          <li>Mobile-First Indexing</li>
          <li>Core Web Vitals</li>
          <li>Schema Markup</li>
        </ul>

        <h2>Content Optimization</h2>
        <p>Learn how to create and optimize content that ranks well and engages your audience.</p>

        <h2>Link Building Strategies</h2>
        <p>Effective techniques for building high-quality backlinks to your website.</p>
      `
    },
    'website-launch-checklist': {
      title: "Website Launch Checklist",
      category: "Web Development",
      readTime: "10 min read",
      content: `
        <h2>Pre-Launch Preparation</h2>
        <p>Essential steps to take before launching your website to ensure a smooth deployment.</p>

        <h2>Technical Requirements</h2>
        <ul>
          <li>Performance Optimization</li>
          <li>Security Measures</li>
          <li>Cross-Browser Testing</li>
          <li>Mobile Responsiveness</li>
        </ul>

        <h2>Content Review</h2>
        <p>Comprehensive content audit and quality assurance procedures.</p>

        <h2>Post-Launch Tasks</h2>
        <p>Important steps to take after your website goes live to ensure optimal performance.</p>
      `
    }
  };

  const guide = guides[slug as keyof typeof guides];

  if (!guide) {
    return (
      <div className="min-h-screen bg-primary pt-24">
        <div className="container-custom py-16 text-center">
          <h1 className="heading-xl mb-6">Guide Not Found</h1>
          <Link to="/resources" className="btn-primary">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary pt-24">
      <Link 
        to="/resources" 
        className="fixed top-24 left-4 md:left-8 bg-accent/10 p-2 rounded-full hover:bg-accent/20 transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-accent" />
      </Link>

      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <BookOpen className="w-16 h-16 text-accent mb-6" />
            <h1 className="heading-xl mb-6">{guide.title}</h1>
            
            <div className="flex items-center space-x-6 mb-12">
              <div className="flex items-center text-steel">
                <Tag className="w-5 h-5 mr-2" />
                {guide.category}
              </div>
              <div className="flex items-center text-steel">
                <Clock className="w-5 h-5 mr-2" />
                {guide.readTime}
              </div>
            </div>

            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ResourceGuide;