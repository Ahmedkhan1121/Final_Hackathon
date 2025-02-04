import React, { ChangeEvent, FormEvent } from "react";

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
     onHandleCheckout: () => void;
     onHandleShipmentForm :(e:FormEvent<HTMLFormElement>) => void;
    onHandleShipmentInp : (e:ChangeEvent<HTMLInputElement>) => void;
    shipmentInp:Address;
    rateList:Rate[];
    rateId:string|null;
    labelPdf:string|null;
    loading:boolean;
    shipError:string;
    trackingObj:trackingObjType|null;
    labelId:string;
    trackingData:TrackingData|null;
    trackError:string;
    handleRate:(id:string|null) =>void;
    onCreatingLabel:() =>void;
    onHandleTrack: (e:string) => void;
    onSubmitTracking: (e:FormEvent<HTMLFormElement>) => void;
    onProductDetail:(id:string) =>void;
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


//Shipment Types
export type Address = {
    name: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    cityLocality: string;
    stateProvince: string;
    postalCode: string;
    countryCode: string;
    addressResidentialIndicator: "yes" | "no";
  };
  export type unit = "ounce" | "gram" | "kilogram" | "pound";
  export type dimensionUnit = "inch" | "centimeter";
  
  export type Package = {
    weight: {
      value: number;
      unit: unit;
    };
    dimensions: {
      height: number;
      width: number;
      length: number;
      unit: dimensionUnit;
    };
  };
  
  export type Rate = {
    rateId: string;
    rateType: string;
    carrierId: string;
    shippingAmount: {
      currency: string;
      amount: number;
    };
    serviceType: string;
    serviceCode: string;
    trackable: boolean;
    carrierFriendlyName: string;
    validationStatus: string;
    warningMessages?: string[];
  };
  
  export interface trackingObjType {
    trackingNumber: string;
    labelId: string;
    carrierCode: string;
  }
  
  export interface TrackingData {
    trackingNumber?: string;
    statusDescription?: string;
    carrierStatusDescription?: string;
    estimatedDeliveryDate?: string;
    actualDeliveryDate?: string;
  }

  //shipment input types
export interface ShipmentInpType{
    email:string;
    phone:string;
    firstname:string;
    lastname:string;
    country:string;
    state:string;
    address:string;
    city:string;
    postalcode:string;
  }

  //shipment input label type
  export interface CheckLabel {
    labelValue: string;
  }

  //shipmentout Input
export interface ShipmentInp {
  place: string;
  name: string;
  value:string;
}

 //shipment boolean state
export interface ShipmentInpCheck{
    phoneCheck:RegExpMatchArray|null;
    firstnameCheck:boolean;
    countryCheck:boolean;
    stateCheck:boolean;
    addressCheck:boolean;
    cityCheck:boolean;
    postalcodeCheck:RegExpMatchArray|null;
  }

  