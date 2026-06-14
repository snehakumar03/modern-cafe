import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cream rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coffee/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-sage/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-coffee/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
              <span className="text-coffee font-medium text-sm">Premium Coffee & Cozy Vibes</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1] mb-6"
            >
              Fresh Coffee.
              <br />
              <span className="text-coffee">Warm Moments.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-charcoal/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Experience handcrafted coffee, delicious pastries, and a cozy atmosphere
              designed for meaningful conversations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo('#menu')}
                className="group bg-coffee hover:bg-coffee-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Explore Menu
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('#reservation')}
                className="group bg-white hover:bg-cream text-coffee border-2 border-coffee/20 hover:border-coffee/40 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-card flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Reserve Table
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8"
            >
              {[
                { value: '4.9', label: 'Google Rating' },
                { value: '10K+', label: 'Happy Customers' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-coffee">{stat.value}</div>
                  <div className="text-charcoal/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main hero image with floating animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                  alt="Premium latte art coffee in a ceramic cup"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                  loading="eager"
                />
              </motion.div>

              {/* Floating decorative card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl shadow-card-hover p-4 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">☕</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-charcoal">Fresh Brewed</div>
                    <div className="text-charcoal/60 text-sm">Every single morning</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating rating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl shadow-card-hover p-4 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold text-charcoal">4.9</span>
                </div>
                <div className="text-charcoal/60 text-xs mt-1">500+ reviews</div>
              </motion.div>

              {/* Decorative ring */}
              <div className="absolute inset-0 -z-10 border-2 border-coffee/10 rounded-3xl transform translate-x-6 translate-y-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
