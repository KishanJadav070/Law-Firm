import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, EyeIcon } from '@heroicons/react/24/outline';

const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = ['All', 'Web Apps', 'Mobile Apps', 'AI Projects', 'Design'];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Apps',
      description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.',
      fullDescription: 'This comprehensive e-commerce solution includes features like user authentication, shopping cart, payment gateway integration, admin dashboard, order tracking, and inventory management. Built with a focus on performance and user experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'TechMart Inc.',
      testimonial: 'CORVI DELTA delivered an exceptional e-commerce platform that exceeded our expectations. Sales increased by 40% within the first quarter.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'Mobile Apps',
      description: 'A comprehensive healthcare app connecting patients with doctors, featuring appointment booking and telemedicine capabilities.',
      fullDescription: 'This mobile application revolutionizes healthcare delivery by providing seamless doctor-patient interactions, secure messaging, prescription management, and telehealth consultations. Built with privacy and security as top priorities.',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'HealthConnect',
      testimonial: 'The app has transformed how we serve our patients. The user experience is outstanding and our patient satisfaction scores have improved dramatically.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI Projects',
      description: 'An intelligent dashboard that provides real-time business insights using machine learning algorithms.',
      fullDescription: 'This AI-powered platform analyzes business data to provide actionable insights, predictive analytics, and automated reporting. Features include customizable dashboards, real-time data visualization, and intelligent alerts.',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'DataDriven Corp',
      testimonial: 'The AI insights have completely changed how we make business decisions. We\'ve seen a 25% improvement in operational efficiency.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 4,
      title: 'Financial Services Website',
      category: 'Web Apps',
      description: 'A secure and compliant financial services platform with advanced security features and real-time trading capabilities.',
      fullDescription: 'This comprehensive financial platform includes portfolio management, real-time market data, secure transactions, compliance tools, and customer relationship management. Built with enterprise-grade security and scalability.',
      technologies: ['Next.js', 'Express', 'PostgreSQL', 'Redis', 'AWS'],
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'SecureFinance',
      testimonial: 'CORVI DELTA understood our complex requirements and delivered a platform that meets all regulatory standards while providing excellent user experience.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 5,
      title: 'Brand Identity & UX Design',
      category: 'Design',
      description: 'Complete brand identity redesign and user experience optimization for a growing startup.',
      fullDescription: 'This project involved comprehensive brand strategy, logo design, website redesign, and user experience optimization. The new design system improved brand recognition and user engagement significantly.',
      technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'After Effects'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'InnovateTech',
      testimonial: 'The new brand identity perfectly captures our vision. User engagement increased by 60% and our conversion rate improved by 35%.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 6,
      title: 'Smart Logistics App',
      category: 'Mobile Apps',
      description: 'IoT-integrated mobile application for real-time fleet management and logistics optimization.',
      fullDescription: 'This sophisticated logistics solution provides real-time tracking, route optimization, driver management, and automated reporting. Integration with IoT devices enables predictive maintenance and efficiency optimization.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'IoT Integration', 'Google Maps API'],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'LogiFlow Solutions',
      testimonial: 'The app has revolutionized our operations. We\'ve reduced delivery times by 30% and operational costs by 20%.',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore our diverse range of successful projects and see how we've helped businesses transform through technology
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-3">
                          <motion.button
                            onClick={() => setSelectedProject(project.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <EyeIcon className="w-5 h-5" />
                          </motion.button>
                          <motion.a
                            href={project.liveUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.client}
                      </span>
                      <button
                        onClick={() => setSelectedProject(project.id)}
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                          {project.category}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h2>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <motion.a
                            href={project.liveUrl}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                            View Live
                          </motion.a>
                          <motion.a
                            href={project.caseStudyUrl}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            Case Study
                          </motion.a>
                        </div>
                      </div>

                      <div>
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {project.fullDescription}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Client</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">{project.client}</p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Client Testimonial</h3>
                          <p className="text-gray-700 dark:text-gray-300 italic">
                            "{project.testimonial}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;