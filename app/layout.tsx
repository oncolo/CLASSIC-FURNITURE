import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Classic Furniture | Timeless Elegance',
  description: 'Handcrafted premium furniture for Ethiopian homes since 1998.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="am">
      <body>{children}</body>
    </html>
  )
}
