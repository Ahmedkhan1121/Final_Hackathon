
import { newCeramics } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

function CeramicsCard() {
  return (
    <div className='flex justify-center gap-2 flex-wrap max-[1320px]:gap-5 max-[1259px]:gap-20 max-[1224px]:gap-15 max-[1210px]:gap-10 max-[1137px]:gap-5  max-[959px]:gap-2 max-[942px]:gap-8 max-[895px]:gap-5   max-[870px]:gap-3 max-[790px]:gap-10 max-[719px]:gap-5 max-[570px]:gap-2  max-[387px]:gap-0 '>
     {
      newCeramics.map((e)=>{
        return(
          <div key={e.id} className='flex flex-col gap-3 max-[387px]:pb-6'>
             <Image  className=' rounded-sm w-[305px] h-[375px]  max-[1330px]:w-[280px] max-[1259px]:w-[320px]  max-[1080px]:w-[280px] max-[942px]:w-[250px] max-[870px]:h-[320px] max-[870px]:w-[240px] max-[719px]:w-[260px] max-[560px]:w-[250px] max-[540px]:w-[230px] max-[540px]:h-[300px] max-[492px]:w-[200px] max-[492px]:h-[270px] max-[431px]:w-[250px] max-[431px]:h-[310px] '
            src={e.imgUrl}
            alt='Ceramics Img'
            height={200}
            width={200}
            />
         <div className='flex flex-col gap-1'>
         <h4>{e.heading}</h4>
         <p>{e.price}</p>
         </div>
          </div>
        )
      })
     }

    </div>
  )
}

export default CeramicsCard
