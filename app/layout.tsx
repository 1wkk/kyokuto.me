import { Inter } from '@next/font/google'

import { ReactNode } from 'react'

import '@/styles/tailwind.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body className={`font-sans ${inter.variable}`}>{children}</body>
  </html>
)

export default Layout
