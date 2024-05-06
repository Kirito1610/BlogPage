import Link from "next/link";
export default function Home() {
  return (
    <main>
    Go to  <Link  href="/blog" className="text-[#5356FF] font-semibold hover:underline">Blogpage</Link>
    </main>
  );
}
