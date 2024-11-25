import { Post } from "@/services/Posts/Posts";


interface PostsListingProps {
    posts: Post[];
}

const PostsListing = ({posts}: PostsListingProps) => {
    return (
        <div>
            <h1>Posts Listing</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post?.id} className="mb-4">
                        <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}

export  { PostsListing }