import React from 'react'
import BrandDifferentCard from '../BrandDifferentCard/BrandDifferentCard'
import BrandDifferentContent from '../BrandDifferentContent/BrandDifferentContent'

function BrandDifferent() {
  return (
    // padding is leya de he ke section me py se sai hu jay
    <section  className='p-[10px] py-[100px]  flex flex-col items-center max-[1200px]:px-[0px] max-[500px]:pt-[40px]' >
           <BrandDifferentContent/>
           
           <BrandDifferentCard />
          
    </section>
  )
}

export default BrandDifferent
