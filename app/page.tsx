"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    }
    
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <main className="flex p-4 select-none">
      <aside className="hidden md:block md:w-1/5"></aside>

      <section className="flex-grow">
        <p>안녕하세요. 김이삭입니다.</p>
        
        <ul>
          <li>
            <Link className="text-blue-400" href={'/portfolio'}>Portfolio</Link>
          </li>
          <li>
            <Link className="text-blue-400" href={'/posts'}>Posts</Link>
          </li>
          <li>
            <Link className="text-blue-400" href={"https://github.com/isaackimdev"}>Github</Link>
          </li>
          <li>
            <Link className="text-blue-400" href={"https://lifere.tistory.com"}>Tistory</Link>
          </li>
          <li>
            <Link className="text-blue-400" href={"https://blog.naver.com/isaac7263"}>Naver</Link>
          </li>
        </ul>
      </section>

      <aside className="hidden md:block md:w-1/5"></aside>
    </main>
  );
}