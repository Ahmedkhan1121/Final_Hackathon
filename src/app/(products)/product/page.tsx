import Pagination from '@/components/Pagination/Pagination'
import ProductCard from '@/components/ProductCard/ProductCard'
import ProductHero from '@/components/ProductHero/ProductHero'
import SelectBar from '@/components/SelectBar/SelectBar'
import React from 'react'

function page() {
  return (
    <main>
      <ProductHero/>
      <SelectBar/>
      < ProductCard/>
      <Pagination/>
    </main>
  )
}

export default page
