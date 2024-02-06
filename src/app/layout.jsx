import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false})

export const metadata = {
  title: 'Filip Takvam',
  description: 'Filip Takvam´s portfolio, an Industrial Design Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
