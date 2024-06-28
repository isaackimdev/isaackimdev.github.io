// app/posts/page.tsx
import fs from 'fs';
import path from "path";
import Link from 'next/link';

interface Post {
    id: string;
    title: string;
    date: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export default function Page() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData : Post[] = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/,'');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // OS에 따라 다른 캐리지 리턴 문자 처리
        const match = fileContents.match(/---\s*title: (.+)\s*date: (.+)\r\n---/);
        const title = match ? match[1] : 'Untitled';
        const date = match ? match[2] : 'Unknown date';

        return {
            id,
            title,
            date,
        }
    });

    return (
        <div className='flex'>
            <aside className='hidden md:block md:w-1/5'></aside>

            <div className='flex-grow p-4'>
                <header className='mb-4'>
                    <Link 
                        href={'/'}
                        className='text-blue-400'
                    >
                        Home
                    </Link>
                </header>

                <ul>
                {allPostsData.map(({id, title, date})=>(
                    <li key={id}>
                        <Link href={`/posts/${id}`} className='text-xl'>
                            {title}
                        </Link>
                        <br/>
                        <small>{date}</small>
                    </li>
                ))}
                </ul>
            </div>

            <aside className='hidden md:block md:w-1/5'></aside>
        </div>
    );
}
