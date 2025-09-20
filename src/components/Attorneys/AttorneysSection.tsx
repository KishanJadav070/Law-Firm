import React from 'react';
import { Mail, Phone, GraduationCap, Award } from 'lucide-react';
import { useAttorneys } from '../../hooks/useAttorneys';

const AttorneysSection: React.FC = () => {
  const { attorneys, loading } = useAttorneys();

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-white to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
              <span className="text-primary-900 font-semibold">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
              Meet Our Attorneys
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card p-8 animate-pulse">
                <div className="w-32 h-32 bg-primary-200 rounded-full mx-auto mb-6"></div>
                <div className="h-6 bg-primary-200 rounded mb-4"></div>
                <div className="h-4 bg-primary-200 rounded mb-6"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-primary-200 rounded"></div>
                  <div className="h-3 bg-primary-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (attorneys.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
            <span className="text-primary-900 font-semibold">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
            Meet Our Attorneys
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced legal professionals are dedicated to providing exceptional representation
            and personalized service to every client.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <div 
              key={attorney.id} 
              className="card p-8 card-hover animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={attorney.image_url || 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=400'}
                    alt={attorney.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2 font-serif group-hover:text-primary-800 transition-colors duration-300">
                  {attorney.name}
                </h3>
                <p className="text-rosegold font-semibold mb-4">{attorney.title}</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-rosegold flex-shrink-0" />
                  <span className="text-primary-600 text-sm font-medium">
                    {attorney.experience_years}+ Years Experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-rosegold flex-shrink-0" />
                  <span className="text-primary-600 text-sm">{attorney.education}</span>
                </div>
              </div>
              
              <p className="text-primary-700 text-sm leading-relaxed mb-6 group-hover:text-primary-800 transition-colors duration-300">
                {attorney.bio}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-primary-900 text-sm">Specializations:</h4>
                <div className="flex flex-wrap gap-2">
                  {attorney.specializations.map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className="bg-gradient-to-r from-rosegold/10 to-accent/10 text-primary-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6 pt-6 border-t border-primary-100">
                <a
                  href={`mailto:${attorney.email}`}
                  className="flex items-center justify-center bg-gradient-to-r from-rosegold/10 to-accent/10 p-3 rounded-xl hover:from-rosegold/20 hover:to-accent/20 transition-all duration-300 group-hover:scale-110"
                >
                  <Mail className="h-4 w-4 text-rosegold" />
                </a>
                <a
                  href={`tel:${attorney.phone}`}
                  className="flex items-center justify-center bg-gradient-to-r from-rosegold/10 to-accent/10 p-3 rounded-xl hover:from-rosegold/20 hover:to-accent/20 transition-all duration-300 group-hover:scale-110"
                >
                  <Phone className="h-4 w-4 text-rosegold" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttorneysSection;