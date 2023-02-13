import { ReactNode } from 'react'

import '@/styles/tailwind.css'

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
)

export default Layout
