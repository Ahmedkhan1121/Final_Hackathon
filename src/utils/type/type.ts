import React, { ChangeEvent } from "react";
import { MdExposurePlus1 } from "react-icons/md";

export interface NavListType{
    Link:string,
    List:string,
}
// BrandDifferentCard
export interface BrandDifferentCardType{
    id:string;
    ImgUrl:string;
    heading:string;
    p:string;
}

// New ceramics

export interface NewCeramicsType{
        id:string;
        imgUrl:string;
        heading:string;
        price:string
}

// Our popular products

export interface OurPopularProductsType{
        id:string;
        imgUrl:string;
        heading:string;
        price:string;
        with:string;
}

// Menu footer
export interface FooterListType{
    id:string;
    link:string;
   list:string;
}
export interface AvionFooterListType{
    id:string;
   list:string;
}

// Social media icons


export interface SocialMediaIconType {
    name: string; // Social media platform ka naam (e.g., "Facebook")
    url: string;  // Social media profile ka link (e.g., "https://facebook.com")
    icon: React.ReactNode; // React component jo icon render karega
}

// productLIst

export interface productListType{
    id:number;
    imgUrl:string;
    name:string;
    price:string;
}



// product context type

export interface ProductContextType{
    productList:MockApiType[];
    onHandlePrev: () => void;
    navTogg:boolean;
    paginationOperate:(value: string) => void;
    page:number;
    uniqueTypes:string[];
    uniqueprices:(string | number)[];
    onHandleSelectBox :(e:string) => void;
    selectValue:string;
    setProdColor: (color:string) => void;
    setProdDimension: (dimension:string) =>void;
    onProdInc: (id:string) => void;
    onProdDec: (id:string) => void;
    addToCart: (id:string) => void;
    cartData:InitialCartData;
    addProdInc:(id:number) => void;
    addProdDec:(id:number,quantity:number) => void;
    cartDeleteItem: (id:number) =>void;
    clearCart: () => void;
     addWishList: (id:string) => void;
     colr:boolean;
}

// add to cart

export interface InitialData{
    card:productListType[];
    addToCart:productListType[]
}
export interface Action{
    type:string;
    payload:any;
}


// Mock Api Type

export interface MockApiType {
    productname: string; // Name of the product
    description: string; // Detailed description of the product
    productimg: string; // URL of the product image
    price: number; // Price of the product
    discount: number; // Discount percentage on the product
    category: string; // Product category (e.g., "chair")
    stock: number; // Number of items in stock
    rating: number; // Product rating
    reviews?: string[]; // Array of reviews for the product
    tags: string[]; // Tags associated with the product
    ceratedAt: string; // Creation date in ISO format
    updatedAt: string; // Last updated date in ISO format
    features: string[]; // Key features of the product
    dimensions: Dimensions; // Dimensions of the product
    ProductColor: string[]; // Array of available colors in hex codes
    id: string; // Unique product ID
    productQuantity:number;
  }
  
export  interface Dimensions {
    depth: string; // Depth of the product
    width: string; // Width of the product
    height: string; // Height of the product
  }

  //product reducer
  export interface InitialProdData{
    productList:MockApiType[];
    backupList:MockApiType[];
    page:number,
    limit:number
};

export interface ProductAction{
    type:string,
    payload:string|MockApiType[];
};

//ADD TO CART TYPE

export interface CartListType{
    productname: string; 
    productid: number; 
    dimensions:Dimensions; 
    // producttype: string; 
    // productavaiableornot: boolean | null; 
    productcolor:string; 
    price: number; 
    productcategory: string; 
    productimage: string;
    productquantity:number;
    sku:string;
    currency:string
    // productimagelist: ProductImage[]; 
  };

export interface InitialCartData{
    cartList:MockApiType[];
    productColor:string;
    dimensions:Dimensions;
    totalPrice:number;
    totalQuantity:number
    addCartProd:CartListType[]
    shipping:number;
    wishList:MockApiType[];
    toast:boolean
};
export interface CartAction{
    type:string;
    payload:string|number|MockApiType[]|Dimensions|CartDec;
};
export interface CartDec{
    id:number,
    quantity:number;
}

