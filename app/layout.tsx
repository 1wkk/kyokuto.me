import { Inter } from '@next/font/google'

import { ReactNode } from 'react'

import '@/styles/tailwind.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const Layout = ({ children }: { children: ReactNode }) => (
  <html
    lang='en'
    className={`bg-white text-black dark:bg-black dark:text-white ${inter.className}`}
  >
    <body className='mx-4 mb-40 mt-8 flex max-w-4xl flex-col font-sans antialiased'>
      {children}
    </body>
  </html>
)

export default Layout
