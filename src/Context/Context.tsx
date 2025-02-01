"use client"

import React, { createContext, useContext, useState} from 'react'
interface ContextDataType{
  // home
    homeList:boolean;
    // setNavList:React.Dispatch<React.SetStateAction<boolean>>;
    onHomeToggle:()=>void;
    // about
    aboutList:boolean;
    onAboutToggle:()=>void;

 }

export const MainContext=createContext<ContextDataType|null>(null)
 
// home header
const Context = ({children}:{children: React.ReactNode;}) => {
    const [homeList,setHomeList] = useState<boolean>(false);
  const onHomeToggle = () => {
    setHomeList((prev) => !prev);
  };
  // About header
  const [aboutList,setAboutList]= useState<boolean>(false);
  const onAboutToggle = () => {
    setAboutList((prev) => !prev);
  };

  

  return (
    <>
      <MainContext.Provider value={{homeList,onHomeToggle,aboutList,onAboutToggle}}>{children}</MainContext.Provider>
    </>
  )
}
export default Context

// custom hook 

const useFurnContext = () => {
  
  const FurnHook = useContext(MainContext)
  if(!FurnHook){
   throw new Error("Data not found")
  } 
  return FurnHook 
}

export {useFurnContext}



// header