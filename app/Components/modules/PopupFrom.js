'use client';
import React from 'react'
import CountryCode from '../elements/CountryCode'
import { UseContext } from '@/app/context/Store';

const Overlay = () => {
    const {overlayState,setOverlystate}=UseContext();
    const handleOverly=()=>{
        setOverlystate(()=> overlayState ? false : true)
       }
  return (
    <>
    <div className='w-full bg-white my-0 mx-auto'>
      <div className='w-full'>
        <h1 className='text-white bg-[#124076] text-left text-2xl font-semibold px-2.5 py-5'>Schedule A Meeting</h1>
      </div>
      <div className='p-5'>
        <form action="" className='flex flex-col gap-4' >
            <p className='flex flex-row gap-2.5'>
                <input type="text" placeholder='name' className='w-1/2 text-sm px-5 py-2.5 box-border border border-[#aaa] rounded-md'/>
                <input type="text" placeholder='Interested Report Title' className='w-1/2 text-sm px-5 py-2.5 box-border border border-[#aaa] rounded-md' />
            </p>
            <p className='flex flex-row gap-2.5'>
                <input type="email" placeholder='Email' className='w-1/2 text-sm px-5 py-2.5 box-border border border-[#aaa] rounded-md'/>
        <span className='flex w-1/2 gap-1'>       
<CountryCode /> <input type="number" placeholder='Phone No.' className=' text-sm px-5 py-2.5 box-border border border-[#aaa] rounded-md w-1/2' />
</span>   
            </p>
            <p className='flex flex-row gap-2.5'>
                <select name="Select Metting Medium" id="Metting_Meduium" className='text-sm px-5 py-2.5 box-border border border-[#aaa] rounded-md'>
                <option value="defaultValue">Select Metting Medium</option>
                    <option value="whatsapp">Whatsapp</option>
                    <option value="Viber">Viber</option>
                    <option value="Zoom">Zoom</option>
                    <option value="Teams">MS Team</option>
                    <option value="Email">Email</option>
                    <option value="whatsapp">Phone Call</option>
                </select>
            </p>
            <p className='flex flex-row gap-2.5'>Metting Time</p>
            <p className='flex flex-row gap-2.5'>
                <input type="date" className='w-1/2 text-sm px-5 py-2.5 box-border border border-[#aaa] rounded-md' />
                <input type="time" className='w-1/2 text-sm px-5 py-2.5 box-border border border-[#aaa] rounded-md' />
            </p>
            <p className='flex flex-row gap-2.5'>
                <textarea name="Requirements" id=""  rows="3" placeholder='Requirements' className='text-sm w-full px-5 py-2.5 box-border border border-[#aaa] rounded-md'></textarea>
            </p>
            <p className='flex flex-row gap-2.5 '><button className='bg-[#124076] text-white px-5 py-2 rounded-md'>Submit</button> <button type='button' onClick={()=>handleOverly()} className='bg-[#fff] text-black px-5 py-2 rounded-md border border-[#aaa]'>close</button></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Overlay
