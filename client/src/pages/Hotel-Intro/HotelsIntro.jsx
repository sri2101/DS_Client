import HotelChains from '@/components/HotelsIntro/HotelChains'
import HotelDeals from '@/components/HotelsIntro/HotelDeals'
import PopularDestinations from '@/components/HotelsIntro/PopularDestinations'
import WhyBookHotels from '@/components/HotelsIntro/WhyBookHotels'
import React from 'react'

function HotelsIntro() {
  return (
    <div>
      <section>
        <PopularDestinations />
      </section>
      <section>
        <HotelChains />
      </section>
      <section>
        <HotelDeals />
      </section>
      <section>
        <WhyBookHotels />
      </section>
    </div>
  )
}

export default HotelsIntro
