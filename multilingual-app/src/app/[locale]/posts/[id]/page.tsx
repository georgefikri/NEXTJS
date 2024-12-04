
import { localization } from "@/consts/loadMessage"

import Link from 'next/link';
import { fetchPost } from "@/services/Posts/fetchPost";


interface PostPageProps {
    params: {
        id: string;
        locale: string;
    }
}

export default async function PostDetailPage({params}: PostPageProps) {
    const {id, locale} = params;
    const messages = localization(locale);

    const post = await fetchPost(id);

    if (!post) {
        return <div>{messages["postNotFound"] ?? "Post not found"}</div>;
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