import { Inter } from 'next/font/google'
import Testimonials from '@/components/sections/testimonials'
import NewsLettersSignupForm from '@/components/sections/news-letters-signup-form'
import LovedHostelsList from '@/components/sections/loved-hostels-list'
import PopularDestinations from '@/components/sections/popular-destinations'
import HeroSection from '@/components/sections/hero-section'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <HeroSection />
    <PopularDestinations />
    <LovedHostelsList />
    <Testimonials />
    <NewsLettersSignupForm />
  </>

  )
}
