interface LogoProps {
  size?: number
  className?: string
}

const Logo = ({ size = 48, className = '' }: LogoProps) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main globe circle */}
      <circle cx="24" cy="24" r="20" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
      
      {/* Horizontal lines representing latitude */}
      <path d="M4 24 Q24 16 44 24" stroke="url(#gradient)" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <path d="M4 18 Q24 10 44 18" stroke="url(#gradient)" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M4 30 Q24 38 44 30" stroke="url(#gradient)" strokeWidth="1" fill="none" opacity="0.5"/>
      
      {/* Vertical line representing longitude */}
      <path d="M24 4 L24 44" stroke="url(#gradient)" strokeWidth="1.5" fill="none" opacity="0.7"/>
      
      {/* Central dot */}
      <circle cx="24" cy="24" r="2" fill="url(#gradient)"/>
      
      {/* Small accent dots */}
      <circle cx="32" cy="16" r="1" fill="url(#gradient)" opacity="0.8"/>
      <circle cx="16" cy="32" r="1" fill="url(#gradient)" opacity="0.8"/>
      <circle cx="36" cy="28" r="1" fill="url(#gradient)" opacity="0.6"/>
      <circle cx="12" cy="20" r="1" fill="url(#gradient)" opacity="0.6"/>
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00FF88', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
