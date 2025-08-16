'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, Mail, Code, Shield, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-gentle"></div>
        <div className="absolute top-32 right-4 sm:right-20 w-56 h-56 sm:w-96 sm:h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 sm:w-80 sm:h-80 bg-success-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-10"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-primary-700 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                Professional Digital Solutions
              </div>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-3 lg:mb-4 leading-[1.15] pb-2"
            >
              Elevate Your
              <span className="text-gradient block inline-block pb-2 border-b-2 border-transparent">Digital Presence</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-secondary-600 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4 mt-0 pt-0"
            >
              We create stunning websites, set up professional email systems, and manage your domains. 
              Your business deserves a digital presence that <span className="font-semibold text-primary-600">stands out</span> and <span className="font-semibold text-accent-600">performs</span>.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 lg:mb-20 px-4"
            >
              <a href="#contact" className="btn-primary flex items-center justify-center gap-3 text-base sm:text-lg w-full sm:w-auto">
                Let's Get Started
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#portfolio" className="btn-secondary text-base sm:text-lg w-full sm:w-auto">
                View Our Work
              </a>
            </motion.div>
            
            {/* Service Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-2xl sm:max-w-3xl mx-auto px-4"
            >
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-secondary-800">Website Creation</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-secondary-800">M365 Email</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-success-400 to-success-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-secondary-800">Vercel Hosting</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-accent-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-secondary-800">Domain Management</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Side decorative elements */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-primary-400 to-transparent hidden lg:block"></div>
      <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-accent-400 to-transparent hidden lg:block"></div>
    </section>
  )
} 