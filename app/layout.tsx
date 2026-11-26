import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fydel — Convertí visitas en clientes que vuelven',
  description: 'Tu restaurante, su app favorita. Fidelización, Coins, pedidos, Giftcards y membresías con la identidad de tu negocio. Conocé Fydel y probá el prototipo interactivo.',
  icons: {
    icon: [
      {
        url: '/fidel-mark.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/fidel-mark.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/fidel-mark.png',
        type: 'image/png',
      },
    ],
    apple: '/fidel-mark.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ff8000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
