import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const categories = ['Coffee', 'Breakfast', 'Desserts', 'Beverages'];

const menuItems = {
  Coffee: [
    { id: 1, name: 'Espresso', description: 'Bold, concentrated coffee shot', price: '₹125' },
    { id: 2, name: 'Americano', description: 'Espresso diluted with hot water', price: '₹145' },
    { id: 3, name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam', price: '₹195' },
    { id: 4, name: 'Caramel Latte', description: 'Espresso with caramel and steamed milk', price: '₹245' },
    { id: 5, name: 'Mocha', description: 'Espresso with rich chocolate and milk', price: '₹225' },
    { id: 6, name: 'Cold Brew', description: 'Slow-steeped coffee served over ice', price: '₹195' },
  ],
  Breakfast: [
    { id: 7, name: 'Avocado Toast', description: 'Sourdough with smashed avocado and herbs', price: '₹285' },
    { id: 8, name: 'Belgian Waffles', description: 'Fresh waffles with berries and syrup', price: '₹320' },
    { id: 9, name: 'Eggs Benedict', description: 'Poached eggs with hollandaise on muffins', price: '₹350' },
    { id: 10, name: 'Granola Bowl', description: 'Yogurt, granola, and fresh fruits', price: '₹240' },
    { id: 11, name: 'Breakfast Panini', description: 'Egg, cheese, and grilled vegetables', price: '₹295' },
    { id: 12, name: 'Pancake Stack', description: 'Fluffy pancakes with maple butter', price: '₹275' },
  ],
  Desserts: [
    { id: 13, name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: '₹265' },
    { id: 14, name: 'Chocolate Lava Cake', description: 'Warm cake with a molten center', price: '₹295' },
    { id: 15, name: 'Cheesecake', description: 'Creamy New York style cheesecake', price: '₹275' },
    { id: 16, name: 'Macarons', description: 'Assorted French almond cookies', price: '₹195' },
    { id: 17, name: 'Berry Tart', description: 'Fresh berries on vanilla custard', price: '₹255' },
    { id: 18, name: 'Brownie Sundae', description: 'Warm brownie with ice cream', price: '₹285' },
  ],
  Beverages: [
    { id: 19, name: 'Fresh Orange Juice', description: 'Cold-pressed oranges', price: '₹165' },
    { id: 20, name: 'Iced Tea', description: 'House-blend tea with lemon', price: '₹145' },
    { id: 21, name: 'Hot Chocolate', description: 'Rich cocoa with whipped cream', price: '₹195' },
    { id: 22, name: 'Green Smoothie', description: 'Spinach, apple, and ginger blend', price: '₹225' },
    { id: 23, name: 'Lemon Mint Cooler', description: 'Refreshing citrus and mint', price: '₹155' },
    { id: 24, name: 'Masala Chai', description: 'Spiced Indian tea with milk', price: '₹125' },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  return (
    <section id="menu" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sage font-semibold text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-4">
            Explore Our Menu
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto">
            From artisan coffee to freshly baked treats, discover flavors crafted with love.
          </p>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-coffee text-white shadow-card-hover'
                    : 'bg-cream text-charcoal hover:bg-coffee/10'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Items */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-x-12 gap-y-6"
            >
              {menuItems[activeCategory].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-start justify-between gap-4 py-5 border-b border-coffee/10 hover:border-coffee/30 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal group-hover:text-coffee transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-charcoal/60 text-sm mt-1">{item.description}</p>
                  </div>
                  <span className="text-coffee font-bold text-lg whitespace-nowrap">{item.price}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;
