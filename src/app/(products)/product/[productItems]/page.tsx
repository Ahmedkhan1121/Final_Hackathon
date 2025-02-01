import ProductDetail from "@/components/ProductDetail/ProductDetail";



async function page({params}:{  params: Promise<{ productItems: string }>}) {


    const productId = (await params).productItems;
    return(
        <>
        <ProductDetail productId={productId}/>
        </>
    )


}

export default page
