
import { localization } from "@/consts/loadMessage"

import { fetchPost } from "@/services/Posts/fetchPost";
import LocalizedLink from "@/sharedComponents/LocalizedLink";


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

            <LocalizedLink
                        href={`/posts`} 
                        locale={locale}   
                        className="my-2 inline-block w-fit px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200">
                        <span>{messages["backToPosts"] ?? "Back to posts"}</span>

            </LocalizedLink>
        </div>
    )
}