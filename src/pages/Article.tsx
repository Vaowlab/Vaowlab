import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Clock, Calendar } from 'lucide-react';

function Article() {
  const { slug } = useParams();

  const articles = {
    'future-of-web-design': {
      title: "The Future of Web Design",
      date: "Mar 15, 2025",
      readTime: "8 min read",
      content: `
        <h2>Evolution of Web Design</h2>
        <p>As we move forward, web design continues to evolve with new technologies and user expectations. This article explores the emerging trends and technologies shaping the future of web design.</p>

        <h2>Key Trends</h2>
        <ul>
          <li>AI-Driven Design Systems</li>
          <li>Immersive Experiences with WebGL</li>
          <li>Voice User Interfaces</li>
          <li>Adaptive Design</li>
        </ul>

        <h2>Impact on User Experience</h2>
        <p>These new technologies are fundamentally changing how users interact with websites and what they expect from digital experiences.</p>

        <h2>Implementation Strategies</h2>
        <p>Practical approaches to incorporating these new technologies into your web design projects.</p>
      `
    },
    'maximizing-roi-digital-marketing': {
      title: "Maximizing ROI in Digital Marketing",
      date: "Mar 12, 2025",
      readTime: "10 min read",
      content: `
        <h2>Understanding Digital Marketing ROI</h2>
        <p>Learn how to measure and optimize your digital marketing efforts for maximum return on investment.</p>

        <h2>Key Metrics</h2>
        <ul>
          <li>Customer Acquisition Cost</li>
          <li>Lifetime Value</li>
          <li>Conversion Rate</li>
          <li>Engagement Metrics</li>
        </ul>

        <h2>Optimization Strategies</h2>
        <p>Practical techniques for improving your marketing ROI through data-driven decision making.</p>

        <h2>Case Studies</h2>
        <p>Real-world examples of successful ROI optimization in digital marketing campaigns.</p>
      `
    },
    'building-scalable-web-applications': {
      title: "Building Scalable Web Applications",
      date: "Mar 10, 2025",
      readTime: "12 min read",
      content: `
        <h2>Foundations of Scalability</h2>
        <p>Understanding the key principles and practices for building web applications that can grow with your business.</p>

        <h2>Architecture Patterns</h2>
        <ul>
          <li>Microservices Architecture</li>
          <li>Serverless Computing</li>
          <li>Distributed Systems</li>
          <li>Caching Strategies</li>
        </ul>

        <h2>Performance Optimization</h2>
        <p>Techniques for maintaining performance as your application scales.</p>

        <h2>Monitoring and Maintenance</h2>
        <p>Best practices for monitoring and maintaining scalable web applications.</p>
      `
    }
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-primary pt-24">
        <div className="container-custom py-16 text-center">
          <h1 className="heading-xl mb-6">Article Not Found</h1>
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
            <FileText className="w-16 h-16 text-accent mb-6" />
            <h1 className="heading-xl mb-6">{article.title}</h1>
            
            <div className="flex items-center space-x-6 mb-12">
              <div className="flex items-center text-steel">
                <Calendar className="w-5 h-5 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center text-steel">
                <Clock className="w-5 h-5 mr-2" />
                {article.readTime}
              </div>
            </div>

            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Article;