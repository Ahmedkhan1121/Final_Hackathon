"use client"
import React from 'react'
import CountButton from '../CountButton/CountButton'
import { useProductHook } from '@/Context/ProductContext'
// import { IoStarSharp } from "react-icons/io5";
import { CiStar } from 'react-icons/ci';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import Link from 'next/link';

function HeroContentProductList({name,price,color,id}:{name:string,price:number,color:string[],id:string}) {
  const {setProdColor,cartData,addToCart,colr,addWishList} = useProductHook();
  return (
    // main
    <div className='flex justify-center flex-col gap-2    max-[550px]:px-[30px] max-[340px]:px-[20px]   ' >

      <div className=' flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
        <h2 className='text-2xl'>{name}</h2>
          {/* stars */}
      <div className='flex gap-1'>
      <FaStar  className=' text-[#F3CD03]'/>
      <FaStar  className=' text-[#F3CD03]'/>
      <FaStar  className=' text-[#F3CD03]'/>
      <CiStar className=' text-[#F3CD03]'/>
      <CiStar className=' text-[#F3CD03]'/>
      </div>
        </div>
       
        <div className='flex gap-6 items-center   '>
          <p className='text-2xl'>${price}</p>  
         {colr ? <FaHeart className='text-[#2A254B]' />
 :<FaRegHeart onClick={()=>addWishList(id)} className={ `${colr ? 'text-[#2A254B]':''} text-xl`}/>}
         </div>
      </div>

      <div className='pb-[10px]'><p>Availability : <span className='text-[#938989] font-bold'>In Stock (0 available)</span></p></div>
     
        
      {/* parent */}
      <div className='flex flex-col gap-3 '>
        <h4 className='font-bold'>Description</h4>
        
        <div>
          <div className='flex flex-col gap-3 text-sm  '>
            <p className='w-[498px] text-[#505977] max-[1000px]:w-[450px] max-[950px]:w-[400px] max-[900px]:w-[370px] max-[800px]:w-[340px] max-[750px]:text-[12px] max-[750px]:w-[280px] max-[680px]:w-[230px]  max-[550px]:w-[100%] '>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
            {/* <ul className='flex flex-col pb-[5px] gap-1 text-[#505977] max-[750px]:text-[12px]'>
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul> */}
            </div>
        </div>
      </div>
      {/* Color */}
      <div >
        <h4 className='font-bold'>Color</h4>
        <div className="flex  gap-2 pt-1">
        {color.map((e,i) => {
          return (
            <div
              key={i}
              style={{ backgroundColor: e }}
              onClick={() => setProdColor(e)}
              className={`${e === cartData.productColor ? 'border-4 border-teal-200' :''} size-7 cursor-pointer rounded-full max-[380px]:size-6`}
            ></div>
          );
        })}
      </div>
      </div>
      {/* main div me 2 div */}
      <div className='pb-[20px] pt-[10px] '>
        <div className='pb-[8px] '><h2>Dimensions</h2></div>
      
        {/* is me 3 div bane ga or har div me 2 div huge or us ko flex-col  */}
       <div className='flex gap-14 max-[750px]:text-[12px] max-[680px]:gap-10  max-[330px]:gap-7 '>
        <div className='flex flex-col gap-2 '>
          <p>Height</p>
          <p className='text-[#505977]'>110cm</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>With</p>
          <p className='text-[#505977]'>75cm</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p>Depth</p>
          <p className='text-[#505977]'>50cm</p>
          
        </div>
       
       </div>
      </div>
    {/* card */}
     <div className='flex justify-start gap-32 max-[965px]:gap-28  max-[950px]:gap-16 max-[900px]:gap-7 max-[750px]:gap-3 max-[660px]:gap-2  max-[550px]:gap-24  max-[430px]:gap-16 max-[395px]:gap-10  max-[370px]:flex-col max-[370px]:items-start max-[370px]:gap-3'>
      <div className='flex items-center  gap-5 max-[750px]:text-sm max-[750px]:gap-2 max-[660px]:gap-1 max-[550px]:gap-5 max-[370px]:flex-col max-[370px]:gap-3 max-[370px]:items-start '>
        <h4 className='max-[370px]:hidden'>Amount:</h4>
        <h4 className='hidden max-[370px]:flex '>Quantitity</h4>
        {/* count button */}
       <CountButton  id={id}/>
        {/* <button></button> */}
      </div>
     <div>
     <button className='bg-[#2A254B] py-[12px] px-[20px] rounded-md text-white max-[820px]:px-[8px] max-[820px]:text-[14px] max-[750px]:text-[13px]  max-[550px]:px-[12px] max-[370px]:px-[110px] max-[370px]:py-[14px] max-[370px]:text-[14px] max-[365px]:px-[99px] max-[340px]:px-[83px] max-[310px]:px-[59px] ' onClick={() => addToCart(id)}> Add to card</button>
     </div>
     </div>
    </div>
  )
}

export default HeroContentProductList
