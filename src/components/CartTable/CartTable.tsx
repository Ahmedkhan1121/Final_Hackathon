'use client';
import { useProductHook } from '@/Context/ProductContext';
import CartTableData from '../CartTableData/CartTableData'

function CartTable() {
  const {cartData} = useProductHook();
  const {addCartProd} = cartData;
  console.log(addCartProd)
  return (
    <div >
       {/* table header */}
      <div className='flex justify-between px-[20px]  list-none py-[16px] rounded-md  max-[610px]:hidden   '>
        <li>Product</li>
        <div className='flex gap-[160px] max-[830px]:gap-[100px] max-[650px]:gap-[65px]'>
        <li>Quantity</li>
        <li>total</li>
      </div>
      </div>
      {/* table data */}

        <div className='flex flex-col'>
            {/* product Image DAta */}
        {
          addCartProd.map((e) => {
            return(
              <CartTableData key={e.productid} product={e}/>
            )
          })
        }
        </div>
        {/* Total Price */}
        <div>

        </div>

    </div>
  )
}

export default CartTable
