'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useProductHook } from '@/Context/ProductContext';


function SelectBarResponsiv() {
  const {uniqueTypes,selectValue,onHandleSelectBox}=useProductHook()
  return (
    <nav className="bg-white hidden justify-between py-[16px] px-[25px]  max-[730px]:flex max-[730px]:px-[30px] max-[445px]:px-[16px]">
      <div>
      <Select>
              <SelectTrigger className="w-[135px] max-[350px]:w-[125px] max-[330px]:w-[130px] border-none ">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                    {/* select */}
                          <Select>
                            <SelectTrigger className="w-[130px] border-none">
                              <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                          </Select>
                </SelectItem>
                <SelectItem value="dark">

                         {/* Product type */}
                          <Select>
                            <SelectTrigger className="w-[130px] border-none"> 
                              <SelectValue placeholder='Product type'  />
                            </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sofa">Sofa</SelectItem>
                            <SelectItem value="chair">Chair</SelectItem>
                          </SelectContent>
                          </Select>
                </SelectItem>
                <SelectItem value="Price"> 
                    {/* Price */}
                      <Select>
                        <SelectTrigger className="w-[130px] border-none"> 
                          <SelectValue placeholder='Price'  />
                        </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100$ To 300$">100$ To 300$</SelectItem>
                        <SelectItem value="300$ To 600$">300$ To 600$</SelectItem>
                      </SelectContent>
                      </Select>
                      </SelectItem>
                      <SelectItem value='Brand'>
                            {/* Brand */}
                              <Select>
                                <SelectTrigger className="w-[130px] border-none"> 
                                  <SelectValue placeholder='Brand'  />
                                </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="nike">Nike</SelectItem>
                                <SelectItem value="addidas">Addidas</SelectItem>
                              </SelectContent>
                              </Select>
                      </SelectItem>
              </SelectContent>
            </Select>
      </div>
      <div>
      {/* <Select value={selectValue} onValueChange={(e) => onHandleSelectBox(e)}>
              <SelectTrigger className="w-[135px] max-[350px]:w-[125px] max-[330px]:w-[100px] border-none">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {
                  uniqueTypes.map((e)=>{
                    return(

                      <SelectItem value={e}>{e}</SelectItem>
                    )
                  })
                }
               
              </SelectContent>
            </Select> */}
      </div>
    </nav>
  )
}

export default SelectBarResponsiv
