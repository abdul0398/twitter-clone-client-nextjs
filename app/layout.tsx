import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '../context/authprovider';
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        <Toaster/>
        </Providers>
        </body>
    </html>
  )
}
