import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import SEOHead from '../components/UI/SEOHead';
import type { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - In a real application, this would connect to Supabase
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-rosegold" />,
      title: 'Phone',
      primary: '+91 98765 43210',
      secondary: '24/7 Emergency Support',
      action: 'tel:+919876543210'
    },
    {
      icon: <Mail className="h-8 w-8 text-rosegold" />,
      title: 'Email',
      primary: 'contact@advocateaniruddhjani.com',
      secondary: 'Response within 2 hours',
      action: 'mailto:contact@advocateaniruddhjani.com'
    },
    {
      icon: <MapPin className="h-8 w-8 text-rosegold" />,
      title: 'Office Address',
      primary: 'Law Chamber Complex, Ahmedabad',
      secondary: 'Gujarat 380001, India',
      action: null
    },
    {
      icon: <Clock className="h-8 w-8 text-rosegold" />,
      title: 'Office Hours',
      primary: 'Mon - Fri: 9:00 AM - 6:00 PM',
      secondary: 'Sat: 9:00 AM - 2:00 PM',
      action: null
    }
  ];

  return (
    <>
      <SEOHead 
        title="Contact Advocate Aniruddh Jani - Legal Consultation in Gujarat"
        description="Contact Advocate Aniruddh Jani for legal consultation in Ahmedabad, Gandhinagar, Kalol. Book free consultation, call, or visit our office."
        keywords="contact advocate aniruddh jani, legal consultation gujarat, lawyer contact ahmedabad"
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
                <span className="text-sm font-medium">Let's Connect</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Get in Touch
            </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your legal matter? I'm here to help. Reach out for a free consultation 
              and let's work together to protect your rights and interests.
            </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-white to-primary-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-in-left">
                <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                  <span className="text-primary-900 font-semibold">Send Message</span>
                </div>
                <h2 className="text-3xl font-bold text-primary-900 mb-6 font-serif">
                  Send Me a Message
                </h2>
                <p className="text-primary-600 mb-8 text-lg leading-relaxed">
                  Fill out the form below and I'll get back to you within 2 hours during business hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-rosegold focus:border-rosegold transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-rosegold focus:border-rosegold transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-rosegold focus:border-rosegold transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-primary-200 rounded-2xl focus:ring-2 focus:ring-rosegold focus:border-rosegold transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                      placeholder="Please describe your legal matter in detail..."
                    />
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                      <p className="text-green-800 font-medium">
                        Thank you for your message! I'll get back to you within 2 hours.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                      <p className="text-red-800 font-medium">
                        Sorry, there was an error sending your message. Please try again or call directly.
                      </p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-900 to-primary-800 text-white px-8 py-5 rounded-2xl font-semibold hover:from-rosegold hover:to-accent transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-3 h-6 w-6" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="animate-slide-in-right">
                <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                  <span className="text-primary-900 font-semibold">Contact Info</span>
                </div>
                <h2 className="text-3xl font-bold text-primary-900 mb-6 font-serif">
                  Contact Information
                </h2>
                <p className="text-primary-600 mb-8 text-lg leading-relaxed">
                  Prefer to reach out directly? Use any of the contact methods below. 
                  I'm always available to discuss your legal needs.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="card p-8 card-hover group">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-rosegold/10 to-accent/10 p-4 rounded-2xl flex-shrink-0 group-hover:from-rosegold/20 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary-900 mb-2 text-lg">{info.title}</h3>
                          {info.action ? (
                            <a
                              href={info.action}
                              className="text-rosegold hover:text-accent font-semibold transition-colors duration-300"
                            >
                              {info.primary}
                            </a>
                          ) : (
                            <p className="text-primary-900 font-semibold">{info.primary}</p>
                          )}
                          <p className="text-primary-600 text-sm mt-1">{info.secondary}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 text-white px-8 py-5 rounded-2xl font-semibold hover:bg-green-600 transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                <span className="text-primary-900 font-semibold">Location</span>
              </div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4 font-serif">
                Visit Our Office
              </h2>
              <p className="text-lg text-primary-600">
                Located in the heart of Ahmedabad for easy accessibility
              </p>
            </div>
            
            <div className="card overflow-hidden animate-scale-in">
              <div className="aspect-w-16 aspect-h-9 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9686!2d72.5713621!3d23.0344834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzA0LjIiTiA3MsKwMzQnMTcuMCJF!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Advocate Aniruddh Jani Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;