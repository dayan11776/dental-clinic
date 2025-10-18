import { CarouselSize } from '@/app/components/layout/carousel'
import React from 'react'
import { Services } from './components/card'

export default function Service(){
  return (
    <main>
      <section className='py-12 m-auto'>
        <CarouselSize />
        <div className='mb-12'>
          <h1 className='text-6xl text-center font-medium mb-7'>What We Offer</h1>
          <p className='text-center text-2xl'>Here at Heavenly Touch dental clinic we offer the best procedures.</p>
        </div>
        <div className='max-w-7xl m-auto py-7'>
          <div className='flex flex-wrap justify-start other:justify-evenly '>
            <Services />
          </div>
        </div>
      </section>
    </main>
  )
}
