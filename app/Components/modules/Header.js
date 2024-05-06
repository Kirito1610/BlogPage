'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css'; 
import { UseContext } from "@/app/context/Store";
import Overlay from "./PopupFrom";
export default function Header(){
    const {overlayState,setOverlystate}=UseContext();
   const handleOverly=()=>{
    setOverlystate(()=> overlayState ? false : true)
   }
    return(
        <>
        <div className='flex w-full px-8 md:px-14 py-5 items-center justify-between'>
<Link href="/"><Image src='/logo.webp' width={500} height={500} className="w-[150px] h-[100px] object-contain md:w-[200px]" alt="logo" priority={true}></Image></Link>
<motion.div
  initial={{ opacity: 1,scale:0.5 }}
  animate={{ opacity: 1,scale:1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 40,
    repeat:Infinity
  }}
>

    <button onClick={handleOverly} className="bg-[#124076] text-white py-2.5 px-4 rounded-md text-[10px] md:text-sm">Schedule a Meeting</button>
</motion.div>
<Popup  id='popup' open={overlayState} onClose={()=>setOverlystate(false)}
     position="center center" closeOnDocumentClick> 
      <Overlay />
    </Popup> 
        </div>
        </>
    )
}