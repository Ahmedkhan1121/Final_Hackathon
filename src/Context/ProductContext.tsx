"use client"
import Cookies from "js-cookie";    //COOKIES TYPE
import { paginButton } from "@/utils/helper";
import axios from "axios";
import { Address,   CartAction, CartDec, CartListType, Dimensions, InitialCartData, InitialProdData, MockApiType, ProductAction, ProductContextType, Rate, ShipmentInpCheck, TrackingData, trackingObjType  } from "@/utils/type/type"
import {
  ChangeEvent,
  //  ChangeEvent,
   createContext, FormEvent, useCallback, useContext, useEffect, useReducer, useState } from "react"
import getStripe from "@/utils/getStripe";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

//COOKIES FUNCTION

// export const saveCartToCookies = (cart:CartListType[]) => {
 
// };


// export const getCartFromCookies = () => {
//   return JSON.parse(Cookies.get("avioncart") || "[]");
// };
export const getCartFromCookies = () => {
  try {
    return JSON.parse(Cookies.get("avioncart") || "[]");
  } catch (error) {
    console.log(error)
    return [];
  }
};

export const getWishList = () => {
  return JSON.parse(Cookies.get("avoinwishlist") || "[]");
}


const ProductCont =createContext<ProductContextType|null>(null)


// product ko reducer me handel karne ka kam 
const prodInitialData:InitialProdData = {
    productList:[],
    backupList:[],
    page:1,
    limit:12
  };
  const PRODUCTACTION = {
    LOADAVION:'LOADAVION',
    PRODPAGEONE:'PRODPAGEONE',
    PRODPAGETWO:'PRODPAGETWO',
    PRODPAGETHREE:'PRODPAGETHREE',
    PRODPAGEFOUR:'PRODPAGEFOUR',
    FILTERCATEG:'FILTERCATEG',
  };

  //Calculate Total Quantity
  const calculateQuantity = (addCart:CartListType[]) => {
    const setTotalQuantity = addCart.map((e) => e.productquantity)
              .reduce((prev, curr) => {
                return prev + curr;
    }, 0);
    return setTotalQuantity;
  };
   //Calculate Total Quantity
   const calculateTotalPrice = (addCart:CartListType[]) => {
    const setTotalPrice = addCart.reduce((total, item) => {
      return total + (item.price * item.productquantity);
    }, 0);
    return setTotalPrice;
  };

  // CART INITIAL DATA AND ACTION FOR REDUCER

  const cartInitialData:InitialCartData = {
    cartList:[],
    productColor:'',
    dimensions:{height:'',depth:'',width:''},
    totalPrice:calculateTotalPrice(getCartFromCookies()),
    totalQuantity:calculateQuantity(getCartFromCookies()),
    addCartProd:getCartFromCookies(),
    shipping:10,
    wishList:getWishList(),
    toast:false

  };
  const CARTACTION = {
    CARTSETLIST:'CARTSETLIST',
    ADDCOLOR:'ADDCOLOR',
    DIMENSIONS:'DIMENSIONS',
    INCPRODUCTQUAN:'INCPRODUCTQUAN',
    DECPRODUCTQUAN:'DECPRODUCTQUAN',
    ADDTOCART:"ADDTOCART",
    INC_ON_CART_PRODUCT:"INC_ON_CART_PRODUCT",
    DEC_ON_CART_PRODUCT:"DEC_ON_CART_PRODUCT",
    ORDER_DONE:'ORDER_DONE',
    RESET_COLOR_SIZE:'RESET_COLOR_SIZE',
    WISHLIST:'WISHLIST',
    DELETE_ITEM:'DELETE_ITEM',
    CLEAR_CART:'CLEAR_CART',
  }
  
  //DESTRUCTION OF CART ACTION

  const {CARTSETLIST,ADDCOLOR,DIMENSIONS,DECPRODUCTQUAN,INCPRODUCTQUAN,ADDTOCART,INC_ON_CART_PRODUCT,DEC_ON_CART_PRODUCT,RESET_COLOR_SIZE,WISHLIST,CLEAR_CART,DELETE_ITEM} = CARTACTION;




function ProductContext({children}:{children: React.ReactNode;}) {
  //HANDLE SELECT BOX FOR FILTER PRODUCT VIA PRODUCT CATEGORY
  const [selectValue,setSelectValue] = useState<string>('');

  // home nav
    const [navTogg,setNavTogg] = useState<boolean>(false);
     const onHandlePrev = () => {
           setNavTogg((prev) => !prev)
     } 
     //WISH LIST ADD COLOR
const [colr,setColr] = useState<boolean>(false);
//ROUTER FOR NAVIGATION
const navigRoute = useRouter();
//handle toast for addd to cart
// const [cartAlert,setCartAlert] = useState(false);
//HANDLE SHIPMENT INPUT
const [shipmentInp,setShipmentInp] = useState<Address>({
  name: "",
  phone: "",
  addressLine1: "1600 Pennsylvania Avenue NW",
  cityLocality: "Washington",
  stateProvince: "DC",
  postalCode: "20500",
  countryCode: "US",
  addressResidentialIndicator: "no",

});
 const [rateList, setRatesList] = useState<Rate[]>([]);
  const [rateId, setRateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [shipError, setShipError] = useState<string>('');
  //tracking on shipment
  const [labelId, setLabelId] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [trackError, setTrackError] = useState<string>('');
  const serchParams = useSearchParams();
  const queryId = serchParams.get('labelid') as string;
  const trackRoute = useRouter();

    const {FILTERCATEG,LOADAVION,PRODPAGEONE,PRODPAGETWO,PRODPAGETHREE,PRODPAGEFOUR} = PRODUCTACTION;

    const [prodData,dispatch] = useReducer(productReducer,prodInitialData);
    function productReducer(state:InitialProdData,action:ProductAction):InitialProdData{
      switch (action.type) {
        case LOADAVION:
          return {...state,productList:(action.payload as MockApiType[]),backupList:(action.payload as MockApiType[])};

          case PRODPAGEONE:
            return { ...state, page: 1 };
      
          // FOR SECOND PAGE QUERY
          case PRODPAGETWO:
            return { ...state, page: 2 };
      
          // FOR THIRD PAGE QUERY
          case PRODPAGETHREE:
            return { ...state, page: 3 };
      
          // FOR FOURTH PAGE QUERY
          case PRODPAGEFOUR:
            return { ...state, page: 4};

          //FOR CATEGORY FILTER
        case FILTERCATEG:
          if((action.payload as string).trim().toLowerCase() === 'ALL'.toLowerCase()){
            return {...state,productList:state.backupList};
          }else{
            const filterProdTypes = state.backupList.filter((e) => {
              return e.category.trim().toLowerCase() === (action.payload as string).trim().toLowerCase();
            });
            return {...state,productList:filterProdTypes};

          };
        default:
          return state;
      }

    }
    const productApi= async (api:string) =>{
        try {
           const productData =await fetch(api,{cache:'force-cache'})
           const fetchProduct = await productData.json()
        //    setProductList(fetchProduct);
           console.log(fetchProduct)
        return fetchProduct;
        } catch (error) {
            throw new Error(`product not found : ${error}`)
        }

    }

    //DESTRUCTURE OF PRODUCT DATA
    const {productList,limit,page} = prodData;
    useEffect(() => {
      const callFetchFunc = async ()=> {
        //FOR PRODUCT LIST SHOW
       const avionFetch:MockApiType[] = await productApi(`http://localhost:3000/api/product?limit=${limit}&page=${page}`);
       const avionList = avionFetch.map((e) => ({...e,productQuantity:1}));
      //  console.log(avionList);
        dispatch({type:LOADAVION,payload:avionList});

        //ADD CART LIST TO PERFORM ADD TO CART
        const backUp:MockApiType[] = (await productApi(`http://localhost:3000/api/product`));
        const backUpList = backUp.map((e) => ({...e,productQuantity:1}))
        // console.log(backUpList);
        // dispatch({type:BACKUP,payload:backUp});
          //ADD CARTLIST TO PERFORM ADD TO CART
          cartDispatch({type:CARTSETLIST,payload:backUpList});
 };
 //CALL THE FUNCTION
 callFetchFunc();  
    },[page,LOADAVION,CARTSETLIST,limit]);


    //DESTRUCTURE THE PAGINATION BUTTON VALUE
    const {one,three,two,four} = paginButton;
  // PERFORM PAGINATION
  const paginationOperate = (value: string) => {
     if (value === one) {
      // Navigate to the first page
      dispatch({ type: PRODPAGEONE,payload:''});
    } else if (value === two) {
      // Navigate to the second page
      dispatch({ type: PRODPAGETWO,payload:''});
    } else if (value === three) {
      // Navigate to the third page
      dispatch({ type: PRODPAGETHREE,payload:''});
    } else if (value === four) {
        dispatch({ type: PRODPAGEFOUR,payload:''});
    };
  };

  //find the categories price of products
  //HANDLE FILTER CATEGORY
  const onHandleSelectBox = (e:string) => {
    setSelectValue(e);
    console.log(e);
    // if(selectValue){
      dispatch({type:FILTERCATEG,payload:e});

    // }else{
      // alert("Plz Fill the fields");
    // }
  };
  const categryList = prodData.backupList.map((e) => e.category);

  const priceList = prodData.backupList.map((e) => e.price);
  // console.log(categryList) 

  const uniqueTypes =[ "ALL",...new Set(categryList)];
  const uniqueprices=["All" , ...new Set(priceList)]
  console.log(uniqueTypes)


  //ADD TO CART
 
  const setProdColor = (color:string) => {
    cartDispatch({type:ADDCOLOR,payload:color});
  }
  const setProdDimension = (dimension:string) => {
    cartDispatch({type:DIMENSIONS,payload:dimension});
  }

  //PRODUCT INCREMENT AND DECREMENT
  const onProdInc= (id:string) => {
    cartDispatch({type:INCPRODUCTQUAN,payload:id});
  }
  const onProdDec= (id:string) => {
    cartDispatch({type:DECPRODUCTQUAN,payload:id});
    // alert(id)
  };
  //reset the color and the other property when i click on product card
  const onProductDetail = (id:string) => {
    cartDispatch({ type: RESET_COLOR_SIZE, payload: id });
    navigRoute.push(`/product/${id}`);

  };

  

  //cart Product Increment
  const addProdInc = (id:number) => {
    cartDispatch({type:INC_ON_CART_PRODUCT,payload:id});
    // alert(ID: ${id})
  };
  //cart Product Decrement
  const addProdDec = (id:number,quantity:number) => {
    cartDispatch({type:DEC_ON_CART_PRODUCT,payload:{id,quantity}});
    // alert(ID: ${id})
  }

  //cart delete item
  const cartDeleteItem = (id:number) => {
    cartDispatch({type:DELETE_ITEM,payload:id});
  };

  //clear cart
  const clearCart = () => {
    cartDispatch({type:CLEAR_CART,payload:''})
  }


  //Add Wishlist
  const addWishList = (id:string) => {
    cartDispatch({type:WISHLIST,payload:id});
    const findProd = productList.find((e) => e.id === id);
    if(findProd){
      setColr(true);
    }
  }



//ADD TO CARD REduer
  const [cartData,cartDispatch] = useReducer(cartReducer,cartInitialData);

  //handle add to cart button
  const addToCart = (id:string) => {
    cartDispatch({type:ADDTOCART,payload:id});
    
  }

    //HANDLE STRIPE CHECKOUT FOR PAYMENT
    const onHandleCheckout = async () => {
      if(!cartData || cartData.addCartProd.length===0){
        alert('Cart is EMpty')
        return;
      }
      try {
        const { addCartProd } = cartData;
        const loadStripe = await getStripe();
    
        console.log("⏳ Sending Checkout Request...", addCartProd);
    
        const checkResponse = await fetch("/api/stripe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addCartProd), // ✅ Corrected JSON structure
        });
    
        const responseData = await checkResponse.json();
        console.log("✅ Checkout API Response:", responseData);
    
        if (!checkResponse.ok) {
          console.error("❌ Checkout API Error:", responseData.error || "Unknown Error");
          alert(`Checkout Failed: ${responseData.error || "Try again!"}`);
          return;
        }
    
        if (!responseData.sessionId) {
          alert("Invalid response from checkout session. Please try again.");
          return;
        }else{

        // }

        //POST REQUEST TO SEND EMAIL TO THE USER
        // if(responseData.sessionId){
          // const userEmailResp = await fetch('/api/send-email',{
          //   method:'POST',
          //   headers:{
          //     "Content-Type":'application/json'
          //   },
          //   body:JSON.stringify({
          //     addCartProd,
          //     totalPrice,
          //   })
          // });
          // if(!userEmailResp){
          //   throw new Error('Failed To send Email to User')
          // }
            
            console.log("🔄 Redirecting to Stripe Checkout...");
              await loadStripe?.redirectToCheckout({ sessionId: responseData.sessionId });
            }
    
      } catch (error) {
        console.error("❌ Error in Checkout:", error);
        alert("Something went wrong during checkout. Please try again.");
      }
    }

    //Handle Shipment Form
    
    const onHandleShipmentInp = (e:ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setShipmentInp((prev: Address) => ({ ...prev, [name]: value }));
  };

  const onHandleShipmentForm = async  (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {addressLine1,cityLocality,countryCode,name,phone,postalCode,stateProvince} = shipmentInp;
    //Regex For Input Fields
    const phoneNumRegex = /^[0-9]{11}$/;
    const matchPhoneNum = phone.match(phoneNumRegex);
    const postalCodeNumRegex = /^[0-9]{5}$/;
    const matchPostalCodeNum = postalCode.match(postalCodeNumRegex);
    
    const newInpValidCheck: ShipmentInpCheck = {
      phoneCheck: matchPhoneNum,
      firstnameCheck: name.length >= 3 && name.length <= 11,
      addressCheck: addressLine1.length >= 10 && addressLine1.length <= 30,
      cityCheck: cityLocality.length >= 4 && cityLocality.length <= 20,
      countryCheck: countryCode.length >= 1 && countryCode.length <= 5,
      stateCheck: stateProvince.length >= 2 && stateProvince.length <= 20,
      postalcodeCheck: matchPostalCodeNum,

    };
    const {addressCheck,cityCheck,countryCheck,firstnameCheck,phoneCheck,postalcodeCheck,stateCheck} = newInpValidCheck;
    if(!addressCheck || !cityCheck || !countryCheck  || !firstnameCheck  || !phoneCheck || !postalcodeCheck || !stateCheck){
      toast.error(`Please complete all required fields before proceeding to checkout.`)
    }
    else{
      toast.success(`Thank you for your purchase! Your payment was successful. A confirmation email has been sent to  .`);
      setLoading(true);
    setShipError('');
      setRatesList([]);
      try {
        const shipResponse = await axios.post("/api/get-rates", {
          shipmentInp,
          packages: [
                 { weight: { value: 5, unit: "ounce" }, dimensions:{ height: 3, width: 15, length: 10, unit: "inch" } },
               ],
        });
      
        console.log(shipResponse.data)
        setRatesList(shipResponse.data.shipmentDetail.rateResponse.rates);
      } catch (error) {
        console.error(`Error in Fetching Rating:${error}`)
        setShipError('Error when Fetching the Rate List')
      }finally{
        setLoading(false)
      }
      setShipmentInp({
      addressLine1:'',
      cityLocality:'',
      addressResidentialIndicator:'no',
      countryCode:'',
      name:'',
      phone:"",
      postalCode:'',
      stateProvince:'',
      });
    }
};

//HANDLE SHIPPING RATE
const handleRate = (id:string|null) => {
  setRateId(id)
};
//CREATING SHIPPING LABEL
const onCreatingLabel = async () => {
  if(!rateId){
    alert('Select a Rate to create a Label')
    return;
  };

  setLoading(true);
  setShipError('');

  try {
    const labelResponse = await axios.post('/api/label',{rateId})
    const responseData = labelResponse.data;
    setLabelPdf(responseData.labelDownload.href);
    setTrackingObj({
      trackingNumber: responseData.trackingNumber,
      labelId: responseData.labelId,
      carrierCode: responseData.carrierCode,
    });
    console.log(responseData)
  } catch (error) {
    console.error(error);
    setShipError('Here are some issue to create a label. Please try later.')
  }finally {
    setLoading(false);
  }
}
//HANDLING TRACKING
const handleTracking = useCallback(
  async (labelid:string) => {
   if(!labelid){
    setTrackError('Label ID is Necessary');
    return;
   }
    setLoading(true);
    setTrackError('');
    try {
      trackRoute.replace(`/tracking?labelId=${labelid}`)
      const trackResponse = await axios.get(`/api/tracking/${labelid}`);
      setTrackingData(trackResponse.data);
    } catch (error) {
      console.error(`Error on tracking shipment ${error}`);
      setTrackError('Failed To Track Shipment. Please Re-check the Label ID');
    }finally{
      setLoading(false);
    }

  },
  [trackRoute]
 
); 

useEffect(() => {
  if(queryId){
    setLabelId(queryId);
    handleTracking(queryId)
  }
},[queryId,handleTracking])

//handle shipment tracking input
const onHandleTrack = (e:string) => {
  setLabelId(e)
}

//submissioon of shipment tracking
const onSubmitTracking = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  handleTracking(labelId)
}
  //HANDEL COOIES DATA 
  useEffect(()=>{
    Cookies.set("avioncart", JSON.stringify(cartData.addCartProd), { expires: 7 }); // 7 din tak store rahega
  },[cartData.addCartProd])

  //HANDEL WISHLIST
  useEffect(() => {
    Cookies.set('avoinwishlist',JSON.stringify(cartData.wishList), { expires: 7 })
  },[cartData.wishList]);


  //HANDLE TO ADD TO CARD REDUCER
  function cartReducer(state:InitialCartData,action:CartAction):InitialCartData{
        switch (action.type) {
          //API KE LIST ME DATA DALA HE  
          case CARTSETLIST:
            return{...state,cartList:(action.payload as MockApiType[])}
            //SET COLOR FOR CARD PRODUCT 
           case ADDCOLOR:
         return {...state,productColor:(action.payload as string)};
        //DIMENSIONS
         case DIMENSIONS:
          return {...state,dimensions:(action.payload as Dimensions)}

          case  INCPRODUCTQUAN:
            const updatedCartInc = state.cartList.map((e) => {
              if (e.id === (action.payload as string)){
              //  const quanInc = ++e.productquantity;
              // alert(e.product_id)
                return { ...e, productQuantity: e.productQuantity+1};
              }; 
                return e;
            });
            return { ...state, cartList: updatedCartInc};

            case DECPRODUCTQUAN:
         const updatedCartDec = state.cartList.map((e) => {
           if (e.id === (action.payload as string)){
             const quanDec = e.productQuantity===0 ? 0 : e.productQuantity-1;
             return { ...e, productQuantity:quanDec};
           } else {
             return e;
           }
         });
         return { ...state, cartList: updatedCartDec};
         case RESET_COLOR_SIZE:
          const updatedCartList = state.cartList.map((e) => {
            if(e.id === (action.payload as string)){
              // remove one quantity for set the decrement of product
             const deleteQuan = e.productQuantity-1;
              return {...e, productQuantity:e.productQuantity-deleteQuan}
            }else{
              return e;
            }
          });
          return{...state,cartList:updatedCartList, productColor:''};
         case ADDTOCART:
          const prodFind = state.cartList.find((e)=> {
            return e.id === (action.payload as string);
          });
          
          if(prodFind){
            if(state.productColor=== '' || prodFind.productQuantity<1){
             toast.warning('Set the color,size and quantity')
            }else{
              const getColor =prodFind.ProductColor.find((e) => {
                return e === state.productColor;
              });
             if(getColor&&state.dimensions){
               const addProductItem:CartListType = {
                 productid:new Date().getTime(),
                 productname:prodFind.productname,
                 productimage:prodFind.productimg,
                 productcategory:prodFind.category,
                 productcolor:getColor,
                  dimensions:state.dimensions,
                 price:prodFind.price,
                 productquantity:prodFind.productQuantity,
                 sku:`${getColor}-${new Date().getTime()}`,
                 currency:'USD'
               };
 
               //destructure the find item
               const {productname,productQuantity,} = prodFind;
             
               //find product if already exist in the cart with same property
               const findCartProd=state.addCartProd.find((e) => {
                 return e.productname === productname && e.productcolor === getColor;
               });
               if(findCartProd){
                 const {productname,productcolor,productid} = findCartProd;
                 // if(productname.toLowerCase() === product_name.toLowerCase() && getColor === productcolor){
                   //update  the quantity that product if it's already exist in the cart
                   const mapCartList = state.addCartProd.map((e) => {
                     if(productname === e.productname && productcolor === getColor && e.productid === productid){
                       return {...e,productquantity:e.productquantity+productQuantity}
                     }else{
                       return e;
                     }
                   });
                   //add the updated list of cart
                   toast.success('You are adding more quantity')
                   return {...state,addCartProd:mapCartList,totalQuantity:calculateQuantity(mapCartList),totalPrice:calculateTotalPrice(mapCartList),toast:false};
 
                 // }
                
               }else{
                 const addCartItems:CartListType[] =[...state.addCartProd,addProductItem];
                 console.log(addCartItems)
                 toast.success('Product Added in the cart');
                 // setShowToast(true);
                 return {...state,addCartProd:addCartItems,totalQuantity:calculateQuantity(addCartItems),totalPrice:calculateTotalPrice(addCartItems),toast:true};
               }
               
             }else{
               alert("Color,Size is not Available");
             }
           }
         } else {
           alert("Product is not Available");
           return {...state,toast:false};
         } 
         case INC_ON_CART_PRODUCT:
          const incAddProd = state.addCartProd.map((e) => {
            if(e.productid === (action.payload as number)){
              return {...e, productquantity: e.productquantity+1}
            };
            return e;
          }); 
          return {...state,addCartProd:incAddProd,totalQuantity:calculateQuantity(incAddProd),totalPrice:calculateTotalPrice(incAddProd)};   

        case DEC_ON_CART_PRODUCT:
          if((action.payload as CartDec).quantity===1){
            //remove that item if quantity zero
            const removeCartItem = state.addCartProd.filter((e) => {
              return e.productid !== (action.payload as CartDec).id
            });
            return {...state, addCartProd:removeCartItem,totalQuantity:calculateQuantity(removeCartItem), totalPrice:calculateTotalPrice(removeCartItem)};
          }else{
  
            const decAddProd = state.addCartProd.map((e) => {
              if(e.productid === (action.payload as CartDec).id){
                return {...e, productquantity: e.productquantity-1}
              }else{
                return e;
              }
            });
            return {...state,addCartProd:decAddProd,totalQuantity:calculateQuantity(decAddProd),totalPrice:calculateTotalPrice(decAddProd)};   
          } 
         
        case DELETE_ITEM:
          const deleteItem = state.addCartProd.filter((e) => {
            return e.productid !== (action.payload as number)
          });
          return {...state,addCartProd:deleteItem,totalPrice:calculateTotalPrice(deleteItem),totalQuantity:calculateQuantity(deleteItem)}
        
        case CLEAR_CART:
          return {...state,addCartProd:[],totalPrice:0,totalQuantity:0}
         
          case WISHLIST:
         //find the product to add in wishlist
         const findProdForWish = state.cartList.find((e) => {
           return e.id === (action.payload as string);
         });
         if(findProdForWish){
           //create wishlist
           const wishProduct:MockApiType = {
             id:findProdForWish.id,
             stock:findProdForWish.stock,
             ProductColor:findProdForWish.ProductColor,
             productimg:findProdForWish.productimg,
            price:findProdForWish.price,
            //  old_price:findProdForWish.old_price,
             description:findProdForWish.description,
            //  product_id:findProdForWish.product_id,
            //  product_img:findProdForWish.product_img,
             productname:findProdForWish.productname,
             rating:findProdForWish.rating,
             category:findProdForWish.category,
             productQuantity:findProdForWish.productQuantity,
             dimensions:findProdForWish.dimensions,
             ceratedAt:findProdForWish.ceratedAt,
             updatedAt: findProdForWish.updatedAt,
             discount:findProdForWish.discount,
             tags:findProdForWish.tags,
             features:findProdForWish.features,
           };
           //destructure the wish list object
           const {productname} = wishProduct;
           //find if some products is already exist in wishlist
           const findExistWishList = state.wishList.find((e) => {
             return e.productname === productname;
           });
           // const findColor = findExistWishList?.color_list.find((e) => {
           //   e === state.productColor;
           // })
           if(findExistWishList?.productname === productname){
             alert('This Product is already exist');
             return state;
           }else{
            
             const addWishList = [...state.wishList,wishProduct];
             return {...state,wishList:addWishList}
           }

         };
         
         default:
           return state
        }

        

  };
  console.log(cartData.cartList)






  return (
  <ProductCont.Provider value={{productList,navTogg,onHandlePrev,paginationOperate,page,uniqueTypes,uniqueprices,onHandleSelectBox,selectValue,setProdColor,cartData,setProdDimension,onProdDec,onProdInc,addToCart,addProdDec,addProdInc,cartDeleteItem,clearCart,addWishList,colr,onHandleCheckout,onHandleShipmentForm,onHandleShipmentInp,labelId,labelPdf,loading,rateId,rateList,shipError,shipmentInp,trackError,trackingData,trackingObj,handleRate,onCreatingLabel,onHandleTrack,onSubmitTracking,onProductDetail}}>{children}</ProductCont.Provider>
  )
}

export default ProductContext

// custom hook

 export const useProductHook=()=>{

    const ProductHook =useContext(ProductCont);  
    if(!ProductHook){
        throw new Error('Product Context is Not Found ')
    }
    return ProductHook
}