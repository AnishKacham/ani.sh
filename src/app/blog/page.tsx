import { getPosts } from "../(api)/blog";
import Link from "next/link";

export default async function BlogPage(){
    const posts = await getPosts();
    return(
        <div className="flex flex-col py-10 gap-2 w-full dark:divide-gray-700 divide-slate-300 divide-y">
            <div className="text-4xl font-bold dark:text-neutral-400 text-neutral-500">
                All Posts
            </div>
            {
                posts.map(post=>{
                    return <div  className="w-full pt-4 text-left hover:rounded-sm">
                        <div className="text-2xl font-semibold">{post.title}</div>
                        <div className="text-sm dark:text-neutral-400 text-neutral-500">{post.date} <div className="inline-block text-red-400 ml-2">{post.time} min read</div></div>
                        <div className="mt-2 mb-4 dark:text-neutral-400 text-neutral-500">{post.summary}</div>
                        <Link href={"/blog/"+post.slug} className="text-red-500 hover:text-red-600 font-semibold">Read on {"->"}</Link>
                    </div>
                })
            }
        </div>
    )
}