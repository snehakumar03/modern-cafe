import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Brew Street, Chennai',
    href: 'https://maps.google.com/?q=123+Brew+Street,+Chennai',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@brewandbloom.com',
    href: 'mailto:hello@brewandbloom.com',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    content: 'Mon–Sun, 8:00 AM – 10:00 PM',
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sage font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-4">
            Visit Brew & Bloom
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto">
            We would love to welcome you. Reach out or drop by for a memorable café experience.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-5">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className={`flex items-start gap-4 p-5 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 ${item.href ? 'group cursor-pointer' : ''}`}>
                  <div className="w-12 h-12 bg-coffee/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-coffee transition-colors duration-300">
                    <Icon className="w-5 h-5 text-coffee group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-charcoal/70 text-sm">{item.content}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {content}
                  </a>
                </ScrollReveal>
              ) : (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  {content}
                </ScrollReveal>
              );
            })}
          </div>

          {/* Map Placeholder */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-card overflow-hidden h-full min-h-[400px]">
              <div className="w-full h-full min-h-[400px] bg-cream relative">
                <iframe
                  title="Brew & Bloom Café Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.78003510374!2d80.06892544999999!3d13.0478226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b8ef0b76b!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full min-h-[400px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
