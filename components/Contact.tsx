'use client'

import { useState } from 'react'
import { MessageCircle, Twitter, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react'

interface FormData {
  name: string
  email: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const projectTypes = [
    'Token Launch Website',
    'DeFi Platform',
    'NFT Marketplace',
    'Community Platform',
    'Security Audit',
    'Custom Development',
    'Other'
  ]

  const budgetRanges = [
    'Under £2,000',
    '£2,000 - £5,000',
    '£5,000 - £10,000',
    '£10,000 - £25,000',
    '£25,000+'
  ]

  const timelineOptions = [
    'ASAP (1-2 weeks)',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type'
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range'
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide project details'
    } else if (formData.message.length < 50) {
      newErrors.message = 'Please provide more details (minimum 50 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Discord',
      value: 'ltofficialuk1',
      link: 'https://discord.com/users/ltofficialuk1',
      description: 'Best for quick questions and project discussions'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: 'X (Twitter)',
      value: '@ltofficialuk',
      link: 'https://twitter.com/ltofficialuk',
      description: 'Great for updates and longer conversations'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'North West, United Kingdom',
      link: '#',
      description: 'Works on US time zone'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-dark-100">
      <div className="container-custom">
                  {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Get Your Website</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready for a professional website that helps your meme coin succeed? Discord and X are the best ways to reach me. 
              I respond within 12 hours and work on US time zone for your convenience.
            </p>
          </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-200 p-8 rounded-xl border border-dark-300">
            <h3 className="text-2xl font-bold text-white mb-6">Start Your Project</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-green-400">Thank you! I'll get back to you within 24 hours.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                <span className="text-red-400">Something went wrong. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 bg-dark-300 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-dark-400 focus:border-crypto-green focus:ring-crypto-green/20'
                    } text-white placeholder-gray-500`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-dark-300 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-dark-400 focus:border-crypto-green focus:ring-crypto-green/20'
                    } text-white placeholder-gray-500`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className={`w-full px-4 py-3 bg-dark-300 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                    errors.projectType 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-dark-400 focus:border-crypto-green focus:ring-crypto-green/20'
                  } text-white`}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-red-400 text-sm mt-1">{errors.projectType}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className={`w-full px-4 py-3 bg-dark-300 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                      errors.budget 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-dark-400 focus:border-crypto-green focus:ring-crypto-green/20'
                    } text-white`}
                  >
                    <option value="">Select budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-red-400 text-sm mt-1">{errors.budget}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className={`w-full px-4 py-3 bg-dark-300 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                      errors.timeline 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-dark-400 focus:border-crypto-green focus:ring-crypto-green/20'
                    } text-white`}
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.timeline && (
                    <p className="text-red-400 text-sm mt-1">{errors.timeline}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={6}
                  className={`w-full px-4 py-3 bg-dark-300 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-dark-400 focus:border-crypto-green focus:ring-crypto-green/20'
                  } text-white placeholder-gray-500 resize-none`}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
                <p className="text-gray-500 text-sm mt-1">
                  {formData.message.length}/50 characters minimum
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Submit project inquiry"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Build Your Website</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm here to help you create a professional website that showcases your meme coin project. 
                Whether you need a simple landing page or something more complex, let's discuss your needs.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                info.title === 'Location' ? (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-dark-200 rounded-lg border border-dark-300"
                  >
                    <div className="text-crypto-green mr-4 mt-1">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                      {info.description && (
                        <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 bg-dark-200 rounded-lg border border-dark-300 hover:border-crypto-green/30 transition-all duration-300 group"
                  >
                    <div className="text-crypto-green group-hover:text-crypto-gold transition-colors duration-300 mr-4 mt-1">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                      {info.description && (
                        <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                      )}
                    </div>
                  </a>
                )
              ))}
            </div>

            <div className="bg-dark-200 p-6 rounded-lg border border-dark-300">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-crypto-green mr-3" />
                <h4 className="text-lg font-semibold text-white">Response Time</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I respond to all inquiries within <span className="text-crypto-green font-semibold">12 hours</span>. 
                I work on US time zone for your convenience, so you can expect quick responses 
                regardless of your location.
              </p>
            </div>

            <div className="bg-gradient-to-r from-crypto-green/10 to-crypto-purple/10 p-6 rounded-lg border border-crypto-green/20">
              <h4 className="text-lg font-semibold text-white mb-4">Free Consultation</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every project starts with a free consultation where we discuss your website needs, 
                budget, and timeline. No pressure, just honest advice about what will work best for your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
