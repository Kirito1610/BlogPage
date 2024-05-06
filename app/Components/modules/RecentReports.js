import AskQuestion from "../elements/AskQuestion";
import ListArray from "@/app/context/ListArray";
import Image from "next/image";
import Link from "next/link";
export default function RecentReports() {
  return (
    <>
      <div className="flex flex-col relative lg:sticky top-16 mt-[50px] lg:px-[20px] flex-1 h-max lg:w-[30%] w-full px-16">
        <Image
          src="/blog-banner.jpg"
          width={500}
          height={500}
          className="w-full  object-contain"
          alt="blog_banner"
        ></Image>
        <AskQuestion />
        <h2 className="text-lg font-bold mb-4">Recent Reports</h2>
        <ul className="flex gap-7 flex-col">
          {ListArray.slice(0,5).map((item) => {
            return (
              <li
                key={item.post_title}
                className="flex flex-row gap-6 text-sm font-bold text-[#124076] items-start"
              >
                <Image
                  src={item.img}
                  width={500}
                  height={500}
                  alt={item.post_title}
                  className="w-[150px] h-[70px] object-contain"
                ></Image>
                <div className="flex flex-col gap-1 pb-2.5 border-b border-[#c6c6c9] ">
                  <Link
                    href={`/blog/${item.post_slug}`}
                  >
                    {item.post_title}
                  </Link>
                  <div className="flex flex-row gap-5 text-[#607274] font-normal">
                    {/* <p>{item.date}</p>
                    <p>{item.author}</p> */}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Image
          src={"/best-valu.webp"}
          width={600}
          height={100}
          alt="best_value"
          className="my-8"
        ></Image>
        <Image
          src={"/educational-institute.webp"}
          width={600}
          height={100}
          alt="eduactional"
        ></Image>
        <div className="mt-10">
          <h1 className="mb-2">Twitter Card</h1>
          <div className="border rounded-lg">
            <div className="flex border flex-row gap-2 items-center justify-start box-border px-4 py-2 bg-[#008DDA] rounded-sm">
              <Image
                src="/twitter.png"
                width={500}
                height={500}
                alt="twitter"
                className="w-5 h-5 bg-white rounded-sm border object-contain box-border p-0.5 "
              ></Image>
              <p className="text-white">KenResearch Live</p>
            </div>
            <div className="box-border rounded-sm border p-2.5">
              <a
                href="https://twitter.com/kenresearch"
                className="text-[#008DDA]"
              >
                Tweets by KenResearch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
