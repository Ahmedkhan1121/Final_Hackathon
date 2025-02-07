'use client';
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import NavListHome from '../ListItem/ListItem';
import { useFurnContext } from '@/Context/Context';
import { FaRegHeart } from "react-icons/fa";

function Navbar() {


  // custom hook
  const homeContext=useFurnContext()
 

  return (
    <nav className=''>
      {/* SearchIcon */}
    <div  className='flex items-center justify-between  p-4  border-b-2 border-[#e8e8e8] '>
    <div className='flex items-center  hover:cursor-pointer '><IoIosSearch /></div>

      {/* logoName */}
      <div>
      <h2 className='text-2xl hover:cursor-pointer relative max-[670px]:left-8 max-[360px]:left-0'><Link href={`/`}>Avion</Link></h2>  
      </div>

     {/* icons */}
      <div className='flex items-center gap-5  hover:cursor-pointer '>
      <div className="flex gap-4">
      <Link href={`/productcart`}><RiShoppingCart2Line /></Link>
      <Link href={`/wishlist`}><FaRegHeart /></Link>
      <CgProfile />
      </div>
      <div className=" max-[670px]:block hidden" onClick={homeContext.onHomeToggle}>
      <CiMenuBurger />
      </div>
      </div>
      

    </div>

    {/* navList2 */}
    
    <NavListHome />
    
    </nav>
  )
}

export default Navbar
