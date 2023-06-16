import './globals.css'
import { Quicksand } from 'next/font/google'
import Header from './components/Header'
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
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
