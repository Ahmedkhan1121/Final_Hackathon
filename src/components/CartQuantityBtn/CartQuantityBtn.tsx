'use client'
import { useProductHook } from '@/Context/ProductContext';
import React, { useState } from 'react'
// import { FaMinus } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { TfiMinus } from 'react-icons/tfi';

function CartQuantityBtn({id,quanity}:{id:number,quanity:number}) {
    // const [quanityValu,setQuantityValue] =useState<number>(0);
    
    // const increaseQuantity = () => {
    //     setQuantityValue(prev => prev + 1);
    // };

    // const decreaseQuantity = () => {
    //     setQuantityValue(prev => (prev > 0 ? prev - 1 : 0));
    // };
    const {addProdDec,addProdInc}=useProductHook()

  return (
 
      <div className='flex justify-between items-center py-[16px] px-[10px]  w-[100px] bg-[#f9f9f9] max-[610px]:py-[8px]'>
      <button className='cursor-pointer text-[12px] text-black' onClick={()=>addProdDec(id,quanity)}><TfiMinus /></button>
      <h2>{quanity}</h2>
      <button className='cursor-pointer text-[15px]' onClick={()=>addProdInc(id)}><FiPlus /></button>
     
    </div>
  
  )
}

export default CartQuantityBtn
