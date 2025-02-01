import BrandDifferent from "@/components/BrandDifferent/BrandDifferent";
import Ceramics from "@/components/Ceramics/Ceramics";
import GlobalBrand from "@/components/GlobalBrand/GlobalBrand";
import Hero from "@/components/Hero/Hero";
import OurPopularProducts from "@/components/OurPopularProducts/OurPopularProducts";
import SignUp from "@/components/SignUp/SignUp";


export default function Home() {
  return (
  <>
  <main>
    <Hero/>

    {/* BrandDifferentCard */}

    <BrandDifferent/>
    
    {/* New ceramics */}
    {/* <Ceramics /> */}

    {/* OurPopularProducts */}

    <OurPopularProducts />

    {/* SignUp */}
    <SignUp />
    {/* Globle brand */}
    <GlobalBrand />
  </main>
  </>
  );
}
