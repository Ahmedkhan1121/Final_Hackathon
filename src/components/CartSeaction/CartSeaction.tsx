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
      <div className='pt-[70px] pb-[20px]  max-[510px]:pt-[0px] ' ><button className='bg-[#878585]  text-white py-[8px]  px-[32px] rounded-md' onClick={clearCart}>clear</button></div>
      </div>
      <CartTable/>
      <CartTotalPrice/>
      </div>
    </section>
  )
}

export default CartSeaction
