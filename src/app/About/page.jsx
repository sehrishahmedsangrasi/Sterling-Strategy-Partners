// File: app/about/page.js
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// export const metadata = {
//   title: 'About | Sterling Strategy Partners',
//   description: 'Learn about our expertise in corporate strategy and business optimization.',
// };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <>
     {/* Hero Section */}
     <motion.section 
        className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 bg-navy text-gold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        <div className="container-custom text-center px-4">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            About Sterling Strategy Partners
          </motion.h1>
          <motion.p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Strategic expertise to help your business thrive in today's competitive landscape.
          </motion.p>
        </div>
      </motion.section>
   
    <div className='px-[3rem]'>
     

      {/* Founder Profile */}
      <motion.section 
        className="py-10 sm:py-12 md:py-16 bg-white text-navy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={fadeUp}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div className="order-2 lg:order-1 px-4 sm:px-6 md:px-0" variants={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">Meet Our Founder</h2>
              <p className="mb-3 sm:mb-4 text-base sm:text-lg">
                With over 15 years of experience in corporate strategy and marketing...
              </p>
              <p className="mb-3 sm:mb-4 text-base sm:text-lg">
                Having worked with Fortune 500 companies...
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg">
                Our approach combines data-driven insights...
              </p>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-serif mb-2 sm:mb-3">Education</h3>
                <ul className="list-disc pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>MBA in Strategic Management, Harvard Business School</li>
                  <li>Bachelor of Science in Business Administration, Stanford University</li>
                </ul>
              </div>
              <Link href="/contact" className="btn btn-primary text-sm sm:text-base">
                Schedule a Consultation
              </Link>
            </motion.div>

            <motion.div className="order-1 lg:order-2 flex justify-center mb-6 lg:mb-0" variants={fadeUp}>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-gold shadow-xl">
                <Image 
                  src="/headshot.jpg" 
                  alt="Founder of Sterling Strategy Partners" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, 20rem"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section 
        className="py-10 sm:py-12 md:py-16  text-navy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={fadeUp}
      >
        <div className="container-custom">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-0">
            {[
              {
                title: 'Strategic Planning',
                desc: 'Develop comprehensive business strategies...',
                icon: <img src='/trophy.png' alt='Guarantee Icon' />
              },
              {
                title: 'Operational Optimization',
                desc: 'Identify inefficiencies and implement solutions...',
                icon: <img src='/guarantee.png' alt='Guarantee Icon' />
              },
              {
                title: 'Performance Measurement',
                desc: 'Implement robust systems to track, analyze...',
                icon: <img src='/customer-support.png' alt='Guarantee Icon' />
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
                variants={fadeUp}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-navy-light rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                    {item.icon}
                  
                </div>
                <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        className="py-10 sm:py-12 md:py-16 bg-white text-navy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={fadeUp}
      >
        <div className="container-custom">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Certifications & Affiliations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-0">
            {/* Repeatable Card Animation */}
            {[1, 2, 3, 4].map((_, i) => (
              <motion.div 
                key={i} 
                className=" p-4 sm:p-6 rounded-lg flex flex-col items-center text-center"
                variants={fadeUp}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-navy rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <img src='/star.jpeg'></img>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Certification {i + 1}</h3>
                <p className="text-xs sm:text-sm text-gray-600">Affiliation description goes here.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
    </>
  );
}
