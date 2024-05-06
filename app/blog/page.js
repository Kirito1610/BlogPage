'use client'
import BlogList from '../Components/modules/BlogList';
import RecentReports from '../Components/modules/RecentReports';
export default function Home() {
  return (
    <main>
      <div className='flex relative h-max w-full lg:flex-row flex-col'>
        <BlogList />
        <RecentReports  />
        </div>
    </main>
  );
}
