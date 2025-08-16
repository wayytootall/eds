'use client'

import { motion } from 'framer-motion'
import { Globe, Mail, Code, Shield, ArrowUp, Sparkles } from 'lucide-react'

const services = [
  { name: 'Website Creation', href: '#services' },
  { name: 'Microsoft 365 Setup', href: '#services' },
  { name: 'Vercel Hosting', href: '#services' },
  { name: 'Domain Management', href: '#services' },
  { name: 'Brand Identity', href: '#services' },
  { name: 'Analytics & SEO', href: '#services' }
]

const company = [
  { name: 'About Us - Coming Soon', href: '#about' },
  { name: 'Our Team - Coming Soon', href: '#team' },
  { name: 'Portfolio - Coming Soon', href: '#portfolio' },
  { name: 'Blog - Coming Soon', href: '#blog' },
  { name: 'Careers - Coming Soon (hopefully!)', href: '#careers' }
]

const support = [
  { name: 'Help Center - Coming Soon', href: '#help' },
  { name: 'Documentation - Coming Soon', href: '#docs' },
  { name: 'Status Page - Coming Soon', href: '#status' },
  { name: 'Contact Support - Coming Soon', href: '#contact' },
  { name: 'Maintenance Plans - Coming Soon', href: '#maintenance' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black">Elevated Digital Solutions</span>
            </div>
            <p className="text-secondary-300 mb-8 text-lg leading-relaxed">
              We create stunning websites, set up professional email systems, and manage your digital presence. 
              Your business deserves to stand out online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-secondary-700 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-secondary-700 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.344C1 18.4 1.595 19 2.328 19h15.34c.734 0 1.332-.6 1.332-1.328V2.328C19 1.581 18.4 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-secondary-700 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-secondary-300 hover:text-white transition-colors duration-300 text-lg">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-secondary-300 hover:text-white transition-colors duration-300 text-lg">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-secondary-300 hover:text-white transition-colors duration-300 text-lg">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-secondary-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-400" />
              <p className="text-secondary-400 text-base">
                © 2025 Elevated Digital Solutions LLC. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-8 text-base text-secondary-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <ArrowUp className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 