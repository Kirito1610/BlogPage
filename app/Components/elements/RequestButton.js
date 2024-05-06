'use client'
import React from 'react'
import Link from 'next/link';
import style from "@/app/blog/[title]/blogDetail.module.css"
import { useEffect,useState } from 'react';

function RequestButton({...props}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
         <Link className={scrollPosition > 600 ? style.fixed : style.relative} href={`/blog/${props.slug}/samplereport`} id='requestBtn'>Request for sample report</Link>
  )
}

export default RequestButton
