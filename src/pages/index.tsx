import { Inter } from 'next/font/google'
import Testimonials from '@/components/sections/testimonials'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 
    <Testimonials />
  )
}
