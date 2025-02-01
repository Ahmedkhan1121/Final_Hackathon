'use client';

import { useProductHook } from '@/Context/ProductContext';
import { pagin, popin } from '@/utils/helper';
import React from 'react'

function Pagination() {
  const {paginationOperate,page} = useProductHook();
  return (
    <div className={`${popin.className} py-16 flex justify-center gap-1 ` }>
      {pagin.map((e) => {
        return(
            <button key={e.id} onClick={() =>paginationOperate(e.name)} style={{backgroundColor: page === +e.name ? '#23a6f0': e.bgColor ,color:page === +e.name ? '#fff' :e.color }} className='border-[#e9e9e9] border-2 outline-none rounded-md py-3 px-5 font-bold size-[56px] max-[330px]:p-4 max-[300px]:p-3'>{e.name}</button>
        );
      })}
    </div>
  )
};
export default Pagination;