import React from 'react'
import BrandDifferentCard from '../BrandDifferentCard/BrandDifferentCard'
import BrandDifferentContent from '../BrandDifferentContent/BrandDifferentContent'

function BrandDifferent() {
  return (
    // padding is leya de he ke section me py se sai hu jay
    <section  className='p-[10px] py-[100px]  flex flex-col items-center max-[1200px]:px-[0px] max-[860px]:px-[20px] max-[455px]:px-[10px] max-[431px]:pb-[50px] max-[500px]:pt-[40px] max-[431px]:px-[20px]' >
           <BrandDifferentContent/>
           
           <BrandDifferentCard />
          
    </section>
  )
}

export default BrandDifferent
