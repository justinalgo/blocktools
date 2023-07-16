import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import WalletContextProvider from '@/context/WalletContext'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tools for the Algorand Blockchain - Boring Tools',
  description: 'Random tools for the Algorand blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="h-full">
      <body className={inter.className + ' h-full'}>
        <WalletContextProvider>
          <div className="min-h-full">
            <Navigation />
            <div className="py-10">
              { children }
            </div>
          </div>
        </WalletContextProvider>
      </body>
    </html>
  )
}
