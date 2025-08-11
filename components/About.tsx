'use client'

import { useEffect, useState } from 'react'
import { Code, Globe, Zap, Shield, Users, TrendingUp } from 'lucide-react'

const About = () => {
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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: 'Website Design', level: 95 },
    { name: 'Next.js/React', level: 98 },
    { name: 'TailwindCSS', level: 92 },
    { name: 'Mobile Responsive', level: 100 },
    { name: 'SEO Optimization', level: 95 },
    { name: 'Fast Loading', level: 90 },
  ]

  const expertise = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Professional Design',
      description: 'Clean, modern websites that build trust and credibility.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Project Showcase',
      description: 'Clear explanation of your token\'s vision and tokenomics.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast & Responsive',
      description: 'Websites that load quickly and work perfectly on all devices.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Community Hub',
      description: 'All your social links and community resources in one place.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Investor Focused',
      description: 'Design that helps attract and retain potential investors.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Affordable Pricing',
      description: 'Professional quality at prices that work for meme coin projects.'
    },
  ]

  return (
    <section id="about" className="section-padding bg-dark-200">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Why Meme Coins Need Websites</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional websites give your meme coin credibility and help attract investors. 
              I create simple, effective websites that explain your project and keep everything organized.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  What I Do Best
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I create simple, professional websites that help meme coins look legitimate and attract investors. 
                  My websites clearly explain your project's vision, showcase your tokenomics, and keep all your 
                  community links organized in one place.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I focus on what matters most: a clean design, clear messaging, and easy navigation. 
                  From simple landing pages to complex integrations, I build solid websites that help your project succeed.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Beyond web development, I'm also the Director of Marketing for Vibes Streaming (vibes.stream), 
                  bringing marketing expertise to help your project reach its full potential.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">Technical Expertise</h4>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-crypto-green">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-300 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-crypto-green to-crypto-purple h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Expertise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <div 
                  key={index}
                  className="bg-dark-300 p-6 rounded-xl border border-dark-400 hover:border-crypto-green/30 transition-all duration-300 card-hover"
                >
                  <div className="text-crypto-green mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-crypto-green mb-2">3+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-crypto-gold mb-2">25+</div>
              <div className="text-gray-400 text-sm">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-crypto-purple mb-2">12-24h</div>
              <div className="text-gray-400 text-sm">Fast Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-crypto-green mb-2">$300+</div>
              <div className="text-gray-400 text-sm">Starting Price</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
