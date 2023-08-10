import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Header from '@/Components/Header'
import Navbar from '@/Components/Navbar'
import Providers from '@/Components/Providers'
import SearchBox from '@/Components/SearchBox'
export const metadata = {
  title: 'IMDB clone',
  description: 'By Mariam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      
      <Providers>
        <Header></Header>
    
     
     <Navbar/>
     <SearchBox />
     {children}
      </Providers>
      
      
      </body>
    </html>
  )
}

