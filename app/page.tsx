'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  // const initTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [theme, setTheme] = useState<'light'|'dark'>( 'light' );

  // useEffect(() => {    
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setTheme('dark');
  //   }
  // }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <main>
      <div className="flex justify-end">
        <button onClick={toggleTheme}>
          toggle {theme === 'light' ? 'dark' : 'light'}
        </button>
      </div>
      <div className="flex justify-center items-center flex-col mt-24">
        <p>김이삭</p>
        <p>Back-end</p>
        <br/>
        <Link href={'https://github.com/isaackimdev'}>Github</Link>
        
      </div>
    </main>
  );
}
