import React from 'react';
import { GraduationCap, Scale, MapPin, Calendar, Users, Award } from 'lucide-react';
import SEOHead from '../components/UI/SEOHead';

const About: React.FC = () => {
  const credentials = [
    {
      icon: <GraduationCap className="h-8 w-8 text-rosegold" />,
      title: 'LLB (Bachelor of Laws)',
      description: 'Gujarat University, Ahmedabad',
      year: '2008'
    },
    {
      icon: <Scale className="h-8 w-8 text-rosegold" />,
      title: 'Bar Council Registration',
      description: 'Registered with Bar Council of Gujarat',
      year: '2009'
    },
    {
      icon: <Award className="h-8 w-8 text-rosegold" />,
      title: 'Legal Practice Certificate',
      description: 'Authorized to practice in all Gujarat Courts',
      year: '2009'
    }
  ];

  const practiceAreas = [
    'High Court of Gujarat',
    'District Courts - Ahmedabad',
    'District Courts - Gandhinagar', 
    'District Courts - Kalol',
    'Magistrate Courts',
    'Special Courts'
  ];

  return (
    <>
      <SEOHead 
        title="About Advocate Aniruddh Jani - Experienced Lawyer in Gujarat"
        description="Learn about Advocate Aniruddh Jani's background, education, and 15+ years of legal experience serving clients across Ahmedabad, Gandhinagar, Kalol, and Gujarat."
        keywords="advocate aniruddh jani, lawyer background, legal experience, gujarat advocate, civil law expert"
      />
      
      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-8 animate-slide-in-left">
                <div>
                  <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                    <span className="text-primary-900 font-semibold">About Me</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-serif">
                    Dedicated to
                    <span className="gradient-text block">Justice & Excellence</span>
                  </h1>
                  <p className="text-lg text-primary-700 leading-relaxed">
                    I am Advocate Aniruddh Jani, a dedicated legal professional with over 15 years of 
                    experience in providing comprehensive legal services across Gujarat. My commitment 
                    to justice, combined with deep legal expertise, has helped numerous clients navigate 
                    complex legal challenges successfully.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="card p-6 card-hover">
                    <div className="text-3xl font-bold text-primary-900 font-serif">15+</div>
                    <div className="text-primary-600 font-medium">Years Experience</div>
                  </div>
                  <div className="card p-6 card-hover">
                    <div className="text-3xl font-bold text-primary-900 font-serif">500+</div>
                    <div className="text-primary-600 font-medium">Cases Handled</div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-slide-in-right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-rosegold/10 to-accent/10 rounded-3xl blur-2xl transform rotate-6"></div>
                  <img
                    src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Advocate Aniruddh Jani"
                    className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                <span className="text-primary-900 font-semibold">Mission & Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
                My Mission & Vision
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8 card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-semibold text-primary-900 mb-4 font-serif">Mission</h3>
                <p className="text-primary-700 leading-relaxed">
                  To provide accessible, reliable, and effective legal representation to individuals 
                  and businesses across Gujarat. I strive to protect my clients' rights while ensuring 
                  they understand every aspect of their legal matters.
                </p>
              </div>
              <div className="card p-8 card-hover animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-semibold text-primary-900 mb-4 font-serif">Vision</h3>
                <p className="text-primary-700 leading-relaxed">
                  To be the most trusted legal advisor in Gujarat, known for integrity, competence, 
                  and unwavering commitment to client success. Building long-term relationships 
                  based on trust and exceptional legal service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Credentials */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                <span className="text-primary-900 font-semibold">Credentials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
                Education & Credentials
              </h2>
              <p className="text-lg text-primary-600">
                Solid educational foundation and professional certifications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {credentials.map((credential, index) => (
                <div key={index} className="card p-8 card-hover animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.2}s` }}>
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rosegold/10 to-accent/10 rounded-2xl mb-6 group-hover:from-rosegold/20 group-hover:to-accent/20 transition-all duration-500">
                    {credential.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 font-serif">
                    {credential.title}
                  </h3>
                  <p className="text-primary-600 mb-3 leading-relaxed">{credential.description}</p>
                  <span className="text-sm font-semibold text-rosegold bg-rosegold/10 px-3 py-1 rounded-full">{credential.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-slide-in-left">
                <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
                  <span className="text-primary-900 font-semibold">Practice Areas</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 font-serif">
                  Courts I Practice In
                </h2>
                <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                  I am authorized to practice law across various courts in Gujarat, ensuring 
                  comprehensive legal representation at all levels of the judicial system.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {practiceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary-50 to-rosegold/5 rounded-xl hover:from-rosegold/10 hover:to-accent/10 transition-all duration-300 group">
                      <MapPin className="h-5 w-5 text-rosegold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-primary-700 font-medium group-hover:text-primary-900 transition-colors duration-300">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 p-10 rounded-3xl text-white shadow-2xl animate-slide-in-right">
                <h3 className="text-2xl font-semibold mb-8 font-serif">Professional Background</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Calendar className="h-6 w-6 text-rosegold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">2009 - Present</h4>
                      <p className="text-primary-100 leading-relaxed">
                        Practicing law across Gujarat with focus on Civil Practice, 
                        Criminal Defense, and Legal Advisory services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-rosegold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Client Focus</h4>
                      <p className="text-primary-100 leading-relaxed">
                        Served individuals, families, and businesses with personalized 
                        legal solutions and strategic representation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Award className="h-6 w-6 text-rosegold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Recognition</h4>
                      <p className="text-primary-100 leading-relaxed">
                        Recognized for professional excellence and ethical practice 
                        within the Gujarat legal community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;