import React from 'react'
import HeroImgProductList from '../HeroImgProductList/HeroImgProductList'
import HeroContentProductList from '../HeroContentProductList/HeroContentProductList'

function HeroProductList({img,name,price,color,id}:{img:string,name:string,price:number,color:string[],id:string}) {
  return (
    <section className='flex justify-center gap-20 items-center pt-[50px] max-[1170px]:gap-12 max-[1130px]:gap-5  max-[780px]:gap-3   max-[680px]:gap-2 max-[550px]:flex-col max-[550px]:items-start'>
      <HeroImgProductList img={img}/>
      <HeroContentProductList name={name}  price={price} color={color} id={id} />
    </section>
  )
}

export default HeroProductList
