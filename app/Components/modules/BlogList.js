import ListArray from "@/app/context/ListArray";
import Image from "next/image";
import Link from "next/link";
export default async function BlogList() {
  // if there is link to fetch data replace ListArray with responseData
//   const response = await fetch(`https://...`);
// const responseData=await response.json();

  return <>
  <ul className='flex w-full flex-col gap-10 mt-14 p-0 lg:pl-[70px] border-r border-solid border-[#dadada] lg:w-[65%] px-2 pl-8 md:px-16 items-start justify-start'>
 {/* replace ListArray with responseData  */}
    { ListArray.map((item)=>{
        return(
            <li className="flex flex-col gap-7 pb-10 pr-10 border-b border-solid border-[#dadada]" key={item.post_title}><Link href={`/blog/${item.post_slug}`}><h1 className='text-[#124076] text-lg md:text-xl font-bold hover:underline'>{item.post_title}</h1></Link>
            <div className='flex flex-col gap-5 items-start justify-start sm:flex-row'>
            <Image src={item.img ? item.img : "/upload.jpg"} width={500} height={500} className='max-h-[200px] object-cover flex-1 flex'  alt={item.post_title} ></Image>
            <p className="text-sm md:text-base m-0 flex text-justify">{(item.post_desc).replace(/<p>|<\/p>|<li>|<\/li>|<a>|<\/a>|<img>|<\/img>|<strong>|<\/strong>|<b>|<\/b>|<em>|<\/em>/g," ").substring(0,200)} ....</p>
            </div>
            <Link className='text-[#5356FF] hover:underline' href={`/blog/${item.post_slug}`}>Read More »</Link>
            </li>
        )
    })}
  </ul>
  
  </>;
}
