'use client';
// import { useProductHook } from '@/Context/ProductContext';
import CartProduct from '../CartProduct/CartProduct'
import CartQuantityBtn from '../CartQuantityBtn/CartQuantityBtn'
import { CartListType } from '@/utils/type/type';

function CartTableData({product}:{product:CartListType}) {
 
  // if(addCartProd.length===0){
    // return(
    //   <section>
    //     <h1>No Cart Items</h1>
    //   </section>
    // )
  // }else{
    return (
      
      <div className='flex  justify-between items-center px-[10px] py-[20px] border-t-2 border-b-2 max-[610px]:border-t-0 max-[300px]:px-[0px]'  >
        
         <div>
             <CartProduct product={product}/> 
          </div>
          <div className='flex items-center  gap-[150px] max-[830px]:gap-[90px] max-[650px]:gap-[60px]'>
              <div className='max-[610px]:hidden'><CartQuantityBtn quanity={product.productquantity} id={product.productid}/></div>
              <div  className='max-[610px]:hidden'><p>${product.price*product.productquantity}</p></div>
          </div>
      </div>
      
    )
  // }
}

export default CartTableData
