'use client'
  import React from 'react'
import SelectBarResponsiv from "../SelectBarResponsiv/SelectBarResponsiv";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useProductHook } from '@/Context/ProductContext';
  
  function SelectBar() {
    const {uniqueTypes,onHandleSelectBox,selectValue}=useProductHook();

    return (
      <>
      <nav  className="bg-white flex justify-between py-[16px] px-[25px] max-[740px]:px-[15px] max-[730px]:hidden  " >
        <div className="flex gap-1">
        <Select>
        <SelectTrigger className="w-[130px] max-[890px]:w-[120px] border-none ">
          <SelectValue  placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      {/* Product type */}
       <Select value={selectValue} onValueChange={(e) => onHandleSelectBox(e)} >
        <SelectTrigger className="w-[130px] max-[890px]:w-[120px] border-none "> 
          <SelectValue placeholder='Category'  />
        </SelectTrigger>
      <SelectContent  >

       {
           uniqueTypes.map((e,i)=>{
            return(
      
               <SelectItem key={i} value={e}>{e}</SelectItem>
              )
              })
       }
       </SelectContent>
      </Select> 

  {/* {
          uniqueTypes.map((e,i) => {
            return(
              <>
              {e.toLowerCase() === 'all' ? <SelectItem key={i} className="cursor-pointer" defaultValue={e} value={e}>{e}</SelectItem>:<SelectItem  key={i} className="cursor-pointer" value={e}>{e}</SelectItem>}
              </>
            )
          })
        } */}


{/* <select name="" id="" className='py-3 px-3 bg-[#f9f9f9] outline-none rounded-sm cursor-pointer' value={selectValue} onChange={(e) => onHandleSelectBox(e)}>
        {
          uniqueTypes.map((e,i) => {
            return(
              <>
              {e.toLowerCase() === 'all' ? <option key={i} className="cursor-pointer" defaultValue={e} value={e}>{e}</option>:<option key={i} className="cursor-pointer" value={e}>{e}</option>}
              </>
            )
          })
        }
      </select> */}


      {/* Price */}
      <Select>
        <SelectTrigger className="w-[130px] max-[890px]:w-[100px] border-none "> 
          <SelectValue placeholder='Price'  />
        </SelectTrigger>
      <SelectContent>
        <SelectItem value="100$ To 300$">100$ To 300$</SelectItem>
        <SelectItem value="300$ To 600$">300$ To 600$</SelectItem>
      </SelectContent>
      </Select>
      {/* Brand */}
      <Select>
        <SelectTrigger className="w-[130px] max-[890px]:w-[100px] border-none "> 
          <SelectValue placeholder='Brand'  />
        </SelectTrigger>
      <SelectContent>
        <SelectItem value="nike">Nike</SelectItem>
        <SelectItem value="addidas">Addidas</SelectItem>
      </SelectContent>
      </Select>
        </div>

        <div className="flex items-center ">
          <h4 className="max-[900px]:text-sm">Sorting by :</h4>
          {/* Date added */}
          <Select>
        <SelectTrigger className="w-[140px] border-none"> 
          <SelectValue placeholder='Date added'  />
        </SelectTrigger>
      <SelectContent>
        <SelectItem value="nike">Nike</SelectItem>
        <SelectItem value="addidas">Addidas</SelectItem>
      </SelectContent>
      </Select>
        </div>
      </nav>
      <SelectBarResponsiv/>
      </>
    )
  }
  
  export default SelectBar
  

  

