'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$500',
    period: 'variable',
    description: 'Perfect for small businesses starting their digital journey',
    features: [
      'Custom website design & development',
      'Microsoft 365 email setup (5 users)',
      'Domain registration & DNS setup',
      'Vercel hosting & deployment',
      'Basic SEO optimization',
      'Mobile responsive design',
      '3 months of support',
      'Content management training'
    ],
    popular: false,
    color: 'border-secondary-200'
  },
  {
    name: 'Growth',
    price: '$2,000',
    period: 'variable',
    description: 'Ideal for growing businesses with advanced digital needs',
    features: [
      'Custom website design & development',
      'Microsoft 365 email setup (25 users)',
      'Domain registration & DNS setup',
      'Vercel hosting & deployment',
      'Advanced SEO optimization',
      'E-commerce functionality',
      'Analytics & tracking setup',
      '12 months of support',
      'Performance optimization',
      'Content strategy consultation'
    ],
    popular: true,
    color: 'border-primary-500'
  },
  {
    name: 'Enterprise',
    price: 'Contact',
    period: 'variable',
    description: 'Comprehensive solutions for established businesses',
    features: [
      'Custom website design & development',
      'Microsoft 365 email setup (unlimited users)',
      'Multiple domain management',
      'Vercel hosting & deployment',
      'Full SEO & marketing suite',
      'Advanced e-commerce features',
      'Custom integrations',
      '24/7 priority support',
      'Performance monitoring',
      'Ongoing maintenance plan',
      'Dedicated project manager',
      'Quarterly strategy reviews'
    ],
    popular: false,
    color: 'border-secondary-200'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-primary-700 font-semibold text-sm mb-6">
            Transparent Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-secondary-900 mb-6">
            Investment in Your Success
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
            We believe in transparent, value-based pricing. All plans include our core services: 
            website creation, M365 setup, domain management, and Vercel hosting.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-10 shadow-2xl border-2 ${plan.color} ${
                plan.popular ? 'ring-4 ring-primary-500 ring-opacity-30' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-secondary-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-black text-gradient">{plan.price}</span>
                  <span className="text-secondary-500 ml-2 font-semibold">{plan.period}</span>
                </div>
                <p className="text-secondary-600 text-lg">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-6 h-6 text-success-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 text-center block ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800 hover:shadow-lg'
                }`}
              >
                Get Started
              </a>
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
          <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-5xl mx-auto">
            <h3 className="text-3xl font-black text-secondary-900 mb-6">
              Need Something Custom?
            </h3>
            <p className="text-xl text-secondary-600 mb-8">
              We offer tailored solutions for specific business requirements. Let's discuss your unique needs 
              and create a custom package that fits your budget and goals.
            </p>
            <a href="#contact" className="btn-accent text-lg block text-center">
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 