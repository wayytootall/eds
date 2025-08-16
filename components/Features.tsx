'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, Shield, Zap, Headphones, Rocket, Target } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built on Vercel with global CDN, your website will load in milliseconds from anywhere in the world.',
    color: 'text-primary-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Microsoft 365 security, SSL certificates, and domain protection keep your business safe and compliant.',
    color: 'text-success-600'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Personal project managers and developers who understand your business and deliver exactly what you need.',
    color: 'text-accent-600'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'We don\'t just build websites - we create digital assets that drive real business growth and conversions.',
    color: 'text-primary-600'
  },
  {
    icon: Zap,
    title: 'Modern Tech Stack',
    description: 'Built with the latest technologies including Next.js, React, and Vercel for optimal performance.',
    color: 'text-accent-600'
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'We\'re here for you long after launch with maintenance, updates, and strategic guidance.',
    color: 'text-success-600'
  }
]

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-primary-700 font-semibold text-sm mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-secondary-900 mb-6">
            We Don't Just Build Websites
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            We create digital experiences that elevate your brand, engage your audience, and drive real business results. 
            No templates, no cookie-cutter solutions - just custom excellence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </div>
              
              <h3 className="text-2xl font-black text-secondary-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-secondary-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto text-white">
            <h3 className="text-3xl font-black mb-6">
              Ready to Elevate Your Digital Presence?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join businesses who trust us to create their digital success stories. 
              Let's discuss how we can help you achieve your online goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-600 hover:bg-secondary-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg block">
                Schedule a Consultation
              </a>
              <a href="#portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 block">
                View Our Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 