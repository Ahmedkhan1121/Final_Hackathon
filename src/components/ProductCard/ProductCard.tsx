'use client';
import { useProductHook } from '@/Context/ProductContext';
import Image from 'next/image'


function ProductCard() {
   const {productList,onProductDetail} = useProductHook();
  return (
    <div className='flex flex-wrap justify-around px-[35px] py-[20px] max-[700px]:px-[25px] max-[680px]:px-[15px] max-[310px]:px-[8px] '>
     {
        productList.map((e)=>{
            return(
            //  <Link href={`/product/${e.id}`} key={e.id} >
                <div key={e.id} className='flex flex-col gap-3 pb-[20px] cursor-pointer'onClick={() => onProductDetail(e.id)} >
                <div>
                <Image className='rounded-sm h-[375px] w-[305px] max-[660px]:w-[280px] max-[610px]:w-[270px] max-[590px]:w-[250px] max-[590px]:h-[340px] max-[540px]:w-[230px] max-[540px]:h-[300px] max-[500px]:w-[200px] max-[500px]:h-[275px] max-[469px]:w-[270px] max-[469px]:h-[320px] max-[390px]:w-[250px] max-[390px]:h-[280px] max-[325px]:w-[230px] '
                src={e.productimg}
                alt={e.productname}
                height={200}
                width={200}
                />
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className=' max-[540px]:w-[220px]'>{e.productname}</h4>
                    <p>£{e.price}</p>
                 </div>
                </div>
            //  </Link>
            )
        })
     }
    </div>
  )
}

export default ProductCard
