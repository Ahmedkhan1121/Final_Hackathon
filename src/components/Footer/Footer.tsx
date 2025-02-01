// import React from 'react'
// import FooterMenu from '../FooterMenu/FooterMenu'
// import FooterCategories from '../FooterCategories/FooterCategories'
// import FooterOurCompany from '../FooterOurCompany/FooterOurCompany'
// import FooterForm from '../FooterForm/FooterForm'
// import FooterIcons from '../FooterIcons/FooterIcons'

import FooterCategories from "../FooterCategories/FooterCategories"
import FooterForm from "../FooterForm/FooterForm"
import FooterIcons from "../FooterIcons/FooterIcons"
import FooterMenu from "../FooterMenu/FooterMenu"
import FooterOurCompany from "../FooterOurCompany/FooterOurCompany"

function Footer() {
  return (
    <footer className='flex flex-col bg-[#2A254B] justify-around  p-[10px]  '>
      {/* py-[45px] px-[35px] max-[1250px]:px-[20px] max-[900px]:px-[0] */}
        
      
    <div className='flex justify-center  gap-20 py-10 max-[1010px]:gap-[45px] max-[970px]:gap-[30px]  max-[700px]:flex-col max-[700px]:items-center  max-[590px]:gap-[50px]'>
    <div className='flex justify-around gap-20   max-[1110px]:gap-14 max-[980px]:gap-10 max-[700px]:gap-20 max-[530px]:flex-wrap  max-[467px]:gap-10  max-[350px]:justify-start max-[350px]:px-10 max-[330px]:px-3'>
          <FooterMenu />
          
          <FooterCategories/>
    
          <FooterOurCompany/>
    
       </div>
          <FooterForm/>
    </div>

     
        <div>
       <hr className=' border-[#4E4D93]' />
        </div>

      {/* parentdiv */}
     <div className='flex text-white items-center justify-between py-[20px] px-[40px] flex-wrap max-[450px]:gap-5 max-[450px]:justify-center'>
      {/* child div */}
      <div>
        <p>Copyright 2022 Avion LTD</p>
      </div>
      {/* <icons */}
      <FooterIcons/>
     </div>
    </footer>

  )
}

export default Footer
