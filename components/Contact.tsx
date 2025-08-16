'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-primary-700 font-semibold text-sm mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-secondary-900 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            Ready to elevate your digital presence? Get in touch with our team to discuss 
            your project and discover how we can help you achieve your online goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-black text-secondary-900">
                Send us a Message
              </h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-secondary-700 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-secondary-700 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-secondary-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-bold text-secondary-700 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-bold text-secondary-700 mb-3">
                  Service Interest
                </label>
                <select
                  id="service"
                  className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
                >
                  <option value="">Select a service</option>
                  <option value="website-creation">Website Creation</option>
                  <option value="m365-setup">Microsoft 365 Setup</option>
                  <option value="domain-management">Domain Management</option>
                  <option value="brand-identity">Brand Identity Design</option>
                  <option value="custom-solution">Custom Solution</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-secondary-700 mb-3">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-lg"
                  placeholder="Tell us about your project, goals, and requirements..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 text-lg">
                <Send className="w-6 h-6" />
                Send Message
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-black text-secondary-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Our team is here to help you navigate the digital landscape and create 
                solutions that drive real business results. Let's start a conversation.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">Email Us</h4>
                  <p className="text-secondary-600 text-lg">hello@elevatetodigital.com</p>
                  <p className="text-secondary-600 text-lg">support@elevatetodigital.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">Call Us</h4>
                  <p className="text-secondary-600 text-lg">+1 (575) 313-1029</p>
                  <p className="text-secondary-600 text-base">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-success-400 to-success-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>

              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">Business Hours</h4>
                  <p className="text-secondary-600 text-lg">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-secondary-600 text-lg">Saturday: 10:00 AM - 2:00 PM EST</p>
                  <p className="text-secondary-600 text-base">Emergency support available 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 