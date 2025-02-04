'use client'
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { useProductHook } from '@/Context/ProductContext';



function CountButton({id}:{id:string}) {
    const {onProdInc,cartData,onProdDec} = useProductHook();
    const quantityProduct = cartData.cartList.find((e) => {
        return e.id === id;
    });
    const prodQuan = quantityProduct && quantityProduct.productQuantity;
    
  return (
    <div className='flex items-center justify-center gap-5 py-[12px] rounded-md   w-[122px] bg-[#f9f9f9] max-[820px]:w-[100px] max-[750px]:w-[90px] max-[820px]:gap-4 max-[370px]:w-[300px]  max-[370px]:py-[14px] max-[365px]:w-[280px] max-[340px]:w-[250px] max-[310px]:w-[200px]'>
     <button className='text-[#CAC6DA] flex items-center ' onClick={() => onProdDec(id)}><FaMinus /></button>
     <h2>{prodQuan}</h2>
     <button className='text-[#CAC6DA] flex items-center'onClick={() => onProdInc(id)} ><FiPlus /></button> 
    </div>
  )
}

export default CountButton

{/* <FaRegWindowMinimize /> */}