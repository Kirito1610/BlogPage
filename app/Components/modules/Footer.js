
import Image from 'next/image'

export default function Footer(){
    return(
        <>
        <div className='bg-[#EEEDEB] h-max w-full flex justify-around item-start box-border flex-col gap-12 border-t border-[#c6c6c9] mt-20 p-16 lg:p-24 md:flex-row'>
<div className='w-full lg:w-[30%] flex gap-2.5 flex-col'>
    <h1 className='text-black font-semibold'>ken Research</h1>
    <p className='text-sm text-[#7D7C7C]'>Ken Research is a leading global industry research and information service company operating with a network of partner firms across the US, Asia and Europe. The company provides bespoke industry intelligence, equity research reports and business consulting services on gamut of sectors.</p>
    <div className='mt-12 '>
        <h1>Quick Links</h1>
        <ul className='flex gap-1.5 mt-5 flex-col'>
<li>About Us</li>
<li>Services</li>
<li>Contact Us</li>
<li>Login</li>
        </ul>
    </div>
</div>
<div className='w-full lg:w-[30%] flex gap-2.5 flex-col'>
    <h1 className='text-black font-semibold'>Recent posts</h1>
    <ul className='flex flex-col gap-5'>
<li className='flex gap-5 items-start'><Image src='/US-Bio-stimulants-Companies-7cct6uc29ejnw6yzjzxxqzk7p53gc7yz26jnqomooeo.webp' width={100} height={150} alt='US-Bio' className='object-cover'></Image>
<div>
    <h2 className='text-sm text-[#124076] font-semibold'>US Bio-Stimulate Market Analysis: Growth, Trends, and Future Outlook (2022-2029)</h2>
    <div className='flex flex-row gap-2.5 text-[12px]'>
        <p >November 21,2023</p>
        <p>Geeta</p>
    </div>
</div>
</li>
<li  className='flex gap-5 items-start'><Image src='/usa-beauty-industry-trends-7c61u65xzj6iegs3a1eejhnp2gvvtqhoi7u5hx9xrps.png' width={100} height={70} alt='usa-beauty' className='object-contain'></Image>
<din>
    <h2 className='text-sm text-[#124076] font-semibold'>How L’Oreal & Colgate-Palmolive Dominate US Beauty & Personal Care in 2023</h2>
    <div className='flex flex-row gap-2.5 text-[12px]'>
        <p>November 7,2023</p>
        <p>Geeta</p>
    </div>
</din>
</li>
    </ul>
    <div className='text-[#7D7C7C] text-sm mt-12'>
        <ul className='flex flex-col gap-5'>
       <li className='flex-col'><h1 className='text-[#7D7C7C] font-bold mb-2'>Ken Research Pvt. Ltd.</h1>
<p>Unit 14, Tower B3, Spaze I Tech Business Park, Sohna Road, sector 49 Gurgaon, Haryana - 122001, India 
</p>
</li>
<li className='flex-col'>
<h1 className='text-[#7D7C7C] font-bold mb-2'>Ken Research Pvt. Ltd.</h1>
<p>105, Al Jaz1b, Street no 2 the Greens Dubai United Arab Emirates.
</p>
</li>
<li>
<h1 className='text-[#7D7C7C] font-bold mb-2'>Ken Research Pvt. Ltd.</h1>
<p>The Icon BSD City,Jl. Verdant View IIIA No.15,Tangerang Regency,ProvinceBanten-15345, Indonesia.
</p>
</li>
<li>
Email:  support@kenresearch.com
Harsh: +91-9871552944
</li>
        </ul>
    </div>
</div>
<div className='flex flex-col w-full lg:w-[30%]'>
    <h1 className='text-base font-semibold'>Reach Us</h1>
</div>
        </div>
        </>
    )
}