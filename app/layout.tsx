import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Columbia Venture Partners',
  description: 'Student club for entrepreneurship at Columbia University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
