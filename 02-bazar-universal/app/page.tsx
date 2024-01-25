/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import FraganceImg from '../public/static/fragrances.webp'
import LaptopImg from '../public/static/laptops.webp'
import MobileImg from '../public/static/mobiles.jpg'

export default async function Home() {

  return (
    <div className="flex flex-col py-10 gap-y-5 w-full xl:w-5/6 mx-auto">
      <h1 className='text-white text-4xl text-center pb-10'>Try to search!</h1>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] 
            gap-[2vw] justify-center w-full max-w-[90vw]'>
        <Link href={`/items?q=fragrances`} className='group hover:cursor-pointer flex flex-col gap-y-4 text-center'>
          <img className='max-w-[95vw] mx-auto h-72' src={FraganceImg.src} alt="empty" />
          <label className="group-hover:underline text-2xl font-semibold text-yellow-orange-50">Fragrances</label>
        </Link>
        <Link href={`/items?q=laptops`} className='group hover:cursor-pointer flex flex-col gap-y-4 text-center'>
          <img className='max-w-[95vw] mx-auto h-72' src={LaptopImg.src} alt="empty" />
          <label className="group-hover:underline text-2xl font-semibold text-yellow-orange-50">Laptops</label>
        </Link>
        <Link href={`/items?q=smartphones`} className='group hover:cursor-pointer flex flex-col gap-y-4 text-center'>
          <img className='max-w-[95vw] mx-auto h-72' src={MobileImg.src} alt="empty" />
          <label className="group-hover:underline text-2xl font-semibold text-yellow-orange-50">Mobiles</label>
        </Link>
      </div>
    </div>
  )


}
