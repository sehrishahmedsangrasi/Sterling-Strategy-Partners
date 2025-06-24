'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    },
    []
  );

  const validateForm = () => {
    let valid = true;
    const newErrors: Partial<FormData> = {};

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <motion.h1
          className="text-4xl font-extrabold text-[#d4af37] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl text-[#d4af37]">{service.icon}</div>
              <h2 className="mt-4 text-2xl font-semibold text-[#1b2a41]">{service.title}</h2>
              <p className="mt-2 text-[#36454f]">{service.description}</p>
              <p className="mt-2 text-[#d4af37] font-semibold">Price: {service.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-3xl font-semibold text-[#d4af37] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Inquire About a Service
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          {(['name', 'email', 'service', 'message'] as (keyof FormData)[]).map((field, idx) => (
            <div key={idx}>
              <label className="block text-[#1b2a41] font-medium mb-2" htmlFor={field}>
                {field === 'service'
                  ? 'Choose a Service'
                  : field === 'message'
                  ? 'Your Message'
                  : field.charAt(0).toUpperCase() + field.slice(1).replace('name', 'Full Name')}
              </label>

              {field === 'service' ? (
                <select
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-md bg-[#f8f9fa] border ${
                    errors[field] ? 'border-red-500' : 'border-[#d4af37]'
                  }`}
                >
                  <option value="">Select a Service</option>
                  {servicesData.map((s, i) => (
                    <option key={i} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              ) : field === 'message' ? (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-md bg-[#f8f9fa] border ${
                    errors[field] ? 'border-red-500' : 'border-[#d4af37]'
                  }`}
                  placeholder="Describe your inquiry"
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-md bg-[#f8f9fa] border ${
                    errors[field] ? 'border-red-500' : 'border-[#d4af37]'
                  }`}
                  placeholder={field === 'name' ? 'Your Full Name' : 'Your Email'}
                />
              )}

              {errors[field] && (
                <span className="text-red-500 text-sm">{errors[field]}</span>
              )}
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
