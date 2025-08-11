'use client'

import { useEffect, useState } from 'react'
import { Rocket, Globe, Shield, Users } from 'lucide-react'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  price: string
  popular?: boolean
}

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const services: ServiceItem[] = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'One Page Website',
      description: 'Simple, professional website with everything in one place',
      features: [
        'One page with all your content',
        'Project explanation and lore',
        'Community links (Telegram, Twitter, etc.)',
        'Images, GIFs, and videos',
        'Professional, clean design',
        'Mobile responsive',
        'Fast loading',
        '12-24 hour delivery'
      ],
      price: '$300-$500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Page Website',
      description: 'Professional website with separate pages for different content',
      features: [
        'Home page with main content',
        'About/Lore page',
        'Team page',
        'Roadmap page',
        'Community links page',
        'Professional design throughout',
        'Mobile responsive',
        '24-36 hour delivery'
      ],
      price: '$800-$1,200',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Premium Website',
      description: 'Complete website with advanced features and custom design',
      features: [
        'Everything in Multi-Page package',
        'Custom animations and effects',
        'Advanced design elements',
        'Blog/news section',
        'Contact form',
        'Analytics setup',
        'Priority support',
        '36-48 hour delivery'
      ],
      price: '$1,500-$2,000'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Custom Site',
      description: 'Initial site deployed with continuous updates',
      features: [
        'Initial site deployed quickly',
        'Continuous updates for 1-2 weeks',
        'Blockchain integration (discuss requirements)',
        'Smart contract display (discuss requirements)',
        'DeFi protocol integration (discuss requirements)',
        'Custom functionality',
        'Third-party integrations',
        'Advanced analytics'
      ],
      price: '$2,500+'
    }
  ]



  return (
    <section id="services" className="section-padding bg-dark-200">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Website Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, affordable website packages designed specifically for your needs. 
              Professional quality at prices that work for your project.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative bg-dark-300 p-8 rounded-xl border transition-all duration-300 card-hover ${
                  service.popular 
                    ? 'border-crypto-green shadow-lg shadow-crypto-green/20' 
                    : 'border-dark-400 hover:border-crypto-green/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-crypto-green text-dark-100 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-crypto-green mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-crypto-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-dark-400 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-crypto-green">{service.price}</span>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn-primary"
                      aria-label={`Get started with ${service.title}`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* Process Section */}
          <div className="bg-dark-300 rounded-xl p-8 border border-dark-400">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              My Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-crypto-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-dark-100">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Discovery</h4>
                <p className="text-gray-400 text-sm">Understanding your vision and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-crypto-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-dark-100">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Planning</h4>
                <p className="text-gray-400 text-sm">Architecture design and technical planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-crypto-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-dark-100">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Development</h4>
                <p className="text-gray-400 text-sm">Building your platform with best practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-crypto-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-dark-100">4</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Launch</h4>
                <p className="text-gray-400 text-sm">Deployment and ongoing support</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Need something specific? Let's discuss your requirements and find the right solution.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              aria-label="Discuss your needs"
            >
              Discuss Your Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
