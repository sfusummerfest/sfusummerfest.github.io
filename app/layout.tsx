import '@fortawesome/fontawesome-free/css/all.min.css'
import { Inter } from 'next/font/google'
import { Karla } from 'next/font/google'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const karla = Karla({ subsets: ['latin'] })

export const metadata = {
  title: 'SFU Summer Festival',
  description: 'Website of the SFU Anime Summer Festival',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
