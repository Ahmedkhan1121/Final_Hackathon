'use client'
import HeroProductList from '../HeroProductList/HeroProductList'
import CeramicsProductList from '../CeramicsProductList/CeramicsProductList'
import BrandDifferent from '../BrandDifferent/BrandDifferent'
import SignUp from '../SignUp/SignUp'
import { useProductHook } from '@/Context/ProductContext'
import { MockApiType } from '@/utils/type/type'
import { ToastContainer } from 'react-toastify'

function ProductDetail({productId}:{productId:string}) {
    const {productList} = useProductHook();
    const findItems:MockApiType | undefined = productList.find((e)=>{
        return e.id === productId;
    })
  if(findItems){
    return (
      <>
        <section>
           <HeroProductList name={findItems.productname} img={findItems.productimg} price={findItems.price} color={findItems.ProductColor} id={findItems.id} />
             <CeramicsProductList />
             <BrandDifferent/>
            <SignUp/>
              </section>
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
  }else{
    <h4 className='flex justify-center items-center text-3xl font-bold'>Not Found</h4>
  }
} 

export default ProductDetail
