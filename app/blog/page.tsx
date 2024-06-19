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
        
        const match = fileContents.match(/---\r\ntitle: (.+)\r\ndate: (.+)\r\n---/);
        console.log(match)
        const title = match ? match[1] : 'Untitled';
        const date = match ? match[2] : 'Unknown date';

        return {
            id,
            title,
            date,
        }
    });

    return (
        <div className='p-4'>
            <Link href={'/'}>Home</Link>
            
            <ul>
            {allPostsData.map(({id, title, date})=>(
                <li key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>{date}</small>
                </li>
            ))}
            </ul>
        </div>
    );
}
