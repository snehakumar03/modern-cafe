import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.guests || parseInt(formData.guests) < 1) {
      newErrors.guests = 'Please select number of guests';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <section id="reservation" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <ScrollReveal className="order-2 lg:order-1">
            <span className="text-sage font-semibold text-sm uppercase tracking-wider">Reservations</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6">
              Book Your Table
            </h2>
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-8">
              Reserve your spot for a delightful dining experience. Whether it is a casual brunch,
              business meeting, or special celebration, we will make sure your table is ready.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Clock,
                  title: 'Opening Hours',
                  desc: 'Mon–Sun, 8:00 AM – 10:00 PM',
                },
                {
                  icon: Users,
                  title: 'Group Bookings',
                  desc: 'Parties of 8 or more, please call us directly.',
                },
                {
                  icon: Phone,
                  title: 'Need Help?',
                  desc: '+91 98765 43210',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coffee/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-coffee" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-charcoal">{item.title}</h3>
                      <p className="text-charcoal/60">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right Form */}
          <ScrollReveal delay={0.2} className="order-1 lg:order-2">
            <div className="bg-cream/40 rounded-3xl p-6 sm:p-10 shadow-soft">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-sage" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
                      Reservation Confirmed!
                    </h3>
                    <p className="text-charcoal/70 mb-6">
                      Thank you, {formData.name}. We have received your reservation for {formData.guests}{' '}
                      guests on {formData.date} at {formData.time}. A confirmation has been sent to{' '}
                      {formData.email}.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          guests: '2',
                          date: '',
                          time: '',
                        });
                      }}
                      className="text-coffee font-medium hover:underline"
                    >
                      Make another reservation
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="relative">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee/50">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border ${
                            errors.name ? 'border-red-400' : 'border-coffee/10'
                          } focus:border-coffee focus:ring-2 focus:ring-coffee/20 outline-none transition-all`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee/50">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email address"
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border ${
                            errors.email ? 'border-red-400' : 'border-coffee/10'
                          } focus:border-coffee focus:ring-2 focus:ring-coffee/20 outline-none transition-all`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div className="relative">
                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee/50">
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border ${
                            errors.phone ? 'border-red-400' : 'border-coffee/10'
                          } focus:border-coffee focus:ring-2 focus:ring-coffee/20 outline-none transition-all`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* Guests */}
                      <div className="relative">
                        <label htmlFor="guests" className="sr-only">Number of Guests</label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee/50">
                          <Users className="w-5 h-5" />
                        </div>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border ${
                            errors.guests ? 'border-red-400' : 'border-coffee/10'
                          } focus:border-coffee focus:ring-2 focus:ring-coffee/20 outline-none transition-all appearance-none cursor-pointer`}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Date */}
                      <div className="relative">
                        <label htmlFor="date" className="sr-only">Date</label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee/50">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={getTodayDate()}
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border ${
                            errors.date ? 'border-red-400' : 'border-coffee/10'
                          } focus:border-coffee focus:ring-2 focus:ring-coffee/20 outline-none transition-all`}
                        />
                        {errors.date && (
                          <p className="text-red-500 text-xs mt-1 ml-1">{errors.date}</p>
                        )}
                      </div>

                      {/* Time */}
                      <div className="relative">
                        <label htmlFor="time" className="sr-only">Time</label>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee/50">
                          <Clock className="w-5 h-5" />
                        </div>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border ${
                            errors.time ? 'border-red-400' : 'border-coffee/10'
                          } focus:border-coffee focus:ring-2 focus:ring-coffee/20 outline-none transition-all appearance-none cursor-pointer`}
                        >
                          <option value="" disabled>Select time</option>
                          {[
                            '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
                            '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
                            '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM',
                            '08:00 PM', '09:00 PM',
                          ].map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        {errors.time && (
                          <p className="text-red-500 text-xs mt-1 ml-1">{errors.time}</p>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-coffee hover:bg-coffee-600 disabled:bg-coffee/60 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Confirming...
                        </>
                      ) : (
                        'Reserve Your Table'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
