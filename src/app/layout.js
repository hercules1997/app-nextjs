import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next',
  description: 'App test nextjs',
  author: 'Hercules Chaves Andrade'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
    {children}
    </html>
  )
}
