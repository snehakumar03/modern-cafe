import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const specials = [
  {
    id: 1,
    name: 'Caramel Latte',
    description: 'Rich espresso blended with creamy caramel and steamed milk.',
    price: '₹245',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80',
    alt: 'Caramel latte in a glass mug with caramel drizzle',
  },
  {
    id: 2,
    name: 'Belgian Waffles',
    description: 'Freshly baked waffles topped with seasonal berries and maple syrup.',
    price: '₹320',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1562376552-1f4eb1437a4e?auto=format&fit=crop&w=600&q=80',
    alt: 'Belgian waffles with fresh berries and maple syrup',
  },
  {
    id: 3,
    name: 'Classic Cappuccino',
    description: 'Smooth and aromatic coffee experience with velvety milk foam.',
    price: '₹195',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
    alt: 'Classic cappuccino with latte art in a ceramic cup',
  },
];

const FeaturedSpecials = () => {
  return (
    <section id="specials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sage font-semibold text-sm uppercase tracking-wider">Customer Favorites</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-4">
            Our Signature Favorites
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto">
            Handpicked delights that keep our guests coming back for more.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group bg-offwhite rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-charcoal">{item.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-coffee transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-coffee font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{item.description}</p>
                  <button className="mt-5 text-coffee font-medium text-sm inline-flex items-center gap-1 group/btn">
                    Order Now
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpecials;
