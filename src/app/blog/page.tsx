import { getPosts } from "../(api)/blog";
import Link from "next/link";

export default async function BlogPage(){
    const posts = await getPosts();
    return(
        <div className="flex flex-col px-10 py-10 gap-2 w-full divide-gray-700 divide-y">
            {
                posts.map(post=>{
                    return <Link href={"/blog/"+post.slug} className="w-full py-8 px-2 text-left hover:rounded-md dark:hover:bg-gray-700 hover:bg-slate-100">
                        <div className="text-2xl font-semibold">{post.title}</div>
                        <div className="text-sm dark:text-neutral-400 text-neutral-500">{post.date} <div className="inline-block text-red-400 ml-2">{post.time} min read</div></div>
                        <div className="mt-2 dark:text-neutral-400 text-neutral-500">{post.summary}</div>
                    </Link>
                })
            }
        </div>
    )
}