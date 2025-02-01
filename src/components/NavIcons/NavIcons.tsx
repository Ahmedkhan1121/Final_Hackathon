import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa';

function NavIcons() {
  return (
    <div className='flex gap-[13px] max-[730px]:absolute right-14 cursor-pointer'>
      <IoIosSearch />
      <Link href={`/productcart`}><RiShoppingCart2Line /></Link>
      <Link href={`/wishlist`}><FaRegHeart /></Link>
      <CgProfile />
    </div >
  )
}

export default NavIcons
