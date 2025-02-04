
import { newCeramics } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

function CeramicsCard() {
  return (
    <div className='flex justify-center gap-2 flex-wrap max-[1224px]:gap-15  max-[959px]:gap-2 max-[935px]:gap-10    max-[719px]:gap-5 max-[387px]:gap-0'>
     {
      newCeramics.map((e)=>{
        return(
          <div key={e.id} className='flex flex-col gap-3 max-[387px]:pb-6'>
             <Image  className='w-[305px] h-[375px]  max-[1330px]:w-[280px]  max-[935px]:size-[350px] max-[819px]:w-[300px] max-[719px]:w-[280px] max-[660px]:w-[380px] max-[500px]:w-[180px] max-[403px]:size-[180px] max-[387px]:size-[160px] max-[330px]:size-[250px] max-[300px]:w-[220px]'
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
