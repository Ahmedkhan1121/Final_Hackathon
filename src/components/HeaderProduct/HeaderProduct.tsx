'use client';
import { CiMenuFries } from 'react-icons/ci';
import NavbarProduct from '../NavbarProduct/NavbarProduct'
import NavIcons from '../NavIcons/NavIcons';
import NavLogoProduct from '../NavLogoProduct/NavLogoProduct';
import { useProductHook } from '@/Context/ProductContext';

function HeaderProduct() {
  const {onHandlePrev} = useProductHook();
  return (
  
    <header className='bg-white sticky top-0 flex items-center justify-between py-[10px] px-[75px] max-[1030px]:px-5 border-b-2 max-[730px]:h-[10vh] '>
        <NavLogoProduct />
      <NavbarProduct/>
      <NavIcons/>
      <div className='hidden max-[730px]:flex' onClick={onHandlePrev}>
      <CiMenuFries />
      </div>
    </header>
  )
}

export default HeaderProduct
