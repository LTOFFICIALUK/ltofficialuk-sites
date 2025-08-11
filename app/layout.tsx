import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ltofficial.xyz'),
  title: 'LT Official - Web2 & Web3 Web Developer',
  description: 'Professional web developer specializing in web2 & web3 projects. Expert in Next.js, React, and blockchain development.',
  keywords: 'web2, web3, web developer, Next.js, React, blockchain, cryptocurrency',
  authors: [{ name: 'LT Official UK' }],
  creator: 'LT Official UK',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: 'any' },
    ],
  },
  openGraph: {
    title: 'LT Official - Web2 & Web3 Web Developer',
    description: 'Professional web developer specializing in web2 & web3 projects.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LT Official - Web2 & Web3 Web Developer',
    description: 'Professional web developer specializing in web2 & web3 projects.',
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
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
