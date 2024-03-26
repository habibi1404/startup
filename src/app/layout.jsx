import { Courgette } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Nav"
import habeeb from './components/styles.module.css'
import Footer from './components/Footer'

const cook = Courgette({ 
  subsets: ["latin"],
  weight: ["400"] })

export const metadata = {
  title: "Fundamentals of React",
  description: "Creating a react application",
  keywords: 'React,Next, Javascript, Tailwind,CSS,HTML'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={habeeb.main}>
      <body className={`${cook.className} text-2xl`}>
          <Navbar/>

          <div className='min-h-[80vh]'>
          {children}
          </div>

          <Footer/>


      </body>
    </html>
  )
}
