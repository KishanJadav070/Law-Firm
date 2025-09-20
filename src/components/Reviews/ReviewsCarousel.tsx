import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useReviews } from '../../hooks/useReviews';

const ReviewsCarousel: React.FC = () => {
  const { reviews, loading } = useReviews(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (reviews.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
              <span className="text-sm font-medium">Client Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              What Our Clients Say
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 animate-pulse">
              <div className="h-6 bg-primary-200 rounded mb-6"></div>
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-primary-200 rounded"></div>
                <div className="h-4 bg-primary-200 rounded"></div>
                <div className="h-4 bg-primary-200 rounded w-3/4"></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-200 rounded-full"></div>
                <div>
                  <div className="h-5 bg-primary-200 rounded mb-2 w-32"></div>
                  <div className="h-4 bg-primary-200 rounded w-24"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-rosegold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium">Client Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            What Our Clients Say
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our legal services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="card p-12 glass-effect animate-scale-in">
            <div className="text-center mb-8">
              <Quote className="h-12 w-12 text-rosegold mx-auto mb-6" />
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < currentReview.rating
                        ? 'text-accent fill-current'
                        : 'text-primary-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl text-primary-100 leading-relaxed text-center mb-8 font-medium">
              "{currentReview.content}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              {currentReview.image_url && (
                <img
                  src={currentReview.image_url}
                  alt={currentReview.client_name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
              )}
              <div className="text-center">
                <h4 className="font-bold text-white text-lg">{currentReview.client_name}</h4>
                <p className="text-primary-200">{currentReview.client_title}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          {reviews.length > 1 && (
            <>
              <button
                onClick={prevReview}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </>
          )}
          
          {/* Dots Indicator */}
          {reviews.length > 1 && (
            <div className="flex justify-center space-x-3 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-rosegold scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;