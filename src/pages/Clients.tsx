import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline';

const Clients: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const clients = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateLabs', logo: '🔬' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudSys', logo: '☁️' },
    { name: 'FinanceWise', logo: '💰' },
    { name: 'HealthTech', logo: '🏥' },
    { name: 'EduPlatform', logo: '📚' },
    { name: 'RetailMax', logo: '🛒' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      company: 'TechCorp',
      content: 'CORVI DELTA transformed our digital presence completely. Their expertise in modern web technologies and attention to detail resulted in a 150% increase in user engagement. The team was professional, responsive, and delivered ahead of schedule.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      projectType: 'Web Development',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, InnovateLabs',
      company: 'InnovateLabs',
      content: 'Working with CORVI DELTA on our AI-powered analytics platform was exceptional. They not only understood our complex requirements but also provided valuable insights that improved our original concept. The results exceeded all expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      projectType: 'AI & Machine Learning',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager, DataFlow',
      company: 'DataFlow',
      content: 'The mobile app CORVI DELTA developed for us has been a game-changer. User adoption rates are through the roof, and the app consistently receives 5-star reviews. Their UX expertise really shows in the final product.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200',
      projectType: 'Mobile Development',
    },
    {
      id: 4,
      name: 'David Kumar',
      role: 'VP of Technology, CloudSys',
      company: 'CloudSys',
      content: 'CORVI DELTA helped us migrate to the cloud seamlessly. Their expertise in DevOps and cloud architecture ensured zero downtime during the transition. Our infrastructure is now 40% more efficient and significantly more scalable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=200',
      projectType: 'Cloud & DevOps',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Director, RetailMax',
      company: 'RetailMax',
      content: 'The e-commerce platform CORVI DELTA built for us has revolutionized our business. Sales have increased by 200% since launch, and customer satisfaction scores are at an all-time high. Exceptional work!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      projectType: 'E-commerce',
    },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Transformation',
      client: 'TechMart Inc.',
      challenge: 'Outdated platform with poor user experience and limited scalability',
      solution: 'Modern React-based platform with microservices architecture',
      results: [
        '40% increase in sales',
        '60% reduction in page load time',
        '85% improvement in mobile experience',
        '50% decrease in bounce rate',
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Healthcare App Development',
      client: 'HealthConnect',
      challenge: 'Need for HIPAA-compliant telemedicine solution',
      solution: 'Cross-platform mobile app with secure video calling and data encryption',
      results: [
        '300% increase in patient consultations',
        '95% patient satisfaction rate',
        '70% reduction in appointment no-shows',
        'HIPAA compliance achieved',
      ],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      client: 'DataDriven Corp',
      challenge: 'Manual data analysis consuming excessive time and resources',
      solution: 'Machine learning-powered dashboard with predictive analytics',
      results: [
        '80% reduction in analysis time',
        '25% improvement in decision accuracy',
        '60% increase in operational efficiency',
        '$2M annual cost savings',
      ],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our Clients & Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Trusted by innovative companies worldwide to deliver exceptional technology solutions
          </motion.p>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Trusted by Leading Companies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300"
            >
              We're proud to work with innovative organizations across various industries
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                  {client.logo}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Client Testimonials
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Hear what our clients have to say about their experience working with CORVI DELTA
            </motion.p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-xl"
            >
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 text-center mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].projectType}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Detailed case studies showcasing measurable results and business impact
            </motion.p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">
                    {study.client}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <motion.div
                          key={result}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: resultIndex * 0.1 }}
                          className="flex items-center bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {result}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Join Our Success Stories?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how CORVI DELTA can help transform your business with innovative technology solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Success Story
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Clients;