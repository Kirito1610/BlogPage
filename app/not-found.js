import Image from "next/image";
import Link from "next/link";
export default function Custom404() {
    return (
      <>
 <div>
 <Image
        alt="404.jpg"
        src='/404.jpg'
        sizes="100vw"
        width={100}
        height={100}
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'contain',
        }}
        priority
      />
      <h1 style={{textAlign:'center',fontSize:'24px',wordSpacing:'1px'}}>Go Back <Link href='/blog'>Home</Link></h1>
</div>
      </>
    )
  }