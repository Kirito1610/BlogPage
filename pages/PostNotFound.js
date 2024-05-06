import React from 'react'
import Image from "next/image";
import Link from  'next/link';
function PostNotFound() {
  return (
    <div>
     <Image
        alt="NoPost.jpg"
        src='/NoPost.jpg'
        sizes="100vw"
        width={100}
        height={100}
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'contain',
        }}
        priority/>
        <h1 className='text-xl text-center text-[#5755FE] hover:underline'><Link href='/blog'>Go Back →</Link></h1>
    </div>
  )
}

export default PostNotFound
