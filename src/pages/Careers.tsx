import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPinIcon, ClockIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null as File | null,
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior React Developer',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120k - $150k',
      department: 'Engineering',
      description: 'We are looking for an experienced React developer to join our growing team and help build cutting-edge web applications.',
      requirements: [
        '5+ years of React development experience',
        'Strong knowledge of TypeScript and modern JavaScript',
        'Experience with state management (Redux, Context API)',
        'Familiarity with testing frameworks (Jest, React Testing Library)',
        'Knowledge of modern build tools and deployment processes',
      ],
      responsibilities: [
        'Develop and maintain high-quality React applications',
        'Collaborate with designers and backend developers',
        'Write clean, maintainable, and well-tested code',
        'Mentor junior developers and conduct code reviews',
        'Stay updated with latest React ecosystem trends',
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Modern equipment and tools',
      ],
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$90k - $120k',
      department: 'Design',
      description: 'Join our design team to create beautiful, intuitive user experiences for web and mobile applications.',
      requirements: [
        '3+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio showcasing design process',
        'Understanding of user-centered design principles',
        'Experience with design systems and prototyping',
      ],
      responsibilities: [
        'Create user-centered designs for web and mobile',
        'Conduct user research and usability testing',
        'Develop and maintain design systems',
        'Collaborate closely with development teams',
        'Present design solutions to stakeholders',
      ],
      benefits: [
        'Competitive salary and benefits',
        'Creative freedom and autonomy',
        'Latest design tools and software',
        'Conference and workshop opportunities',
        'Collaborative and inspiring work environment',
      ],
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130k - $160k',
      department: 'Infrastructure',
      description: 'Help us build and maintain scalable, reliable infrastructure to support our growing applications.',
      requirements: [
        '4+ years of DevOps/Infrastructure experience',
        'Strong knowledge of AWS, Docker, and Kubernetes',
        'Experience with CI/CD pipelines and automation',
        'Proficiency in Infrastructure as Code (Terraform)',
        'Understanding of monitoring and logging systems',
      ],
      responsibilities: [
        'Design and maintain cloud infrastructure',
        'Implement and improve CI/CD pipelines',
        'Monitor system performance and reliability',
        'Automate deployment and operational processes',
        'Ensure security and compliance best practices',
      ],
      benefits: [
        'Competitive compensation package',
        'Cutting-edge technology and tools',
        'Opportunity to work with latest cloud technologies',
        'Professional certification support',
        'Flexible working hours',
      ],
    },
    {
      id: 4,
      title: 'Product Manager',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$110k - $140k',
      department: 'Product',
      description: 'Lead product strategy and execution for our innovative technology solutions.',
      requirements: [
        '3+ years of product management experience',
        'Strong analytical and problem-solving skills',
        'Experience with agile development methodologies',
        'Excellent communication and leadership skills',
        'Technical background preferred',
      ],
      responsibilities: [
        'Define product vision and roadmap',
        'Work closely with engineering and design teams',
        'Conduct market research and competitive analysis',
        'Gather and prioritize product requirements',
        'Track and analyze product metrics',
      ],
      benefits: [
        'Competitive salary and equity',
        'Opportunity to shape product direction',
        'Work with cutting-edge technologies',
        'Professional growth opportunities',
        'Collaborative team environment',
      ],
    },
  ];

  const internships = [
    {
      id: 5,
      title: 'Frontend Development Intern',
      location: 'San Francisco, CA / Remote',
      type: 'Internship',
      duration: '3-6 months',
      department: 'Engineering',
      description: 'Gain hands-on experience building modern web applications with React and TypeScript.',
      requirements: [
        'Currently pursuing Computer Science or related degree',
        'Basic knowledge of HTML, CSS, and JavaScript',
        'Familiarity with React is a plus',
        'Strong desire to learn and grow',
        'Good communication skills',
      ],
    },
    {
      id: 6,
      title: 'Design Intern',
      location: 'San Francisco, CA / Remote',
      type: 'Internship',
      duration: '3-6 months',
      department: 'Design',
      description: 'Learn from experienced designers and contribute to real projects while building your portfolio.',
      requirements: [
        'Currently pursuing Design or related degree',
        'Basic knowledge of design tools (Figma, Sketch)',
        'Strong visual design skills',
        'Passion for user experience',
        'Portfolio of design work',
      ],
    },
  ];

  const companyPerks = [
    { icon: '💻', title: 'Latest Equipment', description: 'Top-of-the-line laptops, monitors, and accessories' },
    { icon: '🏠', title: 'Flexible Work', description: 'Remote work options and flexible hours' },
    { icon: '🎓', title: 'Learning Budget', description: '$2,500 annual budget for courses and conferences' },
    { icon: '🏥', title: 'Health Benefits', description: 'Comprehensive health, dental, and vision coverage' },
    { icon: '🌴', title: 'Paid Time Off', description: 'Generous vacation policy and mental health days' },
    { icon: '🚀', title: 'Growth Opportunities', description: 'Clear career paths and internal promotions' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
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
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Build the future of technology with passionate professionals who are dedicated to innovation and excellence
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#job-openings"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              View Open Positions
            </a>
            <a
              href="#application-form"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-300"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Why Work at CORVI DELTA?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We foster a culture of innovation, collaboration, and continuous learning
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyPerks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{perk.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="job-openings" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Open Positions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Join our team and help shape the future of technology
            </motion.p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mr-4">{job.title}</h3>
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-300 mb-4 space-x-6">
                      <div className="flex items-center">
                        <MapPinIcon className="w-5 h-5 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="w-5 h-5 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                        {job.salary}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 lg:ml-8">
                    <motion.button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      View Details
                    </motion.button>
                    <motion.a
                      href="#application-form"
                      onClick={() => setFormData(prev => ({ ...prev, position: job.title }))}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center"
                    >
                      Apply Now
                    </motion.a>
                  </div>
                </div>

                <AnimatePresence>
                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="grid md:grid-cols-3 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-300">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-300">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Benefits</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Internship Opportunities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Start your career journey with hands-on experience and mentorship from industry experts
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                    Internship
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{internship.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPinIcon className="w-5 h-5 mr-2" />
                    {internship.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    {internship.duration}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">{internship.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {internship.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href="#application-form"
                  onClick={() => setFormData(prev => ({ ...prev, position: internship.title }))}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-block"
                >
                  Apply for Internship
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Apply Now
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Take the first step towards joining our innovative team
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Position Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a position</option>
                    {[...jobOpenings, ...internships].map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Submit Application
              </motion.button>
            </form>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
              We review all applications carefully and will get back to you within 1-2 weeks.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;