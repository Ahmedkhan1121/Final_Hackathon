import React from 'react'
import CeramicsCard from '../CeramicsCard/CeramicsCard'

function CeramicsProductList() {
  return (
    <section className='flex flex-col gap-5 p-[40px] max-[823px]:px-[20px] max-[783px]:px-[15px] max-[500px]:px-3 max-[403px]:px-1'>

      <div className=' relative  w-[230px] left-5 max-[1433px]:left-12 max-[1422px]:left-10 max-[1403px]:left-9 max-[1376px]:left-7  max-[1350px]:left-5 max-[1080px]:left-13 max-[980px]:left-3  max-[790px]:left-3 max-[431px]:left-16 max-[375px]:left-12  max-[375px]:pb-[10px] max-[331px]:left-8 max-[310px]:left-6'>
        <h2 className='text-2xl'>You might also like</h2>
    </div>
    {/* New ceramics card */}

        <CeramicsCard/>
      
      {/* button */}
      <div className='text-center'>
        <button className='py-3 px-7 bg-[#F9F9F9] text-[#2A254B]'>View collection</button>
      </div>
    </section>
  )
}

export default CeramicsProductList
