'use client';
import { useProductHook } from '@/Context/ProductContext';
import { productList } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'


function ProductCard() {
   const {productList} = useProductHook();
  return (
    <div className='flex flex-wrap justify-around px-[35px] py-[20px] max-[700px]:px-[25px] max-[680px]:px-[15px] max-[310px]:px-[8px] '>
     {
        productList.map((e)=>{
            return(
             <Link href={`/product/${e.id}`} key={e.id} >
                <div className='flex flex-col gap-3 pb-[20px] ' >
                <div>
                <Image className='h-[375px] w-[305px] max-[660px]:w-[280px] max-[610px]:w-[270px] max-[590px]:w-[250px] max-[590px]:h-[340px] max-[540px]:w-[230px] max-[540px]:h-[300px] max-[500px]:w-[200px] max-[500px]:h-[255px] max-[450px]:w-[180px] max-[450px]:h-[225px] max-[400px]:w-[170px] max-[400px]:h-[205px]  max-[380px]:w-[150px] max-[380px]:h-[180px]  max-[345px]:w-[140px] max-[345px]:h-[170px] max-[325px]:w-[130px] max-[290px]:w-[127px] '
                src={e.productimg}
                alt={e.productname}
                height={200}
                width={200}
                />
                </div>
                <div className='flex flex-col gap-2'>
                    <h4>{e.productname}</h4>
                    <p>{e.price}</p>
                 </div>
                </div>
             </Link>
            )
        })
     }
    </div>
  )
}

export default ProductCard
