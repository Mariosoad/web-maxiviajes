import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navbar/Navigation'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maxi Viajes',
  description: 'Tu agencia de viajes a todo el mundo',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="./logo-maxi-viajes.png" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
