import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';
import { useState } from 'react';
import mainMenu from './MainMenu';
import Link from 'next/link';
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -1600 },
}

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmenu, setIsSubmenu] = useState({submenuName:'',isSubmenuOpen:false});
    return (
      
           <>
        <div className='sticky top-0 z-50 bg-[#F6F5F2] px-16 lg:hidden'>
        <div className='flex w-full items-center justify-between'>
        <Image src='/menu.png' width={100} height={100} 
        className="w-[30px] text-center object-contain flex lg:hidden mt-2 cursor-pointer" 
        alt="menu.png"
        onClick={() => setIsOpen(isOpen => !isOpen)} 
        />
        
          <form className="p-2 box-border flex flex-row gap-0 flex-nowrap">
      <motion.input
              type="text"
              placeholder="Search here..."
              className="p-2 text-sm box-border"
              initial={{ maxWidth: '0px',opacity:0}}
  animate={{ maxWidth: '180px',opacity:1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 40,
  }}
             >
            </motion.input> 
            <button className="bg-[#FAA300] px-2.5">
              <Image
                src="/loupe.png"
                width={15}
                height={15}
                alt="loupe"
                className="flex flex-1 w-4 h-8 object-contain">
                </Image>
            </button>
          </form>
        </div>
        <motion.div variants={variants} animate={isOpen ? "open" : "closed"} className='absolute top-0 bottom-0 h-[100vh] bg-[#0000001f] left-0 right-0 mt-[52px]'>
<motion.ul className='bg-[#F6F5F2] w-[500px] h-[92vh] px-16 pt-4 pb-8 flex flex-col gap-8 overflow-auto border-t-[3px]'>
  {mainMenu.map((item)=><li key={item.name}><span className='flex flex-row justify-between gap-8'><Link href={item.link}  onClick={() => setIsOpen(isOpen => !isOpen)}>{item.name}</Link> {item.name == 'Home' || item.name == 'Procurement Research' ? '' :<Image src='/mobileDown.png' width={500} height={500} className={isSubmenu.isSubmenuOpen && isSubmenu.submenuName == item.name ? 'w-[18px] object-contain rotate-180 transition-all cursor-pointer' : 'w-[18px] object-contain transition-all cursor-pointer'}  alt="down" onClick={(e)=>{return(setIsSubmenu({isSubmenuOpen: !isSubmenu.isSubmenuOpen , submenuName :e.target.closest('li').innerText }))}}></Image>}</span>
  {isSubmenu.submenuName == item.name ? <ul className='p-0 word-wrap flex flex-wrap flex-col gap-2 mt-4'>
    {(item.submenu).map((item)=><li key={item.name}>-<Link href={item.link}> {item.name}</Link></li>)}
  </ul> : ''}
  </li>)}
</motion.ul>
        </motion.div>
      </div>
      
      
      </>
    )
}

export default MobileNavbar
