import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Tag, BarChart } from 'lucide-react';

function CaseStudy() {
  const { slug } = useParams();

  const caseStudies = {
    'ecommerce-platform-redesign': {
      title: "E-commerce Platform Redesign",
      category: "UX Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      challenge: "An e-commerce platform struggling with low conversion rates and high cart abandonment.",
      solution: "Complete UX redesign focusing on streamlined checkout and improved product discovery.",
      results: [
        "150% increase in conversion rate",
        "45% reduction in cart abandonment",
        "60% increase in average order value"
      ],
      process: `
        <h2>Research Phase</h2>
        <p>Conducted extensive user research and analysis of pain points in the existing platform.</p>

        <h2>Design Solutions</h2>
        <p>Implemented intuitive navigation, simplified checkout process, and enhanced product recommendations.</p>

        <h2>Implementation</h2>
        <p>Gradual rollout with A/B testing to validate improvements and optimize performance.</p>
      `
    },
    'b2b-marketing-campaign': {
      title: "B2B Marketing Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      challenge: "B2B software company seeking to increase qualified leads and market presence.",
      solution: "Integrated marketing campaign combining content marketing, social media, and targeted advertising.",
      results: [
        "2x increase in qualified leads",
        "35% higher engagement rate",
        "40% reduction in cost per acquisition"
      ],
      process: `
        <h2>Strategy Development</h2>
        <p>Created comprehensive marketing strategy aligned with business objectives.</p>

        <h2>Campaign Execution</h2>
        <p>Implemented multi-channel approach with consistent messaging and tracking.</p>

        <h2>Results Analysis</h2>
        <p>Continuous monitoring and optimization of campaign performance.</p>
      `
    },
    'brand-identity-evolution': {
      title: "Brand Identity Evolution",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      challenge: "Traditional company needing to modernize their brand for digital platforms.",
      solution: "Complete brand refresh maintaining core values while embracing modern design principles.",
      results: [
        "45% increase in brand recognition",
        "30% improvement in customer perception",
        "25% growth in social media following"
      ],
      process: `
        <h2>Brand Analysis</h2>
        <p>Deep dive into existing brand values, market position, and customer perception.</p>

        <h2>Identity Development</h2>
        <p>Creation of new visual language and brand guidelines for digital-first presence.</p>

        <h2>Implementation</h2>
        <p>Phased rollout across all channels with stakeholder training and support.</p>
      `
    }
  };

  const study = caseStudies[slug as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="min-h-screen bg-primary pt-24">
        <div className="container-custom py-16 text-center">
          <h1 className="heading-xl mb-6">Case Study Not Found</h1>
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
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent">
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center mb-4">
                    <Tag className="w-5 h-5 mr-2 text-accent" />
                    <span className="text-accent">{study.category}</span>
                  </div>
                  <h1 className="heading-xl text-secondary">{study.title}</h1>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary/50 p-8 rounded-xl border border-accent/10">
                <h2 className="heading-md mb-4">The Challenge</h2>
                <p className="text-steel">{study.challenge}</p>
              </div>
              <div className="bg-primary/50 p-8 rounded-xl border border-accent/10">
                <h2 className="heading-md mb-4">Our Solution</h2>
                <p className="text-steel">{study.solution}</p>
              </div>
            </div>

            <div className="bg-primary/50 p-8 rounded-xl border border-accent/10 mb-12">
              <div className="flex items-center mb-6">
                <BarChart className="w-8 h-8 text-accent mr-3" />
                <h2 className="heading-md">Key Results</h2>
              </div>
              <ul className="space-y-4">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-center text-steel">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: study.process }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CaseStudy;