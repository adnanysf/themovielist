import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })
//color pallete: https://colorhunt.co/palette/27282961677ad8d9dafff6e0
export const metadata = {
  title: 'TheMovieList',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>

  )
}
