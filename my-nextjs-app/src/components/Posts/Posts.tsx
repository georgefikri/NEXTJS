import { Post } from "@/services/Posts/Posts";
import Link from "next/link";


interface PostsListingProps {
    posts: Post[];
    locale: string;
}

const PostsListing = ({posts, locale}: PostsListingProps) => {
    return (
        <div>
            <h1>Posts Listing</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post?.id} className="mb-4">
                        <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                    <Link href={`/${locale}/posts/${post.id}`} className="text-blue-500">
                    Read more
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export  { PostsListing }