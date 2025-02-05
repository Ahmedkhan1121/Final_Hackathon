
import { brandDifferentCard } from '@/utils/helper'
import Image from 'next/image'




function BrandDifferentCard() {
  return (
    <div className='flex items-center justify-center gap-5  max-[1200px]:gap-2 max-[1150px]:gap-0 max-[1000px]:flex-wrap max-[1000px]:gap-10 max-[835px]:gap-2 max-[790px]:gap-10 max-[835px]:px-[10px] max-[575px]:gap-5 max-[480px]:gap-[16px] max-[431px]:gap-8 max-[455px]:px-[0px]  '>
    {
      brandDifferentCard.map((e)=>{
        return(
            // max-[330px]:items-center
          <div key={e.id} className='w-[270px]  flex flex-col  gap-4 max-[1120px]:w-[255px] max-[1060px]:w-[245px] max-[1030px]:w-[238px] max-[555px]:w-[200px] max-[480px]:w-[190px] max-[455px]:w-[180px]  max-[431px]:w-[200px] max-[431px]:gap-3'>
            <Image  
            src={e.ImgUrl}
            alt='BrandCard'
            height={30}
            width={30}
            />
            <h4 className='text-[#2A254B] '>{e.heading}</h4>
            <p className='text-[#2A254B] w-[266px] max-[1200px]:w-[230px] max-[1070px]:w-[210px] max-[969px]:w-[240px] max-[835px]:w-[223px] max-[550px]:text-[14px] max-[550px]:w-[195px] max-[480px]:w-[190px] max-[431px]:text-[16px] max-[431px]:w-[220px] max-[330px]:w-[190px]'>{e.p}</p>
          </div>
        )
      })
    }

    </div>



  
  )
}

export default BrandDifferentCard
