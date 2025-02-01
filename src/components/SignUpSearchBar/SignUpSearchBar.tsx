import React from 'react'

function SignUpSearchBar() {
  return (
    <>
  {/* <form action="" className='flex justify-center items-center pt-[80px] pb-[60px]'>

  
      <input className='bg-[#F9F9F9] p-5 w-[354px] py-3 outline-none' required type="text" name="" id="" placeholder='your@email.com'/>
  
    
      <button className='bg-[#2A254B] text-white py-3 px-[18px] '>Sign up</button>
    
  </form> */}

  <form action=''className='flex justify-center items-center pt-[80px] pb-[60px]'>
    <input className='bg-[#F9F9F9] px-5 w-[354px] py-3 outline-none rounded-l-md max-[580px]:w-[320px] max-[480px]:w-[260px]  max-[400px]:w-[220px] max-[356px]:w-[200px] max-[300px]:w-[180px]' required type="text" name="" id="" placeholder='your@email.com'/>
    <button type='submit' className='bg-[#2A254B] text-white py-3 px-[18px] rounded-r-md max-[470px]:px-[14px] max-[330px]:px-[10px] max-[330px]:text-sm '>Sign up</button>
    </form>
  </>
  )
}

export default SignUpSearchBar
