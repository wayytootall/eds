import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elevate Digital Solutions - Professional Web Services & Digital Presence',
  description: 'Professional web services, email solutions, domain management, and website creation. Elevate your digital presence with our expert solutions.',
  keywords: 'web services, professional email, domains, website creation, digital presence, web development',
  authors: [{ name: 'Elevated Digital Solutions LLC' }],
  openGraph: {
    title: 'Elevate Digital Solutions - Professional Web Services',
    description: 'Professional web services, email solutions, domain management, and website creation.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 