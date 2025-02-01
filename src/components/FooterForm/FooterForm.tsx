// import Form from 'next/form'
import React from 'react'

function FooterForm() {
  return (
    <>
     {/* <form action="" >
        <h4 className='text-white pb-[20px]'>Join our mailing list</h4>
    <input className='py-3 p-5 w-[509px] bg-[#4a4666] text-white' type="text" name="" id="" placeholder='your@email.com' />   
    <button className='text-[#2A254B] bg-white py-3 px-[18px] '>Sign up</button>
    </form>  */}

      <form action='' className=''>
      <h4 className='text-white pb-[20px] '>Join our mailing list</h4>
          <input className='rounded-l-md py-3 p-5 w-[509px] bg-[#4a4666] text-white outline-none max-[1200px]:w-[380px] max-[1020px]:w-[350px] max-[980px]:w-[290px] max-[790px]:w-[200px] max-[700px]:w-[400px] max-[530px]:w-[350px] max-[460px]:w-[300px] max-[404px]:w-[220px] max-[350px]:w-[200px] max-[300px]:w-[160px]'  required type="text" name="" id="" placeholder='your@email.com'/>
          <button type='submit' className=' rounded-r-md text-[#2A254B] bg-white py-3 px-[18px]  max-[880px]:px-[12px]  max-[350px]:px-[9px]'>Sign up</button>
      </form>
    </>
  )
}

export default FooterForm
