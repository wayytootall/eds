'use client'

import { motion } from 'framer-motion'
import { Globe, Mail, Code, Shield, BarChart3, Smartphone, Zap, Palette } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Website Creation',
    description: 'Custom website design and development that perfectly represents your brand and business objectives.',
    features: ['Custom design & development', 'Responsive layouts', 'SEO optimization', 'Content management systems']
  },
  {
    icon: Mail,
    title: 'Microsoft 365 Setup',
    description: 'Professional email setup with your custom domain using Microsoft 365 Business solutions.',
    features: ['Custom domain emails', 'Outlook & Teams setup', 'Mobile & desktop sync', 'Advanced security features']
  },
  {
    icon: Globe,
    title: 'Vercel Hosting',
    description: 'Lightning-fast hosting on Vercel with automatic deployments and global CDN for optimal performance.',
    features: ['Automatic deployments', 'Global CDN', 'SSL certificates', 'Performance monitoring']
  },
  {
    icon: Shield,
    title: 'Domain Management',
    description: 'Secure domain registration and management through GoDaddy with DNS configuration and protection.',
    features: ['Domain registration', 'DNS management', 'Domain protection', 'Transfer assistance']
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Complete brand identity design including logos, color schemes, and visual guidelines.',
    features: ['Logo design', 'Color palette', 'Typography', 'Brand guidelines']
  },
  {
    icon: BarChart3,
    title: 'Analytics & SEO',
    description: 'Comprehensive analytics and search engine optimization to grow your online visibility.',
    features: ['Google Analytics setup', 'SEO optimization', 'Performance tracking', 'Conversion insights']
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Ensure your website performs flawlessly across all devices and screen sizes.',
    features: ['Mobile-first design', 'Touch optimization', 'Fast loading', 'Cross-device testing']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your website with advanced optimization techniques and best practices.',
    features: ['Image optimization', 'Code minification', 'Caching strategies', 'Performance audits']
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-primary-700 font-semibold text-sm mb-6">
            What We Do
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-secondary-900 mb-6">
            Our Digital Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            We focus on what we do best: creating stunning websites, setting up professional email systems, 
            and managing your digital presence. No hosting headaches, no database management - just results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-secondary-100 hover:border-primary-300 card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 