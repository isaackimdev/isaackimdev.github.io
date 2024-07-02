// app/posts/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import markdownToHtml from '@/lib/markdownToHtml';

interface PostData {
    title: string;
    date: string;
    content: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

const getPostData = async (slug: string): Promise<PostData> => {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // OS에 따라 다른 캐리지 리턴 문자 처리
    // \s*를 사용하여 공백 문자를 모두 허용하고, 
    // [\s\S]+를 사용하여 모든 문자를 매칭합니다.
    const match = fileContents.match(/---\s*title: (.+)\s*date: (.+)\s*---\s*([\s\S]+)/);
    const title = match ? match[1].trim() : 'Untitled';
    const date = match ? match[2].trim() : 'Unknown date';
    const markdownContent = match ? match[3].trim() : '';
    const content = await markdownToHtml(markdownContent);
    
    return {
        title,
        date,
        content,
    }
};

export async function generateStaticParams() {
    // 해당 디렉토리의 파일명을 string array로 갖는다.
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName=>({
        slug: fileName.replace(/\.md$/,''),
    }));
}

export default async function Page({params}: {params: { slug: string} }) {
   const postData = await getPostData(params.slug);

    return (
        <div className='flex p-4'>
            <aside className='hidden md:block md:w-1/5'></aside>

            <div className='p-10 flex-grow'>

                <div>
                    <Link className="text-blue-400" href={'/posts'}>◀</Link>
                </div>

                <h1 className='text-4xl text-center'>{postData.title}</h1>
                <div className='text-right'>{postData.date}</div>
                <div dangerouslySetInnerHTML={{ __html: postData.content }} />
            </div>

            <aside className='hidden md:block md:w-1/5'></aside>
        </div>
    );
}