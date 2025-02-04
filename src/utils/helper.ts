import { Poppins } from 'next/font/google';

import {AvionFooterListType, BrandDifferentCardType, FooterListType, NavListType, NewCeramicsType, OurPopularProductsType, productListType, } from "@/utils/type/type";
// import { CiLinkedin } from "react-icons/ci";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { FaSkype } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";
export const popin = Poppins({
    subsets: ['latin'], // Specify subsets (optional)
    weight: ['400', '700'], // Include only weights you need
});
  


export const navList:NavListType[]=[
    {
        Link:'/product',
        List:'Plant pots',
    },
    {
        Link:'/homepage',
        List:'Ceramics',
    },
    {
        Link:'/product',
        List:'Tables',
    },
    {
        Link:'/product',
        List:'Chairs',
    },
    {
        Link:'/product',
        List:'Crockery',
    },
    {
        Link:'/product',
        List:'Tableware',
    },
    {
        Link:'/about',
        List:'about',
    },
]

// about navList
export const aboutNavList:NavListType[]=[
    {
        Link:'/aboutUs',
        List:'About us',
    },  {
        Link:'Contact',
        List:'Contact',
    },  {
        Link:'Blog',
        List:'Blog',
    },
]

// BrandDifferentCard

 export const brandDifferentCard:BrandDifferentCardType[]=[

    {
        id:'1',
        ImgUrl:'/images/icons/Delivery.png',
        heading:'Next day as standard',
        p:'Order before 3pm and get your order the next day as standard',
    },
    {
        id:'2',
        ImgUrl:'/images/icons/Checkmark--outline.png',
        heading:'Made by true artisans',
        p:'Handmade crafted goods made with real passion and craftmanship',
    },{
        id:'3',
        ImgUrl:'/images/icons/Purchase.png',
        heading:'Unbeatable prices',
        p:'For our materials and quality you won’t find better prices anywhere',
    },{
        id:'4',
        ImgUrl:'/images/icons/Sprout.png',
        heading:'Recycled packaging',
        p:'We use 100% recycled packaging to ensure our footprint is manageable',
    },
]

// New ceramics

export const newCeramics:NewCeramicsType[]=[
    {
        id:'1',
        imgUrl:'/images/NewCeramics/842fec031ef0c247df24214e05b47e70.jpeg',
        heading:'The Dandy chair',
        price:'£250',
    },{
        id:'2',
        imgUrl:'/images/NewCeramics/3811628ae03b0a862e160e2eae36dcdd.jpeg',
        heading:'Rustic Vase Set',
        price:'£155',
    },{
        id:'3',
        imgUrl:'/images/NewCeramics/fe1e8e060432bf77cee26297ca43e0e6.jpeg',
        heading:'The Silky Vase',
        price:'£125',
    },{
        id:'4',
        imgUrl:'/images/NewCeramics/ffbabae5de21ee1b8c8ca6e83dd10f51.jpeg',
        heading:'The Lucy Lamp',
        price:'£399',
    },
]

// Our popular products

export const ourPopularProducts:OurPopularProductsType[]=[
    {
        id:'1',
        imgUrl:'/images/Ourpopularproducts/b19dc98ccde98dc5e1e2fb1bd0dc3b72.jpeg',
        heading:'The Poplar suede sofa',
        price:'£980',
        with:'520px'
    },
    {
        id:'2',
        imgUrl:'/images/Ourpopularproducts/842fec031ef0c247df24214e05b47e70.jpeg',
        heading:'The Dandy chair',
        price:'£250',
        with:'305px',
    },{
        id:'3',
        imgUrl:'/images/Ourpopularproducts/f99fff09807c6e277a683cd469bb041d.jpeg',
        heading:'The Dandy chair',
        price:'£250',
        with:'305px',

    },
]

// Footer List Type
// Menu
// New arrivals
// Best sellers
// Recently viewed
// Popular this week
// All products
export const menuFooterlist:FooterListType[]=[

    {
        id:'1',
        list:'New arrivals',
        link:'',
    }, {
        id:'2',
        list:'Best sellers',
        link:'',
    }, {
        id:'3',
        list:'Recently viewed',
        link:'',
    }, {
        id:'4',
        list:'Popular this week',
        link:'',
    },{
        id:'5',
        list:'All products',
        link:'',
    },
]

// Categories

// Crockery
// Furniture
// Homeware
// Plant pots
// Chairs
// Crockery
export const categoriesFooterlist:FooterListType[]=[

    {
        id:'1',
        list:'Crockery',
        link:'',
    }, {
        id:'2',
        list:'Furniture',
        link:'',
    }, {
        id:'3',
        list:'Homeware',
        link:'',
    }, {
        id:'4',
        list:'Plant pots',
        link:'',
    },{
        id:'5',
        list:'Chairs',
        link:'',
    },{
        id:'6',
        list:'Crockery',
        link:'',
    },
]

// Our company
// About us
// Vacancies
// Contact us
// Privacy
// Returns policy
export const ourCompanyFooterlist:FooterListType[]=[

    {
        id:'1',
        list:'About us',
        link:'',
    }, {
        id:'2',
        list:'Vacancies',
        link:'',
    }, {
        id:'3',
        list:'Contact us',
        link:'',
    }, {
        id:'4',
        list:'Privacy',
        link:'',
    },{
        id:'5',
        list:'Returns policy',
        link:'',
    }
]


export const avionFooterList:AvionFooterListType[]=[
    {
        id:'1',
        list:'21 New York Street',
    },{
        id:'2',
        list:'New York City',
    },{
        id:'3',
        list:'United States of America',
    },{
        id:'4',
        list:'432 34',
    },
]

// icons



    // <CiLinkedin />
    // <FaFacebookSquare />
    // <FaInstagram />
    // <FaSkype />
    // <FaTwitter />
    // <FaPinterest />

    // const socialMediaData:SocialMediaIconType[]= [
    //     { name: "LinkedIn",
    //      url: "https://linkedin.com",
    //      icon: <CiLinkedin/> 
    //     },
    //     { name: "Facebook",
    //      url: "https://facebook.com", 
    //     icon: <FaFacebookSquare /> 
    //      },
    //     { name: "Instagram",
    //      url: "https://instagram.com",
    //      icon: <FaInstagram />
    //      },
    //     { name: "Skype",
    //      url: "https://skype.com",
    //      icon: <FaSkype /> 
    //     },
    //     { name: "Twitter",
    //      url: "https://twitter.com",
    //      icon: <FaTwitter />
    //      },
    //     { name: "Pinterest",
    //      url: "https://pinterest.com",
    //      icon: <FaPinterest /> 
    //     },
    //   ];
      


    //   productList

export const productList:productListType[]=[
    {
        id:1,
        imgUrl:'/images/productList/842fec031ef0c247df24214e05b47e70.jpeg',
        name:'The Dandy chair',
        price:'$250',
    },{
        id:2,
        imgUrl:'/images/productList/3811628ae03b0a862e160e2eae36dcdd.jpeg',
        name:'Rustic Vase Set',
        price:'$155',
    },{
        id:3,
        imgUrl:'/images/productList/fe1e8e060432bf77cee26297ca43e0e6.jpeg',
        name:'The Silky Vase',
        price:'$125',
    },{
        id:4,
        imgUrl:'/images/productList/ffbabae5de21ee1b8c8ca6e83dd10f51.jpeg',
        name:'The Lucy Lamp',
        price:'$399',
    },{
        id:5,
        imgUrl:'/images/productList/6d3e79ab88d1c98f50ebfdfa751b9fc4.jpeg',
        name:'The Dandy chair',
        price:'$250',
    },{
        id:6,
        imgUrl:'/images/productList/231f7eb9a05113b5d3b4e1d2d85066e1.jpeg',
        name:'Rustic Vase Set',
        price:'$155',
    },{
        id:7,
        imgUrl:'/images/productList/bb95242ccb90c53366119f4072df51bf.jpeg',
        name:'The Silky Vase',
        price:'$125',
    },{
        id:8,
        imgUrl:'/images/productList/e1e2a6257a864ebdcfa65243fef17a60.jpeg',
        name:'The Lucy Lamp',
        price:'$399',
    },{
        id:9,
        imgUrl:'/images/productList/842fec031ef0c247df24214e05b47e70.jpeg',
        name:'The Dandy chair',
        price:'$250',
    },{
        id:10,
        imgUrl:'/images/productList/3811628ae03b0a862e160e2eae36dcdd.jpeg',
        name:'Rustic Vase Set',
        price:'$155',
    },{
        id:11,
        imgUrl:'/images/productList/fe1e8e060432bf77cee26297ca43e0e6.jpeg',
        name:'The Silky Vase',
        price:'$125',
    },{
        id:12,
        imgUrl:'/images/productList/ffbabae5de21ee1b8c8ca6e83dd10f51.jpeg',
        name:'The Lucy Lamp',
        price:'$399',
     }
     //,{
    //     id:'1',
    //     imgUrl:'/images/productList/',
    //     name:'',
    //     price:'',
    // },{
    //     id:'1',
    //     imgUrl:'/images/productList/',
    //     name:'',
    //     price:'',
    // },{
    //     id:'1',
    //     imgUrl:'/images/productList/',
    //     name:'',
    //     price:'',
    // },{
    //     id:'1',
    //     imgUrl:'/images/productList/',
    //     name:'',
    //     price:'',
    // },{
    //     id:'1',
    //     imgUrl:'/images/productList/',
    //     name:'',
    //     price:'',
    // },{
    //     id:'1',
    //     imgUrl:'/images/productList/',
    //     name:'',
    //     price:'',
    // },{
    //     id:'1',
    //     imgUrl:'/images/productList/',
    //     name:'',
    //     price:'',
    // },
]

// api function

// const fetchMock =async () => {
 
//     try {
//         const mockApi= await fetch(process.env.NEXT_PUBLIC_MOCK_API as string)
//         const mockData:MockApiType[] = await mockApi.json()
//         console.log(mockData)
//         return mockData
//     } catch (error) {
//         throw new Error('api not found')
//     }
// }
// fetchMock()
// export  {fetchMock}



// pagination

interface Pagin{
    id:number;
    name:string;
    color:string;
    bgColor:string;
}
export const pagin:Pagin[] = [
    
    {
        id:1,
        name:'1',
        bgColor:'white',
        color:'black',
    },
    {
        id:2,
        name:'2',
        bgColor:'white',
        color:'black',
    },
    {
        id:3,
        name:'3',
        bgColor:'white',
        color:'black',  
    },
    {
        id:4,
        name:'4',
        bgColor:'white',
        color:'black',
    },
    
];
export const paginButton = {
    one:'1',
    two:'2',
    three:'3',
    four:'4'
};