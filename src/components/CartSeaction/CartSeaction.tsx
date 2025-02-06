'use client'
import { useProductHook } from '@/Context/ProductContext'
import CartTable from '../CartTable/CartTable'
import CartTotalPrice from '../CartTotalPrice/CartTotalPrice'

function CartSeaction() {
  const {clearCart}=useProductHook()
  return (
    <section className='flex flex-col bg-[#f9f9f9]'>
       
       <div className='px-[130px]  max-[950px]:px-[60px] max-[700px]:px-[30px] max-[340px]:px-[12px]  max-[310px]:pr-[2px]'>

        {/* heading */}
      <div className='flex justify-between max-[510px]:flex-col'>
        <h1 className='text-3xl  pt-[70px] pb-[20px] max-[355px]:text-2xl'>Your Shopping Cart</h1>
        {/* clear btn  bg-gradient-to-r from-red-300 to-orange-400*/}
      <div className='pt-[70px] pb-[20px]  max-[510px]:pt-[0px] ' >
      <button className='px-[22px] py-[8px]  rounded-lg bg-[#2A254B] text-white shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out ' onClick={clearCart}>clear</button>
         </div>
      </div>
      <CartTable/>
      <CartTotalPrice/>
      </div>
    </section>
  )
}

export default CartSeaction
