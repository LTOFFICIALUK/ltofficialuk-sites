'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Zap, TrendingUp, Rocket } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float hidden md:block">
        <div className="w-4 h-4 bg-crypto-gold rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float hidden md:block" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-crypto-green rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-3 h-3 bg-crypto-purple rounded-full opacity-60"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="hidden md:inline-flex items-center px-4 py-2 bg-dark-200/50 backdrop-blur-custom rounded-full border border-crypto-green/30 mb-8">
            <Zap className="w-4 h-4 text-crypto-green mr-2" />
            <span className="text-sm font-medium text-crypto-green">Professional Meme Coin Websites</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Professional Websites</span>
            <br />
            <span className="text-white">for Your Project</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Tokens with professional websites perform better. I create simple, affordable websites 
            that showcase your project, explain your vision, and keep all community links in one place.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-crypto-green mb-2">25+</div>
              <div className="text-gray-400 text-sm">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-crypto-gold mb-2">$300+</div>
              <div className="text-gray-400 text-sm">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-crypto-purple mb-2">12-24h</div>
              <div className="text-gray-400 text-sm">Fast Delivery</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center"
              aria-label="View my portfolio"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary flex items-center"
              aria-label="Get in touch"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={handleScrollDown}
              className="text-gray-400 hover:text-crypto-green transition-colors duration-300"
              aria-label="Scroll down to learn more"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
