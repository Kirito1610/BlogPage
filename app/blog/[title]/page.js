
import ListArray from '@/app/context/ListArray';
import style from './blogDetail.module.css'
import Image from 'next/image';
import RequestButton from '@/app/Components/elements/RequestButton';
import RecentReports from '@/app/Components/modules/RecentReports';
import PostNotFound from '@/pages/PostNotFound';
const page =async ({params}) =>{
   // if there is link to fetch data replace MergedArray with responseData
//   const response = await fetch(`https://...`);
// const responseData=await response.json();
  let post = ListArray.find((item)=>{
    return(item.post_slug === params.title)
  })
  const PageContent=()=>{
    return(<div className={style.details} dangerouslySetInnerHTML={{ __html: post.post_desc}} />)
  }

  return (
    <>
    {post ?
      <div className='flex relative h-max w-full flex-wrap'>
        <div className='flex flex-row gap-12 w-full lg:w-[65%] box-border mt-12 pl-[70px]'>
          <div className={style.postdetail}>
            <h1>{post.title}</h1>
            <Image src={post.img ? post.img : "/upload.jpg"} width={600} height={600} alt={post.post_title} className='w-[500px] h-[200px] object-cover rounded-sm'></Image>
         <RequestButton slug={post.post_slug}/>
            <PageContent />
          </div>
        </div>
        <RecentReports />
      </div> : <PostNotFound />}
    </>
  )
}

export default page