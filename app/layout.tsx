import '@fortawesome/fontawesome-free/css/all.min.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/NavBar'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SFU Summer Festival',
  description: 'Website of SFU Summer Festival',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
