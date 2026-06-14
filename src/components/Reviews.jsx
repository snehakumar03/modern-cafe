import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    review: 'Brew & Bloom has become my favorite weekend spot. The caramel latte is absolutely divine, and the ambiance makes you want to stay for hours. A true gem in Chennai!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Arjun Menon',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    review: 'The perfect place for meetings or quiet work. Friendly staff, consistently great coffee, and their Belgian waffles are the best I have had in the city.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Divya Krishnan',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    review: 'Beautiful interiors, attention to detail, and warm hospitality. Every corner is Instagram-worthy, and the desserts are as delicious as they look. Highly recommended!',
    rating: 5,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sage font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto">
            Real stories from the people who make Brew & Bloom special.
          </p>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[420px] sm:h-[360px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card h-full flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-coffee/20 mb-6" />

                  <div className="flex mb-4">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-charcoal/80 text-base sm:text-lg md:text-xl leading-relaxed mb-8 italic">
                    "{reviews[currentIndex].review}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={reviews[currentIndex].image}
                      alt={reviews[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-coffee/20"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-display text-lg font-bold text-charcoal">
                        {reviews[currentIndex].name}
                      </div>
                      <div className="text-charcoal/60 text-sm">{reviews[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-card hover:shadow-card-hover text-coffee transition-all duration-300 hover:-translate-x-1"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-coffee w-8'
                      : 'bg-coffee/30 hover:bg-coffee/50'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-card hover:shadow-card-hover text-coffee transition-all duration-300 hover:translate-x-1"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
