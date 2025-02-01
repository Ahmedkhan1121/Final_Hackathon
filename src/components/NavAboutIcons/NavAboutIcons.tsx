'use client';
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { useFurnContext } from "@/Context/Context";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";


function NavAboutIcons() {
    // contexthook
    const aboutContext=useFurnContext()
 return (
    <div className='flex gap-3 max-[730px]:absolute right-14 max-[740px]:right-3 '>
      <IoIosSearch />
      <Link href={`/productcart`}><RiShoppingCart2Line /></Link>
      <Link href={``}><FaRegHeart /></Link>
      <CgProfile />
      <div className='hidden max-[740px]:flex' onClick={aboutContext.onAboutToggle}>
            <CiMenuFries />
            </div>
    </div>
  )
};

export default NavAboutIcons
