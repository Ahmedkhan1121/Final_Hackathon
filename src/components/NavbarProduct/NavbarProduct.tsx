'use client';
import NavListProduct from '../NavListproduct/NavListProduct';
import { useProductHook } from '@/Context/ProductContext';



function NavbarProduct() {
  const {navTogg} = useProductHook();
  return (
   <>
    <nav
  className={ `bg-white relative   transition-all duration-500 ease-in-out  ${
    navTogg
      ? 'max-[730px]:w-[50%] max-[730px]:opacity-100 max-[730px]:top-40'
      : ' max-[730px]:hidden'
  }`}
>
  <NavListProduct />
</nav>
   </>
  );
};
export default NavbarProduct;
