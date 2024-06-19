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
    <main className="text-center p-10 select-none">
      <p>안녕하세요. 김이삭입니다.</p>
      
      <ul>
        <li>
          <Link className="text-blue-400" href={'/portfolio'}>Portfolio</Link>
        </li>
        <li>
          <Link className="text-blue-400" href={'https://github.com/isaackimdev'}>Github</Link>
        </li>
        <li>
          <Link className="text-blue-400" href={'/blog'}>Blog</Link>
        </li>
      </ul>
    </main>
  );
}