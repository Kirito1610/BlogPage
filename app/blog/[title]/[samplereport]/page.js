import React from "react";
import Image from "next/image";
import ListArray from "@/app/context/ListArray";
import CountryCode from "@/app/Components/elements/CountryCode";

function page({params}) {
  const title=ListArray.find((item)=>item.post_slug === params.title)
  return (
    <>
      <div className='flex p-12 gap-14 flex-wrap lg:flex-nowrap lg:p-12'>
        <Image src="/sample-req.png" width={600} height={600} className='lg:w-[500px] md:h-[300px] md:w-full h-auto object-contain' alt="smaple_req"></Image>
        <form className="flex flex-col gap-4 lg:w-6/12 w-full">
          <h1 className="text-2xl m-0 text-blue-950 font-bold">Request For Sample Report</h1>
          <h2 className="text-base mb-2 mt-0 text-blue-600 capitalize font-medium">
            {title.post_title}
          </h2>
          <input placeholder="Name" type="text" className="border border-slate-400 rounded-md text-base py-2 px-2	w-full "/>
          <input type="email" placeholder="Email" className="border border-slate-400 rounded-md text-base py-2 px-2	w-full" />
          <label className="flex gap-3 flex-row">
            <CountryCode  />
            <input type="number" placeholder="Phone No." className="border border-slate-400 rounded-md text-base py-2 px-2 w-2/3" />
          </label>
          <input type="text" placeholder="Company name" className="border border-slate-400 rounded-md text-base py-2 px-2	"></input>
          <input type="text" placeholder="Requirement" className="border border-slate-400 rounded-md text-base py-2 px-2	"></input>
          <button className="w-1/4 border border-slate-400 rounded-md py-2 px-2 bg-indigo-800 text-white mt-2">Submit</button>
        </form>
      </div>
    </>
  );
}

export default page;
