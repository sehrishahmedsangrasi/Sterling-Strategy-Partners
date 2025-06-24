

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail,Linkedin, Calendar } from 'lucide-react';
import { db } from '../firebase'; // Adjust the path according to your project structure
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let temp = {};
    if (!formData.name.trim()) temp.name = 'Name is required';
    if (!formData.email) temp.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = 'Email is invalid';
    if (!formData.message.trim()) temp.message = 'Message is required';
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await addDoc(collection(db, "contacts"), {
          ...formData,
          createdAt: serverTimestamp(),
        });
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        console.error("Error sending message:", err);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div className="min-h-screen bg-navy text-white p-6 flex flex-col items-center justify-center space-y-10">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold"
      >
        Contact Me
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-charcoal w-full max-w-xl rounded-xl p-6 shadow-2xl space-y-5"
      >
        {submitted && <p className="text-gold font-semibold">Message sent successfully!</p>}

        <div>
          <label className="block font-medium text-gold">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full mt-1 px-4 py-2 rounded-md text-black focus:ring-2 focus:ring-gold ${
              errors.name ? 'border border-red-500' : 'border border-gray-300'
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium text-gold">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full mt-1 px-4 py-2 rounded-md text-black focus:ring-2 focus:ring-gold ${
              errors.email ? 'border border-red-500' : 'border border-gray-300'
            }`}
            placeholder="you@example.com"
            type="email"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block font-medium text-gold">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`w-full mt-1 px-4 py-2 rounded-md text-black focus:ring-2 focus:ring-gold ${
              errors.message ? 'border border-red-500' : 'border border-gray-300'
            }`}
            placeholder="Your message..."
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-gold text-charcoal font-semibold px-6 py-2 rounded-md hover:bg-brass hover:text-white transition"
        >
          Send Message
        </button>
      </motion.form>

      <motion.div
        className="flex space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="text-gold hover:text-brass hover:scale-110 transition"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="mailto:your@email.com"
          className="text-gold hover:text-brass hover:scale-110 transition"
        >
          <Mail size={32} />
        </a>
        <a
          href="https://calendly.com/your-calendar"
          target="_blank"
          className="text-gold hover:text-brass hover:scale-110 transition"
        >
          <Calendar size={32} />
        </a>
      </motion.div>
    </div>
  );
}
