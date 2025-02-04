"use client"
import { useFurnContext } from '@/Context/Context';
// import { HeaderContext } from '@/Context/Context';
import { navList } from '@/utils/helper';
import Link from 'next/link'

function NavListHome() {
  
  // const navContext = useContext(HeaderContext)

  const homeContext= useFurnContext();

  return (
    <ul className={`${homeContext.homeList ? 'flex' : ' min-[671px]:flex  max-[670px]:hidden '} items-center justify-center p-4 gap-6 text-[#726E8D] max-[670px]:flex-col max-[670px]:text-center max-[670px]:shadow-xl `}>
     {
    navList.map((e,i)=>{
        return(<li key={i} className='capitalize hover:cursor-pointer'><Link href={e.Link}>{e.List}</Link></li>)
    })
     }

    </ul>
  )
};
export default NavListHome;