'use client';

import ListItemAbout from "../ListItemAbout/ListItemAbout"

import NavLogoProduct from "../NavLogoProduct/NavLogoProduct"
import NavAboutIcons from "../NavAboutIcons/NavAboutIcons";
import NavListAbout from "../NavListAbout/NavListAbout";
import { ScrollListAbout } from "../ScrollListAbout/ScrollListAbout";

function NavbarAbout() {
// const aboutContext =useFurnContext()

  //  const [navList,setNavList]= useState<boolean>(false);
  //   const onNavToggle = () => {
  //     setNavList((prev) => !prev);
  //   };
  return (
    <nav className=''>
    {/* div 1 */}
    <div className='flex justify-between items-center py-[20px] px-[30px]  max-[740px]:h-[10vh]'>
        <NavLogoProduct />
       <div className='flex  items-center gap-6 '>
        <ListItemAbout />
        <NavAboutIcons />
       </div>
    </div>
    {/* div 2  About list bg-[#F9F9F9]*/}
    <div className='bg-[#F9F9F9] py-[8px] max-[600px]:hidden' >
      <NavListAbout  />
    </div> 
    <ScrollListAbout/>
    </nav>
    //   <NavIcons/>
  )
}

export default NavbarAbout
