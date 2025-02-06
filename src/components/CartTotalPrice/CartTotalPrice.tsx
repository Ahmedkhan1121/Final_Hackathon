"use client"
import { useProductHook } from '@/Context/ProductContext'
import React from 'react'
import { ToastContainer } from 'react-toastify';

function CartTotalPrice() {
  const {cartData,onHandleCheckout}=useProductHook();
  const {totalPrice}=cartData
  return (
    <>
    <div className='flex flex-col items-end gap-3 pt-[50px] pb-[80px]'>

    <div className='flex flex-col gap-3'>

     <div className='flex gap-3 justify-end'>
        <h4 className='text-[#4E4D93] text-xl'>Subtotal</h4>
        <h4 className=' text-xl'>£{totalPrice}</h4>
    </div> 
    
        <p className='flex justify-end text-[#4E4D93] text-sm  max-[390px]:text-[12px] max-[310px]:text-[11px] max-[283px]:text-[10px]'>Taxes and shipping are calculated at checkout</p>

    </div>
    <div>
        <button className='bg-[#2A254B] text-sm rounded-md py-[16px] px-[32px] text-white shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out ' onClick={onHandleCheckout}>Go to checkout</button>
    </div>
    </div>
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          </>
  )
}

export default CartTotalPrice
