import React from 'react'
import OurPopularProductsCard from '../OurPopularProductsCard/OurPopularProductsCard'
import Link from 'next/link'
import ScrollImg from '../ScrollImg/ScrollImg'

function OurPopularProducts() {
  return (
    <section className='flex flex-col gap-7 p-[40px] max-[400px]:px-2'>

    <div className='pl-[45px]'>
      <h2 className='text-2xl font-bold'>Our popular products</h2>
  </div>
  {/* New ceramics card */}

    <div className='flex justify-center gap-6 '>
      <OurPopularProductsCard/>
      <ScrollImg/>
    </div>
    {/* button */}
    <div className='text-center'>
      <button className='py-3 px-7 bg-[#F9F9F9] text-[#2A254B]'><Link href={`/product`}>View collection</Link></button>
    </div>
  </section>
  )
}

export default OurPopularProducts
