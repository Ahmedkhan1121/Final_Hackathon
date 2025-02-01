'use client';

import { MockApiType } from '@/utils/type/type';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

function WishCard({cloth}:{cloth:MockApiType}) {
    const {productimg,productname,id} = cloth;
    const navigDetail = useRouter();
  return (
    // <BlurFade key={productimg} delay={0.25 + id * 0.05} inView>

    <div className='flex w-[400px] flex-col items-center  text-center shadow max-[420px]:w-[290px] max-[300px]:w-[250px]'>
      <Image className='h-[200px] w-[400px] max-[420px]:w-[290px] max-[300px]:w-[250px]' src={productimg} alt={productname} height={200} width={200}/>
      <div className="flex items-center gap-10 py-1 max-[300px]:gap-5">
    <h3 className='font-bold text-slate-400 max-[300px]:text-sm'>{productname}</h3>
    <button className='outline-none text-teal-300 max-[300px]:text-sm' onClick={() => navigDetail.push(`/product/${id}`)}>Buy Now</button>
      </div>
    </div>
    // </BlurFade>
  )
};
export default WishCard;