// 'use client';

// import { motion } from 'framer-motion';
// import { useState, useCallback } from 'react';

// const servicesData = [
//   {
//     title: "Strategic Planning",
//     description: "Developing clear strategies to drive your business forward with a focus on long-term success.",
//     price: "$1500",
//     icon: "📈"
//   },
//   {
//     title: "Operational Optimization",
//     description: "Improving efficiency and productivity through streamlined processes and advanced solutions.",
//     price: "$1200",
//     icon: "⚙️"
//   },
//   {
//     title: "Performance Measurement",
//     description: "Tracking performance to ensure your business meets its targets and identifies areas for growth.",
//     price: "$900",
//     icon: "📊"
//   },
// ];

// const Services = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     service: '',
//     message: ''
//   });
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     service: '',
//     message: ''
//   });

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   }, []);

//   const validateForm = useCallback(() => {
//     let valid = true;
//     const errors = {
//       name: '',
//       email: '',
//       service: '',
//       message: ''
//     };

//     if (!formData.name) {
//       errors.name = 'Name is required';
//       valid = false;
//     } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
//       errors.name = 'Name can only contain letters';
//       valid = false;
//     }

//     if (!formData.email) {
//       errors.email = 'Email is required';
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Please enter a valid email address';
//       valid = false;
//     }

//     if (!formData.service) {
//       errors.service = 'Please select a service';
//       valid = false;
//     }

//     if (!formData.message) {
//       errors.message = 'Message cannot be empty';
//       valid = false;
//     }

//     setErrors(errors);
//     return valid;
//   }, [formData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log('Form Submitted:', formData);
//       setFormData({ name: '', email: '', service: '', message: '' });
//       alert('Your inquiry has been submitted successfully!');
//     } else {
//       console.log('Form contains errors');
//     }
//   };

//   return (
//     <div className="py-12 px-4 bg-[#1b2a41]">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h1 
//           className="text-4xl font-extrabold text-[#d4af37] mb-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Our Services
//         </motion.h1>

//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={index}
//               className="service-card p-6 bg-white rounded-lg shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.2 }}
//             >
//               <div className="text-5xl text-[#d4af37]">{service.icon}</div>
//               <motion.h2 
//                 className="mt-4 text-2xl font-semibold text-[#1b2a41]"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.3 }}
//               >
//                 {service.title}
//               </motion.h2>
//               <motion.p
//                 className="mt-2 text-[#36454f]"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.4 }}
//               >
//                 {service.description}
//               </motion.p>
//               <motion.p
//                 className="mt-2 text-[#d4af37] font-semibold"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.5 }}
//               >
//                 Price: {service.price}
//               </motion.p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.h2
//           className="text-3xl font-semibold text-[#d4af37] mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Inquire About a Service
//         </motion.h2>

//         <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//           <div>
//             <label className="block text-[#1b2a41] font-medium mb-2" htmlFor="name">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className={`w-full p-3 rounded-md bg-[#f8f9fa] text-[#36454f] placeholder-[#b5a642] border ${errors.name ? 'border-red-500' : 'border-[#d4af37]'}`}
//               placeholder="Your Full Name"
//               required
//             />
//             {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
//           </div>
//           <div>
//             <label className="block text-[#1b2a41] font-medium mb-2" htmlFor="email">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className={`w-full p-3 rounded-md bg-[#f8f9fa] text-[#36454f] placeholder-[#b5a642] border ${errors.email ? 'border-red-500' : 'border-[#d4af37]'}`}
//               placeholder="Your Email"
//               required
//             />
//             {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
//           </div>
//           <div>
//             <label className="block text-[#1b2a41] font-medium mb-2" htmlFor="service">
//               Choose a Service
//             </label>
//             <select
//               id="service"
//               name="service"
//               value={formData.service}
//               onChange={handleInputChange}
//               className={`w-full p-3 rounded-md bg-[#f8f9fa] text-[#36454f] placeholder-[#b5a642] border ${errors.service ? 'border-red-500' : 'border-[#d4af37]'}`}
//               required
//             >
//               <option value="">Select a Service</option>
//               {servicesData.map((service, index) => (
//                 <option key={index} value={service.title}>
//                   {service.title}
//                 </option>
//               ))}
//             </select>
//             {errors.service && <span className="text-red-500 text-sm">{errors.service}</span>}
//           </div>
//           <div>
//             <label className="block text-[#1b2a41] font-medium mb-2" htmlFor="message">
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               className={`w-full p-3 rounded-md bg-[#f8f9fa] text-[#36454f] placeholder-[#b5a642] border ${errors.message ? 'border-red-500' : 'border-[#d4af37]'}`}
//               placeholder="Describe your inquiry or request"
//               required
//             />
//             {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-[#d4af37] text-[#1b2a41] font-semibold text-xl rounded-md hover:bg-[#b5a642] transition duration-300"
//           >
//             Submit Inquiry
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Services;


'use client';

import { useState,useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail,Linkedin, Calendar } from 'lucide-react';
import { db } from '../firebase'; // Adjust the path according to your project structure
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const servicesData = [
  {
    title: "Strategic Planning",
    description: "Developing clear strategies to drive your business forward with a focus on long-term success.",
    price: "$1500",
    icon: "📈"
  },
  {
    title: "Operational Optimization",
    description: "Improving efficiency and productivity through streamlined processes and advanced solutions.",
    price: "$1200",
    icon: "⚙️"
  },
  {
    title: "Performance Measurement",
    description: "Tracking performance to ensure your business meets its targets and identifies areas for growth.",
    price: "$900",
    icon: "📊"
  },
];

const Services = () => {
    interface FormData {
    name: string;
    email: string;
    service: string;
    message: string;
  };
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  });

 const [errors, setErrors] = useState<Partial<FormData>>({});


  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Service selection is required';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await addDoc(collection(db, 'inquiries'), formData);
      alert('Your inquiry has been submitted successfully!');
      setFormData({ name: '', email: '', service: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="py-12 px-4 bg-[#1b2a41]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 className="text-4xl font-extrabold text-[#d4af37] mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Our Services
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {servicesData.map((service, index) => (
            <motion.div key={index} className="p-6 bg-white rounded-lg shadow-lg" whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
              <div className="text-5xl text-[#d4af37]">{service.icon}</div>
              <h2 className="mt-4 text-2xl font-semibold text-[#1b2a41]">{service.title}</h2>
              <p className="mt-2 text-[#36454f]">{service.description}</p>
              <p className="mt-2 text-[#d4af37] font-semibold">Price: {service.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2 className="text-3xl font-semibold text-[#d4af37] mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          Inquire About a Service
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {['name', 'email', 'service', 'message'].map((field, idx) => (
            <div key={idx}>
              <label className="block text-[#1b2a41] font-medium mb-2" htmlFor={field}>
                {field === 'service' ? 'Choose a Service' : field === 'message' ? 'Your Message' : field.charAt(0).toUpperCase() + field.slice(1).replace('name', 'Full Name')}
              </label>

              {field === 'service' ? (
                <select
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-md bg-[#f8f9fa] border ${errors[field] ? 'border-red-500' : 'border-[#d4af37]'}`}
                >
                  <option value="">Select a Service</option>
                  {servicesData.map((s, i) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
              ) : field === 'message' ? (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-md bg-[#f8f9fa] border ${errors[field] ? 'border-red-500' : 'border-[#d4af37]'}`}
                  placeholder="Describe your inquiry"
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-md bg-[#f8f9fa] border ${errors[field] ? 'border-red-500' : 'border-[#d4af37]'}`}
                  placeholder={field === 'name' ? 'Your Full Name' : 'Your Email'}
                />
              )}

              {errors[field] && <span className="text-red-500 text-sm">{errors[field]}</span>}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-[#d4af37] text-[#1b2a41] font-semibold text-xl rounded-md hover:bg-[#b5a642] transition duration-300"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Services;
