import { localization } from "@/consts/loadMessage";
import { Post } from "@/services/Posts/Posts";
import LocalizedLink from "@/sharedComponents/LocalizedLink";


interface PostsListingProps {
    posts: Post[];
    locale: string;
}

const PostsListing = ({posts, locale}: PostsListingProps) => {
    const messages = localization(locale);

    return (
        <div>
            <h1>{messages['postsListing']}</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post?.id} className="mb-4">
                        <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>{post.body}</p>

                    <LocalizedLink
                        href={`/posts/${post.id}`} 
                        locale={locale}   
                        className="my-2 inline-block w-fit px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200">
                        {messages['readMode']}
                    </LocalizedLink>
                </li>
                ))}
            </ul>
        </div>
    )
}

export  { PostsListing }