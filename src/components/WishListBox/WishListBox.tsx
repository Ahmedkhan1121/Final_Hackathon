'use client';
import { useProductHook } from '@/Context/ProductContext';
import WishCard from '../WishCard/WishCard';


function WishListBox() {
    const {cartData} = useProductHook();
  if(cartData.wishList.length === 0){
    return(
        <div className='py-20'>
        
            <h2  className={` text-4xl text-center text-slate-400  max-[320px]:w-[200px]`}>No Wish List Available</h2>
        </div>
    )
  }else{
    return (
        <div className={` flex justify-center items-center gap-5 flex-wrap`}>
          {
            cartData.wishList.map((e) => {
                return <WishCard key={e.id} cloth={e} />
            })
          }
        </div>
      )
  }
}

export default WishListBox