import React from 'react'
import PopularDestinations from "@/components/Destinations/PopularDestinations"
import IndianDestinations from "@/components/Destinations/IndianDestinations"
import EuropeTravel from "@/components/Destinations/EuropeTravel"
import DubaiAbudhabi from '@/components/Destinations/DubaiAbhudabi'
import SouthEastAsia from '@/components/Destinations/SouthEastAsia'
import TravelVibe from '@/components/Destinations/TravelVibe'

function Destinations() {
  return (
    <div>
      <section>
        <PopularDestinations />
      </section>
      <section>
        <IndianDestinations />
      </section>
      <section>
        <EuropeTravel />
      </section>
      <section>
        <DubaiAbudhabi />
      </section>
      <section>
        <SouthEastAsia />
      </section>
      <section>
        <TravelVibe />
      </section>
    </div>
  )
}

export default Destinations
