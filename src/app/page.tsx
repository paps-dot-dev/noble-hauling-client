import Image from 'next/image'
import ImageCarousel from './components/UI/ImageCarousel'
import dumpster from '../../public/dumpster1.png'
import detroit from './assets/detroit.jpg'
import wave from '../../public/wave.svg'
import logo from '../../public/noble.png'

import { FaDumpster } from 'react-icons/fa'
import ServicesTabGroup from './components/ServicesTabGroup'
import DiscountModal from './components/UI/DiscountModal'
import Card from './components/UI/Card'
import ServiceAreaCards from './components/ServiceAreaCards'

export default function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col p-4 md:p-0 items-center justify-between border-t-2 border-orange-400  '>
      <DiscountModal />
      <ImageCarousel />

      <div className='flex flex-col-reverse md:flex-row justify-between items-center mb-16'>
        <p className='text-lg md:text-2xl font-light m-4 max-w-2xl '>
          Noble Hauling is the top choice in Macomb, MI for your dumpster
          rental, junk removal, and home renovation needs. We provide high
          quality service at a fair price, with unmatched craftsmanship and
          care.{' '}
        </p>
        <Image
          src={dumpster}
          alt='Picture of Noble Hauling 10 yard Dumpster available for rental'
          className='md:w-1/2 rounded-xl shadow-lg border-2 border-orange-500'
        />
      </div>
      <Image
        alt='Orange Wavy Dumpster Website Divider'
        src={wave}
        className='w-full '
      />

      <section className=' w-full'>
        <h2 className='text-5xl text-center'>
          The Best in the Business. Guaranteed.
        </h2>
        <p className='text-center mt-8 text-2xl border-2 border-orange-400 w-2/3 m-auto rounded-md p-4'>
          We offer a variety of services that will help your next project run
          smoothly.
        </p>
        <ServicesTabGroup />
      </section>
      <Image
        alt='Orange Wavy Dumpster Website Divider'
        src={wave}
        className='w-full'
      />

      <section className='px-4'>
        <h1 className='text-[3em] text-left md:text-center md:text-[3.5em]'>
          Serving Macomb County... and{' '}
          <span className='text-orange-400'>Beyond</span>
        </h1>
        <p className='md:w-1/2 text-xl  px-2 my-4 m-auto'>
          Noble Hauling is based in Macomb, Michigan, and we take pride in where
          we’re from. Our junk removal, dumpster rental, and home renovation
          experts provide top-notch service to our community, as well as our
          neighbors around Macomb County. Check out our service area, and let us
          know how we can serve you!
        </p>

        <div className='md:flex md:flex-wrap md:justify-center'>
          <ServiceAreaCards />
        </div>
      </section>
    </main>
  )
}
