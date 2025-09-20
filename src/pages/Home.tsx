import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, CheckCircle, Phone, MessageCircle, Star, Clock, MapPin } from 'lucide-react';
import SEOHead from '../components/UI/SEOHead';
import AttorneysSection from '../components/Attorneys/AttorneysSection';
import LatestArticles from '../components/Articles/LatestArticles';
import ReviewsCarousel from '../components/Reviews/ReviewsCarousel';

const Home: React.FC = () => {
  const whyChoosePoints = [
    {
      icon: <Shield className="h-10 w-10 text-rosegold" />,
      title: '15+ Years Experience',
      description: 'Extensive experience in Civil Practice and diverse legal domains across Gujarat.',
      delay: '0.2s'
    },
    {
      icon: <Users className="h-10 w-10 text-rosegold" />,
      title: 'Client-Focused Approach',
      description: 'Personalized legal solutions tailored to your specific needs and circumstances.',
      delay: '0.4s'
    },
    {
      icon: <Award className="h-10 w-10 text-rosegold" />,
      title: 'Proven Track Record',
      description: 'Successfully handled numerous cases with favorable outcomes for clients.',
      delay: '0.6s'
    }
  ];

  const achievements = [
    { icon: <CheckCircle className="h-6 w-6 text-accent" />, text: '500+ Cases Successfully Handled' },
    { icon: <CheckCircle className="h-6 w-6 text-accent" />, text: 'Expert in Civil & Criminal Law' },
    { icon: <CheckCircle className="h-6 w-6 text-accent" />, text: 'Registered with Bar Council of Gujarat' },
    { icon: <CheckCircle className="h-6 w-6 text-accent" />, text: 'Available for Emergency Consultations' }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: <Clock className="h-8 w-8 text-rosegold" /> },
    { number: '500+', label: 'Cases Won', icon: <Award className="h-8 w-8 text-rosegold" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Star className="h-8 w-8 text-rosegold" /> },
    { number: '4', label: 'Practice Areas', icon: <MapPin className="h-8 w-8 text-rosegold" /> }
  ];

  return (
    <>
      <SEOHead 
        title="Advocate Aniruddh Jani - Expert Legal Services in Gujarat"
        description="Professional legal services by Advocate Aniruddh Jani in Ahmedabad, Gandhinagar, Kalol, and across Gujarat. Expert in Civil Law, Criminal Defense, Contract Drafting, and Legal Advisory."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white pt-32 pb-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-rosegold/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10 animate-fade-in-up">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <Star className="h-5 w-5 text-accent mr-2" />
                    <span className="text-sm font-medium">Trusted Legal Expert in Gujarat</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-serif">
                    Expert Legal
                    <span className="block gradient-text bg-gradient-to-r from-rosegold via-accent to-rosegold bg-clip-text text-transparent animate-shimmer">
                      Representation
                    </span>
                    <span className="text-4xl md:text-5xl lg:text-6xl block mt-2">in Gujarat</span>
                  </h1>
                  
                  <p className="text-xl text-primary-100 leading-relaxed max-w-2xl">
                    Professional legal services with 15+ years of experience. Protecting your rights 
                    and interests across Ahmedabad, Gandhinagar, Kalol, and throughout Gujarat with 
                    unwavering dedication to justice.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center bg-gradient-to-r from-rosegold to-accent text-white px-10 py-5 rounded-full font-semibold hover:from-accent hover:to-rosegold transition-all duration-500 shadow-2xl hover:shadow-rosegold/25 transform hover:-translate-y-2 hover:scale-105 animate-glow"
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-primary-900 transition-all duration-500 backdrop-blur-sm transform hover:-translate-y-1"
                  >
                    <Phone className="mr-3 h-6 w-6" />
                    Call Now
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                      {achievement.icon}
                      <span className="text-primary-100 text-sm font-medium">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="hidden lg:block animate-fade-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-rosegold/20 to-accent/20 rounded-3xl blur-2xl transform rotate-6"></div>
                  <img
                    src="https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional legal consultation"
                    className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent rounded-3xl"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-bounce-gentle">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-rosegold to-accent p-3 rounded-xl">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-900">500+</div>
                        <div className="text-sm text-primary-600">Cases Won</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-rosegold/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-gradient-to-br from-primary-50 to-rosegold/10 p-6 rounded-2xl mb-4 group-hover:from-rosegold/10 group-hover:to-accent/10 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 shadow-lg group-hover:shadow-xl">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary-900 mb-2 font-serif">{stat.number}</div>
                  <div className="text-primary-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-gradient-to-br from-white to-primary-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-rosegold/10 to-accent/10 rounded-3xl blur-2xl transform -rotate-6"></div>
                  <img
                    src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Advocate Aniruddh Jani"
                    className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
              
              <div className="space-y-8 animate-slide-in-right">
                <div>
                  <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                    <span className="text-primary-900 font-semibold">About Me</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-serif">
                    Meet Advocate
                    <span className="block gradient-text">Aniruddh Jani</span>
                  </h2>
                  <p className="text-lg text-primary-700 leading-relaxed mb-8">
                    With over 15 years of dedicated legal practice, I have been serving clients across 
                    Gujarat with unwavering commitment to justice and excellence. My expertise spans 
                    Civil Practice, Criminal Defense, and comprehensive legal advisory services, ensuring 
                    every client receives personalized attention and strategic representation.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    'Registered with Bar Council of Gujarat',
                    'Specialized in Civil and Criminal Law',
                    'Practicing across multiple jurisdictions',
                    'Available for emergency consultations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="bg-gradient-to-r from-rosegold to-accent p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-primary-700 font-medium group-hover:text-primary-900 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center text-primary-900 hover:text-rosegold font-semibold transition-all duration-300 group text-lg"
                >
                  Learn More About Me
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                <span className="text-primary-900 font-semibold">Why Choose Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-serif">
                Your Trusted Legal
                <span className="block gradient-text">Advocate</span>
              </h2>
              <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
                When you need legal representation, experience and dedication matter. Here's what sets my practice apart 
                and why clients trust me with their most important legal matters.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChoosePoints.map((point, index) => (
                <div 
                  key={index} 
                  className="card p-8 card-hover animate-fade-in-up group"
                  style={{ animationDelay: point.delay }}
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rosegold/10 to-accent/10 rounded-2xl mb-6 mx-auto group-hover:from-rosegold/20 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110">
                    {point.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-900 mb-4 text-center font-serif group-hover:text-primary-800 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed text-center group-hover:text-primary-700 transition-colors duration-300">
                    {point.description}
                  </p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Need Legal Assistance?
              </h2>
              <p className="text-xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Don't let legal challenges overwhelm you. Get expert guidance and representation 
                from an experienced advocate who understands your needs and fights for your rights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-rosegold to-accent text-white px-10 py-5 rounded-full font-semibold hover:from-accent hover:to-rosegold transition-all duration-500 shadow-2xl hover:shadow-rosegold/25 transform hover:-translate-y-2 hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 text-white px-10 py-5 rounded-full font-semibold hover:bg-green-600 transition-all duration-500 shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 hover:scale-105"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Attorneys Section */}
        <AttorneysSection />

        {/* Latest Articles */}
        <LatestArticles />

        {/* Client Reviews */}
        <ReviewsCarousel />
      </div>
    </>
  );
};

export default Home;