import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, FileText, Users, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../components/UI/SEOHead';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Scale className="h-10 w-10 text-rosegold" />,
      title: 'Civil Law',
      description: 'Comprehensive civil litigation services including property disputes, contract violations, family matters, and commercial disputes.',
      features: [
        'Property Disputes',
        'Contract Violations',
        'Family Law Matters',
        'Commercial Disputes',
        'Injunction Relief',
        'Damages Claims'
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-rosegold" />,
      title: 'Criminal Defense',
      description: 'Expert criminal defense representation for all types of criminal cases, from minor offenses to serious felonies.',
      features: [
        'Bail Applications',
        'Criminal Trial Defense',
        'White Collar Crime',
        'Cyber Crime Cases',
        'Domestic Violence Cases',
        'Appeal Proceedings'
      ]
    },
    {
      icon: <FileText className="h-10 w-10 text-rosegold" />,
      title: 'Contract Drafting & Review',
      description: 'Professional contract drafting, review, and negotiation services to protect your business interests.',
      features: [
        'Business Agreements',
        'Employment Contracts',
        'Partnership Deeds',
        'Lease Agreements',
        'Non-Disclosure Agreements',
        'Service Contracts'
      ]
    },
    {
      icon: <Users className="h-10 w-10 text-rosegold" />,
      title: 'Legal Advisory',
      description: 'Strategic legal consultation and advisory services for individuals and businesses across various legal matters.',
      features: [
        'Business Legal Compliance',
        'Legal Risk Assessment',
        'Regulatory Compliance',
        'Legal Documentation',
        'Strategic Planning',
        'Dispute Prevention'
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Legal Services - Advocate Aniruddh Jani | Civil Law, Criminal Defense"
        description="Comprehensive legal services including Civil Law, Criminal Defense, Contract Drafting, and Legal Advisory by Advocate Aniruddh Jani in Gujarat."
        keywords="civil law, criminal defense, contract drafting, legal advisory, gujarat lawyer services"
      />
      
      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-rosegold/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
                <span className="text-sm font-medium">Professional Legal Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Comprehensive Legal Services
            </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Professional legal representation and advisory services tailored to your specific needs. 
              Protecting your rights and interests across all areas of law.
            </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-br from-white to-primary-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card p-10 card-hover animate-fade-in-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-br from-rosegold/10 to-accent/10 p-4 rounded-2xl group-hover:from-rosegold/20 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 font-serif group-hover:text-primary-800 transition-colors duration-300">{service.title}</h3>
                  </div>
                  
                  <p className="text-primary-600 mb-8 leading-relaxed text-lg group-hover:text-primary-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary-900 mb-4 text-lg">Services Include:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-rosegold flex-shrink-0" />
                          <span className="text-primary-600 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                <span className="text-primary-900 font-semibold">My Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
                How I Work With Clients
              </h2>
              <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
                A systematic approach to ensure the best possible outcome for your legal matters
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'Free consultation to understand your legal needs and assess your case.'
                },
                {
                  step: '02',
                  title: 'Case Analysis',
                  description: 'Thorough analysis of legal issues and development of strategic approach.'
                },
                {
                  step: '03',
                  title: 'Legal Action',
                  description: 'Implementation of legal strategy with regular updates and communication.'
                },
                {
                  step: '04',
                  title: 'Resolution',
                  description: 'Achieving the best possible outcome through skilled representation.'
                }
              ].map((step, index) => (
                <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:from-rosegold group-hover:to-accent transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 shadow-lg group-hover:shadow-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4 font-serif group-hover:text-primary-800 transition-colors duration-300">{step.title}</h3>
                  <p className="text-primary-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-rosegold/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Ready to Get Started?
            </h2>
              <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't wait to protect your legal rights. Schedule a consultation today and let's discuss 
              how I can help you achieve the best possible outcome for your case.
            </p>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-rosegold to-accent text-white px-10 py-5 rounded-full font-semibold hover:from-accent hover:to-rosegold transition-all duration-500 shadow-2xl hover:shadow-rosegold/25 transform hover:-translate-y-2 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;