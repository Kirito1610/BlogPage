'use client';
import { createContext,useContext,useState } from "react";

const Context=createContext({
   overlyState:false,
    
   
})
export function ContextProvider({children}){
    const [overlayState,setOverlystate]=useState(false);
    const [btnState,setBtnstate]=useState('relative');
    const [hoverState,setHoverstate]=useState(false);
    const [BlogData,setBlogData]=useState('')
    return (<Context.Provider value={{overlayState,setOverlystate,btnState,setBtnstate,hoverState,setHoverstate,BlogData,setBlogData}}>{children}</Context.Provider>)
}
export const UseContext=()=>useContext(Context)