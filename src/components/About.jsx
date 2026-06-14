import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { value: 5, suffix: '+', label: 'Years Serving' },
  { value: 10000, suffix: '+', label: 'Happy Customers' },
  { value: 50, suffix: '+', label: 'Menu Items' },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <ScrollReveal className="relative">
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                alt="Cozy café interior with warm lighting and comfortable seating"
                className="w-full h-[450px] sm:h-[550px] object-cover rounded-3xl shadow-soft"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-2xl shadow-card-hover p-6 hidden sm:block">
                <div className="font-display text-4xl font-bold text-coffee mb-1">Since 2020</div>
                <div className="text-charcoal/60 text-sm">Brewing happiness</div>
              </div>
              <div className="absolute inset-0 -z-10 border-2 border-coffee/10 rounded-3xl transform -translate-x-4 -translate-y-4" />
            </div>
          </ScrollReveal>

          {/* Right Content */}
          <div className="lg:pl-8">
            <ScrollReveal>
              <span className="text-sage font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6">
                More Than Just Coffee
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  At Brew & Bloom, we believe a great cup of coffee is the beginning of a beautiful day.
                  Founded with a passion for quality and community, our café has grown into a beloved
                  neighborhood gathering place where strangers become friends over shared lattes.
                </p>
                <p>
                  We source ethically grown beans from sustainable farms, roast them to perfection, and
                  serve them with care by skilled baristas who treat every cup as a work of art. Our
                  pastries are baked fresh each morning using locally sourced ingredients.
                </p>
                <p>
                  Whether you are here for a quiet morning with a book, a productive work session, or a
                  lively conversation with friends, our warm interiors and attentive service make every
                  visit memorable.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-coffee/10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-coffee">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-charcoal/60 text-xs sm:text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
