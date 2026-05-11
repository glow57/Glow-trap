import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glow Trap Studio',
  description: 'Glow Trap Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
