"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const scaleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]">
      {/* Hero Section with CTAs */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto text-center mb-20"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#1b2a41] mb-6">
          Strategic Digital Marketing Expertise
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-[#36454f] mb-10 max-w-3xl mx-auto">
          With over 10 years of experience transforming brands, I deliver measurable results through data-driven strategies.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-[#d4af37] hover:bg-[#b5a642] text-[#1b2a41] font-bold py-3 px-8 rounded-md transition duration-300 shadow-md"
          >
            Book a Consultation
          </Link>
          <a
  href="https://drive.google.com/file/d/1twyr3OHe-4ZcgkhtKhTTZUErUDtG_ZXN/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-white text-[#1b2a41] border-2 border-[#1b2a41] hover:bg-[#f0f2f5] font-bold py-3 px-8 rounded-md transition duration-300 shadow-md">
    Download My Resume
  </button>
</a>
        </motion.div>
      </motion.div>

      {/* Experience & Credentials */}
      <div className="max-w-7xl mx-auto mb-20" ref={ref}>
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[10, 50, 12].map((number, index) => (
            <motion.div 
              key={index}
              variants={scaleVariants}
              className="bg-[#eef1f6] p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-5xl font-bold text-[#d4af37] mb-2">{number}+</h3>
              <p className="text-[#1b2a41] font-semibold">
                {index === 0 ? 'Years in Digital Marketing' : 
                 index === 1 ? 'Satisfied Clients' : 'Industry Certifications'}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1b2a41] mb-8 text-center">Certifications</h2>
          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            {['Google Analytics Certified', 'HubSpot Certified', 'Facebook Blueprint'].map((cert, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-[#e0e3e7]"
              >
                <div className="h-12 w-12 mr-4 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold">
                  {cert.split(' ').map(word => word[0]).join('')}
                </div>
                <span className="font-medium text-[#36454f]">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Client Logos */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-[#1b2a41] mb-8 text-center">Trusted By</h2>
          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {['10 Pearls', 'contour Software', 'Systems Ltd.', 'GitHub'].map((item, index) => (
              <motion.div 
                key={item}
                variants={itemVariants}
                custom={index}
                className="h-16 w-40 bg-[#eef1f6] rounded-lg flex items-center justify-center text-[#36454f] font-medium"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Services Overview */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto mb-20"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#1b2a41] mb-12 text-center">Core Services</motion.h2>
        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border border-[#e0e3e7]"
            >
              <div className="text-[#d4af37] mb-4">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1b2a41] mb-3">{service.title}</h3>
              <p className="text-[#36454f]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Testimonials */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto mb-20"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#1b2a41] mb-12 text-center">Client Testimonials</motion.h2>
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-[#e0e3e7]"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full mr-4 bg-[#d4af37] flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#1b2a41]">{testimonial.name}</h4>
                  <p className="text-[#36454f] text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-[#36454f] italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Final CTA */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleVariants}
        className="max-w-4xl mx-auto bg-[#1b2a41] text-white p-12 rounded-lg shadow-lg"
      >
        <motion.h2 variants={fadeInVariants} className="text-3xl font-bold mb-6 text-center">Ready to Transform Your Business?</motion.h2>
        <motion.form 
          variants={containerVariants}
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#2a3a52] border border-[#364f6b] text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-[#2a3a52] border border-[#364f6b] text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                required
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded bg-[#2a3a52] border border-[#364f6b] text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              required
            ></textarea>
          </motion.div>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#d4af37] hover:bg-[#b5a642] text-[#1b2a41] font-bold py-3 px-6 rounded transition duration-300 shadow-md"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

// Sample data (unchanged)
const services = [
  {
    title: "Digital Strategy",
    description: "Comprehensive digital roadmaps tailored to your business objectives and market position.",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Brand Positioning",
    description: "Crafting distinctive brand identities that resonate with your target audience.",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns optimized for maximum ROI and conversion rates.",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CMO, TechStart Inc.",
    quote: "Our digital transformation exceeded all KPIs. The strategic approach delivered 3x our expected ROI in just 6 months."
  },
  {
    name: "Michael Chen",
    position: "Founder, GrowthLab",
    quote: "The rebranding positioned us perfectly in a competitive market. Our customer engagement metrics improved dramatically."
  }
];

export default Experience;