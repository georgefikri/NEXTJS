import { get } from "@/services/api"

import { Post } from "@/services/Posts/Posts"

import { localization } from "@/consts/loadMessage"

import Link from 'next/link';


interface PostPageProps {
    params: {
        id: string;
        locale: string;
    }
}

export default async function PostDetailPage({params}: PostPageProps) {
    const {id, locale} = params;
    const messages = localization(locale);
    let post: Post | null = null;

    try {

        const response = await get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (response.error) {
            throw new Error(response.error.message);
        }

        post = response.data;
        
    } catch {
        return <div>{messages['postNotFound'] ?? "Post not found"}</div>
    }

    if (!post) {
        return <div>{messages['postNotFound'] ?? "Post not found"}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/${locale}/posts`} className="text-blue-500">
                <span>{messages["backToPosts"] ?? "Back to posts"}</span>
            </Link>
        </div>
    )
}