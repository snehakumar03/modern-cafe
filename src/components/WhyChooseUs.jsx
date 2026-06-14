import { motion } from 'framer-motion';
import { Leaf, Coffee, Sofa, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source locally and seasonally, ensuring every dish is made with the freshest produce and premium ingredients.',
  },
  {
    icon: Coffee,
    title: 'Artisan Coffee',
    description: 'Our beans are ethically sourced, expertly roasted, and brewed by passionate baristas for the perfect cup.',
  },
  {
    icon: Sofa,
    title: 'Cozy Ambience',
    description: 'Thoughtfully designed interiors with warm lighting, comfortable seating, and Instagram-worthy corners.',
  },
  {
    icon: Heart,
    title: 'Friendly Service',
    description: 'Our team is dedicated to making you feel at home with genuine smiles and attentive hospitality.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sage font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-4">
            The Brew & Bloom Experience
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto">
            We go beyond serving coffee — we create moments worth savoring.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-coffee/10 rounded-2xl flex items-center justify-center group-hover:bg-coffee group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-coffee group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
