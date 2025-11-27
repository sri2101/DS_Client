import React from 'react'
import Banner from '@/components/Activity/Banner'
import IndianActivities from '@/components/Activity/IndianActivities'
import InternationalActivities from '@/components/Activity/InternationalActivities'
import PopularActivities from '@/components/Activity/PopularActivities'
import WhyBook from '@/components/Activity/WhyBook'
import PlanYourTrip from '@/components/Home/PlanYourTrip'

function Activities() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <IndianActivities />
      </section>
      <section>
        <PopularActivities />
      </section>
      <section>
        <InternationalActivities />
      </section>
      <section className='py-4'>
        <WhyBook />
      </section>
      <section>
        <PlanYourTrip />
      </section>
    </div>
  )
}

export default Activities
