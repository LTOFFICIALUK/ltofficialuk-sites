'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  websiteUrl: string
  githubUrl?: string
  category: 'token' | 'Web2'
}

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('portfolio')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'SeahorseMeme',
      description: 'Professional meme coin website with clean design, tokenomics display, and organized community links. Built for maximum investor appeal.',
      image: '/seahorse.png',
      websiteUrl: 'https://seahorsememe.xyz',
      category: 'token'
    },
    {
      id: '2',
      title: 'PROD AI Beats',
      description: 'Professional music production platform with AI-driven beat generation, licensing system, and integrated $PROD token functionality.',
      image: '/prodai.png',
      websiteUrl: 'https://www.prodaibeats.com',
      category: 'Web2'
    },
    {
      id: '3',
      title: 'YouGotBagged',
      description: 'Meme coin website with engaging design, clear project explanation, and community-focused layout for maximum engagement.',
      image: '/yougotbagged.png',
      websiteUrl: 'https://www.yougotbagged.fun',
      category: 'token'
    },
    {
      id: '4',
      title: 'Successful Streamer',
      description: 'Professional web2 platform for content creators with streaming tools, analytics, and community features.',
      image: '/successfulstreamer.png',
      websiteUrl: 'https://successfulstreamer.com',
      category: 'Web2'
    },
    {
      id: '5',
      title: 'Infinite BC1',
      description: 'Cryptocurrency project website with terminal-style interface, blockchain integration, and quantum-themed design elements.',
      image: '/infinitebc1.png',
      websiteUrl: 'https://www.infinitebc1.com',
      category: 'token'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Websites' },
    { id: 'token', label: 'Token Websites' },
    { id: 'Web2', label: 'Web2 Websites' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId)
  }

  return (
    <section id="portfolio" className="section-padding bg-dark-100">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Recent Websites</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Examples of professional meme coin websites I've built. Each one clearly explains 
              the project vision and keeps all community links organized.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-crypto-green text-dark-100'
                    : 'bg-dark-300 text-gray-300 hover:bg-dark-400 hover:text-white'
                }`}
                aria-label={`Filter by ${filter.label}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-dark-200 rounded-xl overflow-hidden border border-dark-300 hover:border-crypto-green/30 transition-all duration-300 card-hover"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>





                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2"
                      aria-label={`Visit ${item.title} website`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 inline" />
                      Visit Site
                    </a>
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-dark-300 text-gray-300 hover:text-crypto-green transition-colors duration-300 rounded-lg"
                        aria-label={`View ${item.title} source code`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Ready for a professional website that helps your meme coin succeed?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              aria-label="Get your website"
            >
              Get Your Website
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
