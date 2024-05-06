
import Image from 'next/image'
export default function AskQuestion(){
    return(
        
        <>
        <div className='flex relative  my-14 gap-1 items-center justify-center flex-col p-5 pt-0 h-[260px] bg-[rgb(238,235,235)] rounded-lg text-center '>
<div className=' bg-[#B4B4B8] p-5 box-border rounded-full w-[80px] shadow-lg flex items-center justify-center -mt-28'>
    <Image src='/call-black-auricular-interface-symbol.png' className='object-contain' width={60} height={60} alt='phone'></Image>
</div>
<h1 >Ask A Question</h1>
<p>Our Team Will Assist You in What You Are Looking For</p>
<hr />
<div className='flex flex-row gap-3 mt-3 flex-wrap'>
    <Image className='bg-[#B4B4B8] p-1 object-contain w-5 h-5' src='/call-black-auricular-interface-symbol.png' width={500} height={500}  alt='phone'></Image>
    <span> or </span>
    <Image src='/whatsapp.webp' className='object-contain w-5 h-5' width={500} height={500} alt='whatsapp'></Image>
    <a href="">+91 9871552944</a>
    <Image src='/linkedin-question.png' className='object-contain w-5 h-5' width={500} height={500} alt='linkedin'></Image>
</div>
<button className='bg-[#B4B4B8] w-4/5 text-white absolute bottom-4 p-1'>Email Us</button>
        </div>
        </>
    )
}