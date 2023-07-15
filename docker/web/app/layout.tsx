import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import WalletContextProvider from '@/context/WalletContext'

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
        <WalletContextProvider>{ children }</WalletContextProvider>
      </body>
    </html>
  )
}
