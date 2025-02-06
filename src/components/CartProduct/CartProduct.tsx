'use client'
import Image from 'next/image'
import React from 'react'
import CartQuantityBtn from '../CartQuantityBtn/CartQuantityBtn'
import { CartListType } from '@/utils/type/type'
import { useProductHook } from '@/Context/ProductContext';
import { RiDeleteBinLine } from 'react-icons/ri'


function CartProduct({product}:{product:CartListType}) {
  const {cartDeleteItem}=useProductHook()
  return (
    <div className='flex gap-3 max-[290px]:gap-2 '>

      <div>
      <Image  className='w-[100px] h-[110px] max-[610px]:h-[135px]  max-[610px]:w-[115px] max-[360px]:h-[160px] '
    src={product.productimage}
    alt='product'
    height={200}
    width={100}
    /> 
     {/* responsive */}
     <div className='hidden max-[610px]:flex'>
    <CartQuantityBtn id={product.productid} quanity={product.productquantity}/>
    </div>
    {/* <div className="flex items-center  gap-14">
    </div> */}
      </div>
    
    <div  className='flex flex-col justify-center gap-1 max-[610px]:items-start max-[610px]:justify-start  max-[610px]:gap-5 max-[360px]:gap-4 '>
    <div className='flex flex-col gap-1 '>
    <h2>{product.productname}</h2>
    <p className='w-[180px] text-sm   max-[365px]:w-[140px]  '>A timeless ceramic vase with 
    a tri color grey glaze.</p>
    </div>
    <div className='flex items-center gap-7'>
    <p>£{product.price}</p>
    
      {/* color&delet */}
    <div className='flex gap-2'>
    <div className='size-5 rounded-lg' style={{backgroundColor:product.productcolor}}>
    </div>
    {/* delet */}
    <RiDeleteBinLine className='text-red-500 text-[20px] cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-200' onClick={()=>cartDeleteItem(product.productid)} />
    </div>
    </div>
   
    </div>
    </div>
  )
}

export default CartProduct
