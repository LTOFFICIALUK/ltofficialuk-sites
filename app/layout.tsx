import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ltofficialuk.com'),
  title: 'LT Official UK - Meme Coin Crypto Developer',
  description: 'Professional web developer specializing in meme coin crypto projects. Expert in Next.js, React, and blockchain development.',
  keywords: 'meme coin, crypto developer, web development, Next.js, React, blockchain, cryptocurrency',
  authors: [{ name: 'LT Official UK' }],
  creator: 'LT Official UK',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'LT Official UK - Meme Coin Crypto Developer',
    description: 'Professional web developer specializing in meme coin crypto projects.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LT Official UK - Meme Coin Crypto Developer',
    description: 'Professional web developer specializing in meme coin crypto projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
