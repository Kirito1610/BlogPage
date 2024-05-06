"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UseContext } from "@/app/context/Store";
import mainMenu from "./MainMenu";
import MobileNavbar from "./MobileNavbar";
import { motion } from "framer-motion";
export default function Navbar() {
  let Pathname = usePathname();
  const { hoverState, setHoverstate } = UseContext();
  let linkClass =
    "flex items-center justify-center hover:bg-[#FAA300] px-2 box-border text-sm relative hidden lg:flex hover:shadow-lg";
  const HandlehoverState = (e) => {
    setHoverstate(() =>
      hoverState == e.target.innerText ? "" : e.target.innerText
    );
  };

  return (
    <>
     <MobileNavbar />
      <div className=" h-[50px] sticky top-0 z-10 text-center text-nowrap justify-between px-4 lg:px-2 md:px-16 lg:justify-around hidden lg:flex bg-[#124076] ">
        <ul className="relative text-white gap-2.5 flex">
        
       
          {mainMenu.map((item) => {
            return (
              <li
                key={item.name}
                className={`${
                  Pathname == item.link ? "bg-[#FAA300]" : ""
                } ${linkClass}`}
                onMouseEnter={HandlehoverState}
                onMouseLeave={HandlehoverState}
              >
                <Link href={item.link} className="flex items-center justify-center gap-2">{item.name}{item.name == 'Home' || item.name == 'Procurement Research' ? '' :<Image src='/down.png' width={500} height={500} className="w-3 h-3 object-contain" alt="down"></Image>}</Link>
                {hoverState == item.name && hoverState != 'Home' && hoverState != 'Procurement Research' ? (
                  <>
                    <ul className="flex absolute top-[50px] left-0 bg-white flex-wrap gap-0 pb-2 text-black box-border shadow-2xl text-left list-none rounded-b-lg pt-0">
                      { item.submenu.map((item) => (
                        <li 
                          key={item.name}
                          className="text-black text-sm w-full text-nowrap box-border px-6 py-1.5 hover:bg-[#dfdedeb0] cursor-pointer"
                        >
                          <Link href={item.link}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex">
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
      </div>
    </>
  );
}
