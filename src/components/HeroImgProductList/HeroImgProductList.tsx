import Image from 'next/image'
import React from 'react'

function HeroImgProductList({img}:{img:string}) {
  console.log(img)
  return (
    // max-[550px]:
    <div>
      <Image className='w-[550px] h-[550px] p-[10px]    max-[1100px]:w-[500px] max-[1050px]:w-[450px] max-[900px]:w-[400px] max-[770px]:w-[380px] max-[750px]:h-[480px] max-[650px]:w-[350px] max-[620px]:w-[320px] max-[590px]:w-[280px] max-[550px]:h-[400px] max-[550px]:w-[900px] max-[550px]:px-[30px]   max-[500px]:px-[0px] max-[500px]:pt-[0px] max-[440px]:w-[600px]   max-[350px]:h-[360px] '
      src={img}
      alt='Hero Img'
      height={200}
      width={200}
      />
    </div>
  )
}

export default HeroImgProductList
