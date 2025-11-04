import React from 'react'
import TrendingDestinations from '@/components/Home/TrendingDestinations'
import TravellersFavourite from '@/components/Home/TravellersFavourite'
import HolidayPackages from '@/components/Home/HolidayPackages'
import HolidayThemes from '@/components/Home/HolidayThemes'
import HiddenGems from '@/components/Home/HiddenGems'
import TravellersTestimonials from '@/components/Home/TravellersTestimonials'
import BookingBenefits from '@/components/Home/BookingBenefits'
import TrustpilotSlider from '@/components/Home/TrustPilotSlider'
import HeroBannerSlider from '@/components/Home/HeroBannerSlider'
import FAQ from '@/components/Home/FAQ'
import PlanYourTrip from '@/components/Home/PlanYourTrip'

function Home() {
  return (
    <div>
       <section>
        <HeroBannerSlider />
      </section>
      <section className='py-12'>
        <TrendingDestinations />
      </section>
      <section>
        <TravellersFavourite />
      </section>
      <section>
        <HolidayPackages />
      </section>
      <section className='py-16'>
        <HolidayThemes />
      </section>
      <section>
        <HiddenGems />
      </section>
      <section className="bg-gradient-to-br from-white via-sky-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <TravellersTestimonials />
        </div>
      </section>
      <section>
        <BookingBenefits />
      </section>
      <section>
        <TrustpilotSlider />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <PlanYourTrip />
      </section>

    </div>
  )
}

export default Home
