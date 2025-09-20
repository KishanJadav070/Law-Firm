import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { useArticles } from '../../hooks/useArticles';

const LatestArticles: React.FC = () => {
  const { articles, loading } = useArticles(true);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
              <span className="text-primary-900 font-semibold">Latest Articles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
              Legal Insights & Updates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card overflow-hidden animate-pulse">
                <div className="h-48 bg-primary-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-primary-200 rounded mb-4"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-3 bg-primary-200 rounded"></div>
                    <div className="h-3 bg-primary-200 rounded"></div>
                  </div>
                  <div className="h-4 bg-primary-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  const featuredArticles = articles.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-rosegold/10 to-accent/10 px-6 py-3 rounded-full mb-6">
            <span className="text-primary-900 font-semibold">Latest Articles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
            Legal Insights & Updates
          </h2>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest articles on legal developments, case studies, and expert insights
            to help you understand your rights and legal options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article, index) => (
            <article 
              key={article.id} 
              className="card overflow-hidden card-hover animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image_url || 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600'}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-rosegold to-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-3 font-serif group-hover:text-primary-800 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-primary-600 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-primary-700 transition-colors duration-300">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-primary-500 mb-4">
                  <div className="flex items-center space-x-4">
                    {article.author && (
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{article.author.name}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/articles/${article.id}`}
                  className="inline-flex items-center text-rosegold hover:text-accent font-semibold transition-all duration-300 group-hover:translate-x-2"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {articles.length > 6 && (
          <div className="text-center animate-fade-in-up">
            <Link
              to="/articles"
              className="inline-flex items-center bg-gradient-to-r from-primary-900 to-primary-800 text-white px-8 py-4 rounded-full font-semibold hover:from-rosegold hover:to-accent transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              View All Articles
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestArticles;