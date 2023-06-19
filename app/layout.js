import './globals.css'
import { Quicksand } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Foooter'
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata = {
  title: 'ZET : Become a Certified Financial Advisor and Earn Big',
  description: 'Financial advising and consultations',
  keywords: 
  'finance, money, cash, consult,financial advise, earn, certified advisor'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Header/>
        <main className=''>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
