
import { CheckLabel } from '@/utils/type/type'
import React from 'react'

function ShippingLabelInp({labelValue}:CheckLabel) {
  return (
    <label className='uppercase py-3 font-bold'>
    {labelValue}
  </label>
  )
}

export default ShippingLabelInp